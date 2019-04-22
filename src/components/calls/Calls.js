import Modal from '../modal/Modal.vue';
import money from '../../mixins/money';

export default {
  data: () => ({
    origin: '',
    destinys: [{ price: 0, destiny: '' }],
    call: {},
  }),
  components: {
    Modal,
  },
  props: {
    value: Boolean,
  },
  mixins: [money],
  methods: {
    async SaveCall() {
      this.call.destinys = this.destinys;
      const { destinys, _id } = this.call;
      const req = {
        _id,
        origin: this.origin,
        destinys: destinys.map(x => ({
          destiny: x.destiny,
          id: x.id,
          price: Number(x.price.replace('R$ ', '').replace(',', '.')),
        })),
      };
      try {
        if (this.call._id) {
          await this.$axios.put(`call/${_id}`, req);
        } else {
          await this.$axios.post('call', req);
        }
        this.$emit('input', false);
      } catch (err) {
        throw new Error(err);
      }
    },
    async SearchOrigin(terms, done) {
      try {
        const calls = await this.$axios.get(`calls/${terms}`);
        done(calls);
      } catch (err) {
        done([]);
        throw new Error(err);
      }
    },
    async Selected(item) {
      this.call = item;
      this.destinys = item.destinys.map(x => ({
        destiny: x.destiny,
        id: x.id,
        price: x.price * 100,
      }));
    },
    ResetData(e) {
      this.$emit('input', e);
      if (!e) {
        this.origin = '';
        this.destinys = [{ price: 0, destiny: '' }];
        this.call = {};
      }
    },
  },
};

import { mapGetters } from 'vuex';

export default {
  data: () => ({
    table: [],
    columns: [
      { name: 'name', label: 'Nome do plano', field: 'name' },
      { name: 'origin', label: 'Origem da ligação', field: 'origin' },
      { name: 'time', label: 'Tempo de ligação', field: 'time' },
      { name: 'destiny', label: 'Destino da ligação', field: 'destiny' },
      { name: 'priceWith', label: 'Valor com plano', field: 'priceWith' },
      { name: 'priceWithout', label: 'Valor sem plano', field: 'priceWithout' },
    ],
  }),
  computed: {
    ...mapGetters({
      origin: 'GetOrigin',
      time: 'GetTime',
      plan: 'GetPlan',
    }),
  },
  watch: {
    plan() {
      this.GetValue();
    },
    origin() {
      this.GetValue();
    },
    time() {
      this.GetValue();
    },
  },
  methods: {
    async GetValue() {
      try {
        const values = await this.$axios.get(`value/${this.origin}/${this.plan}?time=${this.time}`);
        this.table = values;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};

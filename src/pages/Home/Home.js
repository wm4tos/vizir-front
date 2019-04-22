import { mapGetters } from 'vuex';
import Card from 'components/card/Card.vue';

export default {
  data: () => ({
    table: [],
    columns: [
      {
        name: 'name', label: 'Nome do plano', field: 'name', align: 'center',
      },
      {
        name: 'origin', label: 'Origem da ligação', field: 'origin', align: 'center',
      },
      {
        name: 'destiny', label: 'Destino da ligação', field: 'destiny', align: 'center',
      },
      {
        name: 'time', label: 'Tempo de ligação', field: 'time', align: 'center',
      },
      {
        name: 'priceWith', label: 'Valor com plano', field: 'priceWith', align: 'center',
      },
      {
        name: 'priceWithout', label: 'Valor sem plano', field: 'priceWithout', align: 'center',
      },
    ],
  }),
  components: {
    Card,
  },
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
      if (this.plan && this.time && this.origin) {
        try {
          const values = await this.$axios.get(`value/${this.origin}/${this.plan}?time=${this.time}`);
          this.table = values;
        } catch (err) {
          throw new Error(err);
        }
      }
    },
  },
};

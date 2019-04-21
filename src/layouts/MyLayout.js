
import { mapGetters } from 'vuex';

export default {
  data: () => ({
    options: [],
    calls: [],
    optionsPlan: [],
  }),
  computed: {
    ...mapGetters({
      origin: 'GetOrigin',
      time: 'GetTime',
      plan: 'GetPlan',
    }),
    originValue: {
      get() {
        return this.origin;
      },
      set(origin) {
        this.$store.dispatch('SET_ORIGIN', origin);
      },
    },
    timeValue: {
      get() {
        return this.time;
      },
      set(time) {
        this.$store.dispatch('SET_TIME', time);
      },
    },
    planValue: {
      get() {
        return this.plan;
      },
      set(plan) {
        this.$store.dispatch('SET_PLAN', plan);
      },
    },
  },
  methods: {
    async GetCalls() {
      this.$store.dispatch('SET_LOADING', { message: 'Carregando opções...' });
      try {
        const calls = await this.$axios.get('calls');
        this.options = calls.map(x => ({ label: `DDD: ${x.origin}`, value: x._id }));
        this.calls = calls;
      } catch (err) {
        throw new Error(err);
      }
    },
    async GetPlans() {
      this.$store.dispatch('SET_LOADING', { message: 'Carregando opções...' });
      try {
        const plans = await this.$axios.get('plans');
        this.optionsPlan = plans.map(x => ({ label: x.name, value: x._id }));
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  created() {
    this.GetCalls();
    this.GetPlans();
  },
};

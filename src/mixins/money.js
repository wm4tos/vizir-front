import { VMoney } from 'v-money';

export default {
  data: () => ({
    money: {
      decimal: ',',
      thousands: '.',
      prefix: 'R$ ',
      precision: 2,
      masked: false,
    },
  }),
  directives: { money: VMoney },
};

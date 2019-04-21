import VueCurrencyFilter from 'vue-currency-filter';

export default ({ Vue }) => {
  Vue.use(VueCurrencyFilter, {
    symbol: 'R$',
    thousandsSeparator: '.',
    fractionCount: 2,
    fractionSeparator: ',',
    symbolPosition: 'front',
    symbolSpacing: true,
  });
};

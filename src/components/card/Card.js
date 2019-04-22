import { QCard } from 'quasar';

export default {
  components: {
    QCard,
  },
  props: {
    square: {
      type: Boolean,
      default: false,
    },
    flat: {
      type: Boolean,
      default: false,
    },
    inline: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: 'white',
    },
    textColor: {
      type: String,
      default: 'black',
    },
    dark: {
      type: Boolean,
      default: false,
    },
  },
};

<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header class="q-pa-md row justify-center">
      <q-select
        class="col-xs-12 col-md-6 col-xl-4"
        v-model="originValue"
        :options="options"/>
    </q-layout-header>
  </q-layout>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      options: [],
    };
  },
  computed: {
    ...mapGetters({
      origin: 'GetOrigin',
    }),
    originValue: {
      get() {
        return this.origin;
      },
      set(value) {
        this.$store.dispatch('SET_ORIGIN', value);
      },
    },
  },
  methods: {
    async GetOptions() {
      try {
        const options = await this.$axios.get('calls');
        this.options = options.map(x => ({ label: x.origin, value: x._id }));
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  created() {
    this.GetOptions();
  },
};
</script>

<style>
</style>

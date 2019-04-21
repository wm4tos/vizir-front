<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header class="q-pa-md row justify-center gutter-sm">
      <div class="col-xs-12 col-md-6 col-xl-4">
        <q-select
          v-model="originValue"
          :options="options"
          float-label="Selecione a origem da ligação"
        />
      </div>
    </q-layout-header>
  </q-layout>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data: () => ({
    options: [],
    calls: [],
  }),
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
  },
  created() {
    this.GetCalls();
  },
};
</script>

<style>
</style>

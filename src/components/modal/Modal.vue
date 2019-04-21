<template>
  <q-modal
    :value="value"
    @input="e => $emit('input', e)">
    <q-modal-layout>
      <q-toolbar slot="header">
        <q-toolbar-title>
          {{ title || '' }}
        </q-toolbar-title>
        <q-btn
          icon="close"
          dense
          round
          flat
          v-close-overlay/>
      </q-toolbar>
      <div class="q-pa-lg">
        <slot />
      </div>
    </q-modal-layout>
  </q-modal>
</template>

<script src="./Modal.js"/>

<style lang="stylus" src="./Modal.styl" />

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
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script src="./MyLayout.js" />

<style>
</style>

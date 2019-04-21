<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header class="q-pa-md row justify-center no-shadow bg-grey-1">
      <div class="col-xs-12 col-md-6 col-xl-4">
        <q-select
          v-model="originValue"
          :options="options"
          float-label="Selecione a origem da ligação"
        />
        <q-input
          v-show="originValue"
          v-model="timeValue"
          float-label="Você deseja fazer uma ligação de quanto tempo (em minutos)?"
          type="number"
        />
        <q-select
          v-show="timeValue"
          v-model="planValue"
          float-label="Qual plano você deseja consultar?"
          :options="optionsPlan"
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

<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header class="q-pa-lg row justify-center no-shadow bg-grey-1">
      <div class="col-xs-12 col-md-7 col-xl-5 row justify-between">
        <q-select
          v-model="originValue"
          :options="options"
          float-label="Selecione a origem da ligação"
          class="col-10"
        />
        <q-btn
          flat
          round
          icon="edit"
          class="q-mt-md"
          @click="editOrigin = true"
        />
        <q-input
          v-show="originValue"
          v-model="timeValue"
          float-label="Você deseja fazer uma ligação de quanto tempo (em minutos)?"
          type="number"
          class="col-10"
        />
        <q-select
          v-show="timeValue"
          v-model="planValue"
          float-label="Qual plano você deseja consultar?"
          :options="optionsPlan"
          class="col-10"
        />
        <q-btn
          v-show="timeValue"
          flat
          round
          icon="edit"
          class="q-mt-md"
          @click="$q.notify({
            icon: 'sentiment_very_dissatisfied',
            message:( 'Opa! Essa função ainda não tá funcionando...' +
            '\nDesculpa :( Mas quem sabe na próxima atualização, né?'),
            color: 'red-9'
          })"
        />
      </div>
    </q-layout-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <calls
      v-if="editOrigin"
      v-model="editOrigin"
      @input="ResetOptions"
    />
  </q-layout>
</template>

<script src="./MyLayout.js" />

<style>
</style>

<template>
  <modal
    :value="value"
    @input="ResetData">
    <form
      class="row gutter-y-md"
      @submit.prevent="SaveCall"
      @reset="ResetData(true)"
    >
      <div class="row justify-center col-12">
        <q-input
          class="col-xs-12 col"
          v-model="origin"
          float-label="Escolha o DDD de origem da ligação"
          v-mask="'##'"
          type="tel"
        >
          <q-autocomplete
            @search="SearchOrigin"
            @selected="Selected"
          />
        </q-input>
      </div>
      <div class="row justify-center gutter-y-md col-12">
        <div class="col-12">
          <h5 class="text-center no-margin"> Destinos </h5>
        </div>
        <div
          class="row justify-between items-center gutter-xs col-12"
          v-for="(item, index) in destinys"
          :key="item.id"
        >
          <div class="col-xs-12 col-sm-5">
            <q-input
              v-model="item.destiny"
              float-label="DDD do destino"
              type="tel"
              v-mask="'##'"/>
          </div>
          <div class="col-xs-12 col-sm-5">
            <q-input
              v-model="item.price"
              v-money="money"
              float-label="Valor"
              type="tel"/>
          </div>
          <div class="col-xs-12 col-sm-1 flex justify-end ">
            <q-btn
              icon="delete"
              round
              flat
              @click="destinys.splice(index, 1)"
              :disabled="destinys.length <= 1"/>
          </div>
        </div>
      </div>
      <div class="col-12 row">
        <q-btn
          class="col-12"
          flat
          icon="add"
          label="Adicionar novo destino"
          @click="destinys.push({ price: 0, destiny: '' })"/>
      </div>
      <div class="row justify-end col-12">
        <div class="flex justify-between col-xs-12 col-sm-5 col-md-12">
          <q-btn
            color="red"
            label="Cancelar"
            type="reset"/>
          <q-btn
            color="light-green"
            label="Salvar"
            type="submit"/>
        </div>
      </div>
    </form>
  </modal>
</template>

<script src="./Calls.js" />

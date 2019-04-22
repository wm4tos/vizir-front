<template>
  <modal
    :value="value"
    @input="ResetData">
    <form
      class="row gutter-y-md"
      @submit.prevent="SaveCall"
    >
      <div class="row justify-center col-12">
        <q-input
          class="col-xs-12 col"
          v-model="origin"
          float-label="Escolha a origem da ligação"
          :v-mask="'##'"
        >
          <q-autocomplete
            @search="SearchOrigin"
            @selected="Selected"
          />
        </q-input>
      </div>
      <div class="row gutter-y-md col-12">
        <div class="col-12">
          <h5 class="text-center no-margin"> Destinos </h5>
        </div>
        <div
          class="row justify-center gutter-xs col-12"
          v-for="item in destinys"
          :key="item.id"
        >
          <div class="col-xs-12 col-sm-6">
            <q-input
              v-model="item.destiny"
              float-label="Destino"/>
          </div>
          <div class="col-xs-12 col-sm-6">
            <q-input
              v-model="item.price"
              v-money="money"
              float-label="Valor"/>
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

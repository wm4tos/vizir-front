<template>
  <q-page>
    <div v-if="origin && time && plan">
      <q-table
        class="bg-white gt-sm"
        :data="table"
        :columns="columns"
      >
        <q-tr slot="body" slot-scope="props" :props="props">
          <q-td key="name" :props="props">
            {{ props.row.name }}
          </q-td>
          <q-td key="origin" :props="props">
            {{ props.row.origin }}
          </q-td>
          <q-td key="destiny" :props="props">
            {{ props.row.destiny }}
          </q-td>
          <q-td key="time" :props="props">
            {{ props.row.time }}
          </q-td>
          <q-td key="priceWith" :props="props">
            {{ props.row.priceWith | currency }}
          </q-td>
          <q-td key="priceWithout" :props="props">
            {{ props.row.priceWithout | currency }}
          </q-td>
        </q-tr>
      </q-table>
      <div class="lt-md">
        <card
          class="q-mb-md"
          v-for="(data, index) in table"
          :key="index"
        >
          <div
            class="row gutter-y-md gutter-x-xs"
            v-for="column in columns"
            :key="column.field"
          >
            <div class="col-6">
              <h6 class="text-right no-margin"> {{ `${column.label}:` }} </h6>
            </div>
            <div class="col-6">
              <h6
                class="text-left no-margin text-weight-regular"
                v-if="column.field === 'priceWith' || column.field == 'priceWithout'"
              >
                {{ data[column.field] | currency }}
              </h6>
              <h6
                class="text-left no-margin text-weight-regular"
                v-else
              >
                {{ data[column.field] }}
              </h6>
            </div>
          </div>
        </card>
      </div>
    </div>
  </q-page>
</template>

<script src='./Home.js' />

<style src='./Home.styl' lang="stylus"/>

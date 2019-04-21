<template>
  <q-page>
    <div v-if="origin && time && plan">
      <q-table
        class="bg-white"
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
    </div>
  </q-page>
</template>

<script src='./Home.js' />

<style src='./Home.styl' lang="stylus"/>

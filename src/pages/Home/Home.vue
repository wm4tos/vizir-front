<template>
  <q-page>
    <div v-if="origin && time && plan">
      <q-table
        :data="table"
        :columns="columns"
      />
    </div>
  </q-page>
</template>

<script src='./Home.js' />

<style src='./Home.styl' lang="stylus"/>

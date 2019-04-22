<template>
  <q-card
    class="q-pa-md"
    :square="square"
    :flat="flat"
    :inline="inline"
    :color="color"
    :text-color="textColor"
    :dark="dark">
    <slot />
  </q-card>
</template>

<script src="./Card.js"/>

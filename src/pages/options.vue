<template>
  <q-layout view="card-examples row items-start">
    <q-card inline class="row bigger q-ma-sm text-center">
      <q-list class="q-list q-list-separator q-list-highlight">
        <q-item>
          <q-item-main>
            <q-item-tile label>APLICAÇÕES</q-item-tile>
          </q-item-main>
        </q-item>
        <q-item>
          <q-item-main>
            <q-item-tile label>FUNCIONALIDADES</q-item-tile>
          </q-item-main>
        </q-item>
        <q-item>
          <q-item-main>
            <q-item-tile label>PERFIS</q-item-tile>
          </q-item-main>
        </q-item>
        <q-item>
          <q-item-main>
            <q-item-tile label>USUÁRIOS</q-item-tile>
          </q-item-main>
        </q-item>
      </q-list>
    </q-card>
  </q-layout>
</template>

<script>
import { openURL, QField, QInput, QCard, QItem, QList } from 'quasar'

export default {
  name: 'Options',
  data () {
    return {
      leftDrawerOpen: false,
      email: ''
    }
  },

  components: {
    QField, QInput, QCard, QItem, QList
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>

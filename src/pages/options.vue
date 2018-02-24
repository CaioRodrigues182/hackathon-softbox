<template>
    <q-layout class="q-layout-page row justify-center text-center layout-padding">
    <div class="options">
      <div class="full-width title padding-v-30"><strong>{{title}}</strong></div>
      <q-card inline class="content row bigger q-ma-sm text-center">
        <q-list class="q-list q-list-separator q-list-highlight">
          <q-item class="padding-v-30 cursor-pointer">
            <q-item-main class="text-center">
              <q-item-tile label>APLICAÇÕES</q-item-tile>
            </q-item-main>
          </q-item>
          <q-item class="padding-v-30 cursor-pointer">
            <q-item-main class="text-center">
              <q-item-tile label>FUNCIONALIDADES</q-item-tile>
            </q-item-main>
          </q-item>
          <q-item class="padding-v-30 cursor-pointer">
            <q-item-main class="text-center">
              <q-item-tile label>PERFIS</q-item-tile>
            </q-item-main>
          </q-item>
          <q-item class="padding-v-30 cursor-pointer">
            <q-item-main class="text-center">
              <q-item-tile label>USUÁRIOS</q-item-tile>
            </q-item-main>
          </q-item>
        </q-list>
      </q-card>
    </div>
  </q-layout>
</template>

<script>
import { openURL, QField, QInput, QCard, QItem, QList } from 'quasar'

export default {
  name: 'Options',
  data () {
    return {
      leftDrawerOpen: false,
      title: 'O QUE DESEJA ADMINISTRAR?'
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

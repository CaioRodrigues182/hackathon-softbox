<template>
  <q-layout class="q-layout-page row justify-center">
    <q-toolbar color="primary" class="toolbar-height">
      <q-toolbar-title><strong>{{ title }}</strong></q-toolbar-title>
      <router-link to="/">
        <q-btn flat round dense icon="power_settings_new" color="white" />
      </router-link>
    </q-toolbar>
    <div class="options text-center">
      <q-card inline class="content row bigger q-ma-sm text-center">
        <q-list class="q-list q-list-separator q-list-highlight">
          <router-link to="permissions">
            <q-item class="padding-v-30 cursor-pointer">
              <q-item-main class="text-center">
                <q-item-tile label>CASHLINK</q-item-tile>
              </q-item-main>
            </q-item>
          </router-link>
          <router-link to="permissions">
            <q-item class="padding-v-30 cursor-pointer">
              <q-item-main class="text-center">
                <q-item-tile label>INDÚSTRA</q-item-tile>
              </q-item-main>
            </q-item>
          </router-link>
          <router-link to="permissions">
            <q-item class="padding-v-30 cursor-pointer">
              <q-item-main class="text-center">
                <q-item-tile label>SOU24H</q-item-tile>
              </q-item-main>
            </q-item>
          </router-link>
          <router-link to="permissions">
            <q-item class="padding-v-30 cursor-pointer">
              <q-item-main class="text-center">
                <q-item-tile label>TOBIAS</q-item-tile>
              </q-item-main>
            </q-item>
          </router-link>
        </q-list>
      </q-card>
    </div>
    <router-link to="/register/aplicacao">
      <q-btn round color="primary" class="fixed" icon="create" style="right: 18px; bottom: 18px"/>
    </router-link>
  </q-layout>
</template>

<script>
import { openURL, QField, QInput, QCard, QItem, QList, QItemTile, QToolbar } from 'quasar'

export default {
  name: 'Options',
  data () {
    return {
      leftDrawerOpen: false,
      title: 'APLICAÇÕES'
    }
  },

  components: {
    QField, QInput, QCard, QItem, QList, QItemTile, QToolbar
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>

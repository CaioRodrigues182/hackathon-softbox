<template>
  <q-layout class="q-layout-page row justify-center">
    <q-toolbar color="primary" class="toolbar-height">
      <router-link to="/apps">
          <q-btn flat round dense icon="keyboard_arrow_left" color="white" />
      </router-link>
      <q-toolbar-title><strong>APLICAÇÃO | {{ title }}</strong></q-toolbar-title>
    </q-toolbar>
    <div class="options text-center">
      <q-card inline class="content row bigger q-ma-sm text-center">
        <q-list class="q-list q-list-separator q-list-highlight">
          <router-link :to="'/features/' + id">
            <q-item class="padding-v-30 cursor-pointer">
              <q-item-main class="text-center">
                <q-item-tile label>FUNCIONALIDADES</q-item-tile>
              </q-item-main>
            </q-item>
          </router-link>
          <router-link :to="'/features/' + id">
            <q-item class="padding-v-30 cursor-pointer">
              <q-item-main class="text-center">
                <q-item-tile label>PERFIS</q-item-tile>
              </q-item-main>
            </q-item>
          </router-link>
          <router-link :to="'/features/' + id">
            <q-item class="padding-v-30 cursor-pointer">
              <q-item-main class="text-center">
                <q-item-tile label>USUÁRIOS</q-item-tile>
              </q-item-main>
            </q-item>
          </router-link>
        </q-list>
      </q-card>
    </div>
  </q-layout>
</template>

<script>
import { openURL, QField, QInput, QCard, QItem, QList, QItemTile, QToolbar } from 'quasar'

export default {
  name: 'appsdetail',
  data () {
    return {
      title: '',
      id: 0
    }
  },

  components: {
    QField, QInput, QCard, QItem, QList, QItemTile, QToolbar
  },
  methods: {
    openURL
  },
  beforeMount () {
    this.id = this.$route.params.id
    this.apps = JSON.parse(window.localStorage.getItem('apps'))
    for (let i = 0; i < this.apps.length; i++) {
      if (this.apps[i].id === this.id) {
        this.title = this.apps[i].name
      }
    }
  }
}
</script>

<style>
</style>

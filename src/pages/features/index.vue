<template>
  <q-layout class="q-layout-page row justify-center">
    <q-toolbar color="primary" class="toolbar-height">
      <router-link to="/apps/ID">
          <q-btn flat round dense icon="keyboard_arrow_left" color="white" />
      </router-link>
      <q-toolbar-title><strong>{{ app }} | {{ title }}</strong></q-toolbar-title>
    </q-toolbar>
    <div class="options text-center">
      <q-card inline class="content row bigger q-ma-sm text-center">
        <q-list class="q-list q-list-separator q-list-highlight">
          <router-link to="/apps/ID">
            <q-item class="padding-v-15 cursor-pointer">
              <q-item-main label="CRIAR OI" />
              <q-item-side right>
                <q-btn flat round dense icon="create" text-color="black" />
                <q-btn flat round dense icon="delete" text-color="black" />
              </q-item-side>
            </q-item>
          </router-link>
          <router-link to="/apps/ID">
            <q-item class="padding-v-15 cursor-pointer">
              <q-item-main label="EDITAR OI" />
              <q-item-side right>
                <q-btn flat round dense icon="create" text-color="black" />
                <q-btn flat round dense icon="delete" text-color="black" />
              </q-item-side>
            </q-item>
          </router-link>
          <router-link to="/apps/ID">
            <q-item class="padding-v-15 cursor-pointer">
              <q-item-main label="CRIAR FLUXO DE OI" />
              <q-item-side right>
                <q-btn flat round dense icon="create" text-color="black" />
                <q-btn flat round dense icon="delete" text-color="black" />
              </q-item-side>
            </q-item>
          </router-link>
          <router-link to="/apps/ID">
            <q-item class="padding-v-15 cursor-pointer">
              <q-item-main label="EDITAR FLUXO DE OI" />
              <q-item-side right>
                <q-btn flat round dense icon="create" text-color="black" />
                <q-btn flat round dense icon="delete" text-color="black" />
              </q-item-side>
            </q-item>
          </router-link>
        </q-list>
      </q-card>
    </div>
    <router-link to="/features/create">
      <q-btn round color="primary" class="fixed" icon="add" style="right: 18px; bottom: 18px"/>
    </router-link>
  </q-layout>
</template>

<script>
import { openURL, QField, QInput, QCard, QItem, QList, QItemTile, QToolbar } from 'quasar'

export default {
  name: 'features.index',
  data () {
    return {
      leftDrawerOpen: false,
      title: 'FUNCIONALIDADES',
      app: 'CASHLINK'
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

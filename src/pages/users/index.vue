<template>
    <q-layout class="q-layout-page row justify-center">
    <q-toolbar color="primary" class="toolbar-height">
      <router-link to="/apps/ID">
          <q-btn flat round dense icon="keyboard_arrow_left" color="white" />
      </router-link>
      <q-toolbar-title><strong>{{ app }} | {{ title }}</strong></q-toolbar-title>
    </q-toolbar>
    <div class="options">
      <div class="full-width main-title text-center padding-v-30"><strong>{{title}}</strong></div>
      <q-card inline class="content row bigger q-ma-sm text-center">
        <q-list class="q-list q-list-separator q-list-highlight">
          <router-link to="/apps/ID">
            <q-item class="padding-v-15 cursor-pointer">
              <q-item-main label="Caio" />
              <q-item-side right>
                <q-btn flat round dense icon="create" text-color="black" />
                <q-btn flat round dense icon="delete" text-color="black" />
              </q-item-side>
            </q-item>
          </router-link>
          <router-link to="/apps/ID">
            <q-item class="padding-v-15 cursor-pointer">
              <q-item-main label="Felipe" />
              <q-item-side right>
                <q-btn flat round dense icon="create" text-color="black" />
                <q-btn flat round dense icon="delete" text-color="black" />
              </q-item-side>
            </q-item>
          </router-link>
          <router-link to="/apps/ID">
            <q-item class="padding-v-15 cursor-pointer">
              <q-item-main label="Stanley" />
              <q-item-side right>
                <q-btn flat round dense icon="create" text-color="black" />
                <q-btn flat round dense icon="delete" text-color="black" />
              </q-item-side>
            </q-item>
          </router-link>
          <router-link to="/apps/ID">
            <q-item class="padding-v-15 cursor-pointer">
              <q-item-main label="Vinícius" />
              <q-item-side right>
                <q-btn flat round dense icon="create" text-color="black" />
                <q-btn flat round dense icon="delete" text-color="black" />
              </q-item-side>
            </q-item>
          </router-link>
        </q-list>
      </q-card>
      <router-link to="/users/create">
      <q-btn
        round
        color="primary"
        class="fixed"
        icon="create"
        style="right: 18px; bottom: 18px"/>
      </router-link>
    </div>
  </q-layout>
</template>

<script>
import { openURL, QField, QInput, QCard, QItem, QList, QPopover, QToggle, QBtn } from 'quasar'

export default {
  name: 'ListOptions',
  data () {
    return {
      leftDrawerOpen: false,
      checked: true,
      title: 'USUÁRIOS',
      app: 'CASHLINK'
    }
  },

  components: {
    QField, QInput, QCard, QItem, QList, QPopover, QToggle, QBtn
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>

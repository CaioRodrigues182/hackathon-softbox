<template>
    <q-layout class="q-layout-page row justify-center">
    <q-toolbar color="primary" class="toolbar-height">
      <router-link to="/apps/ID">
          <q-btn flat round dense icon="keyboard_arrow_left" color="white" />
      </router-link>
      <q-toolbar-title><strong>{{ app }} | {{ title }}</strong></q-toolbar-title>
    </q-toolbar>

    <q-modal v-model="positionModal" :position="position" :content-css="{padding: '20px'}">
      <div class="q-display-1 q-mb-md">Modal</div><p>This one gets displayed from {{ position }}.</p>
      <q-btn color="orange" @click="positionModal = false" wait-for-ripple label="Close" />
    </q-modal>

    <div class="options">
      <div class="full-width main-title text-center padding-v-30"><strong>{{title}}</strong></div>
      <q-card inline class="content row bigger q-ma-sm text-center">
        <q-list class="q-list q-list-separator q-list-highlight">
          <router-link to="/apps/ID">
            <q-item class="padding-v-15 cursor-pointer">
              <q-item-main label="Administrador" />
              <q-item-side right>
                <q-btn flat round dense icon="create" text-color="black" />
                <q-btn flat round dense icon="delete" text-color="black" />
              </q-item-side>
            </q-item>
          </router-link>
          <router-link to="/apps/ID">
            <q-item class="padding-v-15 cursor-pointer">
              <q-item-main label="Gerente" />
              <q-item-side right>
                <q-btn flat round dense icon="create" text-color="black" />
                <q-btn flat round dense icon="delete" text-color="black" />
              </q-item-side>
            </q-item>
          </router-link>
          <router-link to="/apps/ID">
            <q-item class="padding-v-15 cursor-pointer">
              <q-item-main label="Cliente" />
              <q-item-side right>
                <q-btn flat round dense icon="create" text-color="black" />
                <q-btn flat round dense icon="delete" text-color="black" />
              </q-item-side>
            </q-item>
          </router-link>
          <router-link to="/apps/ID">
            <q-item class="padding-v-15 cursor-pointer">
              <q-item-main label="Recepcionista" />
              <q-item-side right>
                <q-btn flat round dense icon="create" text-color="black" @click="openModal()" />
                <q-btn flat round dense icon="delete" text-color="black" />
              </q-item-side>
            </q-item>
          </router-link>
        </q-list>
      </q-card>
      <router-link to="/profiles/create">
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
import { openURL, QField, QInput, QCard, QItem, QList, QPopover, QToggle, QBtn, QModal } from 'quasar'

export default {
  name: 'profiles.index',
  data () {
    return {
      leftDrawerOpen: false,
      checked: true,
      title: 'PERFIS',
      app: 'CASHLINK',
      opened: false
    }
  },

  components: {
    QField, QInput, QCard, QItem, QList, QPopover, QToggle, QBtn, QModal
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>

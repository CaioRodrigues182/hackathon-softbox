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
            <q-item v-for="user in users" v-bind:key="user.id" class="padding-v-15 cursor-pointer">
              <q-item-main>
                 <q-item-tile>{{user.name}}</q-item-tile>
              </q-item-main>
              <q-item-side right>
                <q-btn flat round dense icon="create" text-color="black" />
                <q-btn flat round dense icon="delete" text-color="black" @click="openModalExclusao()"/>
              </q-item-side>
            </q-item>
        </q-list>
      </q-card>
      <q-modal v-model="excluirModal" :content-css="{padding: '50px', minWidth: '50vw'}">
      <div class="q-display-1 q-mb-md">Você deseja realmente excluir esse perfil?</div>
      <q-btn color="green" @click="excluirModal = false" wait-for-ripple label="Confirmar" />
      <q-btn color="red" @click="excluirModal = false" wait-for-ripple label="Cancelar" />
    </q-modal>
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
import { openURL, QField, QInput, QCard, QItem, QModal, QItemTile, QList, QPopover, QToggle, QBtn } from 'quasar'

export default {
  name: 'ListOptions',
  data () {
    return {
      leftDrawerOpen: false,
      checked: true,
      excluirModal: null,
      title: 'USUÁRIOS',
      app: 'CASHLINK',
      users: [
        {id: 1, name: 'Caio'},
        {id: 2, name: 'Stanley'},
        {id: 3, name: 'Vinicius'},
        {id: 4, name: 'Felipe'}
      ]
    }
  },

  components: {
    QField, QInput, QCard, QItem, QList, QPopover, QToggle, QBtn, QItemTile, QModal
  },
  methods: {
    openURL,

    openModalExclusao () {
      this.excluirModal = ''
    }
  }
}
</script>

<style>
</style>

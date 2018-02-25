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
            <q-item v-for="user in items" v-bind:key="user.id" class="padding-v-15 cursor-pointer">
              <q-item-main>
                 <q-item-tile>{{user.name}}</q-item-tile>
              </q-item-main>
              <q-item-side right>
                <q-btn flat round dense icon="create" text-color="black" />
                <q-btn flat round dense icon="delete" text-color="black" @click="openModalExclusao(user.id)"/>
              </q-item-side>
            </q-item>
        </q-list>
      </q-card>
      <q-modal v-model="excluirModal" :content-css="{padding: '50px', minWidth: '50vw'}">
      <div class="q-display-1 q-mb-md">Você deseja realmente excluir esse perfil?</div>
      <q-btn color="green" @click="remove(idToDelete)" wait-for-ripple label="Confirmar" />
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
      items: JSON.parse(window.localStorage.getItem('users')),
      excluirModal: null,
      idToDelete: -1,
      title: 'USUÁRIOS',
      app: 'CASHLINK'
    }
  },

  components: {
    QField, QInput, QCard, QItem, QList, QPopover, QToggle, QBtn, QItemTile, QModal
  },
  methods: {
    openURL,

    remove (id) {
      this.users = JSON.parse(window.localStorage.getItem('users'))
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].id === id) {
          this.users.splice(i, 1)
        }
      }
      window.localStorage.setItem('users', JSON.stringify(this.users))
      this.items = this.users
      this.excluirModal = false
    },

    openModalExclusao (id) {
      this.idToDelete = id
      this.excluirModal = ''
    }
  }
}
</script>

<style>
</style>

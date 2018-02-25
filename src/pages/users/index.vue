<template>
    <q-layout class="q-layout-page row justify-center">
    <q-toolbar color="primary" class="toolbar-height">
      <router-link to="/apps/ID">
      <q-btn flat round dense icon="keyboard_arrow_left" color="white" />
      </router-link>
      <q-toolbar-title><strong>USUÁRIOS | {{ title }}</strong></q-toolbar-title>
    </q-toolbar>
    <div class="options">
      <!-- <div class="full-width main-title text-center padding-v-30"><strong>{{title}}</strong></div> -->
      <q-card inline class="content row bigger q-ma-sm text-center">
        <q-list class="q-list q-list-separator q-list-highlight">
            <q-item v-for="user in items" v-bind:key="user.id" class="padding-v-15 cursor-pointer">
              <q-item-main>
                 <q-item-tile>{{user.name}}</q-item-tile>
              </q-item-main>
              <q-item-side right>
                <q-btn flat round dense icon="create" text-color="black" @click="openModalPermissao()" />
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

     <q-modal v-model="permisoesModal" :content-css="{padding: '50px', minWidth: '50vw'}">
      <div class="q-display-1 q-mb-md">Configurar perfil para usuario
        <q-card>
          <q-card-main>
            <q-list class="q-list q-list-separator q-list-highlight">
              <q-item v-for="item in itens" v-bind:key="item.id" class="padding-v-15 cursor-pointer">
                <q-item-main>
                  <q-item-tile>{{item.name}}</q-item-tile>
                </q-item-main>
                <q-toggle v-model="item.checked"/>
              </q-item>
            </q-list>
          </q-card-main>
        </q-card>
      </div>
      <q-btn color="primary" @click="permisoesModal = false" wait-for-ripple label="Close" />
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
import { openURL, QField, QInput, QCard, QCardMain, QItem, QModal, QItemTile, QList, QPopover, QToggle, QBtn } from 'quasar'

export default {
  name: 'usersindex',
  data () {
    return {
      checked: true,
      permisoesModal: null,
      items: [],
      itens: [],
      excluirModal: null,
      idToDelete: -1,
      title: JSON.parse(window.localStorage.getItem('appDefault')).name,
      id: JSON.parse(window.localStorage.getItem('appDefault')).id
    }
  },
  components: {
    QField, QInput, QCard, QCardMain, QItem, QList, QPopover, QToggle, QBtn, QItemTile, QModal
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
    openModalPermissao () {
      this.permisoesModal = ''
    },
    openModalExclusao (id) {
      this.idToDelete = id
      this.excluirModal = ''
    }
  },
  beforeMount () {
    let app = JSON.parse(window.localStorage.getItem('appDefault'))
    let users = JSON.parse(window.localStorage.getItem('users'))
    if (!users) {
      users = []
    }
    for (let i = 0; i < users.length; i++) {
      if (parseInt(users[i].app) === parseInt(app.id)) {
        this.items.push(users[i])
      }
    }

    let funcionalidades = JSON.parse(window.localStorage.getItem('funcionalidades'))
    if (!funcionalidades) {
      funcionalidades = []
    }
    for (let i = 0; i < funcionalidades.length; i++) {
      if (parseInt(funcionalidades[i].app) === parseInt(app.id)) {
        this.itens.push(funcionalidades[i])
      }
    }
  }
}
</script>

<style>
</style>

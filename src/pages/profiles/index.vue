<template refs="profiles">
    <q-layout class="q-layout-page row justify-center">
    <q-toolbar color="primary" class="toolbar-height">
      <router-link to="/apps/ID">
          <q-btn flat round dense icon="keyboard_arrow_left" color="white" />
      </router-link>
      <q-toolbar-title><strong>{{ app }} | {{ title }}</strong></q-toolbar-title>
    </q-toolbar>

   <q-modal v-model="permisoesModal" :content-css="{padding: '50px', minWidth: '50vw'}">
      <div class="q-display-1 q-mb-md">Configurar permissões
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

    <q-modal v-model="excluirModal" :content-css="{padding: '50px', minWidth: '50vw'}">
      <div class="q-display-1 q-mb-md">Você deseja realmente excluir esse perfil?</div>
      <q-btn color="green" @click="remove(idToDelete)" wait-for-ripple label="Confirmar" />
      <q-btn color="red" @click="excluirModal = false" wait-for-ripple label="Cancelar" />
    </q-modal>

    <div class="options">
      <div class="full-width main-title text-center padding-v-30"><strong>{{title}}</strong></div>
      <q-card inline class="content row bigger q-ma-sm text-center">
        <q-list class="q-list q-list-separator q-list-highlight">
            <q-item v-for="perfil in items" v-bind:key="perfil.id" class="padding-v-15 cursor-pointer">
              <q-item-main>
                 <q-item-tile>{{perfil.name}}</q-item-tile>
              </q-item-main>
              <q-item-side right>
                <q-btn flat round dense icon="create" text-color="black" @click="openModalPermissao()" />
                <q-btn flat round dense icon="delete" text-color="black" @click="openModalExclusao(perfil.id)" />
              </q-item-side>
            </q-item>
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
import { openURL, QField, QInput, QCard, QCardMain, QItem, QItemTile, QList, QPopover, QToggle, QBtn, QModal } from 'quasar'

export default {

  name: 'profilesindex',
  data () {
    return {
      checked: true,
      title: 'PERFIS',
      items: JSON.parse(window.localStorage.getItem('profiles')),
      app: 'CASHLINK',
      opened: false,
      idToDelete: -1,
      permisoesModal: null,
      excluirModal: null,
      itens: [
        {id: 1, name: 'Visualizar', checked: false},
        {id: 2, name: 'Editar', checked: true},
        {id: 3, name: 'Salvar', checked: false},
        {id: 4, name: 'Excluir', checked: true}
      ]
    }
  },

  components: {
    QField, QInput, QCard, QItem, QList, QPopover, QToggle, QBtn, QModal, QCardMain, QItemTile
  },
  methods: {
    openURL,

    remove (id) {
      this.profiles = JSON.parse(window.localStorage.getItem('profiles'))
      // this.apps.splice(id, 1)
      for (let i = 0; i < this.profiles.length; i++) {
        if (this.profiles[i].id === id) {
          this.profiles.splice(i, 1)
        }
      }
      window.localStorage.setItem('profiles', JSON.stringify(this.profiles))
      this.items = this.profiles
      this.excluirModal = false
    },

    openModalPermissao () {
      this.permisoesModal = ''
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

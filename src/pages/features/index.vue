<template>
  <q-layout class="q-layout-page row justify-center">
    <q-toolbar color="primary" class="toolbar-height">
      <router-link to="/apps/ID">
          <q-btn flat round dense icon="keyboard_arrow_left" color="white" />
      </router-link>
      <q-toolbar-title><strong>FUNCIONALIDADES | {{ title }}</strong></q-toolbar-title>
    </q-toolbar>
    <div class="options text-center">
      <q-card inline class="content row bigger q-ma-sm text-center">
        <q-list class="q-list q-list-separator q-list-highlight">
            <q-item v-for="func in items" v-bind:key="func.id" class="padding-v-15 cursor-pointer">
               <q-item-main>
                 <q-item-tile>{{func.name}}</q-item-tile>
              </q-item-main>
              <q-item-side right>
                <q-btn flat round dense icon="create" text-color="black" />
                <q-btn flat round dense icon="delete" text-color="black" @click="openModalExclusao(func.id)" />
              </q-item-side>
            </q-item>
        </q-list>
      </q-card>
      <q-modal v-model="excluirModal" :content-css="{padding: '50px', minWidth: '50vw'}">
      <div class="q-display-1 q-mb-md">Você deseja realmente excluir esse perfil?</div>
      <q-btn color="green" @click="remove(idToDelete)" wait-for-ripple label="Confirmar" />
      <q-btn color="red" @click="excluirModal = false" wait-for-ripple label="Cancelar" />
    </q-modal>
    </div>
    <router-link to="/features/create">
      <q-btn round color="primary" class="fixed" icon="add" style="right: 18px; bottom: 18px"/>
    </router-link>
  </q-layout>
</template>

<script>
import { openURL, QField, QInput, QCard, QModal, QItem, QList, QItemTile, QToolbar } from 'quasar'

export default {
  name: 'featuresindex',
  data () {
    return {
      idToDelete: -1,
      items: [],
      app: 'CASHLINK',
      excluirModal: null,
      title: JSON.parse(window.localStorage.getItem('appDefault')).name,
      id: JSON.parse(window.localStorage.getItem('appDefault')).id
    }
  },
  components: {
    QField, QInput, QCard, QItem, QModal, QList, QItemTile, QToolbar
  },
  methods: {
    openURL,
    remove (id) {
      this.funcionalidades = JSON.parse(window.localStorage.getItem('funcionalidades'))
      for (let i = 0; i < this.funcionalidades.length; i++) {
        if (this.funcionalidades[i].id === id) {
          this.funcionalidades.splice(i, 1)
        }
      }
      window.localStorage.setItem('funcionalidades', JSON.stringify(this.funcionalidades))
      this.items = this.funcionalidades
      this.excluirModal = false
    },
    openModalExclusao (id) {
      this.idToDelete = id
      this.excluirModal = ''
    }
  },
  beforeMount () {
    let app = JSON.parse(window.localStorage.getItem('appDefault'))
    let funcionalidades = JSON.parse(window.localStorage.getItem('funcionalidades'))
    if (!funcionalidades) {
      funcionalidades = []
    }
    for (let i = 0; i < funcionalidades.length; i++) {
      if (parseInt(funcionalidades[i].app) === parseInt(app.id)) {
        this.items.push(funcionalidades[i])
      }
    }
  }
}
</script>

<style>
</style>

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
            <q-item v-for="func in funcs" v-bind:key="func" class="padding-v-15 cursor-pointer">
               <q-item-main>
                 <q-item-tile>{{func.name}}</q-item-tile>
              </q-item-main>
              <q-item-side right>
                <q-btn flat round dense icon="create" text-color="black" />
                <q-btn flat round dense icon="delete" text-color="black" @click="openModalExclusao()" />
              </q-item-side>
            </q-item>
        </q-list>
      </q-card>
      <q-modal v-model="excluirModal" :content-css="{padding: '50px', minWidth: '50vw'}">
      <div class="q-display-1 q-mb-md">Você deseja realmente excluir esse perfil?</div>
      <q-btn color="green" @click="excluirModal = false" wait-for-ripple label="Confirmar" />
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
      title: 'FUNCIONALIDADES',
      app: 'CASHLINK',
      excluirModal: null,
      funcs: [
        {id: 1, name: 'Criar OI'},
        {id: 2, name: 'Editar OI'},
        {id: 3, name: 'Criar fluxo de OI'},
        {id: 4, name: 'Editar fluxo de OI'}
      ]
    }
  },

  components: {
    QField, QInput, QCard, QItem, QModal, QList, QItemTile, QToolbar
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

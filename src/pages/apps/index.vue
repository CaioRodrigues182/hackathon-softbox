<template>
  <q-layout class="q-layout-page row justify-center">
    <q-toolbar color="primary" class="toolbar-height">
      <q-toolbar-title><strong>{{ title }}</strong></q-toolbar-title>
      <router-link :to="back">
        <q-btn flat round dense icon="power_settings_new" color="white" />
      </router-link>
    </q-toolbar>
    <div class="options text-center">
      <q-card inline class="content row bigger q-ma-sm text-center">
        <q-list class="q-list q-list-separator q-list-highlight">
            <q-item class="padding-v-15 cursor-pointer" v-for="item in items" v-bind:key="item.id">
              <q-item-main :label="item.name" />
              <q-item-side right>
                <router-link :to="'/apps/' + item.id">
                  <q-btn flat round dense icon="view_stream" text-color="black" />
                </router-link>
                <q-btn flat round dense icon="create" text-color="black" />
                <q-btn flat round dense icon="delete" text-color="black" @click="openModalExclusao(item.id)" />
              </q-item-side>
            </q-item>
        </q-list>
      </q-card>

      <q-modal v-model="excluirModal" :content-css="{padding: '50px', minWidth: '50vw'}">
        <div class="q-display-1 q-mb-md">Você deseja realmente excluir esse perfil?</div>
        <q-btn color="green"  @click="remove(idToDelete)" wait-for-ripple label="Confirmar" />
        <q-btn color="red" @click="excluirModal = false" wait-for-ripple label="Cancelar" />
      </q-modal>

    </div>
    <router-link to="/apps/create">
      <q-btn round color="primary" class="fixed" icon="create" style="right: 18px; bottom: 18px"/>
    </router-link>
  </q-layout>
</template>

<script>
import { openURL, QField, QInput, QCard, QItem, QModal, QList, QItemTile, QToolbar } from 'quasar'

export default {
  name: 'appsindex',
  data () {
    return {
      back: '/',
      leftDrawerOpen: false,
      excluirModal: null,
      title: 'APLICAÇÕES',
      items: JSON.parse(window.localStorage.getItem('apps')),
      apps: [],
      item: {},
      idToDelete: -1
    }
  },
  components: {
    QField, QInput, QCard, QItem, QList, QItemTile, QToolbar, QModal
  },
  methods: {
    openURL,
    remove (id) {
      this.apps = JSON.parse(window.localStorage.getItem('apps'))
      // this.apps.splice(id, 1)
      for (let i = 0; i < this.apps.length; i++) {
        if (this.apps[i].id === id) {
          this.apps.splice(i, 1)
        }
      }
      window.localStorage.setItem('apps', JSON.stringify(this.apps))
      this.items = this.apps
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

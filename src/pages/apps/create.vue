<template>
    <q-layout class="q-layout-page row justify-center">
      <q-toolbar color="primary" class="toolbar-height">
        <router-link :to="back">
          <q-btn flat round dense icon="keyboard_arrow_left" color="white" />
        </router-link>
        <q-toolbar-title>
          VOLTAR
        </q-toolbar-title>
      </q-toolbar>
      <div class="form">
        <q-card class="card-style card">
      <q-card-title align="center">
        {{title}}
      </q-card-title>
        <q-card-separator />
        <q-card-main>
        <q-field icon="face">
          <q-input v-model="name" float-label="Nome" autofocus="autofocus" />
        </q-field>
        </q-card-main>
        <router-link :to="back">
          <q-btn color="primary" size="lg" label="CADASTRAR" class="q-btn full-width bg-primary text-white button" @click="create()" />
        </router-link>
      </q-card>
      </div>
    </q-layout>
</template>

<script>
import { openURL, QField, QInput, QCardTitle, QCard, QCardMain, QCardSeparator, QToolbar } from 'quasar'

export default {
  name: 'LayoutDefault',
  data () {
    return {
      back: '/apps',
      name: '',
      description: '',
      title: 'Cadastrar Aplicação',
      apps: [],
      item: {}
    }
  },

  components: {
    QField,
    QInput,
    QCard,
    QCardTitle,
    QCardMain,
    QCardSeparator,
    QToolbar
  },
  methods: {
    openURL,

    create () {
      if (this.name && this.name !== '') {
        this.apps = JSON.parse(window.localStorage.getItem('apps'))
        if (!this.apps) {
          this.apps = []
        }
        this.item = {id: this.apps.length + 1, name: this.name}
        this.apps.push(this.item)
        console.log(this.apps)
        window.localStorage.setItem('apps', JSON.stringify(this.apps))
        // window.location.href = this.back
      }
    }
  }
}
</script>
<style>

</style>

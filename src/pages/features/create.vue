<template>
    <q-layout class="q-layout-page row justify-center">
      <q-toolbar color="primary" class="toolbar-height">
        <router-link to="/features/ID">
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
          <q-input v-model="name" float-label="Nome da funcionalidade" />
        </q-field>
        </q-card-main>
        <router-link :to="back">
          <q-btn color="primary" size="lg" label="CADASTRAR" @click="create()" class="q-btn full-width bg-primary text-white button" />
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
      name: '',
      back: '/features/ID',
      title: 'Cadastro de Funcionalidades'
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
        this.funcionalidades = JSON.parse(window.localStorage.getItem('funcionalidades'))
        if (!this.funcionalidades) {
          this.funcionalidades = []
        }
        this.item = {id: this.funcionalidades.length + 1, name: this.name}
        this.funcionalidades.push(this.item)
        console.log(this.funcionalidades)
        window.localStorage.setItem('funcionalidades', JSON.stringify(this.funcionalidades))
        window.location.href = this.back
      }
    }
  }
}
</script>
<style>

</style>

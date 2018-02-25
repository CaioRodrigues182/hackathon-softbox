<template>
    <q-layout class="q-layout-page row justify-center">
      <q-toolbar color="primary" class="toolbar-height">
        <router-link to="/users/ID">
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
          <q-input v-model="name" float-label="Nome" />
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
      back: '/users/ID',
      title: 'Cadastro de Usuario'
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
        this.users = JSON.parse(window.localStorage.getItem('users'))
        if (!this.users) {
          this.users = []
        }
        this.item = {id: this.users.length + 1, name: this.name}
        this.users.push(this.item)
        console.log(this.users)
        window.localStorage.setItem('users', JSON.stringify(this.users))
        window.location.href = this.back
      }
    }
  }
}
</script>
<style>

</style>

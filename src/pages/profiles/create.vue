<template>
    <q-layout class="q-layout-page row justify-center">
      <q-toolbar color="primary" class="toolbar-height">
        <router-link to="/profiles/ID">
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
      title: 'Cadastro de Perfil',
      back: '/profiles/ID'
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
      debugger
      this.profiles = JSON.parse(window.localStorage.getItem('profiles'))
      this.item = {id: this.profiles.length + 1, name: this.name}
      this.profiles.push(this.item)
      console.log(this.profiles)
      window.localStorage.setItem('profiles', JSON.stringify(this.profiles))
      window.location.href = this.back
    }
  }
}
</script>
<style>

</style>

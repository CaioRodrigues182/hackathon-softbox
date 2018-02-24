<template>
    <q-layout class="q-layout-page row justify-center">
      <q-toolbar color="primary" class="toolbar-height">
        <router-link to="/apps">
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
          <q-input v-model="email" float-label="Nome da aplicação" />
        </q-field>
        <br>
        <q-field icon="textsms">
          <q-input v-model="email" float-label="Descrição da aplicação"/>
        </q-field>
        </q-card-main>
        <router-link to="permissions">
          <q-btn color="primary" size="lg" label="CADASTRAR" class="q-btn full-width bg-primary text-white button" />
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
      email: '',
      title: 'Cadastro de Aplicações'
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

    goToAcess () {

    }
  }
}
</script>
<style>

</style>

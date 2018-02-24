<template>
   <q-card>
      <q-card-title align="center">
        {{title}}
      </q-card-title>
        <q-card-separator />
        <q-card-main>
        <q-field icon="person">
          <q-input v-model="email" float-label="Nome" />
        </q-field>
        <br>
        <q-field icon="lock">
          <q-input v-model="email" float-label="Descrição"/>
        </q-field>
        </q-card-main>
        <router-link to="options">
        <q-btn label="Cadastrar" />
        </router-link>
      </q-card>
</template>

<script>
import { openURL, QField, QInput, QCardTitle, QCard, QCardMain, QCardSeparator } from 'quasar'

export default {
  name: 'LayoutDefault',
  data () {
    return {
      email: '',
      title: 'Cadastro de Perfil'
    }
  },

  components: {
    QField,
    QInput,
    QCard,
    QCardTitle,
    QCardMain,
    QCardSeparator
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

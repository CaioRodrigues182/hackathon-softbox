<template>
    <q-layout view="lHh Lpr lFf">
      <div>
      <q-card class="card-style">
      <q-card-title align="center">
        {{title}}
      </q-card-title>
        <q-card-separator />
        <q-card-main>
        <q-field icon="person">
          <q-input v-model="email" float-label="Usuario" type="email" suffix="" />
        </q-field>
        <br>
        <q-field icon="lock">
          <q-input v-model="email" float-label="Senha" type="email" suffix="" />
        </q-field>
        </q-card-main>
        <router-link to="options">
        <q-btn class="text-center" align="center" label="Login" />
        </router-link>
      </q-card>
      </div>
    </q-layout>
</template>
<script>
import { openURL, QField, QInput, QCardTitle, QCard, QCardMain, QCardSeparator } from 'quasar'

export default {
  name: 'LayoutDefault',
  data () {
    return {
      email: '',
      title: 'Login'
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
.card-style {
  width: 20vw;
}

</style>

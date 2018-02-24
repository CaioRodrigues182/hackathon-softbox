<template>
  <q-layout view="lHh Lpr lFf">
    <q-card>
    <q-card-title align="center">
      Login
    </q-card-title>
      <q-card-separator />
      <q-card-main>
      <q-field icon="wifi">
        <q-input v-model="email" float-label="Usuario" type="email" suffix="" />
      </q-field>
      <q-field icon="wifi">
        <q-input v-model="email" float-label="Senha" type="email" suffix="" />
      </q-field>
      </q-card-main>
      <q-btn align="center" label="Login" />
    </q-card>
  </q-layout>
</template>
<script>
import { openURL, QField, QInput, QCardTitle, QCard, QCardMain, QCardSeparator, QButton } from 'quasar'

export default {
  name: 'LayoutDefault',
  data () {
    return {
      leftDrawerOpen: false,
      email: ''
    }
  },

  components: {
    QField,
    QInput,
    QCard,
    QCardTitle,
    QCardMain,
    QCardSeparator,
    QButton
  },
  methods: {
    openURL
  }
}
</script>

<style>

</style>

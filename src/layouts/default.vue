<template>
    <q-layout view="lHh Lpr lFf">
      <div>
      <q-card class="card-style">
      <q-card-title align="center">
        <!-- <h1>{{title}}</h1> -->
        <!-- <h4>{{subtitle}}</h4> -->
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
        <q-btn color="primary" size="lg" label="Login" class="full-width" />
      </q-card>
      </div>
    </q-layout>
</template>
<script>
import { openURL, QField, QInput, QCardTitle, QCard, QCardMain, QCardSeparator, QButton } from 'quasar'

export default {
  name: 'LayoutDefault',
  data () {
    return {
      email: '',
      title: 'EFETUE O LOGIN',
      subtitle: 'PARA ACESSAR O SISTEMA'
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
.card-style {
  width: 20vw;
}

</style>

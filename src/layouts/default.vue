<template>
    <q-layout class="q-layout-page row justify-center layout-padding">
      <div class="form">
        <q-card class="card-style card">
          <q-card-title align="center">
            <div class="title"><strong>{{title}}</strong></div>
            <div class="subtitle">{{subtitle}}</div>
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
          <router-link to="apps">
            <q-btn color="primary" size="lg" label="ENTRAR" class="q-btn full-width bg-primary text-white button" />
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

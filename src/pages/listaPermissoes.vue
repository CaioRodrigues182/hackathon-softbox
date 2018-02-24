<template>
    <q-layout class="q-layout-page row justify-center">
      <q-toolbar color="primary" class="toolbar-height">
        <router-link to="/apps">
          <q-btn flat round dense icon="keyboard_arrow_left" color="white" />
        </router-link>
        <q-toolbar-title>VOLTAR</q-toolbar-title>
        <router-link to="/">
          <q-btn flat round dense icon="power_settings_new" color="white" />
        </router-link>
      </q-toolbar>
    <div class="options">
      <div class="full-width main-title text-center padding-v-30"><strong>{{title}}</strong></div>
      <q-card inline class="content row bigger q-ma-sm text-center">
        <q-list class="q-list q-list-separator q-list-highlight">
          <q-item>
            <q-item-main label="Administrador" />
            <q-item-side right>
              <q-btn flat round dense icon="more_vert" text-color="black">
                <q-popover>
                  <q-list link>
                    <q-item>
                      <q-item-main label="Editar" />&nbsp;
                      <q-toggle v-model="checked" />
                    </q-item>
                    <q-item>
                      <q-item-main label="Visualizar" />&nbsp;
                      <q-toggle v-model="checked" />
                    </q-item>
                    <q-item>
                      <q-item-main label="Inserir" />&nbsp;
                      <q-toggle v-model="checked" />
                    </q-item>
                    <q-item>
                      <q-item-main label="Exlcuir" />&nbsp;
                      <q-toggle v-model="checked" />
                    </q-item>
                  </q-list>
                </q-popover>
              </q-btn>
            </q-item-side>
          </q-item>
          <q-item>
            <q-item-main label="Gerente" />
            <q-item-side right>
              <q-btn flat round dense icon="more_vert" text-color="black">
                <q-popover>
                  <q-list link>
                    <q-item>
                      <q-item-main label="Editar" />&nbsp;
                      <q-toggle v-model="checked" />
                    </q-item>
                    <q-item>
                      <q-item-main label="Visualizar" />&nbsp;
                      <q-toggle v-model="checked" />
                    </q-item>
                    <q-item>
                      <q-item-main label="Inserir" />&nbsp;
                      <q-toggle v-model="checked" />
                    </q-item>
                    <q-item>
                      <q-item-main label="Exlcuir" />&nbsp;
                      <q-toggle v-model="checked" />
                    </q-item>
                  </q-list>
                </q-popover>
              </q-btn>
            </q-item-side>
          </q-item>
          <q-item>
            <q-item-main label="Cliente" />
            <q-item-side right>
              <q-btn flat round dense icon="more_vert" text-color="black">
                <q-popover>
                  <q-list link>
                    <q-item>
                      <q-item-main label="Editar" />&nbsp;
                      <q-toggle v-model="checked" />
                    </q-item>
                    <q-item>
                      <q-item-main label="Visualizar" />&nbsp;
                      <q-toggle v-model="checked" />
                    </q-item>
                    <q-item>
                      <q-item-main label="Inserir" />&nbsp;
                      <q-toggle v-model="checked" />
                    </q-item>
                    <q-item>
                      <q-item-main label="Exlcuir" />&nbsp;
                      <q-toggle v-model="checked" />
                    </q-item>
                  </q-list>
                </q-popover>
              </q-btn>
            </q-item-side>
          </q-item>
        </q-list>
      </q-card>
      <router-link to="register/perfil">
      <q-btn
        round
        color="primary"
        class="fixed"
        icon="create"
        style="right: 18px; bottom: 18px"/>
      </router-link>
    </div>
  </q-layout>
</template>

<script>
import { openURL, QField, QInput, QCard, QItem, QList, QPopover, QToggle, QBtn } from 'quasar'

export default {
  name: 'ListOptions',
  data () {
    return {
      leftDrawerOpen: false,
      checked: true,
      title: 'LISTA DE PERFIS'
    }
  },

  components: {
    QField, QInput, QCard, QItem, QList, QPopover, QToggle, QBtn
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>

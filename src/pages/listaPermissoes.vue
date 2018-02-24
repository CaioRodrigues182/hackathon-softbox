<template>
  <q-layout>
    <q-card inline class="row bigger q-ma-sm text-center">
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
    <router-link to="register">
    <q-btn
      round
      color="primary"
      class="fixed"
      icon="create"
      style="right: 18px; bottom: 18px"/>
    </router-link>
  </q-layout>
</template>

<script>
import { openURL, QField, QInput, QCard, QItem, QList, QPopover, QToggle, QBtn } from 'quasar'

export default {
  name: 'ListOptions',
  data () {
    return {
      leftDrawerOpen: false,
      checked: true
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

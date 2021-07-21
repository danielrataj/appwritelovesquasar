<template>
  <q-layout :class="{ bg: !isLogged }" view="lHh Lpr lFf">
    <q-header elevated v-if="isLogged">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Admin Dashboard
        </q-toolbar-title>

        <q-btn
          icon="logout"
          flat
          round
          dense
          @click="doLogout"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-if="isLogged"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Links
        </q-item-label>
        <q-item
          clickable
          tag="a"
          href="https://appwrite.io/"
          target="_blank"
        >
          <q-item-section>
            <q-item-label>appwrite.io</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          tag="a"
          href="https://quasar.dev/"
          target="_blank"
        >
          <q-item-section>
            <q-item-label>Quasar</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          tag="a"
          href="http://vuejs.org/"
          target="_blank"
        >
          <q-item-section>
            <q-item-label>Vue.js</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>

      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Attachments
        </q-item-label>
        <q-item
          clickable
          tag="a"
          :to="{ name: 'admin.file.upload' }"
        >
          <q-item-section>
            <q-item-label>File Upload</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          tag="a"
          :to="{ name: 'admin.file.list' }"
        >
          <q-item-section>
            <q-item-label>List of files</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { isLogged, logout } from '../helpers/auth'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'AdminLoginLayout',
  setup () {
    const leftDrawerOpen = ref(false)
    const quasar = useQuasar()

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      isLogged,
      logout,
      quasar
    }
  },
  methods: {
    async doLogout () {
      try {
        await this.logout()

        return this.$router.replace({
          name: 'admin.login.index'
        })
      } catch (error) {
        console.error(error)

        this.quasar.notify({
          type: 'negative',
          message: 'It is not possible to logout.'
        })
      }
    }
  }
})
</script>

<style lang="sass" scoped>
  .bg
    background-color: #3c2ec2
    background-image: linear-gradient(160deg, #3c2ec2 0%, #fff 100%)
</style>

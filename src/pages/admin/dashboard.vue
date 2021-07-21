<template>
  <q-page padding>
    <p v-if="account">Logged in user: {{ account.email }}</p>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import { account } from '../../helpers/auth'

export default defineComponent({
  name: 'PageAdminDashboard',
  setup () {
    return {
      account
    }
  }
})
</script>

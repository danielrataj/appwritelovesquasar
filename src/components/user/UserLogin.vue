<template>
  <div v-if="isLogged">
    <q-btn @click="logout" unelevated size="lg" color="primary" class="full-width text-white" label="Logout" />
  </div>

  <q-form
    v-if="!isLogged"
    @submit="onSubmit"
    class="q-gutter-md"
    >
      <q-input
        square
        clearable
        v-model="email"
        type="email"
        label="Email"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please enter your e-mail address.']"
        >
        <template v-slot:prepend>
          <q-icon name="email" />
        </template>
      </q-input>

      <q-input
        square
        clearable
        v-model="password"
        type="password"
        label="Password"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please enter your password.']"
      >
        <template v-slot:prepend>
          <q-icon name="lock" />
        </template>
      </q-input>

      <q-btn type="submit" unelevated size="lg" color="primary" class="full-width text-white" label="Login" />
  </q-form>
</template>

<script>
import { defineComponent, onMounted } from 'vue'
import { email, password, account, getAccount, isLogged, logout, login } from '../../helpers/auth'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'UserLoginComponent',

  setup () {
    const quasar = useQuasar()

    onMounted(getAccount())

    return {
      email,
      password,
      quasar,
      account,
      isLogged,
      logout
    }
  },

  methods: {
    async onSubmit () {
      try {
        await login()

        this.quasar.notify({
          message: this.$t('login.success'),
          type: 'positive'
        })

        this.email = ''
        this.password = ''
      } catch (error) {
        console.error(error)

        this.quasar.notify({
          message: this.$t('login.error.failed'),
          type: 'negative'
        })
      }
    }
  }
})
</script>

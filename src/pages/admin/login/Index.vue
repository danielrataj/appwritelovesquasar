<template>
  <q-page padding>
    <div>
      <q-form
        @submit="onSubmit"
        class="q-gutter-md"
        >
        <div class="row justify-center items-center window-height">
          <q-card square class="col-xs-12 col-sm-8 col-md-5 shadow-24">
            <q-card-section class="bg-secondary">
              <q-avatar icon="vpn_key" color="primary" text-color="white" size="7em" class="absolute-center" />
            </q-card-section>
            <q-card-section>
              <q-input
                square
                clearable
                v-model="email"
                type="email"
                :label="$t('admin.login.form.email')"
                lazy-rules
                :rules="[ val => val && val.length > 0 || $t('admin.login.error.required.email')]"
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
                :label="$t('admin.login.form.password')"
                lazy-rules
                :rules="[ val => val && val.length > 0 || $t('admin.login.error.required.password')]"
              >
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>
            </q-card-section>
            <q-card-actions class="q-px-lg">
              <q-btn type="submit" unelevated size="lg" color="primary" class="full-width text-white" :label="$t('admin.login.form.submit')" />
            </q-card-actions>
          </q-card>
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import { useQuasar } from 'quasar'
import { email, password, login, account } from '../../../helpers/auth'

export default defineComponent({
  name: 'PageLoginIndex',
  setup () {
    const quasar = useQuasar()

    return {
      quasar,
      email,
      password,
      login,
      account
    }
  },
  methods: {
    async onSubmit () {
      try {
        await this.login()

        return this.$router.replace({
          name: 'admin.dashboard'
        })
      } catch (error) {
        console.error(error)

        this.quasar.notify({
          type: 'negative',
          message: this.$t('admin.login.error.failed')
        })
      }
    }
  }
})
</script>

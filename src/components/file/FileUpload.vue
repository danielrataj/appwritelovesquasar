<template>
  <div class="row q-gutter-md">
    <div class="col-12">
      <q-form @submit="onSubmit" class="q-gutter-md">
        <q-file outlined v-model="file" clearable>
          <template v-slot:prepend>
            <q-icon name="attach_file" />
          </template>
        </q-file>
        <q-btn type="submit" label="Upload" />
      </q-form>
    </div>
    <div class="col-12" v-if="Object.keys(uploadStatus).length > 0">
      <pre>{{ uploadStatus }}</pre>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'FileUploadComponent',

  props: {
    permissionRead: {
      type: Array,
      default: () => ['*']
    },
    permissionWrite: {
      type: Array,
      default: () => ['*']
    },
  },

  setup () {
    const quasar = useQuasar()
    const file = ref(null)
    const uploadStatus = ref({})

    return {
      quasar,
      file,
      uploadStatus
    }
  },

  methods: {
    async onSubmit () {
      if (!this.file) {
        this.quasar.notify({
          message: this.$t('fileupload.error.missing'),
          type: 'negative'
        })
        return false
      }

      try {
        this.uploadStatus = await this.$appwrite.storage.createFile(this.file, this.permissionRead, this.permissionWrite)

        this.quasar.notify({
          message: this.$t('fileupload.success'),
          type: 'positive'
        })
      } catch (error) {
        console.error(error)

        this.quasar.notify({
          message: this.$t('fileupload.error.failed'),
          type: 'negative'
        })
      }
    }
  }
})
</script>

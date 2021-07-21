<template>
  <div v-if="this.files.length">
    <h3 class="text-h4 q-ma-none">{{ $t('filelist.heading') }}: {{ sum }}</h3>
    <q-list bordered separator class="q-mt-md">
      <q-item v-for="file in this.files" :key="file.$id">
        <q-item-section>
          <a href="#" @click="getFileView(file.$id)">{{ file.name }}</a>
        </q-item-section>
        <q-item-section side>
          <q-btn
            icon="remove"
            round
            flat
            color="red"
            size="sm"
            @click="remove(file.$id)"
          />
        </q-item-section>
      </q-item>
    </q-list>
  </div>
  <div v-if="!this.files.length">
    {{ $t('filelist.error.nofiles') }}
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'FileListComponent',

  setup () {
    const quasar = useQuasar()
    const files = ref([])
    const sum = ref(0)

    return {
      quasar,
      files,
      sum
    }
  },

  created () {
    this.fetchData()
  },

  methods: {
    async fetchData () {
      try {
        const response = await this.$appwrite.storage.listFiles()
        this.sum = response.sum
        this.files = response.files
      } catch (error) {
        console.error(error)
      }
    },

    async remove (id) {
      try {
        await this.$appwrite.storage.deleteFile(id)

        this.quasar.notify({
          message: this.$t('filelist.success'),
          type: 'positive'
        })

        await this.fetchData()
      } catch (error) {
        console.error(error)

        this.quasar.notify({
          message: this.$t('filelist.error.failed'),
          type: 'negative'
        })
      }
    },

    async getFileView (id) {
      try {
        const response = await this.$appwrite.storage.getFileView(id)
        window.location.href = response.href
      } catch (error) {
        console.error(error)

        return '#'
      }
    }
  }
})
</script>

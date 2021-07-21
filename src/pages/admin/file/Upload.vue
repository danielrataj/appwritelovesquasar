<template>
  <q-page padding>
    <div class="row">
      <div class="col-6">
        <file-upload />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import FileUpload from '../../../components/file/FileUpload.vue'

export default defineComponent({
  name: 'PageFileUpload',
  components: {
    FileUpload
  }
})
</script>

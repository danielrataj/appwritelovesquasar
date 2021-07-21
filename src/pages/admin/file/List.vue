<template>
  <q-page padding>
    <div class="row">
      <div class="col-6">
        <file-list />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import FileList from '../../../components/file/FileList.vue'

export default defineComponent({
  name: 'PageFileList',
  components: {
    FileList
  }
})
</script>

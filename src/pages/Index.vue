<template>
  <q-page class="flex flex-center">
    <div class="row q-gutter-md">
      <div class="col-12 text-center">
        <q-img
          alt="logo"
          src="logo/logo_500_500.png"
          style="width: 200px; height: 200px"
        />
      </div>
      <div class="col-12 text-h4 text-center text-primary">
        {{ $t('main.title') }}
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex'
})
</script>

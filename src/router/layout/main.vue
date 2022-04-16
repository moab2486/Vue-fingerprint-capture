<script >
  import NaVbar from '@/components/navbar.vue'

  export default {
    components: { NaVbar }
  }
</script>

<template>
  <div>
    <NaVbar />
    <div class="main content mt-4 inner-content-top">
      <RouterView />
    </div>
  </div>
</template>
<template>
  <div class="content">
    <Sidebar />
    <Details />
  </div>
</template>

<script lang="ts" setup>
  import Details from '~/components/details/DetailsView.vue';
</script>

<style lang="scss" scoped>
  .content {
    display: flex;
    border: 10px solid #FDFDFD;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 #0000001A;
    min-height: 589px;
  }
</style>
<template>
  <aside class="sidebar">
    <div class="sidebar-content">
      <Search title="Поиск Сотрудников" />
      <Results title="Результаты" />
    </div>
  </aside>
</template>

<script lang="ts" setup>

import Results from "~/components/search/Results.vue";

</script>

<style lang="scss" scoped>
  .sidebar {
    padding: 27px 30px 0 23px;
    background: #FDFDFD;
  }
</style>
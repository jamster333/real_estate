<template>
  <div class="results-block">
    <div v-if="title" class="search-title">
      {{ title }}
    </div>
    <div class="results-list">
      <span v-if="!userStore.users">
            начните поиск
      </span>
      <span v-else-if="!userStore?.users?.length">
            ничего не найдено
      </span>
      <div v-else>
        <UserList :users="userStore.users" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

import { useUserStore } from "~/store/userStore";
const userStore = useUserStore();

defineProps<{
  title: String,
}>()

</script>

<style scoped>
  .results-block {
    margin-top: 22px;
  }
  .results-list {
    margin-top: 10px;
  }
</style>
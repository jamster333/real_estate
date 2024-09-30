<template>
  <div class="user-list">
    <UserCard v-for="user in users" :key="user.id" :user="user" />
  </div>
</template>

<script lang="ts" setup>

import type { IUserData } from "~/types/user";

defineProps<{
  users: IUserData[],
}>();

</script>

<style lang="scss" scoped>
  .user-list {
    max-height: 589px;
    overflow-y: scroll;
  }
</style>
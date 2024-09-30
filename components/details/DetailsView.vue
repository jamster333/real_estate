<template>
  <div class="details-block">
    <div class="tip text-secondary" v-if="!userStore.selectedUser">
      Выберите сотрудника, чтобы посмотреть его профиль
    </div>
    <div v-if="userStore.selectedUser">
      <DetailsCard :user="userStore.selectedUser" />
    </div>
  </div>
</template>

<script lang="ts" setup>

import { useUserStore } from "~/store/userStore";

const userStore = useUserStore();

</script>

<style lang="scss" scoped>
    .details-block {
      width: 100%;
    }
    .tip {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
</style>
<template>
  <div class="user" @click="userStore.selectUser(user.id)">
      <div class="user__logo">
        <img src="/userLogo.png" alt="user-avatar" >
      </div>
      <div class="user__content content">
        <div class="content__name">
          {{ user.name }}
        </div>
        <div class="content__email">
          {{ user.email }}
        </div>
      </div>
  </div>
</template>

<script lang="ts" setup>

import type { IUserData } from "~/types/user";
import { useUserStore } from "~/store/userStore";

const userStore = useUserStore();

defineProps<{
  user: IUserData,
}>()

</script>

<style lang="scss" scoped>
  .user {
    margin-bottom: 17px;
    display: flex;
    height: 70px;
    border-radius: 10px;
    border: 1px solid #E0E0E0;
    box-shadow: rgba(0, 0, 0, 0.1);
    cursor: pointer;
    overflow-x: hidden;
    &__logo {
      border-right: 1px solid #E0E0E0;
      width: 70px;
      height: 70px;
      display: flex;
      align-items: center;
    }
  }
  .content {
    padding: 15px 34px 18px 15px;
    &__name {
      font-size: 14px;
      font-weight: 600;
      line-height: 17.07px;
    }
    &__email {
      font-size: 14px;
      font-weight: 400;
      line-height: 17.07px;
      color: #76787D;
    }
  }
  img {
    width: 70px;
  }
</style>
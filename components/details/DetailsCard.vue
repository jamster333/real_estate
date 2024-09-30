<template>
  <div class="user-detail">
    <div class="user-detail__card user-detail__card_image">
      <img src="/userLogo.png" alt="user-profile-image">
    </div>
    <div class="user-detail__card user-detail__card_content user-data">
      <div class="user-data__name text-primary information">
        {{ user.name }}
      </div>
      <div class="user-data__email information">
        <span class="information__title">email: </span>
        <span class="information__value">{{ user.email }}</span>
      </div>
      <div class="user-data__phone information">
        <span class="information__title">phone: </span>
        <span class="information__value">{{ user.phone }}</span>
      </div>
      <div class="user-data__about information">
        <div class="information__title information__title_about">О себе </div>
        <div class="information__value information__value">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import type { IUserData } from "~/types/user";

  defineProps<{
    user: IUserData,
  }>();
</script>

<style lang="scss" scoped>
  .user-detail {
    display: flex;
    justify-content: space-between;
    padding: 30px 30px 30px 21px;
    &__card {
      width: 50%;
      &_image {
        max-width: 424px;
      }
    }
  }
  .information {
      margin-bottom: 10px;
      &__title {
        font-weight: 600;
        &_about {
          padding-top: 25px;
          padding-bottom: 25px;
        }
      }
      &__value {
        color: #76787D;
      }
  }
  img {
    width: 100%;
  }
</style>
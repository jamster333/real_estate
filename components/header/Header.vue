<template>
  <div class="header">
      <div class="header__title">
        {{ title }}
      </div>
      <div>
        {{ userName }}
      </div>
  </div>
</template>

<script lang="ts" setup>

import { type IUser } from '@/types/user';

const props = defineProps<{
  title: String,
  user: IUser,
}>();

const userName = computed<string>(() => {
    return props.user.username
})

</script>

<style lang="scss">

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0 50px 0;
  &__title {
    color: #E31F24;
    font-size: 32px;
    font-weight: 700;
  }

}

</style>
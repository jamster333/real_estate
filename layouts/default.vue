<template>
  <div class="container">
    <Header :user="mockUserData" title="Жилфонд" />
    <main>
      <slot/>
    </main>
  </div>
  <NuxtNotifications position="bottom left" :speed="500" />
</template>

<script lang="ts" setup>
  import type {TUser} from "~/types/user";

  const mockUserData = reactive<TUser>({
    id: 1,
    username: 'Пользователь',
  });
</script>

<template>
  <div class="search-block">
    <div v-if="title" class="search-title">
      {{ title }}
    </div>
    <form action="#" class="search-form">
      <input
type="text"
             class="search-input"
             placeholder="Введите Id или имя"
             @input="onInput">
     </form>
  </div>
</template>

<script lang="ts" setup>

import { debounce } from '~/utilites/helpers';
import { useUserStore } from "~/store/userStore";

defineProps<{
  title: string,
}>();

const userStore = useUserStore();
const { notify } = useNotification();

const onInput = debounce(async ($event: Event) => {
  try {
    const target = $event.target as HTMLInputElement;

    if (!target.value) {
      return userStore.setDefaultData();
    }

    notify({
      title: "",
      text: "Request pending..!",
      type: "success",
    });

    const formattedValue = target.value.split(',');
    const isNumber = formattedValue.every(el => !isNaN(+el));

    if (!isNumber) {
      await userStore.searchUserByName(formattedValue);
    } else {
      await userStore.searchUserById(formattedValue);
    }
  } catch (e: any) {
      notify({
        title: "Bad request",
        type: 'error',
        text: `${e?.message}`,
      });
  }
}, 1000);

</script>

<style lang="scss" scoped>
  .search-form {
    margin-top: 22px;
  }
</style>
<template>
  <div class="search-block">
    <div v-if="title" class="search-title">
      {{ title }}
    </div>
    <form action="#" class="search-form">
      <input @input="onInput"
             type="text"
             class="search-input"
             placeholder="Введите Id или имя">
     </form>
  </div>
</template>

<script lang="ts" setup>

import { debounce } from '~/utilites/helpers';
import { useUserStore } from "~/store/userStore";

defineProps<{
  title: String,
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
        text: "Error..!",
      });
  }
}, 2000);

</script>

<style lang="scss" scoped>
  .search-form {
    margin-top: 22px;
  }
</style>
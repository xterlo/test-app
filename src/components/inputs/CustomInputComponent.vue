<script lang="ts" setup>
import { ref, watch } from 'vue';


const props = defineProps<{
    text:string,
    placeholder?:string
}>()

const inputText = ref<string>(props.text)

const emit = defineEmits(['update:text']);

watch(inputText, (newValue) => {
  emit('update:text', newValue);
});

watch(
  () => props.text,
  (newValue) => {
    inputText.value = newValue;
  }
);

</script>

<template>
  <div class="text-input--container">
    <input v-model="inputText" :placeholder="placeholder">
  </div>
</template>

<style scoped>

.text-input--container{
    display: flex;
    width: 100%;
}

.text-input--container > input{
    all: unset;
    background-color: black;
    border: 1px solid #2e2e2e;
    display: flex;
    height: 25px;
    border-radius: 7px;
    padding: 20px;
    box-sizing: border-box;
    font-size: 14px;
    width: 100%;
}

</style>

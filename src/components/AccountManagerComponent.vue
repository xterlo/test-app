<script lang="ts" setup>
import { ref } from "vue";
import CustomInputComponent from "./inputs/CustomInputComponent.vue";

const test = ref("");
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Метки</th>
        <th>Тип записи</th>
        <th>Логин</th>
        <th>Пароль</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><CustomInputComponent :text="test" /></td>
        <td><CustomInputComponent :text="test" /></td>
        <td><CustomInputComponent :text="test" /></td>
        <td><CustomInputComponent :text="test" /></td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="css" scoped>
.schedule-table--container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #0b0b0d;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 15px;
}

span {
  text-align: start;
  
  box-sizing: border-box;
}

table {
  width: 100%;
}

tr {
  width: 100%;
  height: 1px;
}

th,
td {
  color: gray;
  font-size: 16px;
  padding: 10px 10px 10px 0px;
  box-sizing: border-box;
  text-align: start;
}
</style>

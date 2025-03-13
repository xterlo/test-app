<script setup lang="ts"></script>

<template>
  <div class="main-hint-container">
    <img src="../assets/questionMark.svg"/>
    <span>
      Для указания нескольких меток для одной пары логин/пароль используйте
      разделитель ;
    </span>
  </div>
</template>

<style scoped>

.main-hint-container {
    display: flex;
    background-color: rgb(192, 192, 192);
    border-radius: 7px;
    padding: 2px 10px;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    justify-content: start;
    margin: 20px 0px;
}

.main-hint-container > img {
    width: 32px;
    margin-right: 10px;
}

.main-hint-container > span {
    color: rgb(78, 78, 78);
    font-weight: 700;
}

</style>

<script setup lang="ts"></script>

<template>
  <div class="main-title-container">
    <span> Учетные записи </span>
    <div class="add-container">
        <span>+</span>
    </div>
  </div>
</template>

<style scoped>
.main-title-container {
  display: flex;
  border-radius: 7px;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  justify-content: start;
  margin: 10px 0px;
}

.main-title-container > span {
  color: white;
  font-size: 32px;
  font-weight: 700;
  margin-right: 10px;
}

.add-container{
    cursor: pointer;
    user-select: none;
    display: flex;
    color: white;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    height: 64px;
    width: 64px;
    border: 1px solid gray;
    font-size: 30px;
    box-sizing: border-box;
    
}
</style>

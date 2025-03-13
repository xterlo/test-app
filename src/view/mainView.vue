<script setup lang="ts">
import AccountManagerComponent from "../components/AccountManagerComponent.vue";
import HintComponent from "../components/HintComponent.vue";
import TitleComponent from "../components/TitleComponent.vue";
</script>

<template>
    <div class="main--content">
        <TitleComponent/>
        <HintComponent />
        <AccountManagerComponent />
    </div>
</template>

<style scoped>
.main--content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>

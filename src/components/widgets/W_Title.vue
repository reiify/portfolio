<template>
    <div class="w-title">
        <h3>{{ title }}</h3>
    </div>
</template>

<script setup>
defineProps({
    title: String
})
</script>

<style lang="scss">
.w-title {
    display: flex;
    padding: 0px 20px;
    align-items: center;

    & h3 {
        font-size: 32px;
        font-weight: 700;
        line-height: 120%;
    }
}
</style>
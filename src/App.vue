<template>
  <div class="wrapper">
    <Left />
    <Right />
  </div>
</template>

<script setup>
import Left from '@/components/Left.vue'
import Right from '@/components/Right.vue'
</script>

<style>
.wrapper {
  margin: 0;
  padding: 60px;

  display: flex;
  justify-content: space-between;

  max-width: 1440px;
  width: 100%;
}
</style>
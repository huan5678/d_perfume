<template>
  <div class="bg-secondary">
    <nav class="container">
      <ul class="flex gap-7">
        <li v-for="list in navList" :key="list.name" class="py-[14px]">
          <a class="text-white text-lg py-[14px]" href="#">{{ list.name }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { ref } from "vue";
const navList = ref([
  {
    name: "CHANEL",
  },
  {
    name: "Jo Malone",
  },
  {
    name: "Curology",
  },
  {
    name: "Dior",
  },
  {
    name: "Chloe",
  },
  {
    name: "ZARA",
  },
]);
</script>

<style></style>

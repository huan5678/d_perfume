<script setup>
import Subscribe from "../components/Subscribe.vue";
import Hero from "../components/Hero.vue";
import Article from "../components/Article.vue";
import Recommend from "../components/Recommend.vue";
import HomeProduct from "../components/homeProduct.vue";
</script>
<template>
  <Hero />
  <Article class="py-10 md:py-[60px]" />
  <HomeProduct />
  <Recommend class="py-10 md:py-[60px]" />
  <Subscribe />
</template>
<style scoped></style>

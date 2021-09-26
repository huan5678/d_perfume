<script setup>
import { ref } from "vue";
const hero = ref({
  title: "Perfume your day",
  content:
    "A perfume is like a piece of clothing, a message, a way of presenting oneself a costume that according to the person who wears it.",
});
</script>

<template>
  <section class="hero bg-cover h-[480px] md:h-[870px]">
    <div class="container mx-auto h-full">
      <div class="flex flex-wrap justify-end items-center h-full">
        <div class="text-white md:w-5/12">
          <h1 class="text-4xl font-bold">
            {{ hero.title }}
          </h1>
          <p class="text-xl mb-4 md:max-w-[445px]">
            {{ hero.content }}
          </p>
          <a
            href="javascript:;"
            class="
              block
              md:w-10/12
              text-2xl text-center
              rounded-full
              border-2
              py-[13px]
              max-w-[350px]
            "
            >Shop now</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background-image: url("~@/images/index1.jpg");
}
</style>

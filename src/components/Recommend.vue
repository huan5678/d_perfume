<script setup>
import { ref } from "vue";

const recommend = ref({
  img: "../../public/images/index9.jpg",
  title: "Bottle-Recycling",
  subTitle: "Recycle your used empty bottles and be rewarded!",
  content:
    "For the past 10 years, we have collected over 800,000 bottles through Empty Bottle Recycling Campaign and planted more than 860 pine trees for a better environment.For the past 10 years, we have collected over 800,000 bottles through Empty Bottle Recycling Campaign and planted more than 860 pine trees for a better environment.",
});
</script>
<template>
  <section class="container mx-auto">
    <div
      class="
        flex flex-col
        md:flex-row
        gap-[30px]
        md:justify-between
        items-center
      "
    >
      <img
        class="max-h-[520px] h-[520px] md:w-8/12 object-cover mb-2 md:mb-0"
        :src="recommend.img"
        alt="recommend.title"
      />
      <div class="flex flex-col justify-center">
        <h2 class="text-3xl font-bold">{{ recommend.title }}</h2>
        <h3 class="mb-2 md:mb-4 font-light">{{ recommend.subTitle }}</h3>
        <p class="font-light mb-2 md:mb-4">
          {{ recommend.content }}
        </p>
        <a href="javascript:;" class="text-primary font-semibold">查看更多</a>
      </div>
    </div>
  </section>
</template>

<style scoped></style>

<script setup>
import { ref } from "vue";
const product = ref([
  {
    img: "../../public/images/index6.jpg",
    title: "Poppy & Barley",
    subTitle: "Jo Malone",
    price: "NT$1,380",
    oriPrice: "NT$1,580",
  },
  {
    img: "../../public/images/index7.jpg",
    title: "Body Wash",
    subTitle: "Curology",
    price: "NT$1,580",
  },
  {
    img: "../../public/images/index8.jpg",
    title: "Apple Cider Vinegar Capsule",
    subTitle: "Tonik",
    price: "NT$1,580",
  },
]);
</script>

<template>
  <section class="bg-light py-10">
    <div class="container">
      <ul class="flex flex-col md:flex-row gap-[30px]">
        <li v-for="(item, idx) in product" :key="item.title">
          <div :class="`overlay-${idx}`">
            <img
              :src="item.img"
              :alt="item.title"
              class="mb-2 w-full object-cover max-h-[350px] md:max-h-[540px]"
            />
          </div>
          <h2 class="text-xl font-semibold">{{ item.title }}</h2>
          <p>
            <span class="block mb-4">{{ item.subTitle }}</span>
            <span class="mr-2">{{ item.price }}</span
            ><span class="text-gray line-through">{{ item.oriPrice }}</span>
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.overlay-2 {
  position: relative;
}
.overlay-2::before {
  color: white;
  display: grid;
  place-content: center;
  font-size: 24px;
  content: "Sold out";
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 30%);
}
</style>

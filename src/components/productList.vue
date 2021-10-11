<template>
  <section class="container pt-[2.625rem] pb-10 md:pt-20 md:pb-[3.75rem]">
    <ul
      class="
        flex flex-wrap
        gap-[0.9375rem]
        md:gap-[1.875rem]
        mb-[2.875rem]
        md:mb-[4.875rem]
      "
    >
      <li
        v-for="(item, idx) in productionList"
        :key="item.id"
        class="md:w-4/12 lg:w-auto"
      >
        <img
          class="
            object-cover
            w-[10.3125rem]
            h-[10.3125rem]
            md:h-[15.9375rem] md:w-[15.9375rem]
          "
          :src="`${item.imgUrl}/products${idx + 1}.jpg`"
          alt=""
        />

        <div>
          <h2 class="text-lg md:text-xl font-semibold">{{ item.title }}</h2>
          <h3 class="">{{ item.merchant }}</h3>
          <span>NT${{ item.price }}</span
          ><span v-if="item.oriPrice" class="ml-2 text-gray line-through"
            >NT${{ item.oriPrice }}</span
          >
        </div>
      </li>
    </ul>
    <nav class="flex justify-center gap-5 text-lg">
      <a class="text-primary underline" href="#">1</a>
      <a href="#">2</a>
      <a href="#">3</a>
    </nav>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";
const productionList = ref([
  {
    id: uuidv4(),
    imgUrl: "../../public/images",
    title: "Poppy & Barley",
    merchant: "Jo Malone",
    price: 1380,
    oriPrice: 1580,
  },
  {
    id: uuidv4(),
    imgUrl: "../../public/images",
    title: "Poppy & Barley",
    merchant: "Jo Malone",
    price: 1380,
    oriPrice: 1580,
  },
  {
    id: uuidv4(),
    imgUrl: "../../public/images",
    title: "Poppy & Barley",
    merchant: "Jo Malone",
    price: 1380,
  },
  {
    id: uuidv4(),
    imgUrl: "../../public/images",
    title: "Poppy & Barley",
    merchant: "Jo Malone",
    price: 1380,
  },
  {
    id: uuidv4(),
    imgUrl: "../../public/images",
    title: "Poppy & Barley",
    merchant: "Jo Malone",
    price: 1380,
    oriPrice: 1580,
  },
  {
    id: uuidv4(),
    imgUrl: "../../public/images",
    title: "Poppy & Barley",
    merchant: "Jo Malone",
    price: 1380,
    oriPrice: 1580,
  },
  {
    id: uuidv4(),
    imgUrl: "../../public/images",
    title: "Poppy & Barley",
    merchant: "Jo Malone",
    price: 1380,
  },
  {
    id: uuidv4(),
    imgUrl: "../../public/images",
    title: "Poppy & Barley",
    merchant: "Jo Malone",
    price: 1380,
  },
  {
    id: uuidv4(),
    imgUrl: "../../public/images",
    title: "Poppy & Barley",
    merchant: "Jo Malone",
    price: 1380,
    oriPrice: 1580,
  },
  {
    id: uuidv4(),
    imgUrl: "../../public/images",
    title: "Poppy & Barley",
    merchant: "Jo Malone",
    price: 1380,
    oriPrice: 1580,
  },
  {
    id: uuidv4(),
    imgUrl: "../../public/images",
    title: "Poppy & Barley",
    merchant: "Jo Malone",
    price: 1380,
  },
  {
    id: uuidv4(),
    imgUrl: "../../public/images",
    title: "Poppy & Barley",
    merchant: "Jo Malone",
    price: 1380,
  },
]);
</script>

<style scoped></style>

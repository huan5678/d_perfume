<script setup>
import { ref } from "vue";

const article = ref([
  {
    title: "Gabrielle CHANEL",
    img: "../../public/images/index2.jpg",
    content:
      "全新嗅覺體驗，花香四溢、明亮馥郁。結合茉莉、依蘭依蘭、橙花和最迷人的格拉斯晚香玉之花香，呈現出夢幻花香氣息。 極具女性特質的香奈兒嘉柏麗香水，專為光芒四射的她而生。",
  },
  {
    title: "Five O’clock Au Gingembre",
    img: "../../public/images/index3.png",
    content:
      "生薑與溫醇的肉桂香、紅糖的香甜摻和成一氣，溫暖微辛的氣息反倒形成一股輕煙氤氳開來，還帶點微微煙醺感漫溢在整個鼻息之間，細聞之下,又還有溫溫淡淡的木香，溫和而暖心。",
  },
  {
    title: "CHANEL N°5",
    img: "../../public/images/index4.jpg",
    content:
      "N°5，女性魅力的極致精髓。散發柔美澄透的乙醛花束香氣。經典傳奇香氛，蘊藏於極簡設計的獨特瓶身。",
  },
]);
const training = {
  cont: [
    {
      title: "Levels of Preventive Maintenance Compliance",
      content:
        "The core idea of preventative maintenance is the performance of proactive actions against unscheduled downtime in order to identify potential defects before they evolve into something more severe.",
    },
    {
      title: "Percentage of Planned Maintenance",
      content:
        "The planned maintenance percentage is the total planned maintenance time in your CMMS software over a date range over the total number of hours of a service performed by the technicians.",
    },
    {
      title: "Critical percentage of planned maintenance",
      content:
        "Calculating the critical percentage of planned maintenance will help you prioritize the most important operations that should be performed immediately.",
    },
  ],
  img: "../../public/images/index5.jpg",
};
</script>

<template>
  <section class="container mx-auto">
    <ul>
      <li
        class="
          flex flex-col
          md:flex-row
          md:flex-wrap
          md:justify-center
          md:items-center
          md:even:flex-row-reverse
          mb-8
          md:mb-0
        "
        v-for="item in article"
        :key="item.title"
      >
        <div
          class="
            md:justify-center
            md:flex
            md:flex-col
            md:items-center
            md:max-h-[555px]
            max-w-[555px]
            md:w-1/2
            order-1
            md:order-0
          "
        >
          <div class="md:w-[350px]">
            <h2 class="font-bold text-3xl">{{ item.title }}</h2>
            <p class="mb-2 md:mb-4 text-lg">
              {{ item.content }}
            </p>
            <a href="" class="text-primary font-semibold">查看更多</a>
          </div>
        </div>
        <img
          :src="item.img"
          :alt="item.title"
          class="
            object-cover
            max-h-[350px]
            md:max-h-[555px] md:h-[555px]
            max-w-[555px]
            w-full
            md:w-1/2
            order-0
            md:order-1
          "
        />
      </li>
      <li class="flex flex-col
          md:flex-row
          md:justify-center
          md:items-center
          mb-8
          md:mb-0">
        <img
          :src="training.img"
          alt=""
          class="h-[680px] md:h-[1080px] object-cover max-w-[555px]"
        />
        <div class="flex justify-center items-center md:w-1/2 md:max-w-[555px]">
          <ul class="md:max-w-[350px]">
            <li
              v-for="(item, idx) in training.cont"
              :key="item.title"
              class="mb-5 md:mb-[52px]"
            >
              <h3 class="text-xl font-semibold">
                {{ idx + 1 }}.<br />
                {{ item.title }}
              </h3>
              <p class="font-light">
                {{ item.content }}
              </p>
            </li>
            <li>
              <a
                href="javascript:;"
                class="
                  block
                  py-[18px]
                  text-lg text-center
                  font-medium
                  rounded-full
                  border-2
                  hover:bg-light
                "
                >Plan a free online training</a
              >
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </section>
</template>

<style scoped>

</style>

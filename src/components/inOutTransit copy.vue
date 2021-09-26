<script setup>
import { ref, reactive } from "vue";
import axios from "axios";

const dataList = reactive([]);

defineProps({
  msg: String,
});

axios({
  method: "get",
  baseURL:
    "https://data.coa.gov.tw/Service/OpenData/DataFileService.aspx?UnitId=H54",
})
  .then(function (res) {
    dataList.data = res.data;
    console.log(dataList.data);
  })
  .catch(function (err) {
    console.log(err);
  });
</script>

<template>
  <h2 class="mb-4 text-3xl">{{ msg }}</h2>
  <p class="text-primary">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis accusantium
    nam sint cum iure temporibus?
  </p>
  <p class="text-from-label">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis accusantium
    nam sint cum iure temporibus?
  </p>
  <p class="border border-primary text-middle-gray">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis accusantium
    nam sint cum iure temporibus?
  </p>
  <div class="flex text-gray">
    <span class="material-icons"> account_circle </span>
    login
  </div>
</template>

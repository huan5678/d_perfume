<script setup>
import { ref, reactive } from 'vue'
import axios from 'axios'

const dataList = reactive([])

defineProps({
  msg: String,
})

axios({
  method: 'get',
  baseURL:
    'https://data.coa.gov.tw/Service/OpenData/DataFileService.aspx?UnitId=H54',
})
  .then(function (res) {
    dataList = res.data
    console.log(dataList)
  })
  .catch(function (err) {
    console.log(err)
  })
</script>

<template>
  <h2 class="mb-4 text-3xl">{{ msg }}</h2>
  <ul class="list-none">
    <li v-for="item in dataList" :key="item.識別標章編號">
      {{ item.特店對外名稱 }}
    </li>
  </ul>
</template>

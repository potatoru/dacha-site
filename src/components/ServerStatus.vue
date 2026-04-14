<template>
  <div v-if="status > 0" class="status-dot"></div>
  <span v-if="status === -1">Ищем сервер...</span>
  <span v-if="status === 1">Сервер онлайн</span>
  <span v-if="status === 0">Сервер оффлайн</span>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'


const status = ref(-1)

function update () {
  fetch('https://api.mcsrvstat.us/3/playdacha.ru').then(r => r.json()).then(() => {
    status.value = 1
  }).catch(() => {
    status.value = 0
  }).finally(() => {
    setTimeout(update, 3 * 60 * 1000)
  })
}

onMounted(() => {
  update()
})
</script>
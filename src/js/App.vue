<template>
  <div class="container h-100 d-flex align-items-center justify-content-center">
    <div class="col-md-6 col-12 mx-auto">
      <div class="rounded-2 bg-light shadow-sm overflow-hidden">
        <div class="sky" />

        <div class="p-4">
          <p class="d-flex align-items-center">
            <span style="width: 2.25rem" class="fs-5">&#127969;</span>Добро пожаловать на Дачу
          </p>
          <div style="margin-left: 2.25rem">
            <p>Дача — это ванильный сервер Minecraft для общения и игры с друзьями без лишних плагинов и дополнительных режимов.</p>
            <p>Из возможностей на сервере есть только телепорт домой и приват территории от гриферов.</p>
          </div>
          <p class="d-flex align-items-center">
            <span style="width: 2.25rem" class="fs-5">&#128268;</span>Как подключиться
          </p>
          <div class="mb-2" style="margin-left: 2.25rem">
            <table class="table table-borderless table-sm mb-0">
              <tbody>
                <tr>
                  <td class="bg-light pt-0 ps-0">IP</td>
                  <td class="bg-light pt-0 ps-0">
                    <div class="d-flex align-items-center">
                      <span class="text-decoration-underline">playdacha.ru</span>
                      <span class="ms-2 status" :class="{online: status == 1}" v-if="status > -1" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="bg-light ps-0">Версия</td>
                  <td class="bg-light ps-0">1.21.4</td>
                </tr>
                <tr>
                  <td class="bg-light ps-0">Telegram</td>
                  <td class="bg-light ps-0"><a href="https://t.me/playdacha" target="_blank">t.me/playdacha</a></td>
                </tr>
                <tr>
                  <td class="bg-light ps-0 pb-0">ВК</td>
                  <td class="bg-light ps-0 pb-0"><a href="https://vk.com/playdacha" target="_blank">vk.com/playdacha</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="ground" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { onMounted, ref } from 'vue'

const status = ref(-1)

function update () {
  fetch('https://api.minetools.eu/ping/playdacha.ru/25565').then(r => r.json()).then(() => {
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

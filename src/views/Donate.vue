<template>
  <div class="text-center mb-6">
    <h1 class="text-4xl font-bold text-900 mb-3">Поддержка сервера 🦊</h1>
    <p class="text-xl text-700 mx-auto line-height-3">
      Наш сервер существует и развивается благодаря вашей поддержке.<br>
      Мы не продаём «креатив» и «админки», только приятные косметические бонусы и удобства.
    </p>
  </div>

  <template v-if="loading">
    <h2 class="text-2xl font-bold text-800 mb-4 text-center">Загружаемся...</h2>
    <ProgressSpinner
        style="width: 50px; height: 50px" class="mx-auto flex" stroke-width="8" fill="transparent"
                     animation-duration=".75s"/>
  </template>
  <template v-else>
    <template v-for="category in stock" :key="category.id">
      <h2 class="text-2xl font-bold text-800 mb-4 text-center">{{ category.name }}</h2>
      <div class="grid formgrid justify-content-center mb-6">
        <!--Donate category view-->
        <template v-if="category.id === 96991">
          <div v-for="product in category.products" :key="product.id" class="col-12 md:col-5 mb-4">
            <div
                class="bg-white p-4 border-round-2xl border-1  h-full flex flex-column hover:border-primary"
                 :class="{
                    'shadow-1': !product.is_glow, 'shadow-3': product.is_glow,
                    'surface-border': !product.is_glow, 'border-primary': product.is_glow
                  }"
            >
              <div class="text-center mb-3">
                <div class="text-xl font-bold text-800 mb-3" :class="{ 'text-primary': product.is_glow}">
                  {{ product.name }}
                </div>
                <div class="flex align-items-baseline justify-content-center gap-1">
                  <span class="text-4xl font-bold text-900">{{ product.price }} ₽</span>
                  <span class="text-500 font-medium">/ мес</span>
                </div>
              </div>

              <ul
                  class="list-none p-0 m-0 flex-grow-1 flex flex-column gap-2 mb-5 text-700"
                  v-html="product.description_html" />

              <Button
                  label="Купить" class="w-full border-round-xl" :outlined="product.id !== 1040685" size="large"
                  @click="shopModal.show(product)"
              />
            </div>
          </div>
        </template>
        <template v-else>
          <div v-for="product in category.products" :key="product.id" class="col-12 sm:col-6 md:col-4 mb-3">
            <div
                class="bg-white p-4 border-round-xl shadow-1 border-1 surface-border hover:border-primary cursor-pointer
                flex align-items-center justify-content-between" @click="shopModal.show(product)">
              <div class="flex align-items-center gap-3">
                <i class="pi text-600 text-xl" :class="product.icon" />
                <div>
                  <div class="font-bold text-800">{{ product.name }}</div>
                  <div class="text-sm text-500">{{ product.description }}</div>
                </div>
              </div>
              <div class="font-bold text-primary text-lg">{{ product.price }} ₽</div>
            </div>
          </div>
        </template>
      </div>
    </template>

    <p class="text-700 text-lg mx-auto mb-4 pt-2 text-center">
      Если у вас возникли вопросы по приобретению доната, создайте тикет в
      <a class="text-primary" href="https://playdacha.ru/discord" target="_blank">нашем Discord</a>.
    </p>
  </template>

  <PurchaseModal ref="shopModal" />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { TCategory } from '../types.ts'
import { shop } from '../api/api.ts'
import PurchaseModal from '@app/components/PurchaseModal.vue'

const loading = ref(true)
const stock = ref<TCategory[]>([])
const shopModal = ref()

onMounted(() => {
  shop.get().then(result => {
    stock.value = result.data
    loading.value = false
  })
})
</script>
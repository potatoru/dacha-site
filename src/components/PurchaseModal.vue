<template>
  <Dialog
      v-model:visible="showModal"
      modal
      :header="'Оформление: ' + product?.name"
      :style="{ width: '450px' }"
      :breakpoints="{ '640px': '95vw' }"
  >
    <Message v-if="error" severity="error" class="mb-4 mt-1">
      {{ error }}
    </Message>

    <div class="flex flex-column gap-4 mt-2">
      <div class="flex flex-column gap-2">
        <label for="nickname" class="font-bold text-800 text-sm ml-1">Игровой ник</label>
        <InputGroup>
          <InputGroupAddon class="bg-surface-50">
            <i class="pi pi-user text-500"></i>
          </InputGroupAddon>
          <InputText
              id="nickname"
              v-model="player"
              placeholder="Ваш ник в игре"
          />
        </InputGroup>
      </div>

      <div class="flex flex-column gap-2">
        <label for="email" class="font-bold text-800 text-sm ml-1">Электронная почта</label>
        <InputGroup>
          <InputGroupAddon class="bg-surface-50">
            <i class="pi pi-envelope text-500"></i>
          </InputGroupAddon>
          <InputText
              id="email"
              v-model="email"
              placeholder="Для отправки чека"
          />
        </InputGroup>
      </div>

      <div class="flex flex-column gap-2">
        <label for="coupon" class="font-bold text-800 text-sm ml-1">Купон (если есть)</label>
        <InputGroup>
          <InputGroupAddon class="bg-surface-50">
            <i class="pi pi-ticket text-500"></i>
          </InputGroupAddon>
          <InputText
              id="coupon"
              v-model="coupon"
              placeholder="Промокод"
          />
        </InputGroup>
      </div>
    </div>

    <template #footer>
      <div class="flex flex-column gap-3 w-full pt-3 border-top-1 surface-border">
        <div class="flex justify-content-between align-items-center px-1">
          <span class="text-600 font-medium">Стоимость:</span>
          <span class="text-2xl font-bold text-900">{{ product?.price }} ₽</span>
        </div>

        <Button
            label="Перейти к оплате"
            icon="pi pi-credit-card"
            class="w-full border-round-xl py-3 font-bold"
            :loading="isSubmitting"
            @click="submitPurchase"
        />

        <p class="text-center text-xs text-500 m-0 px-2 line-height-3">
          Нажимая кнопку, вы соглашаетесь с условиями оферты и правилами сервера.
        </p>
      </div>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { TProduct } from '@app/types.ts'
import { shop } from '@app/api/api.ts'

const showModal = ref(false)
const player = ref('')
const coupon = ref('')
const email = ref('')
const isSubmitting = ref(false)
const error = ref('')
const product = ref<TProduct>()

function show (showItem: TProduct): void {
  product.value = showItem
  showModal.value = true
}

function submitPurchase () {
  isSubmitting.value = true

  shop.order({
    player: player.value,
    coupon: coupon.value,
    email: email.value,
    items: [{id: product.value!.id, a: 1}],
  }).then(res => {
    window.location.href = res.data.link
  }).catch(err => {
    error.value = err.response.data.error
  }).finally(() =>{
    isSubmitting.value = false
  })
}

defineExpose({
  show,
})
</script>

<style scoped>

</style>
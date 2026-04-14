<template>
  <div class="mb-4">
    <h1 class="text-2xl font-bold text-700 m-0 flex align-items-center gap-2">
      <span>Бан-лист</span>
      <span class="text-2xl hidden md:inline">🚫</span>
    </h1>
  </div>

  <p class="text-800 mb-4 line-height-3">
    Если вы считаете, что наказание выдано по ошибке, подайте заявку на разбан в
    <a class="text-primary" href="https://playdacha.ru/discord" target="_blank">нашем Discord</a>. В случае, если вы
    согласны с наказанием, можете <a class="text-primary" href="/donate">купить разбан</a>.
  </p>

  <div class="bg-white border-round-2xl shadow-1 border-1 surface-border overflow-hidden">
    <DataTable
        :value="banlist"
        :rows="25"
        :total-records="total"
        paginator
        lazy
        striped-rows
        :loading="loading"
        @page="onPageChange"
    >
      <Column field="victim" header="Нарушитель">
        <template #body="{ data }">
          <span class="font-bold text-900">{{ data.victim }}</span>
        </template>
      </Column>

      <Column field="reason" header="Причина" style="min-width: 250px">
        <template #body="{ data }">
          <span v-if="data.reason === '.' || data.reason === '/'" class="text-400 italic">
            Причина не указана
          </span>
          <span v-else class="line-height-3">
            {{ data.reason }}
          </span>
        </template>
      </Column>

      <Column field="operator" header="Выдал">
        <template #body="{ data }">
          <div class="flex align-items-center gap-2">
            <i class="pi pi-shield text-500 text-sm"></i>
            <span>{{ data.operator }}</span>
          </div>
        </template>
      </Column>

      <Column field="date" header="Дата" body-class="text-center" header-class="center-header">
        <template #body="{ data }">
          <span class="text-sm">{{ formatDate(data.date) }}</span>
        </template>
      </Column>

      <Column header="Окончание" align-frozen="right" body-class="text-center" header-class="center-header">
        <template #body="{ data }">
          <Tag
              v-if="data.date_to === 0"
              severity="danger"
              value="Навсегда"
              class="text-sm px-2 py-1 bg-red-100 text-red-700 border-none"
          />
          <Tag
              v-else
              severity="warning"
              :value="formatDate(data.date_to)"
              class="text-sm px-2 py-1 bg-orange-100 text-orange-700 border-none"
          />
        </template>
      </Column>

      <template #empty>
        <div v-if="!loading" class="text-center py-6 text-600">
          <i class="pi pi-check-circle text-4xl text-green-500 mb-3 block"></i>
          На сервере пока нет забаненных игроков (или список пуст).
        </div>
        <div v-else class="text-center">
          Загружаем...
        </div>
      </template>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { bans } from '@app/api/api.ts'
import type { DataTablePageEvent } from 'primevue/datatable'

const banlist = ref([])
const loading = ref(true)
const total = ref(0)

onMounted(() => {
 fetchBans(1)
})

function fetchBans(page: number) {
  loading.value = true

  bans.get(page).then(result => {
    banlist.value = result.data.data
    total.value = result.data.meta.total
  }).finally(() => {
    loading.value = false
  })
}

function onPageChange(event: DataTablePageEvent) {
  const targetPage = event.page + 1;
  fetchBans(targetPage);
}

const formatDate = (timestamp: number) => {
  if (!timestamp || timestamp === 0) return ''

  const date = new Date(timestamp * 1000)

  return new Intl.DateTimeFormat('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date).replace(',', '\n')
}
</script>

<style scoped>
:deep(.center-header .p-datatable-column-header-content) {
  justify-content: center !important;
}
</style>
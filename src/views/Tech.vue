<template>
  <div class="mb-4">
    <h1 class="text-2xl font-bold text-700 m-0 flex align-items-center gap-2">
      <span>Механики и технические детали</span>
      <span class="text-2xl hidden md:inline">⚙️</span>
    </h1>
  </div>

  <p class="text-700 mb-4 line-height-3">
    Ниже описаны все нестандартные механики на нашем сервере. Мы постарались не добавлять лишнего функционала, только небольшие удобства
    и социальные функции.
  </p>

  <div class="grid formgrid">
    <div class="hidden md:block md:col-3 p-0">
      <div class="sticky" style="top: 3rem;">
        <div class="bg-white p-3 border-round-xl shadow-2 border-1 surface-border">
          <template v-for="(menu, index) in items" :key="index">
            <h3 class="text-xs font-bold text-500 uppercase pt-2 mb-2 mt-0 ml-2">{{ menu.label }}</h3>
            <div class="flex flex-column mb-2">
              <a
                  v-for="item in menu.items" :key="item.id"
                  :href="`#${item.id}`" class="p-2 border-round-lg text-700 hover:surface-100 hover:text-900 no-underline font-medium flex align-items-center gap-3">
                <i class="text-400" :class="item.icon"></i> {{ item.label }}
              </a>
            </div>
          </template>
        </div>
      </div>
    </div>


    <div class="col-12 md:col md:ml-5 flex flex-column gap-5 p-0">
      <TechCard id="teleport" header="Телепорты" icon="pi pi-asterisk">
        <div class="p-3">
          <TeleportDocs />
        </div>
      </TechCard>

      <TechCard id="claims" header="Приваты" icon="pi pi-shield">
        <div class="p-3">
          <ClaimsDocs />
        </div>
      </TechCard>

      <TechCard id="clans" header="Кланы" icon="pi pi-users">
        <div class="p-3">
          <ClansDocs />
        </div>
      </TechCard>

      <TechCard id="headdb" header="Головы для декора" icon="pi pi-face-smile">
        <div class="p-3">
          <HeadDbDocs />
        </div>
      </TechCard>

      <TechCard id="frames" header="Невидимые рамки" icon="pi pi-sparkles">
        <div class="p-3">
          <FramesDocs />
        </div>
      </TechCard>

      <TechCard id="world" header="Мир и лимиты" icon="pi pi-globe">
        <div class="p-2">
          <WorldLimitDocs />
        </div>
      </TechCard>

      <TechCard id="core" header="Параметры ядра" icon="pi pi-wrench">
        <div class="p-2">
          <CoreDocs />
        </div>
      </TechCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TechCard from '@app/components/TechCard.vue'
import TeleportDocs from '@app/docs/teleport.md'
import ClaimsDocs from '@app/docs/claims.md'
import ClansDocs from '@app/docs/clans.md'
import HeadDbDocs from '@app/docs/headdb.md'
import FramesDocs from '@app/docs/frames.md'
import WorldLimitDocs from '@app/docs/worldlimits.md'
import CoreDocs from '@app/docs/core.md'

const items = ref([
  {
    label: 'Механики',
    items: [
      {
        icon: 'pi pi-asterisk',
        label: 'Телепорты',
        id: 'teleport'
      },
      {
        icon: 'pi pi-shield',
        label: 'Приваты',
        id: 'claims'
      },
      {
        icon: 'pi pi-users',
        label: 'Кланы',
        id: 'clans',
      },
      {
        icon: 'pi pi-face-smile',
        label: 'Головы для декора',
        id: 'headdb',
      },
      {
        icon: 'pi pi-sparkles',
        label: 'Невидимые рамки',
        id: 'frames',
      }
    ]
  },
  {
    label: 'Настройки',
    items: [
      {
        icon: 'pi pi-globe',
        label: 'Мир и лимиты',
        id: 'world'
      },
      {
        icon: 'pi pi-wrench',
        label: 'Параметры ядра',
        id: 'core',
      },
    ]
  }
  ]
)
</script>

<style scoped>
  :deep(thead:has(th:empty)) {
    display: none;
  }
  :deep(tbody tr:last-child td) {
    border-bottom: none !important;
  }
</style>
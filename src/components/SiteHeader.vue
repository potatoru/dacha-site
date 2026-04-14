<template>
  <Menubar :model="items" class="border-round-3xl">
    <template #start>
      <router-link
          to="/"
          class="flex align-items-center cursor-pointer no-underline"
      >
        <div class="flex align-items-center gap-2 mr-2 cursor-pointer">
          <span class="text-xl ml-1">🏠</span>
          <span class="text-xl font-bold text-900 logo-text">Дача Minecraft</span>
        </div>
      </router-link>
    </template>

    <template #item="{ item, props, hasSubmenu }">
      <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
        <a :href="href" v-bind="props.action" @click="navigate">
          <span :class="item.icon" />
          <span class="router-link_label">{{ item.label }}</span>
        </a>
      </router-link>
      <a v-else :href="item.url" :target="item.target" v-bind="props.action">
        <span :class="item.icon" />
        <span class="router-link_label">{{ item.label }}</span>
        <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down text-sm" />
      </a>
    </template>

    <template #end>
      <div class="flex align-items-center gap-2">
        <Button
            as="a"
            href="https://playdacha.ru/discord"
            target="_blank"
            icon="pi pi-discord"
            rounded
            severity="secondary"
            class="no-underline custom-ds-btn"
            aria-label="Discord"
        />

        <Button
            as="a"
            href="https://t.me/playdacha"
            target="_blank"
            icon="pi pi-telegram"
            rounded
            severity="secondary"
            class="no-underline custom-tg-btn"
            aria-label="Telegram"
        />
      </div>
    </template>
  </Menubar>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const items = ref([
  {
    label: 'Главная',
    icon: 'pi pi-home',
    route: '/',
  },
  {
    label: 'Справочник',
    icon: 'pi pi-book',
    items: [
      {
        label: 'Правила',
        icon: 'pi pi-hammer',
        route: '/rules'
      },
      {
        label: 'Механики',
        icon: 'pi pi-cog',
        route: '/tech'
      }
    ]
  },
  {
    label: 'Донат',
    icon: 'pi pi-shopping-bag',
    route: '/donate'
  },
  {
    label: 'Бан-лист',
    icon: 'pi pi-hammer',
    route: '/bans'
  }
]);
</script>

<style scoped>
.router-link_label {
  height:21px !important;
}
</style>
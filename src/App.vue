<template>
  <div class="flex flex-column min-h-screen ">
    <header class="text-white px-2 py-2">
      <div class="site-container mx-auto">
        <SiteHeader />
      </div>
    </header>

    <main class="flex-grow-1 p-3 site-container mx-auto w-full mb-6">
      <router-view />
    </main>

    <footer class="text-color-secondary p-2 text-center">
      <p class="m-0">© 2023 - 2026 Дача Minecraft</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import SiteHeader from '@app/components/SiteHeader.vue'
</script>


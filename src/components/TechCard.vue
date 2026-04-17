<template>
  <section :id="id" class="scroll-mt-8">
    <div class="bg-white border-round-xl shadow-2 border-1 surface-border overflow-hidden">
      <div class="surface-50 px-4 py-3 border-bottom-1 surface-border flex align-items-center gap-3">
        <i class="text-2xl text-primary" :class="icon"></i>
        <h2 class="text-lg font-semibold text-900 m-0">{{ header }}</h2>
      </div>
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  id?: string,
  header?: string,
  icon?: string,
}>()
</script>


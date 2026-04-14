<template>
  <div class="mb-4">
    <h1 class="text-2xl font-bold text-700 m-0 flex align-items-center gap-2">
      <span>Правила сервера</span>
      <span class="text-2xl hidden md:inline">📜</span>
    </h1>
  </div>
  <div class="surface-card pt-2 shadow-2 border-round-xl">
    <Accordion :value="'0'">
      <AccordionPanel v-for="(section, index) in rulesData" :key="index" :value="String(index)">
        <AccordionHeader>
          <div class="flex align-items-center gap-3">
            <i :class="[section.icon, 'text-primary text-xl']"></i>
            <span class="font-semibold text-lg">{{ section.title }}</span>
          </div>
        </AccordionHeader>
        <AccordionContent>
          <ul class="list-none p-0 m-0">
            <li v-for="(item, i) in section.items" :key="i" class="flex align-items-start gap-3 mb-2 line-height-3 text-700">
              <i class="pi pi-check-circle text-primary mt-1"></i>
              <span>{{ item }}</span>
            </li>
          </ul>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  </div>

</template>

<script setup lang="ts">
import rulesData from '../data/rules.json';
</script>

<style scoped>

</style>
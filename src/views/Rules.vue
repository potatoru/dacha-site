<template>
  <div class="mb-4">
    <h1 class="text-2xl font-bold text-700 m-0 flex align-items-center gap-2">
      <span>Правила сервера</span>
      <span class="text-2xl hidden md:inline">📜</span>
    </h1>
  </div>
  <div class="bg-white pt-2 shadow-2 border-round-xl mb-2">
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
              <span v-html="item" />
            </li>
          </ul>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  </div>

  <TechCard id="grief" header="Разъяснение типовых ситуаций по грифингу" icon="pi pi-exclamation-circle" class="mt-6">
    <div class="p-4">
      <Message severity="secondary" icon="pi pi-question-circle">
        Меня загрифели или украли ресурсы из сундука, но при этом у меня <strong>не было</strong> привата.
      </Message>
      <p class="line-height-3 mb-5 text-700">Грифинг и воровство ресурсов запрещены правилами. Вор будет наказан, но так как вы проигнорировали <a href="/tech#claims" target="_blank">механику защиты</a> на сервере,
        вещи возвращены не будут.</p>

      <Message severity="secondary" icon="pi pi-question-circle">
        <strong>У меня был</strong> приват, но меня обокрал мой тиммейт/друг, который <strong>был добавлен</strong> в мой приват.
      </Message>
      <p class="line-height-3 mb-5 text-700">Добавляя кого-то в приват, вы сами даёте ему полный доступ к вашим постройкам и сундукам. В данном случае это игровой момент и жизненный урок. Возврата вещей и наказания игрока не будет.</p>

      <Message severity="secondary" icon="pi pi-question-circle">
        <strong>У меня был</strong> приват, но меня обокрали в обход привата через баг.
      </Message>
      <p class="line-height-3 mb-0 text-700">Возврат ресурсов и бан нарушителя за багоюз.</p>
    </div>
  </TechCard>


</template>

<script setup lang="ts">
import rulesData from '../data/rules.json';
import TechCard from '@app/components/TechCard.vue'
</script>

<style scoped>

</style>
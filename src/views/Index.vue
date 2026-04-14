<template>
  <div class="flex flex-column align-items-center text-center pt-6">

    <h1 class="text-7xl font-bold m-0 mb-3 text-900 logo-text">
      Дача Minecraft
    </h1>

    <p class="text-2xl text-700 m-0 mb-3">
      SMP сервер без суеты для комфортного выживания
    </p>

    <p class="text-700 line-height-3 max-w-3xl m-0 mb-5 text-lg">
      Баланс удобства, функционала и выживания в стиле классического Minecraft.
    </p>

    <div class="flex flex-column align-items-center mb-5">
      <div class="flex align-items-center gap-3 mb-2">
        <div class="border-top-1 surface-border w-4rem"></div>
        <div class="flex align-items-center gap-2 text-700 text-sm">
          <ServerStatus />
        </div>
        <div class="border-top-1 surface-border w-4rem"></div>
      </div>
      <span class="text-700 text-sm">1.21.11 Java Edition</span>
    </div>

    <div class="flex flex-wrap justify-content-center">
      <Button label="Начать играть" size="large" class="px-5 shadow-1" rounded @click="visible = true" />
    </div>
  </div>

  <div class="pt-6 pb-8">
    <div class="text-center mb-5">
      <h2 class="text-4xl font-bold text-800 mb-2 mt-0">Особенности сервера</h2>
      <p class="text-700 text-lg m-0">
        Набор плагинов для удобной и комфортной игры.
      </p>
    </div>

    <div class="grid formgrid">
      <div
          v-for="(feature, index) in features"
          :key="index"
          class="col-12 md:col-6 lg:col-4 mb-4"
      >
        <div class="bg-white p-4 border-round-2xl shadow-1 border-1 surface-border h-full hover:shadow-2">
          <div class="flex align-items-center gap-3 mb-3">
            <div class="bg-primary-50 w-3rem h-3rem border-round-lg flex align-items-center justify-content-center flex-shrink-0">
              <i :class="[feature.icon, 'text-primary text-xl']"></i>
            </div>
            <h3 class="text-lg md:text-xl font-semibold text-800 m-0 line-height-2">{{ feature.title }}</h3>
          </div>

          <p class="text-700 line-height-3 m-0 text-sm">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>

    <p class="text-700 text-lg mx-auto m-0 text-center line-height-3">
      В общем-то это все особенности нашего сервера. Подробнее с серверными механиками вы можете ознакомиться
      <a class="text-primary" href="/tech">здесь</a>.<br>Если вам нравится, заходите, будем рады!
    </p>

  </div>

  <Dialog v-model:visible="visible" modal header="Подключение к серверу" :style="{ width: '26rem' }" dismissable-mask :draggable=false>
    <div class="flex flex-column gap-4 pt-3 pb-2">

      <div class="flex gap-3">
        <div class="flex-shrink-0 flex align-items-center justify-content-center bg-primary-50 text-primary border-round w-2rem h-2rem font-bold text-sm">
          1
        </div>
        <div>
          <div class="font-semibold text-900 mb-1">Запустите игру</div>
          <div class="text-700 text-sm line-height-3">
            Используйте лицензию или скачайте
            <a href="https://legacylauncher.ru/ru" target="_blank" class="text-primary no-underline hover:underline">
              Legacy Launcher</a>. Версия — <b>1.21.11</b>.
          </div>
        </div>
      </div>

      <div class="flex gap-3">
        <div class="flex-shrink-0 flex align-items-center justify-content-center bg-primary-50 text-primary border-round w-2rem h-2rem font-bold text-sm">
          2
        </div>
        <div>
          <div class="font-semibold text-900 mb-1">Добавьте сервер</div>
          <div class="text-700 text-sm line-height-3">
            В меню сетевой игры введите IP-адрес
            <Tag severity="secondary" value="playdacha.ru" class="font-normal" />
          </div>
        </div>
      </div>

      <div class="flex gap-3">
        <div class="flex-shrink-0 flex align-items-center justify-content-center bg-primary-50 text-primary border-round w-2rem h-2rem font-bold text-sm">
          3
        </div>
        <div>
          <div class="font-semibold text-900 mb-1">Пройдите регистрацию</div>
          <div class="text-700 text-sm line-height-3">
            При первом входе откройте чат (клавиша T) и введите команду
            <Tag severity="secondary" value="/reg пароль пароль" class="font-normal" />
          </div>
        </div>
      </div>

    </div>

    <template #footer>
      <div class="pt-2 surface-border flex justify-content-center w-full">
        <Button label="Всё понятно" icon="pi pi-check" class="w-full border-round-lg mx-auto" @click="visible = false" />
      </div>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ServerStatus from '@app/components/ServerStatus.vue'

const visible = ref(false)

const features = ref([
  {
    title: 'Телепорты',
    description: 'Есть возможность телепорта на спавн и домой.',
    icon: 'pi pi-map-marker'
  },
  {
    title: 'Приваты',
    description: 'Удобное создание границ, с помощью крафта блока привата.',
    icon: 'pi pi-shield'
  },
  {
    title: 'Кланы',
    description: 'Упрощённый функционал кланов (префиксы) для объединения игроков.',
    icon: 'pi pi-users'
  },
  {
    title: 'Войс-чат',
    description: 'Мы используеи плагин SimpleVoiceChat.',
    icon: 'pi pi-microphone'
  },
  {
    title: 'Скины',
    description: 'Можете установить любой скин на сервере.',
    icon: 'pi pi-user'
  },
  {
    title: 'Игроки',
    description: 'Доброжелательная атмосфера это основа нашего коммьюнити!',
    icon: 'pi pi-heart-fill'
  }
]);
</script>

<style scoped>

</style>
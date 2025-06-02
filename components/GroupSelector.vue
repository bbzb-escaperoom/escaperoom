<script setup lang="ts">
import {ref, computed} from 'vue'

const selectedGroup = ref<'a' | 'b' | 'c' | 'd' | null>(null);

onMounted(() => {
  if (window.localStorage) {
    const storedGroup = window.localStorage.getItem('selectedGroup');

    if (['a', 'b', 'c', 'd'].includes(storedGroup as string)) {
      selectedGroup.value = storedGroup as 'a' | 'b' | 'c' | 'd';
    } else {
      selectedGroup.value = null;
    }
  }
});

function selectGroup(group: 'a' | 'b' | 'c' | 'd' | null) {
  selectedGroup.value = group;
  if (window.localStorage) {
    window.localStorage.setItem('selectedGroup', group ?? '');
  }
}

const hasGroupSelected = computed(() => selectedGroup.value !== null);

</script>

<template>

  <div v-if="hasGroupSelected" class="text-center mb-4">
    <a href="#" class="text-gray-400 rounded" @click="selectGroup(null)">
      <p class="text-lg">Sie haben <span class="font-bold">Gruppe {{ selectedGroup.toUpperCase() }}</span> ausgewählt
      </p>
      <p class="text-xs">Tippen Sie hier, um eine andere Gruppe auszuwählen</p>
    </a>
  </div>

  <div class="grid grid-cols-2 gap-4" v-if="!hasGroupSelected">

    <div class="col-span-2">
      <p class="text-center text-gray-400">Tippen Sie auf eine Gruppe, um fortzufahren.</p>
    </div>

    <button class="aspect-square flex bg-red-800" @click="selectGroup('a')">
      <span class="text-center m-auto text-2xl font-bold">Gruppe A</span>
    </button>

    <button class="aspect-square flex bg-blue-800" @click="selectGroup('b')">
      <span class="text-center m-auto text-2xl font-bold">Gruppe B</span>
    </button>

    <button class="aspect-square flex bg-green-800" @click="selectGroup('c')">
      <span class="text-center m-auto text-2xl font-bold">Gruppe C</span>
    </button>

    <button class="aspect-square flex bg-amber-800" @click="selectGroup('d')">
      <span class="text-center m-auto text-2xl font-bold">Gruppe D</span>
    </button>
  </div>

  <slot name="group-a" v-else-if="selectedGroup === 'a'">
    <slot/>
  </slot>

  <slot name="group-b" v-else-if="selectedGroup === 'b'">
    <slot/>
  </slot>

  <slot name="group-c" v-else-if="selectedGroup === 'c'">
    <slot/>
  </slot>

  <slot name="group-d" v-else-if="selectedGroup === 'd'">
    <slot/>
  </slot>

</template>

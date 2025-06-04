<script setup lang="ts">

import {Confetti} from 'vue-confetti'

onMounted(() => {
  const c = new Confetti({
    particleCount: 100,
    spread: 110,
    origin: {y: 0.6},
    colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'],
  })

  c.start()

  setTimeout(c.stop, 5000)
})
</script>

<template>
  <div class="prose prose-lg prose-invert mt-40">
    <p class="text-center text-2xl">
      Geschafft!
    </p>
    <p>
      Sie haben alle Rätsel gelöst.<br>
      Gehen Sie nun zurück zur Aula und bilden Sie nun aus den Symbolen einen 10-Buchstaben-Code.
    </p>
    <p>
      Wandeln Sie die Buchstaben in Zahlen um, addieren Sie diese. Sie erhalten somit den finalen 3-stelligen Code.
    </p>
  </div>
</template>


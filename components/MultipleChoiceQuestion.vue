<script setup lang="ts">

const props = defineProps<{
  correctAnswer: string;
  wrongAnswers: string[];
}>();

const emit = defineEmits<{
  (e: 'answer-selected', answer: string): void;
  (e: 'answer-correct', answer: string): void;
}>();

const possibleAnswers = computed(() => [props.correctAnswer, ...props.wrongAnswers].sort(() => Math.random() - 0.5));

const userAnswer = ref<string | null>(null);

function answer(answer: string) {
  userAnswer.value = answer;
  emit('answer-selected', answer);

  (answer === props.correctAnswer)
      ? emit('answer-correct', answer)
      : showWrongAnswerOverlay();
}

const wrongAnswerOverlayVisible = ref<boolean>(false);

function showWrongAnswerOverlay() {
  wrongAnswerOverlayVisible.value = true;
  setTimeout(() => {
    wrongAnswerOverlayVisible.value = false;
    userAnswer.value = null;
  }, 3000);
}

</script>

<template>

  <transition enter-active-class="transition duration-500 ease-out"
              enter-from-class="opacity-0 scale-125"
              enter-to-class="opacity-100"
              leave-active-class="transition duration-500 ease-in"
              leave-from-class="opacity-100"
              leave-to-class="opacity-0">
    <div class="fixed inset-0 flex bg-black z-10" v-if="wrongAnswerOverlayVisible">
      <div class="m-auto text-center">

        <span class="block w-32 m-auto my-10 aspect-square rounded-full bg-red-500 text-white text-8xl leading-28 px-4">
          &times;
        </span>

        <h2 class="text-2xl font-bold text-white mb-4">Falsche Antwort</h2>
        <p class="text-lg text-gray-300 mb-2">
          "<span v-if="userAnswer" v-text="userAnswer"/>" ist leider nicht die korrekte Antwort.
        </p>
        <p class="text-lg text-gray-300 mb-6">
          Versuchen Sie es noch einmal.
        </p>
      </div>
    </div>
  </transition>

  <transition enter-active-class="transition duration-500 ease-out origin-bottom perspective-midrange"
              enter-from-class="opacity-0 rotate-x-90"
              enter-to-class="opacity-100"
              leave-active-class="transition duration-500 ease-in origin-bottom perspective-midrange"
              leave-from-class="opacity-100"
              leave-to-class="opacity-0 rotate-x-90">
    <div class="grid grid-cols-1 gap-4" v-if="!wrongAnswerOverlayVisible">
      <button v-for="option in possibleAnswers"
              :key="option"
              class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              @click="answer(option)"
              v-text="option"/>
    </div>
  </transition>


</template>

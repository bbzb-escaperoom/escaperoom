<template>
  <GroupSelector>

    <template #group-c>
      <FinishScreen/>
    </template>

    <svg id="Ebene_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 523.13 512.65" class="w-64 mx-auto my-12">
      <path fill="#ffffff"
            d="m256.94,36.04c123.52.39,217.06,100.43,217.21,216.49.16,117.96-94.99,216.56-215.57,217.17-122.5.62-216.46-98.74-218.06-213.85-1.6-115.61,90.72-218.9,216.41-219.82Zm-43.13,208.67c-3.16-.95-5.21-1.63-7.3-2.2-33.21-9.06-60.42,15.69-61.98,43.21-1.62,28.68,22.64,57.61,58.14,50.26,22.01-4.56,34.95-19.03,40.04-40.64,3.59-15.23,1.87-30.19-3.89-44.55-3.43-8.56-7.75-16.78-12-24.98-4.13-7.96-8.99-15.54-12.98-23.57-3.35-6.75-6.4-13.74-8.72-20.9-4.5-13.89-3.58-27.7,2.63-40.97,5.77-12.31,15.06-20.78,28.23-24.66,7.21-2.12,14.47-2.07,21.43.87,14.81,6.26,24.85,16.93,29.17,32.63,1.73,6.27,2.19,12.69,2.27,19.16.27,24.71-4.6,48.51-13.13,71.56-4.66,12.61-10.17,24.9-15.13,37.41-4.03,10.15-8.05,20.32-11.62,30.64-4.08,11.79-5.68,24.01-4.46,36.47,1.38,14.02,6.15,26.72,15.68,37.35,15.6,17.39,40.67,16.37,55.92,2.66,6.84-6.15,11.64-13.62,14.24-22.43,3-10.16,2.99-20.5,1.01-30.81-.62-3.26-1.92-6.45-3.34-9.47-.64-1.36-2.16-2.8-3.58-3.22-4.46-1.33-8.18.79-11.62,3.39-2.91,2.19-2.9,5.26-2.31,8.4.72,3.85,1.83,7.65,2.3,11.54,1,8.34-.47,16.26-5.44,23.2-7.91,11.03-21.61,12.24-31.36,2.82-4.52-4.36-7.64-9.65-9.55-15.63-2.55-7.96-2.29-16.05-.93-24.14,1.92-11.4,5.91-22.19,10.18-32.87,4.98-12.49,10.24-24.88,15.15-37.41,7.8-19.88,14.26-40.16,16.85-61.46,1.8-14.81,2.29-29.65-.85-44.37-3.29-15.41-9.7-29.26-21.22-40.32-12.88-12.36-28.2-17.86-46.08-15.9-13.29,1.46-24.56,7.3-34.82,15.54-8.33,6.68-14.19,15.05-17.62,25.13-6.25,18.37-6.8,36.78-.43,55.26,2.94,8.53,7.03,16.5,11.42,24.32,4.25,7.58,8.65,15.08,12.92,22.64.9,1.6,1.55,3.34,2.78,6.04Z"/>
      <path fill="#ffffff"
            d="m220.96,291.63c1.08,13.57-14.47,25.26-28.36,24.84-18.61-.57-27.69-14.93-27.34-27.84.42-15.53,12.45-27.64,27.87-27.5,15.97.15,28.01,13.34,27.84,30.5Z"/>
    </svg>

    <div class="prose prose-lg prose-invert my-12">
      <p>
        Vom Künstler Franz Bucher hängen zwei Bilder im Schulhaus. Das grössere davon hängt im zweiten Stockwerk.
      </p>

      <p class="text-center text-xl">
        In welchem Stockwerk hängt das <b>Kleinere</b> und <b>wann</b> wurde es gemalt?
      </p>

      <p>
        Die richtige Antwort führt Sie weiter.
      </p>
    </div>

    <MultipleChoiceQuestion
        correct-answer="1990"
        :wrong-answers="['1970', '2010']"
        @answer-correct="answeredCorrectly"
    />

  </GroupSelector>

</template>

<script setup lang="ts">

function answeredCorrectly() {
  alert("Richtig! Das kleinere Bild hängt im dritten Stockwerk und wurde 1990 gemalt.");
  navigateTo('/steps/og3/franz');
}
</script>
<template>
  <div class="fixed inset-0 bg-grainy opacity-30 z-50"/>

  <div class="max-w-lg mx-auto p-4 text-white">
    <NuxtPage/>
  </div>
</template>

<style>

body {
  background: #000000;
}

.bg-grainy {
  background: url(https://grainy-gradients.vercel.app/noise.svg);
  animation: bg-grainy 2s infinite alternate;
}

@keyframes bg-grainy {
  from {
    filter: blur(0);
    background-position: 0 0;
  }
  to {
    filter: blur(1px);
    background-position: 10px 10px;
  }
}

</style>

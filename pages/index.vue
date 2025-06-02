<template>
  <GroupSelector>

    <template #group-a>
      <div class="prose prose-lg prose-invert mt-40">
        <p>
          Tippen Sie auf den Button, sobald Sie bereit sind:
        </p>
      </div>
      <div class="text-center mt-10">
        <NuxtLink to="/steps/og1/start"
                  class="mt-20 text-2xl bg-red-500 text-white px-8 py-4 rounded hover:bg-red-600 transition-colors">
          Start
        </NuxtLink>
      </div>
    </template>
    <template #group-b>
      <div class="prose prose-lg prose-invert mt-40">
        <p>
          Tippen Sie auf den Button, sobald Sie bereit sind:
        </p>
      </div>

      <div class="text-center mt-10">
        <NuxtLink to="/steps/og1/batteries"
                  class="mt-20 text-2xl bg-red-500 text-white px-8 py-4 rounded hover:bg-red-600 transition-colors">
          Start
        </NuxtLink>
      </div>
    </template>
    <template #group-c>
      <div class="prose prose-lg prose-invert mt-40">
        <p>
          Tippen Sie auf den Button, sobald Sie bereit sind:
        </p>
      </div>

      <div class="text-center mt-10">
        <NuxtLink to="/steps/og2/it"
                  class="mt-20 text-2xl bg-red-500 text-white px-8 py-4 rounded hover:bg-red-600 transition-colors">
          Start
        </NuxtLink>
      </div>
    </template>
    <template #group-d>
      <div class="prose prose-lg prose-invert mt-40">
        <p>
          Tippen Sie auf den Button, sobald Sie bereit sind:
        </p>
      </div>

      <div class="text-center mt-10">
        <NuxtLink to="/steps/og3/helppoint"
                  class="mt-20 text-2xl bg-red-500 text-white px-8 py-4 rounded hover:bg-red-600 transition-colors">
          Start
        </NuxtLink>
      </div>
    </template>

  </GroupSelector>
</template>

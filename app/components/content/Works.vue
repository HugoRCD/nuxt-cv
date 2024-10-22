<script setup lang="ts">
type Work = {
  name: string;
  logo: string;
  image: string;
  description: string;
  link: string | 'Soon';
  tags: string[];
  release: string;
};

const { data: works } = await useAsyncData('works', () =>
  queryContent('works')
    .where({ _type: 'json' })
    .sort({ date: -1 })
    .find()
)
</script>

<template>
  <div class="mt-10">
    <h3 class="text-xl font-semibold mb-2">
      Works
    </h3>
    <div class="grid grid-cols-1 gap-8 sm:grid-cols-2">
      <NuxtLink
        v-for="(work, index) in works"
        :key="work.name"
        :to="work.link"
        class="group border border-neutral-300 rounded-md p-4 flex flex-col gap-2 hover:border-accent"
        data-animate
        :aria-label="`Open ${work.name}`"
        :style="{ '--stagger': index }"
      >
        <h3 class="text-lg group-hover:underline">
          {{ work.name }}
        </h3>
        <p>
          {{ work.description }}
        </p>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>

</style>

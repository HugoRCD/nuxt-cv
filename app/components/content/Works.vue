<script setup lang="ts">
type Work = {
  name: string;
  position: string;
  release: string | 'Soon';
  link: string;
  image: string;
  description: string | null;
  date: string;
};

const { data: works } = await useAsyncData('works', () =>
  queryContent('works')
    .where({ _type: 'json' })
    .sort({ date: -1 })
    .find()
) as { data: Work[] }
</script>

<template>
  <div>
    <h3 class="text-xl font-semibold mb-2">
      Work experience
    </h3>
    <div class="flex flex-col gap-4">
      <NuxtLink
        v-for="(work, index) in works"
        :key="work.name"
        :to="work.link"
        class="group flex flex-col"
        data-animate
        :aria-label="`Open ${work.name}`"
        :style="{ '--stagger': index }"
      >
        <div class="flex justify-between items-center">
          <h3 class="text-lg group-hover:underline text-neutral-800 font-semibold">
            {{ work.name }}
          </h3>
          <p v-if="work.date" class="text-neutral-500 text-sm">
            {{ work.date }}
          </p>
        </div>
        <p v-if="work.position" class="text-neutral-500 text-sm font-medium">
          {{ work.position }}
        </p>
        <p v-if="work.description" class="text-neutral-500 text-sm mt-1">
          {{ work.description }}
        </p>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>

</style>

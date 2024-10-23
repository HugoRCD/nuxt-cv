<script setup lang="ts">
type Education = {
  name: string;
  date: string;
  description: string;
}

const { data: education } = await useAsyncData('education', () =>
  queryContent('education')
    .where({ _type: 'json' })
    .sort({ date: -1 })
    .find()
) as { data: Education[] }
</script>

<template>
  <div>
    <h3 class="text-xl font-semibold mb-2">
      Education
    </h3>
    <div class="flex flex-col gap-4">
      <div
        v-for="(edu, index) in education"
        :key="edu.name"
        class="flex flex-col"
        data-animate
        :aria-label="`Open ${edu.name}`"
        :style="{ '--stagger': index }"
      >
        <div class="flex justify-between items-center">
          <h3 class="text-lg text-neutral-800 font-semibold">
            {{ edu.name }}
          </h3>
          <p v-if="edu.date" class="text-neutral-500 text-sm">
            {{ edu.date }}
          </p>
        </div>
        <p v-if="edu.description" class="text-neutral-500 text-sm mt-1">
          {{ edu.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

<script setup lang="ts">
type Experience = {
  name: string;
  date: string;
  description: string;
}

const { data: experiences } = await useAsyncData('experiences', () =>
  queryContent('experiences')
    .where({ _type: 'json' })
    .sort({ date: -1 })
    .find()
) as { data: Experience[] }
</script>

<template>
  <div v-if="experiences.length > 0">
    <h3 class="text-xl font-semibold mb-2">
      Work Experience
    </h3>
    <div class="flex flex-col gap-4">
      <div
        v-for="(exp, index) in experiences"
        :key="exp.name"
        class="flex flex-col"
        data-animate
        :aria-label="`Open ${exp.name}`"
        :style="{ '--stagger': index }"
      >
        <div class="flex justify-between items-center">
          <h3 class="text-md text-neutral-800 font-semibold">
            {{ exp.name }}
          </h3>
          <p v-if="exp.date" class="text-neutral-500 text-sm">
            {{ exp.date }}
          </p>
        </div>
        <p v-if="exp.description" class="text-neutral-500 text-sm mt-1">
          {{ exp.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

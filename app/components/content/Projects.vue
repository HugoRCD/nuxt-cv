<script setup lang="ts">
type Project = {
  name: string;
  position: string;
  link: string;
  image: string;
  description: string | null;
  date: string;
};

const { data: projects } = await useAsyncData('projects', () =>
  queryContent('projects')
    .where({ _type: 'json' })
    .sort({ date: -1 })
    .find()
) as { data: Project[] }
</script>

<template>
  <div v-if="projects.length > 0">
    <h3 class="text-xl font-semibold mb-2">
      Projects
    </h3>
    <div class="flex flex-col gap-4">
      <NuxtLink
        v-for="(project, index) in projects"
        :key="project.name"
        :to="project.link"
        class="group flex flex-col"
        data-animate
        :aria-label="`Open ${project.name}`"
        :style="{ '--stagger': index }"
      >
        <div class="flex justify-between items-center">
          <h3 class="text-md group-hover:underline text-neutral-800 font-semibold">
            {{ project.name }}
          </h3>
          <p v-if="project.date" class="text-neutral-500 text-sm">
            {{ project.date }}
          </p>
        </div>
        <p v-if="project.position" class="text-neutral-500 text-sm font-medium">
          {{ project.position }}
        </p>
        <p v-if="project.description" class="text-neutral-500 text-sm mt-1">
          {{ project.description }}
        </p>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>

</style>

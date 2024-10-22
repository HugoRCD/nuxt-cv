<script setup lang="ts">
const { profile } = useAppConfig()
</script>

<template>
  <div class="flex flex-col-reverse sm:flex-row justify-between gap-4">
    <div class="flex flex-col">
      <h1 class="text-2xl font-bold mb-2">
        {{ profile.name }}
      </h1>
      <p v-if="profile.description" class="max-w-sm text-neutral-500 mb-1">
        {{ profile.description }}
      </p>
      <p v-if="profile.location" class="text-neutral-500 flex items-center gap-1 text-sm mb-2">
        <MIcon name="lucide:globe" class="size-4 print:size-4" />
        {{ profile.location }}
      </p>
      <Socials />
    </div>
    <NuxtImg v-if="profile.picture" :src="profile.picture" :alt="profile.name" class="rounded-md size-32 sm:size-36" />
  </div>
</template>

<style scoped>

</style>

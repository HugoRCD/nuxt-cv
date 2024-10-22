<script setup lang="ts">
const { profile } = useAppConfig()
</script>

<template>
  <div class="flex flex-col-reverse sm:flex-row justify-between gap-4 px-4 sm:px-0 py-10 sm:py-16 max-w-2xl mx-auto">
    <div class="flex flex-col gap-2">
      <h1 class="text-2xl font-bold">
        {{ profile.name }}
      </h1>
      <p v-if="profile.description" class="max-w-sm text-gray-500">
        {{ profile.description }}
      </p>
      <p v-if="profile.location" class="text-gray-500 flex items-center gap-2 text-sm">
        <MIcon name="lucide:globe" size="18" />
        {{ profile.location }}
      </p>
      <Socials />
    </div>
    <NuxtImg v-if="profile.picture" :src="profile.picture" :alt="profile.name" class="rounded-md size-32 sm:size-36" />
  </div>
</template>

<style scoped>

</style>

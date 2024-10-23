<script setup lang="ts">
</script>

<template>
  <div class="flex flex-col">
    <h3 class="text-xl font-semibold mb-2">
      About
    </h3>
    <div class="flex max-w-2xl flex-col gap-3 text-pretty text-neutral-800">
      <slot />
    </div>
  </div>
</template>

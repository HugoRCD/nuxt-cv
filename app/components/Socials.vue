<script setup lang="ts">
const { profile, socials } = useAppConfig()
</script>

<template>
  <div class="flex flex-row print:flex-col gap-3 print:gap-2 mt-2">
    <NuxtLink v-if="profile.website" :to="profile.website" class="link link_space">
      <MIcon name="lucide:link" class="size-5 print:size-4" />
      <span class="link-text">
        {{ profile.website }}
      </span>
    </NuxtLink>
    <NuxtLink v-if="profile.email" :to="`mailto:${profile.email}`" class="link link_space">
      <MIcon name="lucide:mail" class="size-5 print:size-4" />
      <span class="link-text">
        {{ profile.email }}
      </span>
    </NuxtLink>
    <NuxtLink v-if="profile.phone" :to="`tel:${profile.phone}`" class="link link_space">
      <MIcon name="lucide:phone" class="size-5 print:size-4" />
      <span class="link-text">
        {{ profile.phone }}
      </span>
    </NuxtLink>
    <NuxtLink v-if="socials.github" :to="socials.github" class="link link_space">
      <MIcon name="lucide:github" class="size-5 print:size-4" />
      <span class="link-text">
        {{ socials.github }}
      </span>
    </NuxtLink>
    <NuxtLink v-if="socials.twitter" :to="socials.twitter" class="link link_space">
      <MIcon name="lucide:twitter" class="size-5 print:size-4" />
      <span class="link-text">
        {{ socials.twitter }}
      </span>
    </NuxtLink>
    <NuxtLink v-if="socials.linkedin" :to="socials.linkedin" class="link link_space">
      <MIcon name="lucide:linkedin" class="size-5 print:size-4" />
      <span class="link-text">
        {{ socials.linkedin }}
      </span>
    </NuxtLink>
    <NuxtLink v-if="socials.instagram" :to="socials.instagram" class="link link_space">
      <MIcon name="lucide:instagram" class="size-5 print:size-4" />
      <span class="link-text">
        {{ socials.instagram }}
      </span>
    </NuxtLink>
  </div>
</template>

<style scoped>
@import '@mockline/utils';

.link {
  @apply text-neutral-500 hover:text-neutral-700;
}

.link_space {
  @apply flex items-center gap-1;
}

.link-text {
  display: none;
}

@media print {
  .link-text {
    display: inline;
    @apply text-sm;
  }

  .print\:flex-col {
    flex-direction: column;
  }
}
</style>

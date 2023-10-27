<template>
  <header id="header">
    <NuxtLink to="/">
      <NuxtImg src="/images/citadel_logo.png" height="28" />
    </NuxtLink>
    <Icon name="heroicons:cog-8-tooth-20-solid" />
  </header>
</template>

<script setup lang="ts">
// type Props = {
//   value: string;
// }

// type Emits = {
//   (e: 'update', payload: string): void;
// }

// const props = defineProps<Props>();
// const emit = defineEmits<Emits>();
</script>

<style scoped>
#header {
  height: 2rem;
  padding: 2px 0.5em;
  background-color: var(--color-background--dark);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
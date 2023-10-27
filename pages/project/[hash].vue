<template>
  <div>Project: {{ route.params.hash }}</div>
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

const route = useRoute();
</script>

<style scoped>
/* ToDo: Add style content */
</style>
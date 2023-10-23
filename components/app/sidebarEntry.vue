<template>
  <li class="project-entry" :class="`project-entry--${project.status}`">
    <Icon :name="icon" />
    <span class="project-name">{{ project.name }}</span>
  </li>
</template>

<script setup lang="ts">
import type { SidebarProjectEntry } from '~/types/project';

type Props = {
  project: SidebarProjectEntry;
}

// type Emits = {
//   (e: 'update', payload: string): void;
// }

const props = defineProps<Props>();
// const emit = defineEmits<Emits>();

const icon = computed<string>(() => {
  switch (props.project.status) {
    case 'running':
      return 'mdi:package-variant-closed-check';
    case 'error':
      return 'mdi:package-variant-closed-remove';
    case 'stopped':
    default:
      return 'mdi:package-variant-closed';
  }
});
</script>

<style scoped>
.project-entry {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.project-entry:hover {
  color: var(--color-font--dark);
}

.project-entry--running {
  color: var(--color-success);
}

.project-entry--error {
  color: var(--color-error);
}

.project-name {
  font-size: 1rem;
  padding: 0 0.5ch;
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
  max-width: calc(var(--sidebar-max-width) - 2.5rem);
  opacity: 0;
  transition: opacity .2s ease-in-out;
}
</style>
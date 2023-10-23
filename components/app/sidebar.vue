<template>
  <div id="sidebar">
    <ul id="project-list">
      <AppSidebarEntry v-for="(project, index) of projects" :key="index" :project="project" />
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { SidebarProjectEntry } from '~/types/project';

// type Props = {
//   value: string;
// }

// type Emits = {
//   (e: 'update', payload: string): void;
// }

// const props = defineProps<Props>();
// const emit = defineEmits<Emits>();

const projects = ref<SidebarProjectEntry[]>([
  {
    status: 'running',
    name: 'citadel-app'
  },
  {
    status: 'error',
    name: 'scribe'
  },
  {
    status: 'stopped',
    name: 'roleplay-nexus'
  },
  {
    status: 'stopped',
    name: 'project with a very long name that should be omitted'
  },
]);
</script>

<style scoped>
#sidebar {
  --sidebar-min-width: 2.5rem;
  --sidebar-max-width: 200px;
  background-color: var(--color-background--dark);
  border-right: 1px solid var(--color-background--light);
  padding-top: 2rem;
  width: var(--sidebar-min-width);
  transition: width .2s ease-in-out;
}

#project-list {
  font-size: 2rem;
  padding: 0.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;
  overflow-x: hidden;
}

#sidebar:hover {
  width: var(--sidebar-max-width);
}

#sidebar:hover::v-deep(.project-name) {
  opacity: 1;
}
</style>
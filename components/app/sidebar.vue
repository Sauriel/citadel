<template>
  <div id="sidebar">
    <ul id="project-list">
      <AppSidebarEntry v-for="project of projects" :key="project.hash" :project="project" />
    </ul>
  </div>
</template>

<script setup lang="ts">
import useProjectsStore from '~/stores/project';
import type { SidebarProjectEntry } from '~/types/project';

const projectStore = useProjectsStore();

const projects = computed<SidebarProjectEntry[]>(() => projectStore.projects);
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
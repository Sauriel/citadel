<template>
  <div>
    <div id="projects">
      <article
        v-for="project of projects"
        :key="project.hash"
        class="project"
        >
        <header>
          {{ project.name }}
        </header>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import useProjectsStore from '~/stores/project';
import type { SidebarProjectEntry } from '~/types/project';

const projectStore = useProjectsStore();

const projects = computed<SidebarProjectEntry[]>(() => projectStore.projects);
</script>

<style scoped>
#projects {
  padding: 2rem;
  gap: 2rem;
  display: grid;
  grid-auto-flow: dense;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 200px), 1fr));
}

.project {
  border: 1px solid var(--color-background--dark);
  border-radius: var(--border-radius);
  aspect-ratio: 3/2;
}
</style>
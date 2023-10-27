import useProjectsStore from "~/stores/project";
import type { SidebarProjectEntry } from "~/types/project";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const projects = await useFetch<SidebarProjectEntry[]>('/api/projects/get');
  if (projects.data.value?.length) {
    const projectStore = useProjectsStore();
    projectStore.projects = projects.data.value;
  }
})
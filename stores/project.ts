import type { SidebarProjectEntry } from "~/types/project";

const useProjectsStore = defineStore('projects', () => {
  const projects = ref<SidebarProjectEntry[]>([]);

  return {
    projects
  };
});

export default useProjectsStore;
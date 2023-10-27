import { loadProject } from "~/server/module/projectLoader";
import { SidebarProjectEntry } from "~/types/project";

export default defineEventHandler((event) => {
  // return loadProject();
  const projects: SidebarProjectEntry[] = [
    {
      hash: 'app-1',
      status: 'running',
      name: 'citadel-app'
    },
    {
      hash: 'app-2',
      status: 'error',
      name: 'scribe'
    },
    {
      hash: 'app-3',
      status: 'stopped',
      name: 'roleplay-nexus'
    },
    {
      hash: 'app-4',
      status: 'stopped',
      name: 'project with a very long name that should be omitted'
    },
  ];
  return projects;
})
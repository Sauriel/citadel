import { loadProject } from "~/server/module/projectLoader";

export default defineEventHandler((event) => {
  return loadProject();
})
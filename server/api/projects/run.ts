import { runScript } from "~/server/module/projectLoader";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  runScript(body.script);
})
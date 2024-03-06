"use server";

import { serverAct } from "server-act";

export const myAction = serverAct.action(async () => {
  return "Hello, World!";
});

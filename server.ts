// bb-plugin-top-tabs — backend entry. The plugin is frontend-only: the tab
// strip lives in app.tsx and keeps its state in each window's localStorage.
import type { BbPluginApi } from "@get-bb/plugin-sdk";

export default async function plugin(bb: BbPluginApi) {
  bb.log.info("loaded");
}

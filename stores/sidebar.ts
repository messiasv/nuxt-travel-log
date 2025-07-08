import type { RouteLocationRaw } from "vue-router";

import type { MapPoint } from "~/lib/types";

export type SidebarItem = {
  id: string;
  label: string;
  icon: string;
  href?: string;
  to?: RouteLocationRaw;
  mapPoint?: MapPoint | null;
};

export const useSidebarStore = defineStore("sidebarStore", () => {
  const sidebarTopItems = ref<SidebarItem[]>([]);
  const sidebarItems = ref<SidebarItem[]>([]);
  const loading = ref(false);

  return {
    loading,
    sidebarTopItems,
    sidebarItems,
  };
});

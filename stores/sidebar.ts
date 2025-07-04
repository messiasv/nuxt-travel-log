export type SidebarItem = {
  id: string;
  label: string;
  icon: string;
  href: string;
};

export const useSidebarStore = defineStore("sidebarStore", () => {
  const sidebarItems = ref<SidebarItem[]>([]);
  const loading = ref(false);

  return {
    loading,
    sidebarItems,
  };
});

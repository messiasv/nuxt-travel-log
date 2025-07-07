import type { MapPoint } from "~/lib/types";

export const useMapStore = defineStore("mapStore", () => {
  const mapPoints = ref<MapPoint[]>([]);
  return {
    mapPoints,
  };
});

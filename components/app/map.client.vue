<script lang="ts" setup>
import { CENTER_JP } from "~/lib/constants";

const colorMode = useColorMode();
const style = computed(() =>
  colorMode.value === "dark"
    ? "/styles/dark.json"
    : "https://tiles.openfreemap.org/styles/liberty");
const zoom = 6;
</script>

<template>
  <MglMap
    :map-style="style"
    :center="CENTER_JP"
    :zoom="zoom"
  >
    <MglNavigationControl />
  </MglMap>
</template>

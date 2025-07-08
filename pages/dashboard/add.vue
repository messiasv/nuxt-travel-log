<script lang="ts" setup>
import type { FetchError } from "ofetch";

import type { InsertLocation } from "~/lib/db/schema";

const { $csrfFetch } = useNuxtApp();
const loading = ref(false);
const submitted = ref(false);
const submitError = ref("");
const submitErrors = ref<Record<string, string>>({});

async function onSubmit(values: InsertLocation) {
  try {
    submitError.value = "";
    submitErrors.value = {};
    loading.value = true;
    await $csrfFetch("/api/locations", {
      method: "post",
      body: values,
    });
    submitted.value = true;
    navigateTo("/dashboard");
  }
  catch (e) {
    const error = e as FetchError;
    if (error.data?.data) {
      submitErrors.value = error.data?.data;
    }
    submitError.value = getFetchErrorMessage(error);
  }
  loading.value = false;
}
</script>

<template>
  <div class="container max-w-md mx-auto p-4">
    <div class="my-4">
      <h1 class="text-lg">
        Add Location
      </h1>

      <p class="text-sm">
        A location is a place you have traveled or will travel to. It can be a city, country, state or point of interest. You can add specific times you visited this location after adding it.
      </p>
    </div>

    <div
      v-if="submitError"
      role="alert"
      class="alert alert-error"
    >
      <Icon name="tabler:circle-letter-x" size="24" />
      <span>{{ submitError }}</span>
    </div>
    <LocationForm
      :on-submit
      :loading
      :submitted
      :submit-errors
    />
  </div>
</template>

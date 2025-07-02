<script lang="ts" setup>
import { toTypedSchema } from "@vee-validate/zod";

import { InsertLocation } from "~/lib/db/schema";

const { handleSubmit, errors } = useForm({
  validationSchema: toTypedSchema(InsertLocation),
});

const onSubmit = handleSubmit((values) => {
  console.log(values);
});
</script>

<template>
  <div class="container max-w-md mx-auto">
    <div class="my-4">
      <h1 class="text-lg">
        Add Location
      </h1>

      <p class="text-sm">
        A location is a place you have traveled or will travel to. It can be a city, country, state or point of interest. You can add specific times you visited this location after adding it.
      </p>
    </div>

    <form action="" class="flex flex-col gap-2" @submit.prevent="onSubmit">
      <fieldset class="fieldset">
        <legend class="fieldset-legend">
          Name
        </legend>
        <Field name="name" type="text" class="input w-full" :class="{ 'input-error': errors.name }" />
        <p v-if="errors.name" class="label text-error">
          {{ errors.name }}
        </p>
      </fieldset>
      <fieldset class="fieldset">
        <legend class="fieldset-legend">
          Description
        </legend>
        <Field name="description" type="textarea" class="textarea w-full" :class="{ 'input-error': errors.description }" />
        <p v-if="errors.description" class="label text-error">
          {{ errors.description }}
        </p>
      </fieldset>
      <fieldset class="fieldset">
        <legend class="fieldset-legend">
          Latitude
        </legend>
        <Field name="lat" type="number" class="input w-full" :class="{ 'input-error': errors.lat }" />
        <p v-if="errors.lat" class="label text-error">
          {{ errors.lat }}
        </p>
      </fieldset>
      <fieldset class="fieldset">
        <legend class="fieldset-legend">
          Longitude
        </legend>
        <Field name="long" type="number" class="input w-full" :class="{ 'input-error': errors.long }" />
        <p v-if="errors.long" class="label text-error">
          {{ errors.long }}
        </p>
      </fieldset>

      <div class="flex justify-end gap-2">
        <button type="button" class="btn btn-outline">
          <Icon name="tabler:arrow-left" size="24" />
          Cancel
        </button>
        <button type="submit" class="btn btn-primary">
          Add
          <Icon name="tabler:circle-plus-filled" size="24" />
        </button>
      </div>
    </form>
  </div>
</template>

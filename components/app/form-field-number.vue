<script lang="ts" setup>
const props = defineProps<{
  label: string;
  name: string;
  error?: string;
  disabled?: boolean;
}>();
</script>

<template>
  <fieldset class="fieldset">
    <legend class="fieldset-legend">
      {{ props.label }}
    </legend>
    <Field
      :name="props.name"
      type="number"
      :disabled="disabled"
      class="input w-full"
      :class="{
        'input-error': props.error,
      }"
    />
    <p v-if="props.error" class="label text-error">
      {{ props.error }}
    </p>
  </fieldset>
</template>

<template>
  <div class="flex flex-col">
    <h3 class="text-sm mb-2 uppercase">{{ label }}</h3>
    <span class="text-2xl">{{ value }}</span>
  </div>
</template>

<script>
export default {
  name: 'IpInfoCard',
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: [String, Number],
      required: true,
    },
  },
};
</script>

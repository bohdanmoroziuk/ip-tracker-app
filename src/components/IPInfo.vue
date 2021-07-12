<template>
  <div
    class="
      absolute
      -bottom-64
      lg:-bottom-20
      flex
      flex-col
      lg:flex-row
      bg-white
      gap-y-4
      gap-x-12
      px-8
      pt-8
      pb-12
      rounded-md
      z-20
    "
  >
    <div class="flex flex-col">
      <h3 class="text-sm mb-2 uppercase">IP Address</h3>
      <span class="text-2xl">{{ data.address }}</span>
    </div>
    <div class="flex flex-col">
      <h3 class="text-sm mb-2 uppercase">Location</h3>
      <span class="text-2xl">{{ data.state }}</span>
    </div>
    <div class="flex flex-col">
      <h3 class="text-sm mb-2 uppercase">Timezone</h3>
      <span class="text-2xl">UTC {{ data.timezone }}</span>
    </div>
    <div class="flex flex-col">
      <h3 class="text-sm mb-2 uppercase">Isp</h3>
      <span class="text-2xl">{{ data.isp }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IPInfo',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>

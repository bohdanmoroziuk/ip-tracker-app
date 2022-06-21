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
    <ip-info-card
      v-for="{ label, value } of dataset"
      :key="label"
      :label="label"
      :value="value"
    />
  </div>
</template>

<script>
import IpInfoCard from '@/components/IpInfoCard.vue';

export default {
  name: 'IpInfo',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  computed: {
    dataset() {
      const {
        address,
        state,
        timezone,
        isp,
      } = this.data;

      return [
        {
          label: 'IP Address',
          value: address,
        },
        {
          label: 'Location',
          value: state,
        },
        {
          label: 'Timezone',
          value: `UTC ${timezone}`,
        },
        {
          label: 'Isp',
          value: isp,
        },
      ];
    },
  },
  components: {
    IpInfoCard,
  },
};
</script>

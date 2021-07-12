<template>
  <div class="home flex flex-col h-screen max-h-screen">
    <div class="flex justify-center relative px-4 pb-32 bg-hero-pattern bg-cover z-20">
      <div class="w-full max-w-screen-sm">
        <h1 class="text-white text-center text-3xl py-4">IP Address Tracker</h1>

        <search-form @search="getIpInfo" />

        <i-p-info v-if="ipInfo" :data="ipInfo" />
      </div>
    </div>

    <tracker-map :coords="coords" />
  </div>
</template>

<script>
/* eslint-disable no-alert */

import { ref } from 'vue';

import axios from 'axios';

import TrackerMap from '@/components/TrackerMap.vue';
import SearchForm from '@/components/SearchForm.vue';
import IPInfo from '@/components/IPInfo.vue';

import config from '@/config';

export default {
  name: 'Home',
  setup() {
    const ipInfo = ref(null);
    const coords = ref({});

    const getIpInfo = async (ipAddress) => {
      try {
        const { data } = await axios.get(`/ipify?apiKey=${config.geoIpifyApiKey}&ipAddress=${ipAddress}`);

        ipInfo.value = {
          address: data.ip,
          state: data.location.region,
          timezone: data.location.timezone,
          isp: data.isp,
        };

        coords.value = {
          lat: data.location.lat,
          lng: data.location.lng,
        };
      } catch (error) {
        alert(error.message);
      }
    };

    return {
      ipInfo,
      coords,

      getIpInfo,
    };
  },
  components: {
    TrackerMap,
    SearchForm,
    IPInfo,
  },
};
</script>

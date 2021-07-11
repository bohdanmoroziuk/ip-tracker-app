<template>
  <div class="home flex flex-col h-screen max-h-screen">
    <div class="flex justify-center relative px-4 pb-32 bg-hero-pattern bg-cover z-10">
      <div class="w-full max-w-screen-sm">
        <h1 class="text-white text-center text-3xl pb-4">IP Address Tracker</h1>

        <search-form />

        <i-p-info />
      </div>
    </div>

    <tracker-map />
  </div>
</template>

<script>
import TrackerMap from '@/components/TrackerMap.vue';
import SearchForm from '@/components/SearchForm.vue';
import IPInfo from '@/components/IPInfo.vue';

export default {
  name: 'Home',
  components: {
    TrackerMap,
    SearchForm,
    IPInfo,
  },
};
</script>

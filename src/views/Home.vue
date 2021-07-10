<template>
  <div class="home flex flex-col h-screen max-h-screen">
    <div class="flex justify-center relative px-4 pb-32 bg-hero-pattern bg-cover">
      <div class="w-full max-w-screen-sm">
        <h1 class="text-white text-center text-3xl pb-4">IP Address Tracker</h1>

        <search-form />
      </div>
    </div>
  </div>
</template>

<script>
import SearchForm from '@/components/SearchForm.vue';

export default {
  name: 'Home',
  components: {
    SearchForm,
  },
};
</script>

<template>
  <form
    class="search-form flex"
    @submit.prevent="handleSubmit"
  >
    <input
      class="flex-1 py-3 px-2 rounded-tl-md rounded-bl-md focus:outline-none"
      type="text"
      name="searchTerm"
      id="searchTerm"
      placeholder="Search for any IP address or leave empty to get your ip info"
      v-model.trim="searchTerm"
    />
    <button class="bg-black text-white px-4 rounded-tr-md rounded-br-md">
      <i class="fas fa-chevron-right"></i>
    </button>
  </form>
</template>

<script>
export default {
  name: 'SearchForm',
  data() {
    return {
      searchTerm: '',
    };
  },
  methods: {
    handleSubmit() {
      this.$emit('search', this.searchTerm);
    },
  },
};
</script>

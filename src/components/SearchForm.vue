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
    <button
      class="bg-black text-white px-4 rounded-tr-md rounded-br-md"
      type="submit"
    >
      <i class="fas fa-chevron-right"></i>
    </button>
  </form>
</template>

<script>
import { ref, nextTick } from 'vue';

export default {
  name: 'SearchForm',
  emits: ['search'],
  setup(_props, { emit }) {
    const searchTerm = ref('');

    const handleSubmit = async () => {
      emit('search', searchTerm.value);

      await nextTick(() => {
        searchTerm.value = '';
      });
    };

    return {
      searchTerm,
      handleSubmit,
    };
  },
};
</script>

import { ref, computed, watch } from 'vue';

export default function useSearch(items, searchProp) {
  // This ref is bound to the BaseSearch input via v-model
  const enteredSearchTerm = ref('');
  // This ref is used for debounced searching
  const activeSearchTerm = ref('');

  // Computed property to filter items by the search term (case-insensitive)
  // This is reactive and updates when activeSearchTerm changes
  const availableItems = computed(() => {
    let filteredItems = [];
    if (activeSearchTerm.value) {
      const search = activeSearchTerm.value.toLowerCase();
      filteredItems = items.filter((item) =>
        item[searchProp].toLowerCase().includes(search)
      );
    } else if (items) {
      filteredItems = items;
    }
    return filteredItems;
  });

  // Debounce: only update activeSearchTerm if the user stops typing for 300ms
  watch(enteredSearchTerm, function (newValue) {
    setTimeout(() => {
      if (newValue === enteredSearchTerm.value) {
        activeSearchTerm.value = newValue;
      }
    }, 300);
  });

  return {
    enteredSearchTerm,
    availableItems,
  };
}
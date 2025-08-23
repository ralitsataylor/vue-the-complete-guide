import { ref, computed } from 'vue';

export default function useSort(availableItems, sortProp) {
  const sorting = ref(null);

  const displayedUsers = computed(() => {
    // Defensive: always return an array 
    const items = Array.isArray(availableItems.value) ? availableItems.value : [];
    if (!sorting.value) {
      return items;
    }
    return items.slice().sort((u1, u2) => {
      if (sorting.value === 'asc' && u1[sortProp] > u2[sortProp]) {
        return 1;
      } else if (sorting.value === 'asc') {
        return -1;
      } else if (sorting.value === 'desc' && u1[sortProp] > u2[sortProp]) {
        return -1;
      } else {
        return 1;
      }
    });
  });

  function sort(mode) {
    sorting.value = mode;
  }

  return {
    sorting,
    displayedUsers,
    sort
  }
}
import { defineStore } from "pinia";
import { ref } from "vue";

const useCommandPalletStore = defineStore("commandPallet", () => {
  const isCommandPalletOpen = ref(false);

  const toggleCommandPallet = () => {
    isCommandPalletOpen.value = !isCommandPalletOpen.value;
  };

  return {
    isCommandPalletOpen,
    toggleCommandPallet,
  };
});

export default useCommandPalletStore;

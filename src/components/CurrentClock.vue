<template>
  <span>
    {{ currentTime.toLocaleTimeString() }}
  </span>
</template>
<script lang="ts">
import { useCurrentTime } from "../composables/useCurrentTime";
export default {
  setup() {
    const { currentTime } = useCurrentTime();
    console.log(currentTime.value);
    return { currentTime };
  },
};
</script>

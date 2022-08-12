<template>
  <span :class="$style['wrapper']"> {{ text }}</span>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'SpanAtom',
  props: {
    text: String as PropType<string>,
  },
});
</script>

<style lang="scss" module>
.wrapper {
  font-size: clamp(0.8em, 0.8em + 0.5vw, 1.5em);
}
</style>

<template>
  <label :class="$style['wrapper']"> {{ text }}</label>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'LabelAtom',
  props: {
    text: String as PropType<string>,
  },
});
</script>

<style lang="scss" module>
.wrapper {
  font-size: clamp(1em, 1em + 0.5vw, 2em);
  color: var(--purple--primary);
}
</style>

<template>
  <div
    :class="$style['wrapper']"
    :style="{ backgroundColor: state === true ? '#7a40f6' : '#2c2c2c' }"
    @click="$emit('updateState', !state)"
  ></div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'CheckboxAtom',
  props: {
    state: Boolean as PropType<boolean>,
  },
  emits: ['updateState'],
});
</script>

<style lang="scss" module>
.wrapper {
  padding: 0.5em;

  box-shadow: 0px 0px 24px 4px #000000;
  border-radius: 4px;
}
</style>

<template>
  <SpanAtom :text="text" />
  <CheckboxAtom :state="state" @updateState="$emit('updateState', $event)" />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import SpanAtom from '../atoms/span.atom.vue';
import CheckboxAtom from '../atoms/checkbox.atom.vue';

export default defineComponent({
  name: 'CardOrganism',
  components: { SpanAtom, CheckboxAtom },
  props: {
    text: String as PropType<string>,
    state: Boolean as PropType<boolean>,
  },
  emits: ['updateState'],
});
</script>

<style lang="scss" module></style>

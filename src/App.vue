<template>
  <div :class="$style['wrapper']">
    <div :class="$style['wrapper__header']">
      <LabelAtom text="Daily Tracker" />
    </div>
    <hr />
    <div :class="$style['wrapper__body']">
      <div
        :class="$style['wrapper__body__task']"
        v-for="task of taskCollection"
        v-bind:key="task.uuid"
      >
        <CardOrganism
          :text="task.title"
          :state="task.completed"
          @updateState="task.completed = $event"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import * as uuid from 'uuid';

import CardOrganism from './shared/components/organisms/card.organism.vue';
import LabelAtom from './shared/components/atoms/label.atom.vue';

class TaskModel {
  private readonly _uuid: string;

  public constructor(
    private readonly _title: string,
    private _completed: boolean
  ) {
    this._uuid = uuid.v4();
  }

  public get uuid(): string {
    return this._uuid;
  }

  public get title(): string {
    return this._title;
  }

  public set completed(value: boolean) {
    this._completed = value;
  }

  public get completed(): boolean {
    return this._completed;
  }
}

export default defineComponent({
  name: 'AppTemplate',
  components: { LabelAtom, CardOrganism },
  data() {
    return {
      taskCollection: [
        new TaskModel('Clean Room', false),
        new TaskModel('Clean Kitchen', true),
        new TaskModel('Clean WC', true),
        new TaskModel('Make Cookies', true),
      ],
    };
  },
});
</script>

<style lang="scss" module>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 2em;

  margin: 1.5em;

  &__body {
    display: flex;
    flex-direction: column;
    gap: 1.5em;

    padding: 1.5em;

    &__task {
      padding: 1.5em;

      box-shadow: 0px 0px 24px 4px #000000;
      border-radius: 4px;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>

<script setup lang="ts">
import type { ActionItem, DropDownOptions } from '../types';
import {
  DxDropDownButton,
} from 'devextreme-vue/drop-down-button';
import type { DxDropDownButtonTypes } from 'devextreme-vue/drop-down-button';
import notify from 'devextreme/ui/notify';

const actions: ActionItem[] = [
  { id: 1, text: 'My profile', icon: 'user' },
  { id: 2, text: 'Messages', icon: 'email' },
  { id: 3, text: 'Contacts', icon: 'group' },
  { id: 4, text: 'Log out', icon: 'runner' },
];

const dropDownOptions: DropDownOptions = {
  height: 150,
};

const handleItemClick = (e: DxDropDownButtonTypes.ItemClickEvent): void => {
  notify(`${e.itemData.text} was clicked`, 'info', 2000);
};

const handleButtonClick = (): void => {
  notify('Main button was clicked', 'success', 2000);
};
</script>

<template>
  <div id="app-container">
    <DxDropDownButton
      text="Sandra Johnson"
      icon="user"
      :items="actions"
      key-expr="id"
      display-expr="text"
      @item-click="handleItemClick"
      :split-button="true"
      @button-click="handleButtonClick"
      :drop-down-options="dropDownOptions"
    />
  </div>
</template>

<style scoped>
#app-container {
  width: 900px;
  position: relative;
  padding: 20px;
  border: 1px solid #ddd;
  margin: 50px auto;
}
</style>

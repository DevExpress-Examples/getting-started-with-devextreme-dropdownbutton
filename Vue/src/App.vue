<template>
    <DxDropDownButton
        text="Sandra Johnson"
        icon="user"
        :items="actions"
        key-expr="id"
        display-expr="text"
        @item-click="logAction"
        :split-button="true"
        @button-click="logButtonClick"
        :drop-down-options="dropDownOptions"
    />
</template>

<script>
import DxDropDownButton from 'devextreme-vue/drop-down-button';

const actions = [
    { id: 1, text: 'My profile', icon: 'user' },
    { id: 2, text: 'Messages', icon: 'email' },
    { id: 3, text: 'Contacts', icon: 'group' },
    { id: 4, text: 'Log out', icon: 'runner' }
];

export default {
    components: {
        DxDropDownButton
    },
    data() {
        return {
            actions,
            dropDownOptions: {
                height: 150
            }
        };
    },
    methods: {
        logAction(e) {
            console.log(e.itemData.text + ' was clicked');
        },
        logButtonClick() {
            console.log('Main button was clicked');
        }
    }
};
</script>

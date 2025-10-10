const actions = [
  { id: 1, text: 'My profile', icon: 'user' },
  { id: 2, text: 'Messages', icon: 'email' },
  { id: 3, text: 'Contacts', icon: 'group' },
  { id: 4, text: 'Log out', icon: 'runner' },
];

$(() => {
  const dropDownButton = $('#myDropDownButton').dxDropDownButton({
    text: 'Sandra Johnson',
    icon: 'user',
    displayExpr: 'text',
    items: actions,
    keyExpr: 'id',
    onItemClick: (e) => {
      DevExpress.ui.notify(`${e.itemData.text} was clicked`, 'info', 2000);
    },
    splitButton: true,
    onButtonClick: () => {
      DevExpress.ui.notify('Main button was clicked', 'success', 2000);
    },
    dropDownOptions: {
      height: 150,
    },
  }).dxDropDownButton('instance');
});

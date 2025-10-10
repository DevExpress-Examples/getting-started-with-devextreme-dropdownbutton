import { useCallback } from 'react';
import './App.css';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import DropDownButton from 'devextreme-react/drop-down-button';
import type { DropDownButtonTypes } from 'devextreme-react/drop-down-button';
import notify from 'devextreme/ui/notify';

const actions = [
  { id: 1, text: 'My profile', icon: 'user' },
  { id: 2, text: 'Messages', icon: 'email' },
  { id: 3, text: 'Contacts', icon: 'group' },
  { id: 4, text: 'Log out', icon: 'runner' },
];

const dropDownOptions = {
  height: 150,
};

function App(): JSX.Element {
  const onItemClick = useCallback((e: DropDownButtonTypes.ItemClickEvent) => {
    notify(`${e.itemData.text} was clicked`, 'info', 2000);
  }, []);

  const onButtonClick = useCallback(() => {
    notify('Main button was clicked', 'success', 2000);
  }, []);

  return (
    <div id="app-container">
      <DropDownButton
        text="Sandra Johnson"
        icon="user"
        items={actions}
        keyExpr="id"
        displayExpr="text"
        onItemClick={onItemClick}
        splitButton={true}
        onButtonClick={onButtonClick}
        dropDownOptions={dropDownOptions}
      />
    </div>
  );
}

export default App;

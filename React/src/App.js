import React from 'react';

import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';

import DropDownButton from 'devextreme-react/drop-down-button';

const actions = [
    { id: 1, text: 'My profile', icon: 'user' },
    { id: 2, text: 'Messages', icon: 'email' },
    { id: 3, text: 'Contacts', icon: 'group' },
    { id: 4, text: 'Log out', icon: 'runner' }
];
const dropDownOptions = {
    height: 150
};
class App extends React.Component {
    logAction(e) {
        console.log(e.itemData.text + ' was clicked');
    }

    logButtonClick() {
        console.log('Main button was clicked');
    }

    render() {
        return (
            <DropDownButton
                text="Sandra Johnson"
                icon="user"
                items={actions}
                keyExpr="id"
                displayExpr="text"
                onItemClick={this.logAction}
                splitButton={true}
                onButtonClick={this.logButtonClick}
                dropDownOptions={dropDownOptions}
            />
        );
    }
}
export default App;

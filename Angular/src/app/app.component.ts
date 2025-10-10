import { Component } from '@angular/core';
import notify from 'devextreme/ui/notify';
import { DxDropDownButtonTypes } from 'devextreme-angular/ui/drop-down-button';
import { ActionItem, DropDownOptions } from './app.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  actions: ActionItem[] = [
    { id: 1, text: 'My profile', icon: 'user' },
    { id: 2, text: 'Messages', icon: 'email' },
    { id: 3, text: 'Contacts', icon: 'group' },
    { id: 4, text: 'Log out', icon: 'runner' },
  ];

  dropDownOptions: DropDownOptions = {
    height: 150,
  };

  onItemClick(e: DxDropDownButtonTypes.ItemClickEvent): void {
    notify(`${e.itemData.text} was clicked`, 'info', 2000);
  }

  onButtonClick(): void {
    notify('Main button was clicked', 'success', 2000);
  }
}

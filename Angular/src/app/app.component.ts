import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    actions: Array<{ id: Number; text: String; icon: String }> = [
        { id: 1, text: 'My profile', icon: 'user' },
        { id: 2, text: 'Messages', icon: 'email' },
        { id: 3, text: 'Contacts', icon: 'group' },
        { id: 4, text: 'Log out', icon: 'runner' }
    ];
    dropDownOptions = {
        height: 150
    };

    logAction(e) {
        console.log(e.itemData.text + ' was clicked');
    }

    logButtonClick() {
        console.log('Main button was clicked');
    }
}

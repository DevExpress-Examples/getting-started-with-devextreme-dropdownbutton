import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { DxDropDownButtonModule } from 'devextreme-angular/ui/drop-down-button';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        DxDropDownButtonModule
    ],
    providers: [ ],
    bootstrap: [AppComponent]
})
export class AppModule { }

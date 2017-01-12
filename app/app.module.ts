import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component"
import { DepositsModule } from "./deposits/deposits.module"

@NgModule({
    imports: [
        BrowserModule,
        DepositsModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    exports: [],
    providers: []
})
export class AppModule { }

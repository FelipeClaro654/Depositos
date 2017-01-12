import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from "./app.component";
import { DepositsModule } from "./deposits/deposits.module";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        DepositsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService)
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    exports: [FormsModule],
    providers: []
})
export class AppModule { }

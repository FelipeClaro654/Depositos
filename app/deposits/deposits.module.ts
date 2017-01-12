import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { DepositsListComponent } from "./list/deposits-list.component";
import { DepositsNewComponent } from "./new/deposits-new.component";
import { DepositService } from "./deposit.service"

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        DepositsListComponent,
        DepositsNewComponent
    ],
    declarations: [
        DepositsListComponent,
        DepositsNewComponent
    ],
    providers: [
        DepositService
    ],
})
export class DepositsModule { }

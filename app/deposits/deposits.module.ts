import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule} from "@angular/forms";

import { DepositService } from "./deposit.service"

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [],
    declarations: [],
    providers: [
        DepositService
    ],
})
export class DepositsModule { }

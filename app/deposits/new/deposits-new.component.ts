import { Component, OnInit } from '@angular/core';
import { Deposit } from './../deposit.model';
import { DepositService } from './../deposit.service';

@Component({
    moduleId: module.id,
    selector: 'deposits-new',
    templateUrl: 'deposits-new.component.html'
})
export class DepositsNewComponent implements OnInit {
    deposits: Deposit[] = [];

    constructor(
        private depositService: DepositService
    ) { }

    ngOnInit(): void {
        this.depositService.getDeposits()
            .then((deposits: Deposit[]) => {
                this.deposits = deposits;
            })
    }
}
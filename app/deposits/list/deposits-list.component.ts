import { Component, OnInit } from '@angular/core';
import { Deposit } from './../deposit.model';
import { DepositService } from './../deposit.service';

@Component({
    moduleId: module.id,
    selector: 'deposits-list',
    templateUrl: 'deposits-list.component.html'
})
export class DepositsListComponent implements OnInit {

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

    getTypeTrClass(type: string): {} {
        return {
            'table-success' : type === "D",
            'table-danger' : type === "W"
        }
    }

    getTypeTdClass(type: string): {} {
        return {
            'text-success' : type === "D",
            'text-danger' : type === "W"
        }
    }

    getTotal(deposits: Deposit[]): {} {
        let total: number = 0;

        for (let d of deposits){
            if(d.type === "D"){
                total += +d.value;
            }else{
                total += -(+d.value);
            }
        }
        return {total: total};
    }
}
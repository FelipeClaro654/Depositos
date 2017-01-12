import { Component, OnInit } from '@angular/core';
import { Deposit } from './deposits/deposit.model';
import { DepositService } from './deposits/deposit.service';
import { FormsModule } from "@angular/forms";

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
    
    deposit: Deposit;
    deposits: Deposit[] = [];

    constructor(
        private depositService: DepositService
    ) { }

     ngOnInit(): void {
       this.load();
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

    load(): void {
        this.deposit = new Deposit(0, "D", 0);
        this.depositService.getDeposits()
            .then((deposits: Deposit[]) => {
                this.deposits = deposits;
            })
    }

    addDeposit(deposit: Deposit): void {
        if(this.checkNumeric(deposit)){
            let promise;
            promise = this.depositService.create(this.deposit);
            this.load();
        }
    }

    checkNumeric(deposit: Deposit): boolean {
        if(isNaN(deposit.value)){
            alert("Invalid Number!");
            deposit.value = null;
            return false;
        }

        return true;
    }

    deleteDeposit(deposit: Deposit): void{
        this.depositService
            .delete(deposit).then(()=> this.load());
    }
}
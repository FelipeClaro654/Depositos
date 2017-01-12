import { Injectable } from "@angular/core";
import { DEPOSITS } from "./deposits-mock";
import { Deposit } from "./deposit.model";

@Injectable()

export class DepositService {
    getDeposits(): Promise<Deposit[]>{
        return Promise.resolve(DEPOSITS);
    }
}
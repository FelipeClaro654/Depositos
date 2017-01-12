import { Injectable } from "@angular/core";
import { Deposit } from "./deposit.model";
import { Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()

export class DepositService {

    private depositsUrl: string = "app/deposits";

    constructor(
        private http: Http
    ){}

    getDeposits(): Promise<Deposit[]>{
        return this.http.get(this.depositsUrl)
            .toPromise()
            .then(response => response.json().data as Deposit[])
    }
    
}
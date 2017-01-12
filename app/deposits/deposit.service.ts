import { Injectable } from "@angular/core";
import { Deposit } from "./deposit.model";
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()

export class DepositService {

    private depositsUrl: string = "app/deposits";
    private headers: Headers = new Headers({'Content-Type': 'application/json'})
    

    constructor(
        private http: Http
    ){}

    getDeposits(): Promise<Deposit[]>{
        return this.http.get(this.depositsUrl)
            .toPromise()
            .then(response => response.json().data as Deposit[])
    }

    create(deposit: Deposit): Promise<Deposit> {
        return this.http.post(this.depositsUrl, JSON.stringify(deposit), {headers: this.headers})
            .toPromise()
            .then((response: Response) => {
                return response.json().data as Deposit;
            });
    }

    delete(deposit: Deposit): Promise<Deposit> {
        const url = `${this.depositsUrl}/${deposit.id}`; 
         return this.http
            .delete(url)
            .toPromise()
            .then(() => deposit as Deposit);
    }
}
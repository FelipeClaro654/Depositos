
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Deposit } from './deposits/deposit.model';

export class InMemoryDataService implements InMemoryDbService {
    createDb(): {} {
        let deposits: Deposit[] = [
            {id: 1, type: "D", value: 100},
            {id: 2, type: "W", value: 200},
            {id: 3, type: "D", value: 300},
            {id: 4, type: "D", value: 400},
            {id: 5, type: "W", value: 500}
        ];

        return {deposits};
    }
}
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var deposit_service_1 = require("./../deposit.service");
var DepositsListComponent = (function () {
    function DepositsListComponent(depositService) {
        this.depositService = depositService;
        this.deposits = [];
    }
    DepositsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.depositService.getDeposits()
            .then(function (deposits) {
            _this.deposits = deposits;
        });
    };
    DepositsListComponent.prototype.getTypeTrClass = function (type) {
        return {
            'table-success': type === "D",
            'table-danger': type === "W"
        };
    };
    DepositsListComponent.prototype.getTypeTdClass = function (type) {
        return {
            'text-success': type === "D",
            'text-danger': type === "W"
        };
    };
    DepositsListComponent.prototype.getTotal = function (deposits) {
        var total = 0;
        for (var _i = 0, deposits_1 = deposits; _i < deposits_1.length; _i++) {
            var d = deposits_1[_i];
            if (d.type === "D") {
                total += +d.value;
            }
            else {
                total += -(+d.value);
            }
        }
        return { total: total };
    };
    return DepositsListComponent;
}());
DepositsListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'deposits-list',
        templateUrl: 'deposits-list.component.html'
    }),
    __metadata("design:paramtypes", [deposit_service_1.DepositService])
], DepositsListComponent);
exports.DepositsListComponent = DepositsListComponent;
//# sourceMappingURL=deposits-list.component.js.map
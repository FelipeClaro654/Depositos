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
var deposit_model_1 = require("./deposits/deposit.model");
var deposit_service_1 = require("./deposits/deposit.service");
var AppComponent = (function () {
    function AppComponent(depositService) {
        this.depositService = depositService;
        this.deposits = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.load();
    };
    AppComponent.prototype.getTypeTrClass = function (type) {
        return {
            'table-success': type === "D",
            'table-danger': type === "W"
        };
    };
    AppComponent.prototype.getTypeTdClass = function (type) {
        return {
            'text-success': type === "D",
            'text-danger': type === "W"
        };
    };
    AppComponent.prototype.getTotal = function (deposits) {
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
    AppComponent.prototype.load = function () {
        var _this = this;
        this.deposit = new deposit_model_1.Deposit(0, "D", 0);
        this.depositService.getDeposits()
            .then(function (deposits) {
            _this.deposits = deposits;
        });
    };
    AppComponent.prototype.addDeposit = function (deposit) {
        if (this.checkNumeric(deposit)) {
            var promise = void 0;
            promise = this.depositService.create(this.deposit);
            this.load();
        }
    };
    AppComponent.prototype.checkNumeric = function (deposit) {
        if (isNaN(deposit.value)) {
            alert("Invalid Number!");
            deposit.value = null;
            return false;
        }
        return true;
    };
    AppComponent.prototype.deleteDeposit = function (deposit) {
        var _this = this;
        this.depositService
            .delete(deposit).then(function () { return _this.load(); });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-app',
        templateUrl: 'app.component.html'
    }),
    __metadata("design:paramtypes", [deposit_service_1.DepositService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var deposits = [
            { id: 1, type: "D", value: 100 },
            { id: 2, type: "W", value: 200 },
            { id: 3, type: "D", value: 300 },
            { id: 4, type: "D", value: 400 },
            { id: 5, type: "W", value: 500 }
        ];
        return { deposits: deposits };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map
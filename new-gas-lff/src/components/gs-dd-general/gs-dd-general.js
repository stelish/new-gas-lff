"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var GsDDGeneralComponent = (function () {
    function GsDDGeneralComponent() {
        this.showDD = false;
        this.itemSelectedEvent = new core_1.EventEmitter();
    }
    GsDDGeneralComponent.prototype.itemSelected = function (item) {
        this.selectedItem = item;
        this.itemSelectedEvent.emit(item);
        // close dropdown
        this.showDD = false;
    };
    return GsDDGeneralComponent;
}());
__decorate([
    core_1.Input()
], GsDDGeneralComponent.prototype, "selectedItem");
__decorate([
    core_1.Input()
], GsDDGeneralComponent.prototype, "showDD");
__decorate([
    core_1.Input()
], GsDDGeneralComponent.prototype, "title");
__decorate([
    core_1.Input()
], GsDDGeneralComponent.prototype, "items");
__decorate([
    core_1.Output()
], GsDDGeneralComponent.prototype, "itemSelectedEvent");
GsDDGeneralComponent = __decorate([
    core_1.Component({
        selector: 'gs-dd-general',
        templateUrl: 'gs-dd-general.html'
    })
], GsDDGeneralComponent);
exports.GsDDGeneralComponent = GsDDGeneralComponent;
//# sourceMappingURL=gs-dd-general.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var ionic_angular_1 = require("ionic-angular");
var gs_dd_general_1 = require("./gs-dd-general");
var GsDdGeneralModule = (function () {
    function GsDdGeneralModule() {
    }
    return GsDdGeneralModule;
}());
GsDdGeneralModule = __decorate([
    core_1.NgModule({
        imports: [
            ionic_angular_1.IonicPageModule.forChild(gs_dd_general_1.GsDDGeneralComponent),
        ],
        declarations: [
            gs_dd_general_1.GsDDGeneralComponent,
        ],
        exports: [gs_dd_general_1.GsDDGeneralComponent],
        entryComponents: [
            gs_dd_general_1.GsDDGeneralComponent,
        ],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], GsDdGeneralModule);
exports.GsDdGeneralModule = GsDdGeneralModule;
//# sourceMappingURL=gs-dd-general.module.js.map
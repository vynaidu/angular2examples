"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var user_1 = require("./user");
var UserComponent = (function () {
    function UserComponent() {
        this.users = [
            new user_1.User('Mahesh', 20),
            new user_1.User('Krishna', 22),
            new user_1.User('Narendra', 30)
        ];
    }
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        selector: 'user-app',
        templateUrl: 'app/user.component.html'
    })
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=app.usercomponent.js.map
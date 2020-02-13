(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-recipe-create-recipe-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/recipie/create-recipe/create-recipe.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recipie/create-recipe/create-recipe.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Add New Recipe</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-label position=\"floating\">Recipe Name</ion-label>\n    <ion-input type=\"number\" [(ngModel)]=\"input1\"></ion-input>\n  </ion-item>\n</ion-content>"

/***/ }),

/***/ "./src/app/recipie/create-recipe/create-recipe-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/recipie/create-recipe/create-recipe-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: CreateRecipePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateRecipePageRoutingModule", function() { return CreateRecipePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _create_recipe_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-recipe.page */ "./src/app/recipie/create-recipe/create-recipe.page.ts");




var routes = [
    {
        path: '',
        component: _create_recipe_page__WEBPACK_IMPORTED_MODULE_3__["CreateRecipePage"]
    }
];
var CreateRecipePageRoutingModule = /** @class */ (function () {
    function CreateRecipePageRoutingModule() {
    }
    CreateRecipePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CreateRecipePageRoutingModule);
    return CreateRecipePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/recipie/create-recipe/create-recipe.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/recipie/create-recipe/create-recipe.module.ts ***!
  \***************************************************************/
/*! exports provided: CreateRecipePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateRecipePageModule", function() { return CreateRecipePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _create_recipe_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-recipe-routing.module */ "./src/app/recipie/create-recipe/create-recipe-routing.module.ts");
/* harmony import */ var _create_recipe_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-recipe.page */ "./src/app/recipie/create-recipe/create-recipe.page.ts");







var CreateRecipePageModule = /** @class */ (function () {
    function CreateRecipePageModule() {
    }
    CreateRecipePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _create_recipe_routing_module__WEBPACK_IMPORTED_MODULE_5__["CreateRecipePageRoutingModule"]
            ],
            declarations: [_create_recipe_page__WEBPACK_IMPORTED_MODULE_6__["CreateRecipePage"]]
        })
    ], CreateRecipePageModule);
    return CreateRecipePageModule;
}());



/***/ }),

/***/ "./src/app/recipie/create-recipe/create-recipe.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/recipie/create-recipe/create-recipe.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwaWUvY3JlYXRlLXJlY2lwZS9jcmVhdGUtcmVjaXBlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/recipie/create-recipe/create-recipe.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/recipie/create-recipe/create-recipe.page.ts ***!
  \*************************************************************/
/*! exports provided: CreateRecipePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateRecipePage", function() { return CreateRecipePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CreateRecipePage = /** @class */ (function () {
    function CreateRecipePage() {
        this.input1 = '';
    }
    CreateRecipePage.prototype.ngOnInit = function () {
    };
    CreateRecipePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-recipe',
            template: __webpack_require__(/*! raw-loader!./create-recipe.page.html */ "./node_modules/raw-loader/index.js!./src/app/recipie/create-recipe/create-recipe.page.html"),
            styles: [__webpack_require__(/*! ./create-recipe.page.scss */ "./src/app/recipie/create-recipe/create-recipe.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CreateRecipePage);
    return CreateRecipePage;
}());



/***/ })

}]);
//# sourceMappingURL=create-recipe-create-recipe-module-es5.js.map
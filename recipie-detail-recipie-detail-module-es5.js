(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recipie-detail-recipie-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/recipie/recipie-detail/recipie-detail.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recipie/recipie-detail/recipie-detail.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>{{ loadedRecipe.title }}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"['/recipie']\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"onDeleteRecipe()\" ><ion-icon name=\"trash\" slot=\"icon-only\"></ion-icon></ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid no-padding>\n    <ion-row>\n      <ion-col no-padding>\n        <ion-img [src]=\"loadedRecipe.imageUrl\"></ion-img>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-list>\n          <ion-item *ngFor=\"let item of loadedRecipe.ingredients\">{{ item }}</ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/recipie/recipie-detail/recipie-detail-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/recipie/recipie-detail/recipie-detail-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: RecipieDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipieDetailPageRoutingModule", function() { return RecipieDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _recipie_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recipie-detail.page */ "./src/app/recipie/recipie-detail/recipie-detail.page.ts");




var routes = [
    {
        path: '',
        component: _recipie_detail_page__WEBPACK_IMPORTED_MODULE_3__["RecipieDetailPage"]
    }
];
var RecipieDetailPageRoutingModule = /** @class */ (function () {
    function RecipieDetailPageRoutingModule() {
    }
    RecipieDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], RecipieDetailPageRoutingModule);
    return RecipieDetailPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/recipie/recipie-detail/recipie-detail.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/recipie/recipie-detail/recipie-detail.module.ts ***!
  \*****************************************************************/
/*! exports provided: RecipieDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipieDetailPageModule", function() { return RecipieDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _recipie_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recipie-detail-routing.module */ "./src/app/recipie/recipie-detail/recipie-detail-routing.module.ts");
/* harmony import */ var _recipie_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recipie-detail.page */ "./src/app/recipie/recipie-detail/recipie-detail.page.ts");







var RecipieDetailPageModule = /** @class */ (function () {
    function RecipieDetailPageModule() {
    }
    RecipieDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _recipie_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["RecipieDetailPageRoutingModule"]
            ],
            declarations: [_recipie_detail_page__WEBPACK_IMPORTED_MODULE_6__["RecipieDetailPage"]]
        })
    ], RecipieDetailPageModule);
    return RecipieDetailPageModule;
}());



/***/ }),

/***/ "./src/app/recipie/recipie-detail/recipie-detail.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/recipie/recipie-detail/recipie-detail.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwaWUvcmVjaXBpZS1kZXRhaWwvcmVjaXBpZS1kZXRhaWwucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/recipie/recipie-detail/recipie-detail.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/recipie/recipie-detail/recipie-detail.page.ts ***!
  \***************************************************************/
/*! exports provided: RecipieDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipieDetailPage", function() { return RecipieDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _recipies_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../recipies.service */ "./src/app/recipie/recipies.service.ts");





var RecipieDetailPage = /** @class */ (function () {
    function RecipieDetailPage(activatedRoute, recipiesService, router, alertCtrl) {
        this.activatedRoute = activatedRoute;
        this.recipiesService = recipiesService;
        this.router = router;
        this.alertCtrl = alertCtrl;
    }
    RecipieDetailPage.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (paramMap) {
            console.log(paramMap);
            if (!paramMap.has('recipeId')) {
                _this.router.navigate(['/recipie']);
                console.log('not valid adress');
                return;
            }
            var recipeId = paramMap.get('recipeId');
            _this.loadedRecipe = _this.recipiesService.getRecipe(recipeId);
            if (Object.entries(_this.loadedRecipe).length === 0) {
                _this.router.navigate(['/recipie']);
            }
        });
    };
    RecipieDetailPage.prototype.onDeleteRecipe = function () {
        var _this = this;
        this.alertCtrl.create({
            header: 'Are you sure',
            message: 'Do you realy want to delete the recipie?',
            buttons: [{
                    text: 'Cancel',
                    role: 'cancel',
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.recipiesService.deleteRecipie(_this.loadedRecipe.id);
                        _this.router.navigate(['/recipie']);
                    }
                }]
        }).then(function (alertEl) {
            alertEl.present();
        });
    };
    RecipieDetailPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _recipies_service__WEBPACK_IMPORTED_MODULE_4__["RecipiesService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
    ]; };
    RecipieDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipie-detail',
            template: __webpack_require__(/*! raw-loader!./recipie-detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/recipie/recipie-detail/recipie-detail.page.html"),
            styles: [__webpack_require__(/*! ./recipie-detail.page.scss */ "./src/app/recipie/recipie-detail/recipie-detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _recipies_service__WEBPACK_IMPORTED_MODULE_4__["RecipiesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
    ], RecipieDetailPage);
    return RecipieDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=recipie-detail-recipie-detail-module-es5.js.map
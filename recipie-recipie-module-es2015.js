(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recipie-recipie-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/recipie/recipie.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recipie/recipie.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Recipies</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let recpie of recipies\" [routerLink]=\"['./', recpie.id]\">\n      <ion-avatar slot=\"start\">\n        <ion-img [src]=\"recpie.imageUrl\"></ion-img>\n      </ion-avatar>\n      <ion-label>\n        {{ recpie.title }}\n      </ion-label>\n    </ion-item>\n  </ion-list>\n  <ion-button margin small (click)='deleteRecip()'>\n    <ion-icon slot=\"start\" name=\"add\"></ion-icon>Add Recipe\n  </ion-button>\n  <ion-button [routerLink]=\"['./create-recipe']\">navigate</ion-button>\n</ion-content>"

/***/ }),

/***/ "./src/app/recipie/recipie-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/recipie/recipie-routing.module.ts ***!
  \***************************************************/
/*! exports provided: RecipiePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipiePageRoutingModule", function() { return RecipiePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _recipie_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recipie.page */ "./src/app/recipie/recipie.page.ts");




const routes = [
    {
        path: '',
        component: _recipie_page__WEBPACK_IMPORTED_MODULE_3__["RecipiePage"]
    },
    {
        path: 'create-recipe',
        loadChildren: () => __webpack_require__.e(/*! import() | create-recipe-create-recipe-module */ "create-recipe-create-recipe-module").then(__webpack_require__.bind(null, /*! ./create-recipe/create-recipe.module */ "./src/app/recipie/create-recipe/create-recipe.module.ts")).then(m => m.CreateRecipePageModule)
    },
    {
        path: ':recipeId',
        loadChildren: () => __webpack_require__.e(/*! import() | recipie-detail-recipie-detail-module */ "recipie-detail-recipie-detail-module").then(__webpack_require__.bind(null, /*! ./recipie-detail/recipie-detail.module */ "./src/app/recipie/recipie-detail/recipie-detail.module.ts")).then(m => m.RecipieDetailPageModule)
    },
];
let RecipiePageRoutingModule = class RecipiePageRoutingModule {
};
RecipiePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RecipiePageRoutingModule);



/***/ }),

/***/ "./src/app/recipie/recipie.module.ts":
/*!*******************************************!*\
  !*** ./src/app/recipie/recipie.module.ts ***!
  \*******************************************/
/*! exports provided: RecipiePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipiePageModule", function() { return RecipiePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _recipie_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recipie-routing.module */ "./src/app/recipie/recipie-routing.module.ts");
/* harmony import */ var _recipie_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recipie.page */ "./src/app/recipie/recipie.page.ts");







let RecipiePageModule = class RecipiePageModule {
};
RecipiePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _recipie_routing_module__WEBPACK_IMPORTED_MODULE_5__["RecipiePageRoutingModule"]
        ],
        declarations: [_recipie_page__WEBPACK_IMPORTED_MODULE_6__["RecipiePage"]]
    })
], RecipiePageModule);



/***/ }),

/***/ "./src/app/recipie/recipie.page.scss":
/*!*******************************************!*\
  !*** ./src/app/recipie/recipie.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwaWUvcmVjaXBpZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/recipie/recipie.page.ts":
/*!*****************************************!*\
  !*** ./src/app/recipie/recipie.page.ts ***!
  \*****************************************/
/*! exports provided: RecipiePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipiePage", function() { return RecipiePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _recipies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipies.service */ "./src/app/recipie/recipies.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let RecipiePage = class RecipiePage {
    constructor(recipiesService, router) {
        this.recipiesService = recipiesService;
        this.router = router;
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.recipies = this.recipiesService.getAllRecipies();
    }
    deleteRecip() {
        this.recipiesService.addRecipe();
        this.ionViewWillEnter();
    }
};
RecipiePage.ctorParameters = () => [
    { type: _recipies_service__WEBPACK_IMPORTED_MODULE_2__["RecipiesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
RecipiePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recipie',
        template: __webpack_require__(/*! raw-loader!./recipie.page.html */ "./node_modules/raw-loader/index.js!./src/app/recipie/recipie.page.html"),
        styles: [__webpack_require__(/*! ./recipie.page.scss */ "./src/app/recipie/recipie.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_recipies_service__WEBPACK_IMPORTED_MODULE_2__["RecipiesService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], RecipiePage);



/***/ }),

/***/ "./src/app/recipie/recipies.service.ts":
/*!*********************************************!*\
  !*** ./src/app/recipie/recipies.service.ts ***!
  \*********************************************/
/*! exports provided: RecipiesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipiesService", function() { return RecipiesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RecipiesService = class RecipiesService {
    constructor() {
        this.recipies = [
            {
                id: 'r1',
                title: 'Schnitzel',
                imageUrl: 'https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-5.jpg',
                ingredients: ['pork', 'french fries', 'salad']
            },
            {
                id: 'r2',
                title: 'Spaghetti',
                imageUrl: 'https://www.archanaskitchen.com/images/archanaskitchen/10-Brands/DelMonte-KidsRecipes/Spaghetti_Pasta_Recipe_In_Creamy_Tomato_Sauce_-_Kids_Recipes_Made_With_Del_Monte-3.jpg',
                ingredients: ['Spaghetti', 'meat', 'tomatoes']
            },
        ];
    }
    getAllRecipies() {
        return [...this.recipies];
    }
    getRecipe(recipieId) {
        return Object.assign({}, this.recipies.find(recipie => {
            return recipie.id === recipieId;
        }));
    }
    deleteRecipie(recipieId) {
        this.recipies = this.recipies.filter(recipe => {
            return recipe.id !== recipieId;
        });
    }
    addRecipe() {
        this.recipies.push({
            id: 'r3',
            title: 'fish Cakes',
            imageUrl: 'https://glutenfreecuppatea.co.uk/wp-content/uploads/2017/11/gluten-free-smoked-haddock-fishcakes-dairy-free-low-fodmap-featured.jpg',
            ingredients: ['fish', 'breadcrumbs', 'potatoes'],
        });
    }
};
RecipiesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], RecipiesService);



/***/ })

}]);
//# sourceMappingURL=recipie-recipie-module-es2015.js.map
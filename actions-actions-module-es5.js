(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["actions-actions-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/to-do/actions/actions.page.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/to-do/actions/actions.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesToDoActionsActionsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color='primary'>\n    <ion-title>Actions</ion-title>\n    <ion-buttons *ngIf=\"this.srtBy === 'custom'\" slot=\"end\">\n      <ion-button (click)='editAct()'>Move items</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-toolbar mode='ios'>\n    <ion-segment (ionChange)='dayRefresh()' style=\"width: 90%;\" [(ngModel)]='selected' value=\"day\">\n\n      <ion-segment-button value=\"day\" layout=\"icon-start\">\n        <ion-icon name=\"today-outline\"></ion-icon>\n        <ion-label>Day</ion-label> \n      </ion-segment-button>\n\n      <ion-segment-button value=\"week\" layout='icon-start'>\n        <ion-icon name=\"calendar-outline\"></ion-icon>\n        <ion-label>Week</ion-label>\n      </ion-segment-button>\n      \n      <ion-segment-button value=\"all\" layout='icon-start'>\n        <ion-icon name=\"list-outline\"></ion-icon>\n        <ion-label>All</ion-label>\n      </ion-segment-button>\n      \n    </ion-segment>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"presentPopover($event)\">\n        <!--<ion-label>Sort</ion-label>-->\n        <ion-icon background='primary' size='medium' name=\"swap-vertical-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n<!-- THIS PART IS SHOWN WHEN NOT SORTING BY CATAGORY -->\n  <ion-reorder-group *ngIf=\"this.srtBy !== 'catagory'; else mainElse\" (ionItemReorder)='doReorder($event)' [disabled]='!edit'>\n    <div *ngFor=\"let action of actions\">\n        <!-- this section is if the the user has selected to edit the order of there actions-->\n      <ion-reorder *ngIf=\"edit === true; else elseBlock\">\n        <ion-item>\n          <ion-label>\n            <h6>{{action.name}}</h6>\n            <p>Catagory - {{action.catagory}}</p>\n            <p>Deadline - {{this.dateToDisplay(action.deadline)}}</p>\n          </ion-label>\n          <ion-icon name=\"reorder-three-outline\"></ion-icon>\n        </ion-item>\n      </ion-reorder>\n\n      <ng-template #elseBlock>\n        <ion-item-sliding>\n          <ion-item lines='full' class=\"action\">\n            <ion-label>\n              <h6>{{action.name}}</h6>\n              <p>Catagory - {{action.catagory}}</p>\n              <p>Deadline - {{this.dateToDisplay(action.deadline)}}</p>\n            </ion-label>\n  \n            <ion-checkbox slot=\"end\" [(ngModel)]=\"action.completed\"></ion-checkbox>\n          </ion-item>\n  \n          <ion-item-options>\n            <ion-item-option (click)='showModal(action)' color=\"secondary\">\n              <ion-icon slot=\"icon-only\" name=\"create-outline\"></ion-icon>\n            </ion-item-option>\n\n            <ion-item-option (click)='deleteAction(action)' color=\"danger\">\n              <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n            </ion-item-option>\n          </ion-item-options>\n        </ion-item-sliding>\n      </ng-template>\n\n    </div>\n  </ion-reorder-group>\n\n<!-- THIS PART IS SHOWN WHEN YOU ARE SORTING BY CATAGORY -->\n  <ng-template #mainElse>\n    <div *ngFor=\"let cat of this.catagories\">\n\n      <ion-list *ngIf=\"checkCatFull(cat)\">\n        \n        <ion-list-header>\n          <ion-label>{{ cat }}</ion-label>\n          <ion-button (click)=\"reorderCatFun(cat)\" >Order</ion-button>\n        </ion-list-header>\n\n          \n        <ion-reorder-group (ionItemReorder)='moveCatPos(cat, $event)' [disabled]='!checkRe(cat)'>\n          <div *ngFor=\"let action of actions\">\n            <div *ngIf=\"action.catagory === cat\">\n              <ion-reorder *ngIf=\"checkRe(cat); else notReorder\">\n                <ion-item >\n                  <ion-label>\n                    <h6>{{action.name}}</h6>\n                    <p>Deadline - {{this.dateToDisplay(action.deadline)}}</p>\n                  </ion-label>\n                  <ion-icon name=\"reorder-three-outline\"></ion-icon>\n                </ion-item>\n              </ion-reorder>\n            </div>\n          \n            \n            <ng-template #notReorder>\n              <ion-item-sliding *ngIf=\"action.catagory === cat\">\n                <ion-item lines='full' class=\"action\">\n                  <ion-label>\n                    <h6>{{action.name}}</h6>\n                    <p>Deadline - {{this.dateToDisplay(action.deadline)}}</p>\n                  </ion-label>\n                  \n                  <ion-checkbox slot=\"end\" [(ngModel)]=\"action.completed\"></ion-checkbox>\n                </ion-item>\n                \n                <ion-item-options>\n                  <ion-item-option (click)='showModal(action)' color=\"secondary\">\n                    <ion-icon slot=\"icon-only\" name=\"create-outline\"></ion-icon>\n                  </ion-item-option>\n                  \n                  <ion-item-option (click)='deleteAction(action)' color=\"danger\">\n                    <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n                  </ion-item-option>\n                </ion-item-options>\n                \n              </ion-item-sliding>\n            </ng-template>\n          \n          </div>\n        </ion-reorder-group>\n      </ion-list>\n\n    </div>\n    </ng-template>\n\n    \n  <!--This creates a square so that the button does not cover important infomation-->\n  <div style=\"height: 80px\"></div>\n  <!--Button to add a new action-->\n  <ion-fab (click)='showModal(\"new\")' vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/Pages/to-do/actions/actions-routing.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/Pages/to-do/actions/actions-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: ActionsPageRoutingModule */

    /***/
    function srcAppPagesToDoActionsActionsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActionsPageRoutingModule", function () {
        return ActionsPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _actions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./actions.page */
      "./src/app/Pages/to-do/actions/actions.page.ts");

      var routes = [{
        path: '',
        component: _actions_page__WEBPACK_IMPORTED_MODULE_3__["ActionsPage"]
      }];

      var ActionsPageRoutingModule = function ActionsPageRoutingModule() {
        _classCallCheck(this, ActionsPageRoutingModule);
      };

      ActionsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ActionsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/Pages/to-do/actions/actions.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/Pages/to-do/actions/actions.module.ts ***!
      \*******************************************************/

    /*! exports provided: ActionsPageModule */

    /***/
    function srcAppPagesToDoActionsActionsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActionsPageModule", function () {
        return ActionsPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _actions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./actions-routing.module */
      "./src/app/Pages/to-do/actions/actions-routing.module.ts");
      /* harmony import */


      var _actions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./actions.page */
      "./src/app/Pages/to-do/actions/actions.page.ts");
      /* harmony import */


      var _add_action_add_action_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../add-action/add-action.module */
      "./src/app/Pages/add-action/add-action.module.ts");
      /* harmony import */


      var _pop_over_pop_over_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../pop-over/pop-over.module */
      "./src/app/Pages/pop-over/pop-over.module.ts");

      var ActionsPageModule = function ActionsPageModule() {
        _classCallCheck(this, ActionsPageModule);
      };

      ActionsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _actions_routing_module__WEBPACK_IMPORTED_MODULE_5__["ActionsPageRoutingModule"], _add_action_add_action_module__WEBPACK_IMPORTED_MODULE_7__["AddActionPageModule"], _pop_over_pop_over_module__WEBPACK_IMPORTED_MODULE_8__["PopOverPageModule"]],
        declarations: [_actions_page__WEBPACK_IMPORTED_MODULE_6__["ActionsPage"]]
      })], ActionsPageModule);
      /***/
    },

    /***/
    "./src/app/Pages/to-do/actions/actions.page.scss":
    /*!*******************************************************!*\
      !*** ./src/app/Pages/to-do/actions/actions.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesToDoActionsActionsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".addButton {\n  bottom: 0;\n  right: 0;\n  position: fixed;\n  z-index: 10;\n  margin: 0px 10px 10px 10px;\n  --border-radius: 500px;\n  --padding-end: 0px;\n  --padding-start: 0px;\n  height: 50px;\n  width: 60px;\n}\n.addButton ion-icon {\n  font-size: larger;\n}\nion-list-header {\n  text-transform: capitalize;\n  font-weight: bolder;\n  font-size: larger;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvdG8tZG8vYWN0aW9ucy9hY3Rpb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFNBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBREo7QUFFSTtFQUNJLGlCQUFBO0FBQVI7QUFJQTtFQUNJLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQURKIiwiZmlsZSI6InNyYy9hcHAvUGFnZXMvdG8tZG8vYWN0aW9ucy9hY3Rpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4uYWRkQnV0dG9ue1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogMTA7XG4gICAgbWFyZ2luOiAwcHggMTBweCAxMHB4IDEwcHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MDBweDtcbiAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiBsYXJnZXI7XG4gICAgfSBcbn1cblxuaW9uLWxpc3QtaGVhZGVye1xuICAgIHRleHQtdHJhbnNmb3JtOmNhcGl0YWxpemU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBmb250LXNpemU6IGxhcmdlcjtcbn1cblxuIl19 */";
      /***/
    },

    /***/
    "./src/app/Pages/to-do/actions/actions.page.ts":
    /*!*****************************************************!*\
      !*** ./src/app/Pages/to-do/actions/actions.page.ts ***!
      \*****************************************************/

    /*! exports provided: ActionsPage */

    /***/
    function srcAppPagesToDoActionsActionsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActionsPage", function () {
        return ActionsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _add_action_add_action_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../add-action/add-action.page */
      "./src/app/Pages/add-action/add-action.page.ts");
      /* harmony import */


      var src_app_Services_actions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/Services/actions.service */
      "./src/app/Services/actions.service.ts");
      /* harmony import */


      var _pop_over_pop_over_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../pop-over/pop-over.page */
      "./src/app/Pages/pop-over/pop-over.page.ts");
      /* harmony import */


      var src_app_Services_time_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/Services/time.service */
      "./src/app/Services/time.service.ts");

      var ActionsPage = /*#__PURE__*/function () {
        function ActionsPage(modalCtrl, actionsService, popoverController, timeService) {
          _classCallCheck(this, ActionsPage);

          this.modalCtrl = modalCtrl;
          this.actionsService = actionsService;
          this.popoverController = popoverController;
          this.timeService = timeService;
          this.selected = this.actionsService.getSelecView();
          this.catagories = this.actionsService.catagories;
          this.edit = false;
          this.reorderCat = [];
        }

        _createClass(ActionsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.dayRefresh(); // creates the reorderCat array full of falses for how many catagories there are used to reorder catagories

            for (var i = 0; i < this.catagories.length; i++) {
              this.reorderCat[i] = false;
            }
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.dayRefresh();
          } // essentioally resfreshes the page

        }, {
          key: "dayRefresh",
          value: function dayRefresh() {
            this.actionsService.setSelecView(this.selected);
            this.srtBy = this.actionsService.getSrt();
            this.actionsService.updateCurrent();
            this.actions = this.actionsService.getActions();
          } // the code to pop up the add modal when the add button is pressed

        }, {
          key: "showModal",
          value: function showModal(passed) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      // this if else sets the data before going into the modal depending on if it is an edit or not
                      if (passed === 'new') {
                        this.properties = {
                          name: undefined,
                          deadline: undefined,
                          catagory: 'None',
                          edit: false
                        };
                      } else {
                        console.log('deadline', passed.deadline);
                        this.properties = {
                          name: passed.name,
                          deadline: passed.deadline,
                          catagory: passed.catagory,
                          edit: true,
                          itemEditing: passed
                        };
                      }

                      _context.next = 3;
                      return this.modalCtrl.create({
                        component: _add_action_add_action_page__WEBPACK_IMPORTED_MODULE_3__["AddActionPage"],
                        cssClass: 'add-modal-class',
                        swipeToClose: true,
                        backdropDismiss: true,
                        componentProps: this.properties
                      });

                    case 3:
                      modal = _context.sent;
                      modal.onDidDismiss().then(function (dataReturnded) {
                        _this.dayRefresh();
                      });
                      _context.next = 7;
                      return modal.present();

                    case 7:
                      return _context.abrupt("return", _context.sent);

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          } // code to show the popover to select how you want to sort the actions

        }, {
          key: "presentPopover",
          value: function presentPopover(ev) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              var popover, popOpn;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.popoverController.create({
                        component: _pop_over_pop_over_page__WEBPACK_IMPORTED_MODULE_5__["PopOverPage"],
                        cssClass: 'my-custom-class',
                        event: ev,
                        translucent: true
                      });

                    case 2:
                      popover = _context2.sent;
                      popOpn = window.setInterval(function () {
                        _this2.actionsService.updateCurrent();

                        _this2.dayRefresh();
                      }, 100);
                      popover.onDidDismiss().then(function (dataReturnded) {
                        clearInterval(popOpn);
                        _this2.srtBy = _this2.actionsService.getSrt();
                      });
                      _context2.next = 7;
                      return popover.present();

                    case 7:
                      return _context2.abrupt("return", _context2.sent);

                    case 8:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          } // function that deleltes the action you pass in from thw the actions array

        }, {
          key: "deleteAction",
          value: function deleteAction(action) {
            this.actionsService.deleteAction(action);
            this.dayRefresh();
          }
        }, {
          key: "doReorder",
          value: function doReorder(ev) {
            // The `from` and `to` properties contain the index of the item
            // when the drag started and ended, respectively
            this.actionsService.moveAction(ev.detail.from, ev.detail.to); // Finish the reorder and position the item in the DOM based on
            // where the gesture ended. This method can also be called directly
            // by the reorder group

            ev.detail.complete();
          }
        }, {
          key: "editAct",
          value: function editAct() {
            this.edit = !this.edit;
            console.log(this.edit);
          } //////////////// THIS STUFF IS FOR REORDING AND PRIORITSING WHEN IN THE CATAGORY VIEW ////////////////////////////
          // runs when the reorder button is pressed for a catagory

        }, {
          key: "reorderCatFun",
          value: function reorderCatFun(cata) {
            var pos = this.catagories.indexOf(cata);
            this.reorderCat[pos] = !this.reorderCat[pos];
          } // checks wehter the catagory should be in the reorder state or not

        }, {
          key: "checkRe",
          value: function checkRe(cata) {
            var pos = this.catagories.indexOf(cata);
            return this.reorderCat[pos];
          }
        }, {
          key: "moveCatPos",
          value: function moveCatPos(cata, ev) {
            // The `from` and `to` properties contain the index of the item
            // when the drag started and ended, respectively
            this.actionsService.moveCatagory(cata, ev.detail.from, ev.detail.to); // Finish the reorder and position the item in the DOM based on
            // where the gesture ended. This method can also be called directly
            // by the reorder group

            ev.detail.complete();
            this.dayRefresh();
          } ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        }, {
          key: "dateToDay",
          value: function dateToDay(date) {
            return this.timeService.dateToDay(date);
          }
        }, {
          key: "checkCatFull",
          value: function checkCatFull(cat) {
            var filtered = this.actions.filter(function (x) {
              return x.catagory === cat;
            });
            return filtered.length > 0;
          }
        }, {
          key: "dateToDisplay",
          value: function dateToDisplay(date) {
            return this.timeService.dateToDisplay(date);
          }
        }]);

        return ActionsPage;
      }();

      ActionsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: src_app_Services_actions_service__WEBPACK_IMPORTED_MODULE_4__["ActionsService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
        }, {
          type: src_app_Services_time_service__WEBPACK_IMPORTED_MODULE_6__["TimeService"]
        }];
      };

      ActionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-actions',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./actions.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/to-do/actions/actions.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./actions.page.scss */
        "./src/app/Pages/to-do/actions/actions.page.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_app_Services_actions_service__WEBPACK_IMPORTED_MODULE_4__["ActionsService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], src_app_Services_time_service__WEBPACK_IMPORTED_MODULE_6__["TimeService"]])], ActionsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=actions-actions-module-es5.js.map
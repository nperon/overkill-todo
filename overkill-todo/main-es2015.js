(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <div class=\"header\">\n    <span>{{title}}</span>\n    <span class=\"spacer\"></span>\n    <app-dialog-opening-button></app-dialog-opening-button>  \n  </div>\n</mat-toolbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-todos-table></app-todos-table>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/dialog-opening-button/dialog-opening-button.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/dialog-opening-button/dialog-opening-button.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button\n  mat-raised-button\n  (click)=\"openDialog()\"\n>Add Todo</button>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/todo-add/todo-add.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/todo-add/todo-add.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"todo-card\">\n  <mat-card-title>New Todo</mat-card-title>\n  <form [formGroup]=\"todoForm\" (ngSubmit)=\"onSubmit()\">\n    <mat-card-content>\n      <mat-form-field>\n        <input\n          matInput\n          placeholder=\"Title\"\n          formControlName=title\n        />\n        <mat-error *ngIf=\"f.title.errors && f.title.touched\">\n          Title is required\n        </mat-error>\n      </mat-form-field>\n    </mat-card-content>\n    <mat-card-content>\n      <mat-form-field>\n      <textarea\n        matInput\n        placeholder=\"Description\"\n        matTextareaAutosize\n        formControlName=description\n      ></textarea>\n      </mat-form-field>\n    </mat-card-content>\n    <mat-card-footer>\n      <button\n        mat-raised-button\n        color=\"primary\"\n        type=\"submit\"\n        class=\"todo-submit-button\"\n        [disabled]=\"!todoForm.valid\"\n      >Submit Form</button>\n    </mat-card-footer>\n  </form>\n</mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/todos-table/todos-table.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/todos-table/todos-table.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8 todos-table\">\n  <table mat-table class=\"full-width-table\" matSort aria-label=\"Elements\">\n\n    <!-- Title Column -->\n    <ng-container matColumnDef=\"title\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header disabled>Title</th>\n      <td\n        mat-cell\n        *matCellDef=\"let row\"\n        [ngClass]=\"{ 'done-todo-title': row.done }\"\n        routerLink=\"/detail/{{row.id}}\"\n      >{{row.title}}</td>\n    </ng-container>\n\n    <!-- Done Column -->\n    <ng-container matColumnDef=\"done\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header disabled>Done</th>\n      <td mat-cell *matCellDef=\"let row\">\n        <mat-checkbox\n          [checked]=\"row.done\"\n          (change)=\"toggle(row, $event)\"\n        ></mat-checkbox>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n  </table>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/todo-detail/todo-detail.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/todo-detail/todo-detail.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"todo-card\">\n  <mat-card-title\n    [ngClass]=\"{ 'done-todo-title': todo.done }\"\n  >{{todo.title}}</mat-card-title>\n  <mat-card-content\n  >{{todo.description}}</mat-card-content>\n  <mat-card-footer\n    (click)=\"goBack()\"\n    class=\"footer-text\"\n  >\n    <button mat-button>Back to Todos list</button>\n  </mat-card-footer>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_constants_routing_paths__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/constants/routing-paths */ "./src/app/shared/constants/routing-paths.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _todo_detail_todo_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todo-detail/todo-detail.component */ "./src/app/todo-detail/todo-detail.component.ts");






const routes = [
    { path: _shared_constants_routing_paths__WEBPACK_IMPORTED_MODULE_3__["RoutingPaths"].EMPTY, component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: `${_shared_constants_routing_paths__WEBPACK_IMPORTED_MODULE_3__["RoutingPaths"].DETAIL}/:id`, component: _todo_detail_todo_detail_component__WEBPACK_IMPORTED_MODULE_5__["TodoDetailComponent"] },
    { path: _shared_constants_routing_paths__WEBPACK_IMPORTED_MODULE_3__["RoutingPaths"].DEFAULT, component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spacer {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n\nmat-toolbar {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.header {\n  max-width: 800px;\n  -webkit-box-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ucGVyb24vRG9jdW1lbnRzL292ZXJraWxsLXRvZG8vc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO1VBQUEsT0FBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtVQUFBLE9BQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGFjZXIge1xuICBmbGV4OiAxO1xufVxuXG5tYXQtdG9vbGJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaGVhZGVyIHtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbn0iLCIuc3BhY2VyIHtcbiAgZmxleDogMTtcbn1cblxubWF0LXRvb2xiYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmhlYWRlciB7XG4gIG1heC13aWR0aDogODAwcHg7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Overkill Todo';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_reducers_todos_effects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/reducers/todos.effects */ "./src/app/shared/reducers/todos.effects.ts");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _shared_services_in_memory_data_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/services/in-memory-data.service */ "./src/app/shared/services/in-memory-data.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _todo_detail_todo_detail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./todo-detail/todo-detail.component */ "./src/app/todo-detail/todo-detail.component.ts");
/* harmony import */ var _shared_components_dialog_opening_button_dialog_opening_button_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/components/dialog-opening-button/dialog-opening-button.component */ "./src/app/shared/components/dialog-opening-button/dialog-opening-button.component.ts");
/* harmony import */ var _shared_components_todo_add_todo_add_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/components/todo-add/todo-add.component */ "./src/app/shared/components/todo-add/todo-add.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _shared_components_todos_table_todos_table_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/components/todos-table/todos-table.component */ "./src/app/shared/components/todos-table/todos-table.component.ts");
/* harmony import */ var _shared_reducers__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/reducers */ "./src/app/shared/reducers/index.ts");























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_20__["HomeComponent"],
            _shared_components_todos_table_todos_table_component__WEBPACK_IMPORTED_MODULE_21__["TodosTableComponent"],
            _todo_detail_todo_detail_component__WEBPACK_IMPORTED_MODULE_17__["TodoDetailComponent"],
            _shared_components_dialog_opening_button_dialog_opening_button_component__WEBPACK_IMPORTED_MODULE_18__["DialogOpeningButtonComponent"],
            _shared_components_todo_add_todo_add_component__WEBPACK_IMPORTED_MODULE_19__["TodoAddComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreModule"].forRoot(_shared_reducers__WEBPACK_IMPORTED_MODULE_22__["reducers"], {
                metaReducers: _shared_reducers__WEBPACK_IMPORTED_MODULE_22__["metaReducers"],
                runtimeChecks: {
                    strictStateImmutability: true,
                    strictActionImmutability: true
                }
            }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__["EffectsModule"].forRoot([_shared_reducers_todos_effects__WEBPACK_IMPORTED_MODULE_13__["TodosEffects"]]),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_14__["HttpClientInMemoryWebApiModule"].forRoot(_shared_services_in_memory_data_service__WEBPACK_IMPORTED_MODULE_15__["InMemoryDataService"], { dataEncapsulation: false }),
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"]],
        schemas: [
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["NO_ERRORS_SCHEMA"]
        ],
        entryComponents: [_shared_components_todo_add_todo_add_component__WEBPACK_IMPORTED_MODULE_19__["TodoAddComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/shared/components/dialog-opening-button/dialog-opening-button.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-opening-button/dialog-opening-button.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2RpYWxvZy1vcGVuaW5nLWJ1dHRvbi9kaWFsb2ctb3BlbmluZy1idXR0b24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/components/dialog-opening-button/dialog-opening-button.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/shared/components/dialog-opening-button/dialog-opening-button.component.ts ***!
  \********************************************************************************************/
/*! exports provided: DialogOpeningButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOpeningButtonComponent", function() { return DialogOpeningButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _todo_add_todo_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../todo-add/todo-add.component */ "./src/app/shared/components/todo-add/todo-add.component.ts");




let DialogOpeningButtonComponent = class DialogOpeningButtonComponent {
    constructor(dialog) {
        this.dialog = dialog;
    }
    ngOnInit() {
    }
    openDialog() {
        this.todoAddDialogRef = this.dialog.open(_todo_add_todo_add_component__WEBPACK_IMPORTED_MODULE_3__["TodoAddComponent"], null);
    }
};
DialogOpeningButtonComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
DialogOpeningButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dialog-opening-button',
        template: __webpack_require__(/*! raw-loader!./dialog-opening-button.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/dialog-opening-button/dialog-opening-button.component.html"),
        styles: [__webpack_require__(/*! ./dialog-opening-button.component.scss */ "./src/app/shared/components/dialog-opening-button/dialog-opening-button.component.scss")]
    })
], DialogOpeningButtonComponent);



/***/ }),

/***/ "./src/app/shared/components/todo-add/todo-add.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/todo-add/todo-add.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card-footer {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.todo-submit-button {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ucGVyb24vRG9jdW1lbnRzL292ZXJraWxsLXRvZG8vc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy90b2RvLWFkZC90b2RvLWFkZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdG9kby1hZGQvdG9kby1hZGQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3RvZG8tYWRkL3RvZG8tYWRkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQtZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50b2RvLXN1Ym1pdC1idXR0b24ge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuIiwibWF0LWNhcmQtZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50b2RvLXN1Ym1pdC1idXR0b24ge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/todo-add/todo-add.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/todo-add/todo-add.component.ts ***!
  \******************************************************************/
/*! exports provided: TodoAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoAddComponent", function() { return TodoAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _reducers_todos_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../reducers/todos.effects */ "./src/app/shared/reducers/todos.effects.ts");






let TodoAddComponent = class TodoAddComponent {
    constructor(formBuilder, store, dialogRef) {
        this.formBuilder = formBuilder;
        this.store = store;
        this.dialogRef = dialogRef;
    }
    ngOnInit() {
        this.todoForm = this.formBuilder.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            description: ['', null]
        });
    }
    // convenience getter for easy access to form fields
    get f() {
        return this.todoForm.controls;
    }
    onSubmit() {
        if (this.todoForm.invalid) {
            return;
        }
        this.store.dispatch(new _reducers_todos_effects__WEBPACK_IMPORTED_MODULE_5__["CreateTodoAction"](this.todoForm.value.title, false, this.todoForm.value.description));
        this.dialogRef.close(true);
    }
};
TodoAddComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] }
];
TodoAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-todo-add',
        template: __webpack_require__(/*! raw-loader!./todo-add.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/todo-add/todo-add.component.html"),
        styles: [__webpack_require__(/*! ./todo-add.component.scss */ "./src/app/shared/components/todo-add/todo-add.component.scss")]
    })
], TodoAddComponent);



/***/ }),

/***/ "./src/app/shared/components/todos-table/todos-table-datasource.ts":
/*!*************************************************************************!*\
  !*** ./src/app/shared/components/todos-table/todos-table-datasource.ts ***!
  \*************************************************************************/
/*! exports provided: TodosTableDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosTableDataSource", function() { return TodosTableDataSource; });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm2015/collections.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");


/**
 * Data source for the TodosTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
class TodosTableDataSource extends _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["DataSource"] {
    constructor(todosStore) {
        super();
        this.todosState = todosStore.select('todos');
    }
    /**
     * Connect this data source to the table. The table will only update when
     * the returned stream emits new items.
     * @returns A stream of the items to be rendered.
     */
    connect() {
        return this.todosState;
    }
    /**
     *  Called when the table is being destroyed. Use this function, to clean up
     * any open connections or free any held resources that were set up during connect.
     */
    disconnect() { }
}
TodosTableDataSource.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }
];


/***/ }),

/***/ "./src/app/shared/components/todos-table/todos-table.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/todos-table/todos-table.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width-table {\n  width: 100%;\n}\n\n.todos-table {\n  max-width: 800px;\n  margin: 20px auto;\n}\n\n.done-todo-title {\n  text-decoration: line-through;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ucGVyb24vRG9jdW1lbnRzL292ZXJraWxsLXRvZG8vc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy90b2Rvcy10YWJsZS90b2Rvcy10YWJsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdG9kb3MtdGFibGUvdG9kb3MtdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSw2QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdG9kb3MtdGFibGUvdG9kb3MtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbC13aWR0aC10YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udG9kb3MtdGFibGUge1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBtYXJnaW46IDIwcHggYXV0bztcbn1cblxuLmRvbmUtdG9kby10aXRsZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuIiwiLmZ1bGwtd2lkdGgtdGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRvZG9zLXRhYmxlIHtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG59XG5cbi5kb25lLXRvZG8tdGl0bGUge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/todos-table/todos-table.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/todos-table/todos-table.component.ts ***!
  \************************************************************************/
/*! exports provided: TodosTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosTableComponent", function() { return TodosTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _todos_table_datasource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todos-table-datasource */ "./src/app/shared/components/todos-table/todos-table-datasource.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _reducers_todos_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../reducers/todos.effects */ "./src/app/shared/reducers/todos.effects.ts");








let TodosTableComponent = class TodosTableComponent {
    constructor(store) {
        this.store = store;
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = ['title', 'done'];
    }
    ngOnInit() {
        this.dataSource = new _todos_table_datasource__WEBPACK_IMPORTED_MODULE_5__["TodosTableDataSource"](this.store);
        this.store.dispatch(new _reducers_todos_effects__WEBPACK_IMPORTED_MODULE_7__["FetchTodosAction"]());
    }
    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
    }
    toggle(row, event) {
        const action = new _reducers_todos_effects__WEBPACK_IMPORTED_MODULE_7__["UpdateAndFetchTodoAction"](row.id, row.title, event.checked, row.description);
        this.store.dispatch(action);
    }
};
TodosTableComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false })
], TodosTableComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: false })
], TodosTableComponent.prototype, "sort", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], { static: false })
], TodosTableComponent.prototype, "table", void 0);
TodosTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-todos-table',
        template: __webpack_require__(/*! raw-loader!./todos-table.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/todos-table/todos-table.component.html"),
        styles: [__webpack_require__(/*! ./todos-table.component.scss */ "./src/app/shared/components/todos-table/todos-table.component.scss")]
    })
], TodosTableComponent);



/***/ }),

/***/ "./src/app/shared/constants/routing-paths.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/constants/routing-paths.ts ***!
  \***************************************************/
/*! exports provided: RoutingPaths */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingPaths", function() { return RoutingPaths; });
class RoutingPaths {
}
RoutingPaths.EMPTY = '';
RoutingPaths.DETAIL = 'detail';
RoutingPaths.DEFAULT = '**';


/***/ }),

/***/ "./src/app/shared/reducers/index.ts":
/*!******************************************!*\
  !*** ./src/app/shared/reducers/index.ts ***!
  \******************************************/
/*! exports provided: reducers, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _todos_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos.reducer */ "./src/app/shared/reducers/todos.reducer.ts");


const reducers = {
    todos: _todos_reducer__WEBPACK_IMPORTED_MODULE_1__["todosReducer"]
};
const metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production ? [] : [];


/***/ }),

/***/ "./src/app/shared/reducers/todos.actions.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/reducers/todos.actions.ts ***!
  \**************************************************/
/*! exports provided: TOGGLE_DONE, ADD_TODO, CLEAR_ALL_TODOS, ToggleDoneAction, AddTodoAction, ClearAllTodosAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_DONE", function() { return TOGGLE_DONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TODO", function() { return ADD_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_ALL_TODOS", function() { return CLEAR_ALL_TODOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleDoneAction", function() { return ToggleDoneAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTodoAction", function() { return AddTodoAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearAllTodosAction", function() { return ClearAllTodosAction; });
const TOGGLE_DONE = 'TOGGLE_DONE';
const ADD_TODO = 'ADD_TODO';
const CLEAR_ALL_TODOS = 'CLEAR_ALL_TODOS';
class ToggleDoneAction {
    constructor(id, value) {
        this.id = id;
        this.value = value;
        this.type = TOGGLE_DONE;
    }
}
ToggleDoneAction.ctorParameters = () => [
    { type: Number },
    { type: Boolean }
];
class AddTodoAction {
    constructor(id, title, value, description) {
        this.id = id;
        this.title = title;
        this.value = value;
        this.description = description;
        this.type = ADD_TODO;
    }
}
AddTodoAction.ctorParameters = () => [
    { type: Number },
    { type: String },
    { type: Boolean },
    { type: String }
];
class ClearAllTodosAction {
    constructor() {
        this.type = CLEAR_ALL_TODOS;
    }
}


/***/ }),

/***/ "./src/app/shared/reducers/todos.effects.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/reducers/todos.effects.ts ***!
  \**************************************************/
/*! exports provided: FetchTodosAction, UpdateAndFetchTodoAction, CreateTodoAction, TodosEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchTodosAction", function() { return FetchTodosAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateAndFetchTodoAction", function() { return UpdateAndFetchTodoAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTodoAction", function() { return CreateTodoAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosEffects", function() { return TodosEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_todo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/todo.service */ "./src/app/shared/services/todo.service.ts");
/* harmony import */ var _todos_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todos.actions */ "./src/app/shared/reducers/todos.actions.ts");






const FETCH_TODOS = 'FETCH_TODOS';
const UPDATE_AND_FETCH_TODO = 'UPDATE_AND_FETCH_TODO';
const CREATE_TODO = 'CREATE_TODO';
class FetchTodosAction {
    constructor() {
        this.type = FETCH_TODOS;
    }
}
class UpdateAndFetchTodoAction {
    constructor(id, title, done, description) {
        this.id = id;
        this.title = title;
        this.done = done;
        this.description = description;
        this.type = UPDATE_AND_FETCH_TODO;
    }
}
UpdateAndFetchTodoAction.ctorParameters = () => [
    { type: Number },
    { type: String },
    { type: Boolean },
    { type: String }
];
class CreateTodoAction {
    constructor(title, done, description) {
        this.title = title;
        this.done = done;
        this.description = description;
        this.type = CREATE_TODO;
    }
}
CreateTodoAction.ctorParameters = () => [
    { type: String },
    { type: Boolean },
    { type: String }
];
let TodosEffects = class TodosEffects {
    constructor(actions$, todosService) {
        this.actions$ = actions$;
        this.todosService = todosService;
        this.fetchTodos = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(FETCH_TODOS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((action) => {
            const todosObs = this.todosService.getTodos();
            return todosObs;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((data) => {
            return data.reduce((builtUp, item) => {
                return [
                    ...builtUp,
                    new _todos_actions__WEBPACK_IMPORTED_MODULE_5__["AddTodoAction"](item.id, item.title, item.done, item.description)
                ];
            }, [new _todos_actions__WEBPACK_IMPORTED_MODULE_5__["ClearAllTodosAction"]()]);
        }));
        this.updateTodo = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(UPDATE_AND_FETCH_TODO), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])((action) => this.todosService.updateTodo({ id: action.id, title: action.title, done: action.done, description: action.description }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => new _todos_actions__WEBPACK_IMPORTED_MODULE_5__["ToggleDoneAction"](action.id, action.done)))));
        this.createTodo = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(CREATE_TODO), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])((action) => this.todosService.createTodo({ id: null, title: action.title, done: action.done, description: action.description }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => new _todos_actions__WEBPACK_IMPORTED_MODULE_5__["AddTodoAction"](data.id, data.title, false, data.description)))));
    }
};
TodosEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
    { type: _services_todo_service__WEBPACK_IMPORTED_MODULE_4__["TodoService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], TodosEffects.prototype, "fetchTodos", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], TodosEffects.prototype, "updateTodo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], TodosEffects.prototype, "createTodo", void 0);
TodosEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], TodosEffects);



/***/ }),

/***/ "./src/app/shared/reducers/todos.reducer.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/reducers/todos.reducer.ts ***!
  \**************************************************/
/*! exports provided: todosReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todosReducer", function() { return todosReducer; });
/* harmony import */ var _todos_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos.actions */ "./src/app/shared/reducers/todos.actions.ts");

function todosReducer(state = [], action) {
    switch (action.type) {
        case _todos_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_TODO"]:
            return [
                ...state,
                { id: action.id, title: action.title, done: action.value, description: action.description }
            ]
                .sort(compare);
        case _todos_actions__WEBPACK_IMPORTED_MODULE_0__["TOGGLE_DONE"]:
            return [...state]
                .map(item => {
                return item.id === action.id
                    ? Object.assign({}, item, { done: action.value }) : Object.assign({}, item);
            })
                .sort(compare);
        case _todos_actions__WEBPACK_IMPORTED_MODULE_0__["CLEAR_ALL_TODOS"]:
            return [];
        default:
            return state;
    }
}
const compare = (a, b) => {
    if (a.done) {
        if (b.done) {
            return (a.id > b.id) ? -1 : 1;
        }
        else {
            return 1;
        }
    }
    else {
        if (b.done) {
            return -1;
        }
        else {
            return (a.id > b.id) ? -1 : 1;
        }
    }
};


/***/ }),

/***/ "./src/app/shared/services/in-memory-data.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/services/in-memory-data.service.ts ***!
  \***********************************************************/
/*! exports provided: InMemoryDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function() { return InMemoryDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InMemoryDataService = class InMemoryDataService {
    constructor() { }
    createDb() {
        const todos = [
            { id: 1, done: false, title: 'Order pizza', description: '2 Margherita., 3 Napoletana' },
            {
                id: 3,
                done: false,
                title: 'Water the plants',
                description: 'spider plant, aloe vera, peace lily, jade plant, weeping fig and all others'
            },
            { id: 4, done: false, title: 'Do the shopping', description: 'Bread, Carrots, Orange juice, Olive oil, Coffee filters' },
        ];
        return { todos };
    }
    genId(todos) {
        return todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
    }
};
InMemoryDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], InMemoryDataService);



/***/ }),

/***/ "./src/app/shared/services/todo.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/todo.service.ts ***!
  \*************************************************/
/*! exports provided: TodoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoService", function() { return TodoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
let TodoService = class TodoService {
    constructor(http) {
        this.http = http;
        this.todosUrl = 'api/todos'; // URL to web api
    }
    getTodos() {
        return this.http.get(this.todosUrl);
    }
    updateTodo(todo) {
        return this.http.put(this.todosUrl, todo, httpOptions);
    }
    createTodo(todo) {
        return this.http.post(this.todosUrl, todo, httpOptions);
    }
};
TodoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TodoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], TodoService);



/***/ }),

/***/ "./src/app/todo-detail/todo-detail.component.scss":
/*!********************************************************!*\
  !*** ./src/app/todo-detail/todo-detail.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".todo-card {\n  max-width: 800px;\n  margin: 20px auto;\n}\n\n.done-todo-title {\n  text-decoration: line-through;\n}\n\n.footer-text {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ucGVyb24vRG9jdW1lbnRzL292ZXJraWxsLXRvZG8vc3JjL2FwcC90b2RvLWRldGFpbC90b2RvLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdG9kby1kZXRhaWwvdG9kby1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSw2QkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3RvZG8tZGV0YWlsL3RvZG8tZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvZG8tY2FyZCB7XG4gIG1heC13aWR0aDogODAwcHg7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xufVxuXG4uZG9uZS10b2RvLXRpdGxlIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG5cbi5mb290ZXItdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiIsIi50b2RvLWNhcmQge1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBtYXJnaW46IDIwcHggYXV0bztcbn1cblxuLmRvbmUtdG9kby10aXRsZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuXG4uZm9vdGVyLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/todo-detail/todo-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/todo-detail/todo-detail.component.ts ***!
  \******************************************************/
/*! exports provided: TodoDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoDetailComponent", function() { return TodoDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");





let TodoDetailComponent = class TodoDetailComponent {
    constructor(route, location, store) {
        this.route = route;
        this.location = location;
        this.store = store;
    }
    ngOnInit() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.todosObs = this.store.select('todos');
        this.subscription = this.todosObs.subscribe((data) => {
            this.todo = data.find((item) => (item.id === id));
        });
    }
    goBack() {
        this.location.back();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
TodoDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
];
TodoDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-todo-detail',
        template: __webpack_require__(/*! raw-loader!./todo-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/todo-detail/todo-detail.component.html"),
        styles: [__webpack_require__(/*! ./todo-detail.component.scss */ "./src/app/todo-detail/todo-detail.component.scss")]
    })
], TodoDetailComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nperon/Documents/overkill-todo/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
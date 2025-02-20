(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/@core/services/organization.service.ts":
/*!********************************************************!*\
  !*** ./src/app/@core/services/organization.service.ts ***!
  \********************************************************/
/*! exports provided: OrganizationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationService", function() { return OrganizationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");






let OrganizationService = class OrganizationService {
    constructor(_http) {
        this._http = _http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiURL;
        this.refreshNeeded$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    get refresh$() {
        return this.refreshNeeded$;
    }
    createCompany(formData) {
        return this._http.post(`${this.apiUrl}company/`, formData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => {
            this.refreshNeeded$.next();
        }));
    }
    fetchCompany() {
        return this._http.get(`${this.apiUrl}company/`);
    }
    createDivision(formData) {
        return this._http.post(`${this.apiUrl}division/`, formData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => {
            this.refreshNeeded$.next();
        }));
    }
    fetchDivision() {
        return this._http.get(`${this.apiUrl}division/`);
    }
    createDepartment(formData) {
        return this._http.post(`${this.apiUrl}department/`, formData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => {
            this.refreshNeeded$.next();
        }));
    }
    fetchDepartment() {
        return this._http.get(`${this.apiUrl}department/`);
    }
    editDepartment(id, formData) {
        return this._http.put(`${this.apiUrl}department/${id}/`, formData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => {
            this.refreshNeeded$.next();
        }));
    }
    createTeam(formData) {
        return this._http.post(`${this.apiUrl}team/`, formData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => {
            this.refreshNeeded$.next();
        }));
    }
    fetchTeam() {
        return this._http.get(`${this.apiUrl}team/`);
    }
    fetchSelectTeams(id) {
        return this._http.get(`${this.apiUrl}team/?sites__id=${id}`);
    }
    fetchOneTeam(id) {
        return this._http.get(`${this.apiUrl}team/${id}/`);
    }
};
OrganizationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
OrganizationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], OrganizationService);



/***/ }),

/***/ "./src/app/@core/services/task.service.ts":
/*!************************************************!*\
  !*** ./src/app/@core/services/task.service.ts ***!
  \************************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");






let TaskService = class TaskService {
    constructor(_http) {
        this._http = _http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiURL;
        this.refreshNeeded$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    get refresh$() {
        return this.refreshNeeded$;
    }
    createTask(formData) {
        return this._http.post(`${this.apiUrl}tasks/`, formData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => {
            this.refreshNeeded$.next();
        }));
    }
    fetchTask() {
        return this._http.get(`${this.apiUrl}tasks/?limit=1000000&offset=0`);
    }
    fetchSpecificTasks(site, team) {
        return this._http.get(`${this.apiUrl}tasks/?site__id=${site}&team__id=${team}`);
    }
    fetchOneTask(id) {
        return this._http.get(`${this.apiUrl}tasks/${id}/`);
    }
    editTask(id, formData) {
        return this._http.patch(`${this.apiUrl}tasks/${id}/`, formData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => {
            this.refreshNeeded$.next();
        }));
    }
    deleteTask(id) {
        return this._http.delete(`${this.apiUrl}tasks/${id}`);
    }
    createDefaultTask(formData) {
        return this._http.post(`${this.apiUrl}default_tasks/`, formData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => {
            this.refreshNeeded$.next();
        }));
    }
    fetchDefaultTask() {
        return this._http.get(`${this.apiUrl}default_tasks/`);
    }
    fetchOneDefaultTask(id) {
        return this._http.get(`${this.apiUrl}default_tasks/${id}/`);
    }
    editDefaultTask(id, formData) {
        return this._http.patch(`${this.apiUrl}default_tasks/${id}/`, formData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => {
            this.refreshNeeded$.next();
        }));
    }
    createKPI(formData) {
        return this._http.post(`${this.apiUrl}kpis/`, formData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => {
            this.refreshNeeded$.next();
        }));
    }
    fetchKPI() {
        return this._http.get(`${this.apiUrl}kpis/`);
    }
    fetchOneKPI(id) {
        return this._http.get(`${this.apiUrl}kpis/${id}/`);
    }
    fetchTag() {
        return this._http.get(`${this.apiUrl}tag/`);
    }
    fetchSubTask() {
        return this._http.get(`${this.apiUrl}subtasks/?limit=&offset=0`);
    }
    fetchOneSubTask(id) {
        return this._http.get(`${this.apiUrl}subtasks/${id}/`);
    }
    createSubTask(formData) {
        return this._http.post(`${this.apiUrl}subtasks/`, formData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => {
            this.refreshNeeded$.next();
        }));
    }
    editSubTask(id, formData) {
        return this._http.patch(`${this.apiUrl}subtasks/${id}/`, formData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => {
            this.refreshNeeded$.next();
        }));
    }
    deleteSubTask(id) {
        return this._http.delete(`${this.apiUrl}subtasks/${id}`);
    }
    fetchSpecificsubTasks(task) {
        return this._http.get(`${this.apiUrl}subtasks/?task__id=${task}`);
    }
};
TaskService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TaskService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], TaskService);



/***/ }),

/***/ "./src/app/pages/pages-menu.ts":
/*!*************************************!*\
  !*** ./src/app/pages/pages-menu.ts ***!
  \*************************************/
/*! exports provided: MENU_ITEMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_ITEMS", function() { return MENU_ITEMS; });
const MENU_ITEMS = [
    {
        title: 'Dashboard',
        icon: 'home-outline',
        link: '/pages/dashboard',
        home: true,
    },
    {
        title: 'Task Management',
        icon: 'clipboard-outline',
        children: [
            {
                title: 'Lots/Clusters',
                link: '/operations/projects/2',
            },
            {
                title: 'Clients & Services',
                link: '/operations/clients',
            },
        ],
    },
    {
        title: 'Chats',
        icon: 'message-circle-outline',
        children: [
            {
                title: 'Messages',
                link: '/pages/extra-components/chat',
            },
        ],
    },
];
// {
//   title: 'Charts',
//   icon: 'pie-chart-outline',
//   children: [
//     {
//       title: 'Echarts',
//       link: '/pages/charts/echarts',
//     },
//     {
//       title: '3D Charts',
//       link: '/pages/charts/chartjs',
//     },
//   ],
// },
// {
//   title: 'Operations',
//   group: true,
// },
// {
//   title: 'Maps',
//   icon: 'map-outline',
//   children: [
//     {
//       title: 'Kenya',
//       link: '/operations/maps/leaflet',
//     },
//     {
//       title: 'Bubble Map',
//       link: '/operations/maps/bubble',
//     },
//     {
//       title: 'Search Map',
//       link: '/operations/maps/searchmap',
//     },
//   ],
// },
// {
//   title: 'Create Documents',
//   icon: 'text-outline',
//   children: [
//     {
//       title: 'Word Editor',
//       link: '/pages/editors/ckeditor',
//     },
//   ],
// },
// {
//   title: 'Manage Users',
//   icon: 'people-outline',
//   children: [
//     {
//       title: 'Users Table',
//       link: '/admin/smart-table',
//     },
//     {
//       title: 'Create User',
//       link: '/admin/user/0',
//     },
//     {
//       title: 'Company & Divisions',
//       link: '/admin/division',
//     },
//     {
//       title: 'Departments & Teams',
//       link: '/admin/department',
//     },
//     {
//       title: 'Roles & Permission',
//       link: '/admin/permission',
//     },
//   ],
// },
// {
//   title: 'Admin Panel',
//   icon: 'grid-outline',
//   children: [
//     {
//       title: 'Audit Trail',
//       link: '/admin/audit-trail',
//     },
//     {
//       title: 'Login Trail',
//       link: '/admin/login-trail',
//     },
//     // {
//     //   title: 'Restore and Delete',
//     //   link: '/admin/permission',
//     // },
//   ],
// },
// {
//   title: 'Editor',
//   link: '/pages/editors/tinymce',
// },
// {
//   title: 'Contacts',
//   link: '/pages/extra-components/contacts',
// },
// {
//   title: 'Google Maps',
//   link: '/operations/maps/gmaps',
// },
// {
//   title: 'Tasks',
//   link: '/pages/layout/tasks',
// },
// {
//   title: 'Teams',
//   pathMatch: 'prefix',
//   link: '/pages/layout/tabs',
// },
// {
//   title: 'Files',
//   link: '/pages/layout/files',
// },
// {
// {
//   title: 'Calendar',
//   icon: 'calendar-outline',
//   children: [
//     {
//       title: 'Calendar',
//       link: '/pages/extra-components/calendar',
//     },
//     {
//       title: 'Calendar Kit',
//       link: '/pages/extra-components/calendar-kit',
//     },
//     {
//       title: 'Datepicker',
//       link: '/pages/extra-components/date',
//     },
//   ],
// },
// {
//   title: 'Search',
//   icon: 'search-outline',
//   link: '/pages/extra-components/search',
// },


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map
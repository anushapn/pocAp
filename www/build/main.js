webpackJsonp([0],{

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
    }
    HomePage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Login Failed',
            subTitle: 'Incorrect username or password! Please try again.',
            buttons: ['OK']
        });
        alert.present();
    };
    HomePage.prototype.signIn = function (username, password) {
        if (username === "demo" && password === "demo@123") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */], { uname: username });
        }
        else {
            this.presentAlert();
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/vinayakad/Documents/vp/APE-Demo/src/pages/home/home.html"*/`<ion-header>\n  <ion-navbar>\n  <img src="assets/imgs/prud.jpg" height="45px" width="45px">\n  <ion-title text-right class="title-ape">APE DEMO</ion-title>\n</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-label class="label-uname" color="primary">Username</ion-label>\n  <ion-input [(ngModel)]="username" type="text"></ion-input>\n\n  <ion-label class="label-pin" color="primary">PIN</ion-label>\n  <ion-input [(ngModel)]="password" type="password"></ion-input>\n  <br>\n  <div text-center>\n    <button class="btn-signin" ion-button color="primary" (click)="signIn(username, password)">Sign in</button>\n  </div>\n</ion-content>`/*ion-inline-end:"/Users/vinayakad/Documents/vp/APE-Demo/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__employee_details_employee_details__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.uname = this.navParams.get("uname");
        // console.log(this.uname);
        this.myProfile = [
            {
                text: "My Policies",
                value: "my_policies"
            },
            {
                text: "File a claim",
                value: "file_a_claim"
            },
            {
                text: "Claim Status",
                value: "claim_status"
            },
            {
                text: "Direct Deposit",
                value: "direct_deposit"
            },
            {
                text: "Messages",
                value: "messages"
            },
            {
                text: "Upload Document",
                value: "upload_document"
            },
            {
                text: "Survey",
                value: "survey"
            }
        ];
    }
    ProfilePage.prototype.profileDetail = function () {
        switch (this.action) {
            case "my_policies":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__employee_details_employee_details__["a" /* EmployeeDetailsPage */], { key: 'policy' });
                break;
            case "file_a_claim":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__employee_details_employee_details__["a" /* EmployeeDetailsPage */], { key: 'file_a_claim' });
                break;
        }
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/vinayakad/Documents/vp/APE-Demo/src/pages/profile/profile.html"*/`<ion-header>\n\n  <ion-navbar>\n    <ion-title>My Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n  <div text-center>\n    <h2 class="welcome" color="primary">Welcome, Good Day {{uname}}</h2>\n\n    <img class="profile-img" src="assets/imgs/profile.jpg">\n  </div>\n\n\n  <ion-list radio-group [(ngModel)]="action">\n\n    <ion-item *ngFor="let data of myProfile">\n      <ion-label item-right>{{data.text}}</ion-label>\n      <ion-radio item-left value="{{data.value}}"></ion-radio>\n    </ion-item>\n  </ion-list>\n  <div text-center>\n    <button margin-left margin-top text-center ion-button (click)="profileDetail()">PROCEED</button>\n  </div>\n\n  <ion-label  color="primary" text-center class="notification">Notifications <ion-icon name="notifications-outline"></ion-icon>\n  </ion-label>\n\n</ion-content>`/*ion-inline-end:"/Users/vinayakad/Documents/vp/APE-Demo/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__file_claim_file_claim__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the EmployeeDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EmployeeDetailsPage = (function () {
    function EmployeeDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.isCalender = false;
    }
    EmployeeDetailsPage.prototype.proceedNext = function () {
        this.key = this.navParams.get("key");
        if (this.key === "file_a_claim") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__file_claim_file_claim__["a" /* FileClaimPage */]);
        }
    };
    EmployeeDetailsPage.prototype.onDateSelect = function (date) {
        console.log(date);
        this.selectedValue = date.date + '-' + (date.month + 1) + '-' + date.year;
        this.showCalender();
    };
    EmployeeDetailsPage.prototype.showCalender = function () {
        console.log(this.isCalender);
        this.isCalender = !this.isCalender;
    };
    EmployeeDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-employee-details',template:/*ion-inline-start:"/Users/vinayakad/Documents/vp/APE-Demo/src/pages/employee-details/employee-details.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>Employee Details</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div margin>\n    <ion-label>First Name</ion-label>\n    <ion-input [(ngModel)]="fname" type="text"></ion-input>\n\n    <ion-label>Middle Name</ion-label>\n    <ion-input [(ngModel)]="mname" type="text"></ion-input>\n\n    <ion-label>Last Name</ion-label>\n    <ion-input [(ngModel)]="lname" type="text"></ion-input>\n\n    <ion-label>SSN</ion-label>\n    <ion-input [(ngModel)]="ssn" type="number"></ion-input>\n\n    <ion-label>Date of Birth</ion-label>\n    <ion-input (click)="showCalender()" [value]="selectedValue" readonly></ion-input>\n    <ion-calendar #calendar *ngIf="isCalender" id="calender" (onDaySelect)="onDateSelect($event)"></ion-calendar>\n\n    <ion-label>Gender</ion-label>\n    <ion-list radio-group class="gender" margin-top>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-label text-right>Male</ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-radio value="Male" margin-top margin-right></ion-radio>\n          </ion-col>\n          <ion-col>\n            <ion-label text-right>Female</ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-radio value="Female" margin-top margin-right></ion-radio>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n    </ion-list>\n\n    <ion-label>Employer\'s Name</ion-label>\n    <ion-input [(ngModel)]="employer" type="text"></ion-input>\n\n    <ion-label>Control Number</ion-label>\n    <ion-input [(ngModel)]="ctrlno" type="number"></ion-input>\n\n    <ion-label>Work State</ion-label>\n    <ion-input [(ngModel)]="workstate" type="text"></ion-input>\n\n    <div text-center>\n        <button ion-button margin-top (click)="proceedNext()">NEXT</button>\n    </div>\n\n\n  </div>\n</ion-content>`/*ion-inline-end:"/Users/vinayakad/Documents/vp/APE-Demo/src/pages/employee-details/employee-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], EmployeeDetailsPage);
    return EmployeeDetailsPage;
}());

//# sourceMappingURL=employee-details.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileClaimPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__child_info_child_info__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the FileClaimPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FileClaimPage = (function () {
    function FileClaimPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.relationship = [
            {
                text: "Partner",
                value: "Partner"
            },
            {
                text: "Child",
                value: "Child"
            },
            {
                text: "Parent",
                value: "Parent"
            },
            {
                text: "Other",
                value: "Other"
            }
        ];
    }
    FileClaimPage.prototype.onRelSelect = function (rel) {
        switch (rel) {
            case "Child":
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__child_info_child_info__["a" /* ChildInfoPage */]);
                break;
        }
    };
    FileClaimPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-file-claim',template:/*ion-inline-start:"/Users/vinayakad/Documents/vp/APE-Demo/src/pages/file-claim/file-claim.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>File A Claim</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list radio-group>\n    <ion-item>\n      <ion-label item-right>Pregnancy</ion-label>\n      <ion-radio item-left value="Pregnancy"></ion-radio>\n    </ion-item>\n\n    <ion-item>\n      <ion-label item-right>Care of a Family Mememer</ion-label>\n      <ion-radio item-left value="careofmember"></ion-radio>\n    </ion-item>\n    <ion-item>\n      <ion-label item-right>Accident/Injury</ion-label>\n      <ion-radio item-left value="accident"></ion-radio>\n    </ion-item>\n    <ion-item>\n      <ion-label item-right>Sickness</ion-label>\n      <ion-radio item-left value="sickness"></ion-radio>\n    </ion-item>\n  </ion-list>\n\n  <ion-grid text-center>\n    <ion-list radio-group>\n      <ion-row>\n        <ion-col col-4>\n          <ion-label [ngStyle]="{\'font-weight\': \'bold\'}">Select</ion-label>\n        </ion-col>\n        <ion-col col-8>\n          <ion-label [ngStyle]="{\'font-weight\': \'bold\'}">Relationship</ion-label>\n        </ion-col>\n      </ion-row>\n\n\n      <ion-row *ngFor="let data of relationship">\n        <ion-col col-4>\n          <ion-radio value="{{data.text}}" (ionSelect)="onRelSelect(data.text)"></ion-radio>\n        </ion-col>\n        <ion-col col-8>{{data.value}}</ion-col>\n      </ion-row>\n    </ion-list>\n  </ion-grid>\n\n\n\n</ion-content>`/*ion-inline-end:"/Users/vinayakad/Documents/vp/APE-Demo/src/pages/file-claim/file-claim.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], FileClaimPage);
    return FileClaimPage;
}());

//# sourceMappingURL=file-claim.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChildInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__absence_pattern_absence_pattern__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChildInfoPage = (function () {
    function ChildInfoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.isCalender = false;
    }
    ChildInfoPage.prototype.onDateSelect = function (date) {
        console.log(date);
        this.selectedValue = date.date + '-' + (date.month + 1) + '-' + date.year;
        this.showCalender();
    };
    ChildInfoPage.prototype.showCalender = function () {
        console.log(this.isCalender);
        this.isCalender = !this.isCalender;
    };
    ChildInfoPage.prototype.proceed = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__absence_pattern_absence_pattern__["a" /* AbsencePatternPage */]);
    };
    ChildInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-child-info',template:/*ion-inline-start:"/Users/vinayakad/Documents/vp/APE-Demo/src/pages/child-info/child-info.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>Child Information</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div margin>\n    <ion-label>Relationship</ion-label>\n    <ion-select okText="OK" cancelText="" class="input">\n      <ion-option value="Please select one" selected>Please select one</ion-option>\n      <ion-option value="Son">Son</ion-option>\n      <ion-option value="daughter">Daughter</ion-option>\n    </ion-select>\n\n    <ion-label>First Name</ion-label>\n    <ion-input [(ngModel)]="fname" type="text"></ion-input>\n\n    <ion-label>MI</ion-label>\n    <ion-input [(ngModel)]="mi" type="text"></ion-input>\n\n    <ion-label>Last Name</ion-label>\n    <ion-input [(ngModel)]="lname" type="text"></ion-input>\n\n    <ion-label>SSN</ion-label>\n    <ion-input [(ngModel)]="ssn" type="number"></ion-input>\n\n    <ion-label>Date of Birth</ion-label>\n    <ion-input (click)="showCalender()" [value]="selectedValue" readonly></ion-input>\n    <ion-calendar #calendar *ngIf="isCalender" id="calender" (onDaySelect)="onDateSelect($event)"></ion-calendar>\n\n    <ion-list radio-group margin-top>\n      <ion-item>\n        <ion-label>Minor (under 18)</ion-label>\n        <ion-radio value="minor" margin-top margin-right></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Adult with Disability</ion-label>\n        <ion-radio value="adult" margin-top margin-right></ion-radio>\n      </ion-item>\n    </ion-list>\n\n    <div text-center>\n      <ion-icon class="arrow-next" color="primary" name="arrow-round-forward" (click)="proceed()"></ion-icon>\n    </div>\n  </div>\n</ion-content>`/*ion-inline-end:"/Users/vinayakad/Documents/vp/APE-Demo/src/pages/child-info/child-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ChildInfoPage);
    return ChildInfoPage;
}());

//# sourceMappingURL=child-info.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbsencePatternPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aps_info_aps_info__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AbsencePatternPage = (function () {
    function AbsencePatternPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AbsencePatternPage.prototype.showCalenderFrom = function () {
        this.isCalenderFrom = !this.isCalenderFrom;
    };
    AbsencePatternPage.prototype.showCalenderTo = function () {
        this.isCalenderTo = !this.isCalenderTo;
    };
    AbsencePatternPage.prototype.onDateSelectTo = function (date) {
        this.selectedValueTo = date.date + '-' + (date.month + 1) + '-' + date.year;
        this.isCalenderTo = !this.isCalenderTo;
    };
    AbsencePatternPage.prototype.onDateSelectFrom = function (date) {
        this.selectedValueFrom = date.date + '-' + (date.month + 1) + '-' + date.year;
        this.isCalenderFrom = !this.isCalenderFrom;
    };
    AbsencePatternPage.prototype.showCalenderIntFrom = function () {
        this.isCalenderIntFrom = !this.isCalenderIntFrom;
    };
    AbsencePatternPage.prototype.showCalenderIntTo = function () {
        this.isCalenderIntTo = !this.isCalenderIntTo;
    };
    AbsencePatternPage.prototype.onDateSelectIntFrom = function (date) {
        this.selectedValueIntFrom = date.date + '-' + (date.month + 1) + '-' + date.year;
        this.isCalenderIntFrom = !this.isCalenderIntFrom;
    };
    AbsencePatternPage.prototype.onDateSelectIntTo = function (date) {
        this.selectedValueIntTo = date.date + '-' + (date.month + 1) + '-' + date.year;
        this.isCalenderIntTo = !this.isCalenderIntTo;
    };
    AbsencePatternPage.prototype.proceed = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__aps_info_aps_info__["a" /* ApsInfoPage */]);
    };
    AbsencePatternPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-absence-pattern',template:/*ion-inline-start:"/Users/vinayakad/Documents/vp/APE-Demo/src/pages/absence-pattern/absence-pattern.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>Absence Pattern</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div margin>\n\n    <h5>Absence from Work</h5>\n\n    <ion-list radio-group>\n      <ion-item>\n        <ion-radio item-left value="continuous" margin-top margin-right></ion-radio>\n        <ion-label item-right>Continuous Absence</ion-label>\n      </ion-item>\n\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6>\n            <ion-label id="from">From</ion-label>\n          </ion-col>\n          <ion-col col-6>\n            <ion-label id="to">To</ion-label>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-6>\n            <ion-input [value]="selectedValueFrom" disabled></ion-input>\n            <ion-icon float-right class="icon-calendar" name="calendar" (click)="showCalenderFrom()"></ion-icon>\n          </ion-col>\n\n          <ion-col col-6>\n            <ion-input [value]="selectedValueTo" disabled></ion-input>\n            <ion-icon float-right class="icon-calendar" name="calendar" (click)="showCalenderTo()" ></ion-icon>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-12>\n            <ion-calendar #calendar1 *ngIf="isCalenderFrom" class="calender" (onDaySelect)="onDateSelectFrom($event)">\n            </ion-calendar>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-12>\n            <ion-calendar #calendar2 *ngIf="isCalenderTo" class="calender" (onDaySelect)="onDateSelectTo($event)">\n            </ion-calendar>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-item>\n        <ion-radio item-left value="intermittent" margin-top margin-right></ion-radio>\n        <ion-label item-right>Intermittent Absence</ion-label>\n      </ion-item>\n\n      <h6 id="label-choose">Choose Days from Calendar</h6>\n\n\n\n\n      <ion-grid>\n          <ion-row>\n            <ion-col col-6>\n              <ion-label id="from">From</ion-label>\n            </ion-col>\n            <ion-col col-6>\n              <ion-label id="to">To</ion-label>\n            </ion-col>\n          </ion-row>\n  \n          <ion-row>\n            <ion-col col-6>\n              <ion-input [value]="selectedValueIntFrom" disabled></ion-input>\n              <ion-icon float-right class="icon-calendar" name="calendar" (click)="showCalenderIntFrom()"></ion-icon>\n            </ion-col>\n  \n            <ion-col col-6>\n              <ion-input [value]="selectedValueIntTo" disabled></ion-input>\n              <ion-icon float-right class="icon-calendar" name="calendar" (click)="showCalenderIntTo()" ></ion-icon>\n            </ion-col>\n          </ion-row>\n  \n          <ion-row>\n            <ion-col col-12>\n              <ion-calendar #calendar3 *ngIf="isCalenderIntFrom" class="calender" (onDaySelect)="onDateSelectIntFrom($event)">\n              </ion-calendar>\n            </ion-col>\n          </ion-row>\n  \n          <ion-row>\n            <ion-col col-12>\n              <ion-calendar #calendar4 *ngIf="isCalenderIntTo" class="calender" (onDaySelect)="onDateSelectIntTo($event)">\n              </ion-calendar>\n            </ion-col>\n          </ion-row>\n      \n      </ion-grid>\n    </ion-list>\n  </div>\n\n  <div text-center>\n    <ion-icon class="arrow-next" color="primary" name="arrow-round-forward" (click)="proceed()"></ion-icon>\n  </div>\n</ion-content>`/*ion-inline-end:"/Users/vinayakad/Documents/vp/APE-Demo/src/pages/absence-pattern/absence-pattern.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], AbsencePatternPage);
    return AbsencePatternPage;
}());

//# sourceMappingURL=absence-pattern.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApsInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_chooser__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApsInfoPage = (function () {
    function ApsInfoPage(navCtrl, navParams, toast, file) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.file = file;
        this.isAvailable = false;
    }
    ApsInfoPage.prototype.onCheckBox = function () {
        console.log(this.accept);
        if (this.accept) {
            this.isTermChecked = !this.isTermChecked;
        }
        else {
            this.presentToast();
        }
    };
    ApsInfoPage.prototype.presentToast = function () {
        var toast = this.toast.create({
            message: 'Please accept the terms and conditions',
            duration: 3000
        });
        toast.present();
    };
    ApsInfoPage.prototype.onAvailable = function () {
        this.isAvailable = !this.isAvailable;
    };
    ApsInfoPage.prototype.onUnavailable = function () {
        this.isAvailable = false;
    };
    ApsInfoPage.prototype.onOpenFile = function () {
        this.file.open()
            .then(function (uri) { return console.log(uri); })
            .catch(function (e) { return console.log(e); });
    };
    ApsInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-aps-info',template:/*ion-inline-start:"/Users/vinayakad/Documents/vp/APE-Demo/src/pages/aps-info/aps-info.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>Attending Physician</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div margin>\n    <h5>APS Information</h5>\n\n    <ion-list radio-group>\n      <ion-item>\n        <ion-radio item-left value="available" margin-top margin-right (ionSelect)="onAvailable()"></ion-radio>\n        <ion-label item-right>Available</ion-label>\n      </ion-item>\n      <button ion-button class="btn-attach" *ngIf="isAvailable" (click)="onOpenFile()">Attach</button>\n\n      <ion-item>\n        <ion-radio item-left value="unavailable" margin-top margin-right (ionSelect)="onUnavailable()"></ion-radio>\n        <ion-label item-right>Unavailable</ion-label>\n      </ion-item>\n    </ion-list>\n\n    <ion-item no-border-bottom class="no-border">\n      <ion-checkbox item-left [(ngModel)]="accept"></ion-checkbox>\n      <ion-label item-right>I accept the <a href="#">Terms and Conditions</a></ion-label>\n    </ion-item>\n\n    <div text-center *ngIf="!isTermChecked">\n      <button ion-button color="primary" (click)="onCheckBox()" tappable>SUBMIT</button>\n    </div>\n\n    <ion-item *ngIf="isTermChecked" margin-top class="no-border">\n      <p text-center>\n        Claim generated successfully.!\n      </p>\n      <p text-center>\n        Your Claim Number is: 485890430<br>\n        Please check your notification inbox\n      </p>\n      <p text-center padding margin class="show-success">\n        <span  margin>Thank you</span>\n      </p>\n    </ion-item>\n  </div>\n</ion-content>`/*ion-inline-end:"/Users/vinayakad/Documents/vp/APE-Demo/src/pages/aps-info/aps-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_chooser__["a" /* FileChooser */]])
    ], ApsInfoPage);
    return ApsInfoPage;
}());

//# sourceMappingURL=aps-info.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(355);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_employee_details_employee_details__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_file_claim_file_claim__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic3_calendar_en__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_child_info_child_info__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_absence_pattern_absence_pattern__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_aps_info_aps_info__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_file_chooser__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_employee_details_employee_details__["a" /* EmployeeDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_file_claim_file_claim__["a" /* FileClaimPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_child_info_child_info__["a" /* ChildInfoPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_absence_pattern_absence_pattern__["a" /* AbsencePatternPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_aps_info_aps_info__["a" /* ApsInfoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_10_ionic3_calendar_en__["a" /* CalendarModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_employee_details_employee_details__["a" /* EmployeeDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_file_claim_file_claim__["a" /* FileClaimPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_child_info_child_info__["a" /* ChildInfoPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_absence_pattern_absence_pattern__["a" /* AbsencePatternPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_aps_info_aps_info__["a" /* ApsInfoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_file_chooser__["a" /* FileChooser */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/vinayakad/Documents/vp/APE-Demo/src/app/app.html"*/`<ion-nav [root]="rootPage"></ion-nav>\n`/*ion-inline-end:"/Users/vinayakad/Documents/vp/APE-Demo/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 410:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 204,
	"./af.js": 204,
	"./ar": 205,
	"./ar-dz": 206,
	"./ar-dz.js": 206,
	"./ar-kw": 207,
	"./ar-kw.js": 207,
	"./ar-ly": 208,
	"./ar-ly.js": 208,
	"./ar-ma": 209,
	"./ar-ma.js": 209,
	"./ar-sa": 210,
	"./ar-sa.js": 210,
	"./ar-tn": 211,
	"./ar-tn.js": 211,
	"./ar.js": 205,
	"./az": 212,
	"./az.js": 212,
	"./be": 213,
	"./be.js": 213,
	"./bg": 214,
	"./bg.js": 214,
	"./bm": 215,
	"./bm.js": 215,
	"./bn": 216,
	"./bn.js": 216,
	"./bo": 217,
	"./bo.js": 217,
	"./br": 218,
	"./br.js": 218,
	"./bs": 219,
	"./bs.js": 219,
	"./ca": 220,
	"./ca.js": 220,
	"./cs": 221,
	"./cs.js": 221,
	"./cv": 222,
	"./cv.js": 222,
	"./cy": 223,
	"./cy.js": 223,
	"./da": 224,
	"./da.js": 224,
	"./de": 225,
	"./de-at": 226,
	"./de-at.js": 226,
	"./de-ch": 227,
	"./de-ch.js": 227,
	"./de.js": 225,
	"./dv": 228,
	"./dv.js": 228,
	"./el": 229,
	"./el.js": 229,
	"./en-SG": 230,
	"./en-SG.js": 230,
	"./en-au": 231,
	"./en-au.js": 231,
	"./en-ca": 232,
	"./en-ca.js": 232,
	"./en-gb": 233,
	"./en-gb.js": 233,
	"./en-ie": 234,
	"./en-ie.js": 234,
	"./en-il": 235,
	"./en-il.js": 235,
	"./en-nz": 236,
	"./en-nz.js": 236,
	"./eo": 237,
	"./eo.js": 237,
	"./es": 238,
	"./es-do": 239,
	"./es-do.js": 239,
	"./es-us": 240,
	"./es-us.js": 240,
	"./es.js": 238,
	"./et": 241,
	"./et.js": 241,
	"./eu": 242,
	"./eu.js": 242,
	"./fa": 243,
	"./fa.js": 243,
	"./fi": 244,
	"./fi.js": 244,
	"./fo": 245,
	"./fo.js": 245,
	"./fr": 246,
	"./fr-ca": 247,
	"./fr-ca.js": 247,
	"./fr-ch": 248,
	"./fr-ch.js": 248,
	"./fr.js": 246,
	"./fy": 249,
	"./fy.js": 249,
	"./ga": 250,
	"./ga.js": 250,
	"./gd": 251,
	"./gd.js": 251,
	"./gl": 252,
	"./gl.js": 252,
	"./gom-latn": 253,
	"./gom-latn.js": 253,
	"./gu": 254,
	"./gu.js": 254,
	"./he": 255,
	"./he.js": 255,
	"./hi": 256,
	"./hi.js": 256,
	"./hr": 257,
	"./hr.js": 257,
	"./hu": 258,
	"./hu.js": 258,
	"./hy-am": 259,
	"./hy-am.js": 259,
	"./id": 260,
	"./id.js": 260,
	"./is": 261,
	"./is.js": 261,
	"./it": 262,
	"./it-ch": 263,
	"./it-ch.js": 263,
	"./it.js": 262,
	"./ja": 264,
	"./ja.js": 264,
	"./jv": 265,
	"./jv.js": 265,
	"./ka": 266,
	"./ka.js": 266,
	"./kk": 267,
	"./kk.js": 267,
	"./km": 268,
	"./km.js": 268,
	"./kn": 269,
	"./kn.js": 269,
	"./ko": 270,
	"./ko.js": 270,
	"./ku": 271,
	"./ku.js": 271,
	"./ky": 272,
	"./ky.js": 272,
	"./lb": 273,
	"./lb.js": 273,
	"./lo": 274,
	"./lo.js": 274,
	"./lt": 275,
	"./lt.js": 275,
	"./lv": 276,
	"./lv.js": 276,
	"./me": 277,
	"./me.js": 277,
	"./mi": 278,
	"./mi.js": 278,
	"./mk": 279,
	"./mk.js": 279,
	"./ml": 280,
	"./ml.js": 280,
	"./mn": 281,
	"./mn.js": 281,
	"./mr": 282,
	"./mr.js": 282,
	"./ms": 283,
	"./ms-my": 284,
	"./ms-my.js": 284,
	"./ms.js": 283,
	"./mt": 285,
	"./mt.js": 285,
	"./my": 286,
	"./my.js": 286,
	"./nb": 287,
	"./nb.js": 287,
	"./ne": 288,
	"./ne.js": 288,
	"./nl": 289,
	"./nl-be": 290,
	"./nl-be.js": 290,
	"./nl.js": 289,
	"./nn": 291,
	"./nn.js": 291,
	"./pa-in": 292,
	"./pa-in.js": 292,
	"./pl": 293,
	"./pl.js": 293,
	"./pt": 294,
	"./pt-br": 295,
	"./pt-br.js": 295,
	"./pt.js": 294,
	"./ro": 296,
	"./ro.js": 296,
	"./ru": 297,
	"./ru.js": 297,
	"./sd": 298,
	"./sd.js": 298,
	"./se": 299,
	"./se.js": 299,
	"./si": 300,
	"./si.js": 300,
	"./sk": 301,
	"./sk.js": 301,
	"./sl": 302,
	"./sl.js": 302,
	"./sq": 303,
	"./sq.js": 303,
	"./sr": 304,
	"./sr-cyrl": 305,
	"./sr-cyrl.js": 305,
	"./sr.js": 304,
	"./ss": 306,
	"./ss.js": 306,
	"./sv": 307,
	"./sv.js": 307,
	"./sw": 308,
	"./sw.js": 308,
	"./ta": 309,
	"./ta.js": 309,
	"./te": 310,
	"./te.js": 310,
	"./tet": 311,
	"./tet.js": 311,
	"./tg": 312,
	"./tg.js": 312,
	"./th": 313,
	"./th.js": 313,
	"./tl-ph": 314,
	"./tl-ph.js": 314,
	"./tlh": 315,
	"./tlh.js": 315,
	"./tr": 316,
	"./tr.js": 316,
	"./tzl": 317,
	"./tzl.js": 317,
	"./tzm": 318,
	"./tzm-latn": 319,
	"./tzm-latn.js": 319,
	"./tzm.js": 318,
	"./ug-cn": 320,
	"./ug-cn.js": 320,
	"./uk": 321,
	"./uk.js": 321,
	"./ur": 322,
	"./ur.js": 322,
	"./uz": 323,
	"./uz-latn": 324,
	"./uz-latn.js": 324,
	"./uz.js": 323,
	"./vi": 325,
	"./vi.js": 325,
	"./x-pseudo": 326,
	"./x-pseudo.js": 326,
	"./yo": 327,
	"./yo.js": 327,
	"./zh-cn": 328,
	"./zh-cn.js": 328,
	"./zh-hk": 329,
	"./zh-hk.js": 329,
	"./zh-tw": 330,
	"./zh-tw.js": 330
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 410;

/***/ })

},[331]);
//# sourceMappingURL=main.js.map
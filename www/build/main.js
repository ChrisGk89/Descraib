webpackJsonp([2],{

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__welcome_welcome__ = __webpack_require__(362);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(nav, auth, alertCtrl, loadingCtrl) {
        this.nav = nav;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.registerCredentials = { email: '', password: '' };
    }
    LoginPage.prototype.WelcomePAge = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__welcome_welcome__["a" /* WelcomePage */]);
    };
    LoginPage.prototype.createAccount = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.showLoading();
        this.auth.login(this.registerCredentials).subscribe(function (allowed) {
            if (allowed) {
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__welcome_welcome__["a" /* WelcomePage */]);
            }
            else {
                //this.showError("Access Denied");
            }
        }, function (error) {
            _this.showError(error);
        });
    };
    LoginPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    LoginPage.prototype.showError = function (text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: 'Fail',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present(prompt);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/christosgkalfas/Descraib/src/pages/login/login.html"*/'<ion-content class="login-content" padding>\n  <ion-title>\n    <h3 style="color:#399F8B; font-family: \'Avenir Next\'; font-weight: bold; font-size: x-large;">Welcome to Descra(i)b</h3>\n    <h4 style="color:#399F8B">Login</h4>\n  </ion-title>\n\n  <ion-row class="logo-row">\n    <ion-col></ion-col>\n    <ion-col width-67>\n      <img src="assets/imgs/giant-crab.png"/>\n    </ion-col>\n    <ion-col></ion-col>\n  </ion-row>\n\n\n  <div class="login-box" style="border-radius: 15px">\n    <form (ngSubmit)="login()" #registerForm="ngForm">\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n\n            <ion-item>\n              <ion-input type="text" placeholder="Email" name="email" [(ngModel)]="registerCredentials.email" required></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-input type="password" placeholder="Password" name="password" [(ngModel)]="registerCredentials.password" required></ion-input>\n            </ion-item>\n\n          </ion-list>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class="signup-col">\n          <button ion-button class="submit-btn" full type="submit" (click)="WelcomePAge()" [disabled]="!registerForm.form.valid">Login</button>\n          <button ion-button class="register-btn" block clear (click)="createAccount()">Create New Account</button>\n        </ion-col>\n      </ion-row>\n\n    </form>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/christosgkalfas/Descraib/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterPage = /** @class */ (function () {
    function RegisterPage(nav, auth, alertCtrl) {
        this.nav = nav;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.createSuccess = false;
        this.registerCredentials = { email: '', password: '' };
    }
    RegisterPage.prototype.register = function () {
        var _this = this;
        this.auth.register(this.registerCredentials).subscribe(function (success) {
            if (success) {
                _this.createSuccess = true;
                _this.showPopup("Success", "Account created.");
            }
            else {
                _this.showPopup("Error", "Problem creating account.");
            }
        }, function (error) {
            _this.showPopup("Error", error);
        });
    };
    RegisterPage.prototype.showPopup = function (title, text) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                        if (_this.createSuccess) {
                            _this.nav.popToRoot();
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/christosgkalfas/Descraib/src/pages/register/register.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Register</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content class="login-content" padding>\n\n  <ion-title>New to Descra(i)b?<br><br>\n    Welcome on board</ion-title>\n\n  <ion-row class="logo-row">\n    <ion-col></ion-col>\n    <ion-col width-67>\n      <img src="assets/imgs/giant-crab.png"/>\n    </ion-col>\n    <ion-col></ion-col>\n  </ion-row>\n\n  <div class="login-box">\n\n    <form (ngSubmit)="register()" #registerForm="ngForm">\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n\n            <ion-item>\n              <ion-input type="text" placeholder="Email" name="email" [(ngModel)]="registerCredentials.email" required></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-input type="password" placeholder="Password" name="password" [(ngModel)]="registerCredentials.password" required></ion-input>\n            </ion-item>\n\n          </ion-list>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class="signup-col">\n          <button ion-button class="submit-btn" full type="submit" [disabled]="!registerForm.form.valid">Register</button>\n        </ion-col>\n      </ion-row>\n\n    </form>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/christosgkalfas/Descraib/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaderboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LeaderboardPage = /** @class */ (function () {
    function LeaderboardPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LeaderboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-leaderboard',template:/*ion-inline-start:"/Users/christosgkalfas/Descraib/src/pages/leaderboard/leaderboard.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Leaderboard</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-content padding class="bg">\n    <!-- <ion-card class="card-recent">\n    <ion-card-content text-center>\n      <ion-card-title>\n        Recent Activity\n      </ion-card-title>\n      <div class="discription">{{recent_activity[\'activitytype\']}}: {{recent_activity[\'distance\']}}KM</div>\n      <div class="discription">FootPrint Challenges: {{number_challenges}}</div>\n      <div class="discription">Your Total Score: {{totalScore}}</div>\n      </ion-card-content>\n    </ion-card> -->\n\n    <ion-card class="card-five">\n      <ion-card-title text-center>Top five Users</ion-card-title>\n      <ion-grid>\n        <ion-row class="header_rwo">\n          <ion-col>Username</ion-col>\n          <ion-col>Score</ion-col>\n          <ion-col>Position</ion-col>\n        </ion-row>\n        <ion-row class="header_players">\n         <!-- <ion-row *ngFor="let i of total_parti"> -->\n          <ion-col>\n            Chris\n            <!-- {{ perticipants[i][\'_id\'] }} -->\n          </ion-col>\n          <ion-col>\n            150\n            <!-- {{ perticipants[i][\'total\'] }} -->\n          </ion-col>\n          <ion-col>\n            1\n            <!-- {{ i+1 }} -->\n          </ion-col>\n        </ion-row>\n\n        <ion-row class="header_players">\n          <ion-col>John</ion-col>\n          <ion-col>120</ion-col>\n          <ion-col>2</ion-col>\n        </ion-row>\n\n        <ion-row class="header_players">\n          <ion-col>Jim</ion-col>\n          <ion-col>100</ion-col>\n          <ion-col>3</ion-col>\n        </ion-row>\n\n        <ion-row class="header_players">\n          <ion-col>Maria</ion-col>\n          <ion-col>80</ion-col>\n          <ion-col>4</ion-col>\n        </ion-row>\n\n        <ion-row class="header_players">\n          <ion-col>Cherry</ion-col>\n          <ion-col>50</ion-col>\n          <ion-col>5</ion-col>\n        </ion-row>\n\n\n      </ion-grid>\n    </ion-card>\n\n  </ion-content>\n\n</ion-content>\n'/*ion-inline-end:"/Users/christosgkalfas/Descraib/src/pages/leaderboard/leaderboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], LeaderboardPage);
    return LeaderboardPage;
}());

//# sourceMappingURL=leaderboard.js.map

/***/ }),

/***/ 170:
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
webpackEmptyAsyncContext.id = 170;

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/leaderboard/leaderboard.module": [
		727,
		1
	],
	"../pages/register/register.module": [
		726,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 215;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__intro_intro__ = __webpack_require__(363);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WelcomePage = /** @class */ (function () {
    function WelcomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.slides = [
            {
                title: "Welcome to DesCra(i)b!",
                description: "<b>DesCra(i)b</b> showcases a number of photos you need to classify and describe. That's the reason of the name DesCra(i)b. Smart? You decide.",
                image: "assets/imgs/giant-crab.png",
            },
            {
                title: "What is DesCra(i)b?",
                description: "<b>Photo Description</b> The eye-catching detail crab want to know what you see in your smartphone screen. You can additionally upload your own photos and describe them. As a matter of fact you could gain points and earn beatiful rewards.",
                image: "assets/imgs/phone.png",
            },
            {
                title: "DesCra(i)b wizard will reward you",
                description: "<b>DesCra(i)b Wizard.</b> After submiting your answers our system will review your photos and reward your points. So the more you play the more you win.",
                image: "assets/imgs/ica-slidebox-img-3.png",
            }
        ];
    }
    WelcomePage.prototype.iNtroPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__intro_intro__["a" /* IntroPage */]);
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/christosgkalfas/Descraib/src/pages/welcome/welcome.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title style="text-align: center">Welcome</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="tutorial-page">\n\n  <ion-slides pager>\n    <ion-slide *ngFor="let slide of slides">\n      <ion-toolbar>\n        <!-- <ion-buttons end>\n          <button ion-button color="primary">Skip</button>\n        </ion-buttons> -->\n      </ion-toolbar>\n      <img [src]="slide.image" class="slide-image"/>\n      <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n      <p [innerHTML]="slide.description"></p>\n    </ion-slide>\n    <ion-slide>\n      <ion-toolbar>\n      </ion-toolbar>\n      <img src="assets/imgs/ica-slidebox-img-4.png" class="slide-image"/>\n      <h2 class="slide-title">Ready to Play?</h2>\n      <button ion-button large outline round icon-end color="primary" (click)="iNtroPage()">\n        Continue\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-slide>\n  </ion-slides>\n\n</ion-content>\n'/*ion-inline-end:"/Users/christosgkalfas/Descraib/src/pages/welcome/welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__categories_categories__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__leaderboard_leaderboard__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var IntroPage = /** @class */ (function () {
    function IntroPage(platform, navCtrl, iab, auth, alertCtrl) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.iab = iab;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.username = '';
        this.email = '';
        this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
        var info = this.auth.getUserInfo();
        this.username = info['name'];
        this.email = info['email'];
    }
    IntroPage.prototype.cAtegoriesPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__categories_categories__["a" /* CategoriesPage */]);
    };
    IntroPage.prototype.lEaderboardPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__leaderboard_leaderboard__["a" /* LeaderboardPage */]);
    };
    IntroPage.prototype.openWithSystemBrowser = function (url) {
        var target = "_system";
        this.iab.create(url, target, this.options);
    };
    IntroPage.prototype.logout = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
    };
    IntroPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Your are logged out.',
            buttons: ['OK'],
        });
        alert.present();
    };
    IntroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/christosgkalfas/Descraib/src/pages/intro/intro.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Welcome to Descra(i)b</ion-title>\n\n    <ion-buttons end>\n      <button ion-button (click)="logout()" (click)="presentAlert()">\n        <a>Logout</a>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="content-intro">\n\n  <ion-card-content>\n\n    <ion-col col-1 no-padding class="padding-top-20">\n    </ion-col>\n\n    <ion-col col-3 text-center>\n          <div class="center" style="padding-top: 80px">\n          <button class="play" ion-button round large color="default" (click)="cAtegoriesPage()">Play</button>\n          </div>\n\n      <div class="center" style="padding-top: 50px">\n  <button class="leaderboard" ion-button round large color="light" (click)="lEaderboardPage()">LeaderBoard</button>\n      </div>\n\n      <div class="center" style="padding-top: 50px">\n  <button class="info" ion-button round large color="secondary" (click)="openWithSystemBrowser(\'https://www.chrisgkalfas.com\')">Developer Info</button>\n      </div>\n    </ion-col>\n\n\n  </ion-card-content>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/christosgkalfas/Descraib/src/pages/intro/intro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], IntroPage);
    return IntroPage;
}());

//# sourceMappingURL=intro.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__images_images__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__images2_images2__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__images3_images3__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CategoriesPage = /** @class */ (function () {
    function CategoriesPage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
    }
    CategoriesPage.prototype.iMagesPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__images_images__["a" /* ImagesPage */]);
    };
    CategoriesPage.prototype.iMages2Page = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__images2_images2__["a" /* Images2Page */]);
    };
    CategoriesPage.prototype.iMages3Page = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__images3_images3__["a" /* Images3Page */]);
    };
    CategoriesPage.prototype.logout = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
    };
    CategoriesPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Your are logged out.',
            buttons: ['OK'],
        });
        alert.present();
    };
    CategoriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/christosgkalfas/Descraib/src/pages/categories/categories.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons end>\n      <button ion-button (click)="logout()" (click)="presentAlert()">\n        <a>Logout</a>\n      </button>\n    </ion-buttons>\n    <ion-title>Choose Level</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="cards-bg">\n\n  <ion-card class="cards">\n    <ion-card-content class="card-content">\n      <ion-card-title style="text-align: center">\n        <b>Level One</b>\n      </ion-card-title>\n      <p style="text-align: center">\n        Choose the correct answer according of what you see in the image to gain points.\n      </p>\n    </ion-card-content>\n    <img class="img" src="assets/imgs/crab.png"/>\n      <ion-col col-3 text-center>\n        <div class="center">\n        <button class="play" ion-button round large color="default" (click)="iMagesPage()">Go to Level 1</button>\n        </div>\n      </ion-col>\n  </ion-card>\n\n\n  <ion-card class="cards">\n    <ion-card-content class="card-content">\n      <ion-card-title style="text-align: center">\n        <b>Level Two</b>\n      </ion-card-title>\n      <p style="text-align: center">\n        Choose the correct answer in the question to gain 2x points.\n      </p>\n    </ion-card-content>\n    <div>\n      <img class="img" src="assets/imgs/crabs.png"/>\n    </div>\n    <ion-col col-3 text-center>\n      <div class="center">\n        <button class="play" ion-button round large color="secondary" (click)="iMages2Page()">Go to Level 2</button>\n      </div>\n    </ion-col>\n  </ion-card>\n\n\n  <ion-card class="cards">\n    <ion-card-content class="card-content">\n      <ion-card-title style="text-align: center">\n        <b>Level Three</b>\n      </ion-card-title>\n      <p style="text-align: center">\n        Follow the instructions taking the correct image to gain 3x points.\n      </p>\n    </ion-card-content>\n    <div>\n      <img class="img" src="assets/imgs/annotate.png"/>\n    </div>\n    <ion-col col-3 text-center>\n      <div class="center">\n        <button class="play" ion-button round large color="danger" (click)="iMages3Page()">Go to Level 3</button>\n      </div>\n    </ion-col>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/christosgkalfas/Descraib/src/pages/categories/categories.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _b || Object])
    ], CategoriesPage);
    return CategoriesPage;
    var _a, _b;
}());

//# sourceMappingURL=categories.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { NgForm } from '@angular/forms';
//import { ModalController, NavController } from 'ionic-angular';
var ImagesPage = /** @class */ (function () {
    //constructor(private modalCtrl: ModalController,
    // private navCtrl: NavController) {}
    function ImagesPage(toastCtrl, alertCtrl) {
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        //constructor(private modalCtrl: ModalController, private navCtrl: NavController) {}
        this.handler = this.setSubmit1;
        this.handler2 = this.setSubmit2;
        this.handler3 = this.setSubmit3;
        this.handler4 = this.setSubmit4;
        this.handler5 = this.setSubmit5;
        this.handler6 = this.setSubmit6;
        this.handler7 = this.setSubmit7;
        this.handler8 = this.setSubmit8;
        this.handler9 = this.setSubmit9;
        this.handler10 = this.setSubmit10;
        this.text1 = 'Submit';
        this.text2 = 'Submit';
        this.text3 = 'Submit';
        this.text4 = 'Submit';
        this.text5 = 'Submit';
        this.text6 = 'Submit';
        this.text7 = 'Submit';
        this.text8 = 'Submit';
        this.text9 = 'Submit';
        this.text10 = 'Submit';
        this.color1 = 'secondary';
        this.color2 = 'secondary';
        this.color3 = 'secondary';
        this.color4 = 'secondary';
        this.color5 = 'secondary';
        this.color6 = 'secondary';
        this.color7 = 'secondary';
        this.color8 = 'secondary';
        this.color9 = 'secondary';
        this.color10 = 'secondary';
        this.disabled1 = false;
        this.disabled2 = false;
        this.disabled3 = false;
        this.disabled4 = false;
        this.disabled5 = false;
        this.disabled6 = false;
        this.disabled7 = false;
        this.disabled8 = false;
        this.disabled9 = false;
        this.disabled10 = false;
    }
    ImagesPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'HINT: Look closer!',
            duration: 4000,
            position: 'middle',
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ImagesPage.prototype.presentToast2 = function () {
        var toast = this.toastCtrl.create({
            message: 'Hmmm, looks like it. Think to submit.',
            duration: 2500,
            position: 'middle'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ImagesPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Your answer submitted.',
            subTitle: 'We are working on your response to gather your points.',
            buttons: ['OK'],
        });
        alert.present();
    };
    ImagesPage.prototype.setSubmit1 = function () {
        this.text1 = 'Submitted';
        this.color1 = '#488aff';
        this.disabled1 = true;
    };
    ImagesPage.prototype.setSubmit2 = function () {
        this.text2 = 'Submitted';
        this.color2 = '#488aff';
        this.disabled2 = true;
    };
    ImagesPage.prototype.setSubmit3 = function () {
        this.text3 = 'Submitted';
        this.color3 = '#488aff';
        this.disabled3 = true;
    };
    ImagesPage.prototype.setSubmit4 = function () {
        this.text4 = 'Submitted';
        this.color4 = '#488aff';
        this.disabled4 = true;
    };
    ImagesPage.prototype.setSubmit5 = function () {
        this.text5 = 'Submitted';
        this.color5 = '#488aff';
        this.disabled5 = true;
    };
    ImagesPage.prototype.setSubmit6 = function () {
        this.text6 = 'Submitted';
        this.color6 = '#488aff';
        this.disabled6 = true;
    };
    ImagesPage.prototype.setSubmit7 = function () {
        this.text7 = 'Submitted';
        this.color7 = '#488aff';
        this.disabled7 = true;
    };
    ImagesPage.prototype.setSubmit8 = function () {
        this.text8 = 'Submitted';
        this.color8 = '#488aff';
        this.disabled8 = true;
    };
    ImagesPage.prototype.setSubmit9 = function () {
        this.text9 = 'Submitted';
        this.color9 = '#488aff';
        this.disabled9 = true;
    };
    ImagesPage.prototype.setSubmit10 = function () {
        this.text10 = 'Submitted';
        this.color10 = '#488aff';
        this.disabled10 = true;
    };
    ImagesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/christosgkalfas/Descraib/src/pages/images/images.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Level One\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="background-color">\n\n  <h2 class="h2">Describe what you see in the images to gain points!</h2>\n\n  <ion-grid>\n\n    <ion-row>\n      <ion-card class="image">\n\n        <ion-col col-12 col-sm text-center>\n          <h2>What this picture presents?</h2>\n\n          <ion-card-header>\n          <img src="assets/imgs/1.jpg"/>\n        </ion-card-header>\n      </ion-col>\n\n      <ion-col col-12 col-sm text-center>\n        <ion-card-content>\n          <ion-list radio-group>\n            <ion-list-header>\n              Choose the correct answer\n            </ion-list-header>\n\n            <ion-item>\n              <ion-label>Dog (Correct Answer)</ion-label>\n              <ion-radio value="dog" [disabled]="disabled1"></ion-radio>\n            </ion-item>\n\n            <ion-item>\n              <ion-label>Cat</ion-label>\n              <ion-radio value="cat" [disabled]="disabled1" (click)="presentToast()"></ion-radio>\n            </ion-item>\n\n            <ion-item>\n              <ion-label>Tree</ion-label>\n              <ion-radio value="tree" [disabled]="disabled1" (click)="presentToast()"></ion-radio>\n            </ion-item>\n\n            <div class="center" style="padding-bottom: 10px">\n              <button ion-button [disabled]="disabled1"  round medium color="{{color1}}" type="submit" (click)="presentAlert()" (click)="handler()">{{text1}}</button>\n            </div>\n          </ion-list>\n\n        </ion-card-content>\n       </ion-col>\n      </ion-card>\n    </ion-row>\n\n\n\n    <ion-row>\n      <ion-card class="image">\n\n        <ion-col col-12 col-sm text-center>\n          <h2>What this picture presents?</h2>\n\n          <ion-card-header>\n            <img src="assets/imgs/2.jpg"/>\n          </ion-card-header>\n        </ion-col>\n\n        <ion-col col-12 col-sm text-center>\n          <ion-card-content>\n            <ion-list radio-group>\n              <ion-list-header>\n                Choose the correct answer\n              </ion-list-header>\n\n              <ion-item>\n                <ion-label>Dog</ion-label>\n                <ion-radio value="dog" [disabled]="disabled2" (click)="presentToast()"></ion-radio>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Cat (Correct Answer)</ion-label>\n                <ion-radio value="cat" [disabled]="disabled2"></ion-radio>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Tree</ion-label>\n                <ion-radio value="tree" [disabled]="disabled2" (click)="presentToast()"></ion-radio>\n              </ion-item>\n\n              <div class="center" style="padding-bottom: 10px">\n                <button ion-button [disabled]="disabled2"  round medium color="{{color2}}" type="submit" (click)="presentAlert()" (click)="handler2()">{{text2}}</button>\n              </div>\n            </ion-list>\n\n          </ion-card-content>\n        </ion-col>\n      </ion-card>\n    </ion-row>\n\n\n\n    <ion-row>\n      <ion-card class="image">\n        <ion-col col-12 col-sm text-center>\n          <h2>What this picture presents?</h2>\n          <ion-card-header>\n            <img src="assets/imgs/3.jpg"/>\n          </ion-card-header>\n        </ion-col>\n\n        <ion-col col-12 col-sm text-center>\n          <ion-card-content>\n            <ion-list radio-group>\n              <ion-list-header>\n                Choose the correct answer\n              </ion-list-header>\n\n              <ion-item>\n                <ion-label>Dog</ion-label>\n                <ion-radio value="dog" [disabled]="disabled3" (click)="presentToast()"></ion-radio>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Cat</ion-label>\n                <ion-radio value="cat" [disabled]="disabled3" (click)="presentToast()"></ion-radio>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Tree (Correct Answer)</ion-label>\n                <ion-radio value="tree" [disabled]="disabled3"></ion-radio>\n              </ion-item>\n\n              <div class="center" style="padding-bottom: 10px">\n                <button ion-button [disabled]="disabled3"  round medium color="{{color3}}" type="submit" (click)="presentAlert()" (click)="handler3()">{{text3}}</button>\n              </div>\n            </ion-list>\n\n          </ion-card-content>\n        </ion-col>\n      </ion-card>\n    </ion-row>\n\n\n\n    <ion-row>\n      <ion-card class="image">\n\n        <ion-col col-12 col-sm text-center>\n          <h2>What this picture presents?</h2>\n\n          <ion-card-header>\n            <img src="assets/imgs/4.jpg"/>\n          </ion-card-header>\n        </ion-col>\n\n        <ion-col col-12 col-sm text-center>\n          <ion-card-content>\n            <ion-list radio-group>\n              <ion-list-header>\n                Choose the correct answer\n              </ion-list-header>\n\n              <ion-item>\n                <ion-label>Car</ion-label>\n                <ion-radio value="car" [disabled]="disabled4" (click)="presentToast()"></ion-radio>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Bicycle (Correct Answer)</ion-label>\n                <ion-radio value="bicycle" [disabled]="disabled4"></ion-radio>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>House</ion-label>\n                <ion-radio value="house" [disabled]="disabled4" (click)="presentToast()"></ion-radio>\n              </ion-item>\n\n              <div class="center" style="padding-bottom: 10px">\n                <button ion-button [disabled]="disabled4"  round medium color="{{color4}}" type="submit" (click)="presentAlert()" (click)="handler4()">{{text4}}</button>\n              </div>\n            </ion-list>\n\n          </ion-card-content>\n        </ion-col>\n      </ion-card>\n    </ion-row>\n\n\n\n\n    <ion-row>\n      <ion-card class="image">\n\n        <ion-col col-12 col-sm text-center>\n          <h2>What this picture presents?</h2>\n\n          <ion-card-header>\n            <img src="assets/imgs/5.jpg"/>\n          </ion-card-header>\n        </ion-col>\n\n        <ion-col col-12 col-sm text-center>\n          <ion-card-content>\n            <ion-list radio-group>\n              <ion-list-header>\n                Choose the correct answer\n              </ion-list-header>\n\n              <ion-item>\n                <ion-label>Desk (Correct Answer)</ion-label>\n                <ion-radio value="desk" [disabled]="disabled5"></ion-radio>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Guitar</ion-label>\n                <ion-radio value="guitar" [disabled]="disabled5" (click)="presentToast()"></ion-radio>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Child</ion-label>\n                <ion-radio value="child" [disabled]="disabled5" (click)="presentToast()"></ion-radio>\n              </ion-item>\n\n              <div class="center" style="padding-bottom: 10px">\n                <button ion-button [disabled]="disabled5"  round medium color="{{color5}}" type="submit" (click)="presentAlert()" (click)="handler5()">{{text5}}</button>\n              </div>\n            </ion-list>\n\n          </ion-card-content>\n        </ion-col>\n      </ion-card>\n    </ion-row>\n\n\n\n\n    <ion-row>\n      <ion-card class="image">\n\n        <ion-col col-12 col-sm text-center>\n          <h2>What this picture presentd?</h2>\n\n          <ion-card-header>\n            <img src="assets/imgs/6.jpg"/>\n          </ion-card-header>\n        </ion-col>\n\n        <ion-col col-12 col-sm text-center>\n          <ion-card-content>\n            <ion-list radio-group>\n              <ion-list-header>\n                Choose the correct answer\n              </ion-list-header>\n\n              <ion-item>\n                <ion-label>Woman</ion-label>\n                <ion-radio value="woman" [disabled]="disabled6"></ion-radio>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Lion</ion-label>\n                <ion-radio value="lion" [disabled]="disabled6"></ion-radio>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Guitar</ion-label>\n                <ion-radio value="guitar" [disabled]="disabled6"></ion-radio>\n              </ion-item>\n\n              <div class="center" style="padding-bottom: 10px">\n                <button ion-button [disabled]="disabled6"  round medium color="{{color6}}" type="submit" (click)="presentAlert()" (click)="handler6()">{{text6}}</button>\n              </div>\n            </ion-list>\n\n          </ion-card-content>\n        </ion-col>\n      </ion-card>\n    </ion-row>\n\n\n\n\n    <ion-row>\n      <ion-card class="image">\n\n        <ion-col col-12 col-sm text-center>\n          <h2>What this picture presents?</h2>\n\n          <ion-card-header>\n            <img src="assets/imgs/7.jpg"/>\n          </ion-card-header>\n        </ion-col>\n\n        <ion-col col-12 col-sm text-center>\n          <ion-card-content>\n            <ion-list radio-group>\n              <ion-list-header>\n                Choose the correct answer\n              </ion-list-header>\n\n              <ion-item>\n                <ion-label>Bird</ion-label>\n                <ion-radio value="bird" [disabled]="disabled7"></ion-radio>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Computer</ion-label>\n                <ion-radio value="computer" [disabled]="disabled7"></ion-radio>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Road Sign</ion-label>\n                <ion-radio value="roadsign" [disabled]="disabled7"></ion-radio>\n              </ion-item>\n\n              <div class="center" style="padding-bottom: 10px">\n                <button ion-button [disabled]="disabled7"  round medium color="{{color7}}" type="submit" (click)="presentAlert()" (click)="handler7()">{{text7}}</button>\n              </div>\n            </ion-list>\n\n          </ion-card-content>\n        </ion-col>\n      </ion-card>\n    </ion-row>\n\n\n\n\n    <ion-row>\n      <ion-card class="image">\n\n        <ion-col col-12 col-sm text-center>\n          <h2>What this picture presents?</h2>\n\n          <ion-card-header>\n            <img src="assets/imgs/8.jpg"/>\n          </ion-card-header>\n        </ion-col>\n\n        <ion-col col-12 col-sm text-center>\n          <ion-card-content>\n            <ion-list radio-group>\n              <ion-list-header>\n                Choose the correct answer\n              </ion-list-header>\n\n              <ion-item>\n                <ion-label>Cat</ion-label>\n                <ion-radio value="cat" [disabled]="disabled8"></ion-radio>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Bicycle</ion-label>\n                <ion-radio value="bicycle" [disabled]="disabled8"></ion-radio>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Bird</ion-label>\n                <ion-radio value="bird" [disabled]="disabled8"></ion-radio>\n              </ion-item>\n\n              <div class="center" style="padding-bottom: 10px">\n                <button ion-button [disabled]="disabled8"  round medium color="{{color8}}" type="submit" (click)="presentAlert()" (click)="handler8()">{{text8}}</button>\n              </div>\n            </ion-list>\n\n          </ion-card-content>\n        </ion-col>\n      </ion-card>\n    </ion-row>\n\n\n\n\n    <ion-row>\n      <ion-card class="image">\n\n        <ion-col col-12 col-sm text-center>\n          <h2>What this picture presents?</h2>\n\n          <ion-card-header>\n            <img src="assets/imgs/9.jpg"/>\n          </ion-card-header>\n        </ion-col>\n\n        <ion-col col-12 col-sm text-center>\n          <ion-card-content>\n            <ion-list radio-group>\n              <ion-list-header>\n                Choose the correct answer\n              </ion-list-header>\n\n              <ion-item>\n                <ion-label>Dog</ion-label>\n                <ion-radio value="dog" [disabled]="disabled9"></ion-radio>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Road Sign</ion-label>\n                <ion-radio value="roadsign" [disabled]="disabled9"></ion-radio>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Tree</ion-label>\n                <ion-radio value="tree" [disabled]="disabled9"></ion-radio>\n              </ion-item>\n\n              <div class="center" style="padding-bottom: 10px">\n                <button ion-button [disabled]="disabled9"  round medium color="{{color9}}" type="submit" (click)="presentAlert()" (click)="handler9()">{{text9}}</button>\n              </div>\n            </ion-list>\n\n          </ion-card-content>\n        </ion-col>\n      </ion-card>\n    </ion-row>\n\n\n\n    <ion-row>\n      <ion-card class="image">\n\n        <ion-col col-12 col-sm text-center>\n          <h2>What this picture presents?</h2>\n\n          <ion-card-header>\n            <img src="assets/imgs/10.jpg"/>\n          </ion-card-header>\n        </ion-col>\n\n        <ion-col col-12 col-sm text-center>\n          <ion-card-content>\n            <ion-list radio-group>\n              <ion-list-header>\n                Choose the correct answer\n              </ion-list-header>\n\n              <ion-item>\n                <ion-label>Flowers</ion-label>\n                <ion-radio value="flowers" [disabled]="disabled10"></ion-radio>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Cat</ion-label>\n                <ion-radio value="cat" [disabled]="disabled10"></ion-radio>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Car</ion-label>\n                <ion-radio value="car" [disabled]="disabled10"></ion-radio>\n              </ion-item>\n\n              <div class="center" style="padding-bottom: 10px">\n                <button ion-button [disabled]="disabled10"  round medium color="{{color10}}" type="submit" (click)="presentAlert()" (click)="handler10()">{{text10}}</button>\n              </div>\n            </ion-list>\n\n          </ion-card-content>\n        </ion-col>\n      </ion-card>\n    </ion-row>\n\n\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/christosgkalfas/Descraib/src/pages/images/images.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ImagesPage);
    return ImagesPage;
}());

//# sourceMappingURL=images.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Images2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { NgForm } from '@angular/forms';
///import { ModalController, NavController } from 'ionic-angular';

var Images2Page = /** @class */ (function () {
    //constructor(private modalCtrl: ModalController,
    // private navCtrl: NavController) {}
    function Images2Page(toastCtrl, alertCtrl) {
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.handler = this.setSubmit1;
        this.handler2 = this.setSubmit2;
        this.handler3 = this.setSubmit3;
        this.handler4 = this.setSubmit4;
        this.handler5 = this.setSubmit5;
        this.handler6 = this.setSubmit6;
        this.handler7 = this.setSubmit7;
        this.handler8 = this.setSubmit8;
        this.handler9 = this.setSubmit9;
        this.handler10 = this.setSubmit10;
        this.text1 = 'Submit';
        this.text2 = 'Submit';
        this.text3 = 'Submit';
        this.text4 = 'Submit';
        this.text5 = 'Submit';
        this.text6 = 'Submit';
        this.text7 = 'Submit';
        this.text8 = 'Submit';
        this.text9 = 'Submit';
        this.text10 = 'Submit';
        this.color1 = 'secondary';
        this.color2 = 'secondary';
        this.color3 = 'secondary';
        this.color4 = 'secondary';
        this.color5 = 'secondary';
        this.color6 = 'secondary';
        this.color7 = 'secondary';
        this.color8 = 'secondary';
        this.color9 = 'secondary';
        this.color10 = 'secondary';
        this.disabled1 = false;
        this.disabled2 = false;
        this.disabled3 = false;
        this.disabled4 = false;
        this.disabled5 = false;
        this.disabled6 = false;
        this.disabled7 = false;
        this.disabled8 = false;
        this.disabled9 = false;
        this.disabled10 = false;
    }
    Images2Page.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'HINT: Look closer!',
            duration: 4000,
            position: 'middle'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    Images2Page.prototype.presentToast2 = function () {
        var toast = this.toastCtrl.create({
            message: 'Hmmm, looks like it. Think to submit.',
            duration: 2500,
            position: 'middle'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    Images2Page.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Your answer submitted.',
            subTitle: 'We are working on your response to gather your points.',
            buttons: ['OK']
        });
        alert.present();
    };
    Images2Page.prototype.setSubmit1 = function () {
        this.text1 = 'Submitted';
        this.color1 = '#488aff';
        this.disabled1 = true;
    };
    Images2Page.prototype.setSubmit2 = function () {
        this.text2 = 'Submitted';
        this.color2 = '#488aff';
        this.disabled2 = true;
    };
    Images2Page.prototype.setSubmit3 = function () {
        this.text3 = 'Submitted';
        this.color3 = '#488aff';
        this.disabled3 = true;
    };
    Images2Page.prototype.setSubmit4 = function () {
        this.text4 = 'Submitted';
        this.color4 = '#488aff';
        this.disabled4 = true;
    };
    Images2Page.prototype.setSubmit5 = function () {
        this.text5 = 'Submitted';
        this.color5 = '#488aff';
        this.disabled5 = true;
    };
    Images2Page.prototype.setSubmit6 = function () {
        this.text6 = 'Submitted';
        this.color6 = '#488aff';
        this.disabled6 = true;
    };
    Images2Page.prototype.setSubmit7 = function () {
        this.text7 = 'Submitted';
        this.color7 = '#488aff';
        this.disabled7 = true;
    };
    Images2Page.prototype.setSubmit8 = function () {
        this.text8 = 'Submitted';
        this.color8 = '#488aff';
        this.disabled8 = true;
    };
    Images2Page.prototype.setSubmit9 = function () {
        this.text9 = 'Submitted';
        this.color9 = '#488aff';
        this.disabled9 = true;
    };
    Images2Page.prototype.setSubmit10 = function () {
        this.text10 = 'Submitted';
        this.color10 = '#488aff';
        this.disabled10 = true;
    };
    Images2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/christosgkalfas/Descraib/src/pages/images2/images2.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Level Two\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="background-color">\n\n  <h1 class="h2" style="color: #32db64;">Find the match to gain 2X points!</h1>\n\n  <ion-grid>\n\n\n    <ion-row class="row">\n      <ion-card class="image">\n\n        <ion-col col-12 col-sm text-center>\n\n\n          <ion-card-header>\n            <img src="assets/imgs/cat.png">\n          </ion-card-header>\n        </ion-col>\n\n        <ion-col col-12 col-sm text-center>\n          <ion-card-content>\n            <ion-list radio-group>\n              <ion-list-header>\n                Choose the correct answer\n              </ion-list-header>\n\n              <img src="assets/imgs/1.jpg"/>\n              <ion-item>\n                <ion-label>Choose this</ion-label>\n                <ion-radio value="dog" [disabled]="disabled1"></ion-radio>\n              </ion-item>\n\n              <img src="assets/imgs/2.jpg"/>\n              <ion-item>\n                <ion-label>Choose this</ion-label>\n                <ion-radio value="cat" [disabled]="disabled1"></ion-radio>\n              </ion-item>\n\n              <img src="assets/imgs/3.jpg"/>\n              <ion-item>\n                <ion-label>Choose this</ion-label>\n                <ion-radio value="tree" [disabled]="disabled1"></ion-radio>\n              </ion-item>\n\n              <div class="center" style="padding-bottom: 10px">\n                <button ion-button [disabled]="disabled1" round medium color="{{color1}}" type="submit" (click)="presentAlert()" (click)="handler()">{{text1}}</button>\n              </div>\n            </ion-list>\n\n          </ion-card-content>\n        </ion-col>\n      </ion-card>\n    </ion-row>\n\n\n    <ion-row class="row2">\n      <ion-card class="image2">\n\n        <ion-col col-12 col-sm text-center>\n\n\n          <ion-card-header>\n            <img src="assets/imgs/dog.png">\n          </ion-card-header>\n        </ion-col>\n\n        <ion-col col-12 col-sm text-center>\n          <ion-card-content>\n            <ion-list radio-group>\n              <ion-list-header>\n                Choose the correct answer\n              </ion-list-header>\n\n              <img src="assets/imgs/5.jpg"/>\n              <ion-item>\n                <ion-label>Choose this</ion-label>\n                <ion-radio value="desk" [disabled]="disabled2"></ion-radio>\n              </ion-item>\n\n              <img src="assets/imgs/1.jpg"/>\n              <ion-item>\n                <ion-label>Choose this</ion-label>\n                <ion-radio value="dog" [disabled]="disabled2"></ion-radio>\n              </ion-item>\n\n              <img src="assets/imgs/7.jpg"/>\n              <ion-item>\n                <ion-label>Choose this</ion-label>\n                <ion-radio value="stopsign" [disabled]="disabled2"></ion-radio>\n              </ion-item>\n\n              <div class="center" style="padding-bottom: 10px">\n                <button ion-button [disabled]="disabled2"  round medium color="{{color2}}" type="submit" (click)="presentAlert()" (click)="handler2()">{{text2}}</button>\n              </div>\n            </ion-list>\n\n          </ion-card-content>\n        </ion-col>\n      </ion-card>\n    </ion-row>\n\n\n    <ion-row class="row3">\n      <ion-card class="image3">\n\n        <ion-col col-12 col-sm text-center>\n\n\n          <ion-card-header>\n            <img src="assets/imgs/tree.png">\n          </ion-card-header>\n        </ion-col>\n\n        <ion-col col-12 col-sm text-center>\n          <ion-card-content>\n            <ion-list radio-group>\n              <ion-list-header>\n                Choose the correct answer\n              </ion-list-header>\n\n              <img src="assets/imgs/3.jpg"/>\n              <ion-item>\n                <ion-label>Choose this</ion-label>\n                <ion-radio value="tree" [disabled]="disabled3"></ion-radio>\n              </ion-item>\n\n              <img src="assets/imgs/6.jpg"/>\n              <ion-item>\n                <ion-label>Choose this</ion-label>\n                <ion-radio value="guitar" [disabled]="disabled3"></ion-radio>\n              </ion-item>\n\n              <img src="assets/imgs/8.jpg"/>\n              <ion-item>\n                <ion-label>Choose this</ion-label>\n                <ion-radio value="bird" [disabled]="disabled3"></ion-radio>\n              </ion-item>\n\n              <div class="center" style="padding-bottom: 10px">\n                <button ion-button [disabled]="disabled3"  round medium color="{{color3}}" type="submit" (click)="presentAlert()" (click)="handler3()">{{text3}}</button>\n              </div>\n            </ion-list>\n\n          </ion-card-content>\n        </ion-col>\n      </ion-card>\n    </ion-row>\n\n\n\n    <ion-row class="row4">\n      <ion-card class="image4">\n\n        <ion-col col-12 col-sm text-center>\n\n\n          <ion-card-header>\n            <img src="assets/imgs/bike.png">\n          </ion-card-header>\n        </ion-col>\n\n        <ion-col col-12 col-sm text-center>\n          <ion-card-content>\n            <ion-list radio-group>\n              <ion-list-header>\n                Choose the correct answer\n              </ion-list-header>\n\n              <img src="assets/imgs/2.jpg"/>\n              <ion-item>\n                <ion-label>Choose this</ion-label>\n                <ion-radio value="cat" [disabled]="disabled4"></ion-radio>\n              </ion-item>\n\n              <img src="assets/imgs/4.jpg"/>\n              <ion-item>\n                <ion-label>Choose this</ion-label>\n                <ion-radio value="bicycle" [disabled]="disabled4"></ion-radio>\n              </ion-item>\n\n              <img src="assets/imgs/8.jpg"/>\n              <ion-item>\n                <ion-label>Choose this</ion-label>\n                <ion-radio value="bird" [disabled]="disabled4"></ion-radio>\n              </ion-item>\n\n              <div class="center" style="padding-bottom: 10px">\n                <button ion-button [disabled]="disabled4"  round medium color="{{color4}}" type="submit" (click)="presentAlert()" (click)="handler4()">{{text4}}</button>\n              </div>\n            </ion-list>\n\n          </ion-card-content>\n        </ion-col>\n      </ion-card>\n    </ion-row>\n\n\n\n    <ion-row class="row5">\n      <ion-card class="image5">\n\n        <ion-col col-12 col-sm text-center>\n\n\n          <ion-card-header>\n            <img src="assets/imgs/desk.jpg">\n          </ion-card-header>\n        </ion-col>\n\n        <ion-col col-12 col-sm text-center>\n          <ion-card-content>\n            <ion-list radio-group>\n              <ion-list-header>\n                Choose the correct answer\n              </ion-list-header>\n\n              <img src="assets/imgs/1.jpg"/>\n              <ion-item>\n                <ion-label>Choose this</ion-label>\n                <ion-radio value="dog" [disabled]="disabled5"></ion-radio>\n              </ion-item>\n\n              <img src="assets/imgs/7.jpg"/>\n              <ion-item>\n                <ion-label>Choose this</ion-label>\n                <ion-radio value="stopsign" [disabled]="disabled5"></ion-radio>\n              </ion-item>\n\n              <img src="assets/imgs/5.jpg"/>\n              <ion-item>\n                <ion-label>Choose this</ion-label>\n                <ion-radio value="desk" [disabled]="disabled5"></ion-radio>\n              </ion-item>\n\n              <div class="center" style="padding-bottom: 10px">\n                <button ion-button [disabled]="disabled5"  round medium color="{{color5}}" type="submit" (click)="presentAlert()" (click)="handler5()">{{text5}}</button>\n              </div>\n            </ion-list>\n\n          </ion-card-content>\n        </ion-col>\n      </ion-card>\n    </ion-row>\n\n\n\n    <ion-row class="row6">\n      <ion-card class="image6">\n\n        <ion-col col-12 col-sm text-center>\n\n\n          <ion-card-header>\n            <img src="assets/imgs/guitar.png">\n          </ion-card-header>\n        </ion-col>\n\n        <ion-col col-12 col-sm text-center>\n          <ion-card-content>\n            <ion-list radio-group>\n              <ion-list-header>\n                Choose the correct answer\n              </ion-list-header>\n\n              <img src="assets/imgs/5.jpg"/>\n              <ion-item>\n                <ion-label>Choose this</ion-label>\n                <ion-radio value="desk" [disabled]="disabled6"></ion-radio>\n              </ion-item>\n\n              <img src="assets/imgs/6.jpg"/>\n              <ion-item>\n                <ion-label>Choose this</ion-label>\n                <ion-radio value="guitar" [disabled]="disabled6"></ion-radio>\n              </ion-item>\n\n              <img src="assets/imgs/10.jpg"/>\n              <ion-item>\n                <ion-label>Choose this</ion-label>\n                <ion-radio value="flowers" [disabled]="disabled6"></ion-radio>\n              </ion-item>\n\n              <div class="center" style="padding-bottom: 10px">\n                <button ion-button [disabled]="disabled6"  round medium color="{{color6}}" type="submit" (click)="presentAlert()" (click)="handler6()">{{text6}}</button>\n              </div>\n            </ion-list>\n\n          </ion-card-content>\n        </ion-col>\n      </ion-card>\n    </ion-row>\n\n\n\n    <ion-row class="row7">\n      <ion-card class="image7">\n\n        <ion-col col-12 col-sm text-center>\n\n\n          <ion-card-header>\n            <img src="assets/imgs/stop.png">\n          </ion-card-header>\n        </ion-col>\n\n        <ion-col col-12 col-sm text-center>\n          <ion-card-content>\n            <ion-list radio-group>\n              <ion-list-header>\n                Choose the correct answer\n              </ion-list-header>\n\n              <img src="assets/imgs/3.jpg"/>\n              <ion-item>\n                <ion-label>Choose this</ion-label>\n                <ion-radio value="tree" [disabled]="disabled7"></ion-radio>\n              </ion-item>\n\n              <img src="assets/imgs/7.jpg"/>\n              <ion-item>\n                <ion-label>Choose this</ion-label>\n                <ion-radio value="stopsign" [disabled]="disabled7"></ion-radio>\n              </ion-item>\n\n              <img src="assets/imgs/6.jpg"/>\n              <ion-item>\n                <ion-label>Choose this</ion-label>\n                <ion-radio value="guitar" [disabled]="disabled7"></ion-radio>\n              </ion-item>\n\n              <div class="center" style="padding-bottom: 10px">\n                <button ion-button [disabled]="disabled7"  round medium color="{{color7}}" type="submit" (click)="presentAlert()" (click)="handler7()">{{text7}}</button>\n              </div>\n            </ion-list>\n\n          </ion-card-content>\n        </ion-col>\n      </ion-card>\n    </ion-row>\n\n\n\n    <ion-row class="row8">\n      <ion-card class="image8">\n\n        <ion-col col-12 col-sm text-center>\n\n\n          <ion-card-header>\n            <img src="assets/imgs/bird.png">\n          </ion-card-header>\n        </ion-col>\n\n        <ion-col col-12 col-sm text-center>\n          <ion-card-content>\n            <ion-list radio-group>\n              <ion-list-header>\n                Choose the correct answer\n              </ion-list-header>\n\n              <img src="assets/imgs/1.jpg"/>\n              <ion-item>\n                <ion-label>Choose this</ion-label>\n                <ion-radio value="dog" [disabled]="disabled8"></ion-radio>\n              </ion-item>\n\n              <img src="assets/imgs/8.jpg"/>\n              <ion-item>\n                <ion-label>Choose this</ion-label>\n                <ion-radio value="bird" [disabled]="disabled8"></ion-radio>\n              </ion-item>\n\n              <img src="assets/imgs/3.jpg"/>\n              <ion-item>\n                <ion-label>Choose this</ion-label>\n                <ion-radio value="tree" [disabled]="disabled8"></ion-radio>\n              </ion-item>\n\n              <div class="center" style="padding-bottom: 10px">\n                <button ion-button [disabled]="disabled8"  round medium color="{{color8}}" type="submit" (click)="presentAlert()" (click)="handler8()">{{text8}}</button>\n              </div>\n            </ion-list>\n\n          </ion-card-content>\n        </ion-col>\n      </ion-card>\n    </ion-row>\n\n\n    <ion-row class="row9">\n      <ion-card class="image9">\n\n        <ion-col col-12 col-sm text-center>\n\n\n          <ion-card-header>\n            <img src="assets/imgs/yellowroad.png">\n          </ion-card-header>\n        </ion-col>\n\n        <ion-col col-12 col-sm text-center>\n          <ion-card-content>\n            <ion-list radio-group>\n              <ion-list-header>\n                Choose the correct answer\n              </ion-list-header>\n\n              <img src="assets/imgs/10.jpg"/>\n              <ion-item>\n                <ion-label>Choose this</ion-label>\n                <ion-radio value="flowers" [disabled]="disabled9"></ion-radio>\n              </ion-item>\n\n              <img src="assets/imgs/3.jpg"/>\n              <ion-item>\n                <ion-label>Choose this</ion-label>\n                <ion-radio value="tree" [disabled]="disabled9"></ion-radio>\n              </ion-item>\n\n              <img src="assets/imgs/9.jpg"/>\n              <ion-item>\n                <ion-label>Choose this</ion-label>\n                <ion-radio value="roadsign" [disabled]="disabled9"></ion-radio>\n              </ion-item>\n\n              <div class="center" style="padding-bottom: 10px">\n                <button ion-button [disabled]="disabled9"  round medium color="{{color9}}" type="submit" (click)="presentAlert()" (click)="handler9()">{{text9}}</button>\n              </div>\n            </ion-list>\n\n          </ion-card-content>\n        </ion-col>\n      </ion-card>\n    </ion-row>\n\n\n    <ion-row class="row10">\n      <ion-card class="image10">\n\n        <ion-col col-12 col-sm text-center>\n\n\n          <ion-card-header>\n            <img src="assets/imgs/flowers.jpg">\n          </ion-card-header>\n        </ion-col>\n\n        <ion-col col-12 col-sm text-center>\n          <ion-card-content>\n            <ion-list radio-group>\n              <ion-list-header>\n                Choose the correct answer\n              </ion-list-header>\n\n              <img src="assets/imgs/3.jpg"/>\n              <ion-item>\n              <ion-label>Choose this</ion-label>\n              <ion-radio value="tree" [disabled]="disabled10"></ion-radio>\n              </ion-item>\n\n\n              <img src="assets/imgs/6.jpg"/>\n              <ion-item>\n                <ion-label>Choose this</ion-label>\n                <ion-radio value="guitar" [disabled]="disabled10"></ion-radio>\n              </ion-item>\n\n              <img src="assets/imgs/10.jpg"/>\n              <ion-item>\n                <ion-label>Choose this</ion-label>\n                <ion-radio value="flowers" [disabled]="disabled10"></ion-radio>\n              </ion-item>\n\n              <div class="center" style="padding-bottom: 10px">\n                <button ion-button [disabled]="disabled10" round medium color="{{color10}}" type="submit" (click)="presentAlert()" (click)="handler10()">{{text10}}</button>\n              </div>\n            </ion-list>\n\n          </ion-card-content>\n        </ion-col>\n      </ion-card>\n    </ion-row>\n\n\n\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/christosgkalfas/Descraib/src/pages/images2/images2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Images2Page);
    return Images2Page;
}());

//# sourceMappingURL=images2.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Images3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//import { AlertController } from 'ionic-angular';
//import { Camera, CameraOptions } from '@ionic-native/camera';
//import { GoogleCloudVisionServiceProvider } from '../../providers/google-cloud-vision-service/google-cloud-vision-service';
//import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
var Images3Page = /** @class */ (function () {
    function Images3Page() {
    }
    Images3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/christosgkalfas/Descraib/src/pages/images3/images3.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Take a Photo</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card *ngFor="let item of items | async">\n    <img [src]="\'data:image/png;base64,\' + item.imageData"/>\n    <ion-card-content>\n      <ion-list no-lines>\n        <ion-list-header>\n          Labels\n        </ion-list-header>\n        <ion-item *ngFor="let label of item.results[0].labelAnnotations">{{label.description}}</ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n  <ion-fab bottom right>\n    <button ion-fab (click)="takePhoto()"><ion-icon name="camera"></ion-icon></button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/christosgkalfas/Descraib/src/pages/images3/images3.html"*/
        })
    ], Images3Page);
    return Images3Page;
}());

//# sourceMappingURL=images3.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(374);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__ = __webpack_require__(719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_welcome_welcome__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_intro_intro__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_images_images__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_images2_images2__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_images3_images3__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_categories_categories__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_leaderboard_leaderboard__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_login_login__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_register_register__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_in_app_browser__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_auth_service_auth_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_google_cloud_vision_service_google_cloud_vision_service__ = __webpack_require__(724);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//import { AngularFireModule } from 'angularfire2';




//import { environment } from "../environment";














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_intro_intro__["a" /* IntroPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_images_images__["a" /* ImagesPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_images2_images2__["a" /* Images2Page */],
                __WEBPACK_IMPORTED_MODULE_17__pages_images3_images3__["a" /* Images3Page */],
                __WEBPACK_IMPORTED_MODULE_18__pages_categories_categories__["a" /* CategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_leaderboard_leaderboard__["a" /* LeaderboardPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_register_register__["a" /* RegisterPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/leaderboard/leaderboard.module#LeaderboardPageModule', name: 'LeaderboardPage', segment: 'leaderboard', priority: 'low', defaultHistory: [] }
                    ]
                }),
                //AngularFireAuthModule.initializeApp(environment.firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["AngularFireDatabaseModule"],
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["AngularFireAuthModule"],
                __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_intro_intro__["a" /* IntroPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_images_images__["a" /* ImagesPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_images2_images2__["a" /* Images2Page */],
                __WEBPACK_IMPORTED_MODULE_17__pages_images3_images3__["a" /* Images3Page */],
                __WEBPACK_IMPORTED_MODULE_18__pages_categories_categories__["a" /* CategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_leaderboard_leaderboard__["a" /* LeaderboardPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_register_register__["a" /* RegisterPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_23__providers_auth_service_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_24__providers_google_cloud_vision_service_google_cloud_vision_service__["a" /* GoogleCloudVisionServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/christosgkalfas/Descraib/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/christosgkalfas/Descraib/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomePage = /** @class */ (function () {
    function HomePage() {
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/christosgkalfas/Descraib/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Describe the image</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n\n    <img src="assets/img/\' + image + \'.jpg"/>\n\n    <ion-card-content>\n      <ion-card-title>\n        Björk\n      </ion-card-title>\n      <p>\n        Björk first came to prominence as one of the lead vocalists of the avant pop Icelandic sextet the Sugarcubes, but when...\n      </p>\n    </ion-card-content>\n\n    <ion-item>\n      <ion-icon name=\'musical-notes\' item-start style="color: #d03e84"></ion-icon>\n      Albums\n      <ion-badge item-end>9</ion-badge>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\'logo-twitter\' item-start style="color: #55acee"></ion-icon>\n      Followers\n      <ion-badge item-end>260k</ion-badge>\n    </ion-item>\n\n  </ion-card>\n\n  <button class="submit" ion-button round outline large color="secondary">Submit</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/christosgkalfas/Descraib/src/pages/home/home.html"*/
        })
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleCloudVisionServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environment__ = __webpack_require__(725);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GoogleCloudVisionServiceProvider = /** @class */ (function () {
    function GoogleCloudVisionServiceProvider(http) {
        this.http = http;
    }
    GoogleCloudVisionServiceProvider.prototype.getLabels = function (base64Image) {
        var body = {
            "requests": [
                {
                    "image": {
                        "content": base64Image
                    },
                    "features": [
                        {
                            "type": "LABEL_DETECTION"
                        }
                    ]
                }
            ]
        };
        return this.http.post('https://vision.googleapis.com/v1/images:annotate?key=' + __WEBPACK_IMPORTED_MODULE_3__environment__["a" /* environment */].googleCloudVisionAPIKey, body);
    };
    GoogleCloudVisionServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], GoogleCloudVisionServiceProvider);
    return GoogleCloudVisionServiceProvider;
}());

//# sourceMappingURL=google-cloud-vision-service.js.map

/***/ }),

/***/ 725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    firebaseConfig: {
        apiKey: "AIzaSyCEvHMwiuQr3CWzI3jWccANUaAlucB2rcM",
        authDomain: "pelagic-plexus-218820.firebaseapp.com",
        databaseURL: "https://pelagic-plexus-218820.firebaseio.com/",
        projectId: "pelagic-plexus-218820",
        storageBucket: "gs://pelagic-plexus-218820.appspot.com",
        messagingSenderId: "312117235317"
    },
    googleCloudVisionAPIKey: "AIzaSyA9TsJ9C6VxpUEfUVbxkEsWumZbBFSkrDM"
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var User = /** @class */ (function () {
    function User(name, email) {
        this.name = name;
        this.email = email;
    }
    return User;
}());

var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.login = function (credentials) {
        var _this = this;
        if (credentials.email === null || credentials.password === null) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw("Please insert credentials");
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
                // At this point make a request to your backend to make a real check!
                var access = (credentials.password === "pass" && credentials.email === "email");
                _this.currentUser = new User('Simon', 'saimon@devdactic.com');
                observer.next(access);
                observer.complete();
            });
        }
    };
    AuthService.prototype.register = function (credentials) {
        if (credentials.email === null || credentials.password === null) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw("Please insert credentials");
        }
        else {
            // At this point store the credentials to your backend!
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
                observer.next(true);
                observer.complete();
            });
        }
    };
    AuthService.prototype.getUserInfo = function () {
        return this.currentUser;
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            _this.currentUser = null;
            observer.next(true);
            observer.complete();
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth-service.js.map

/***/ })

},[369]);
//# sourceMappingURL=main.js.map
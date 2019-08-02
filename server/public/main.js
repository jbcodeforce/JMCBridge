(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-app-background basic-container\">\n  <app-header></app-header>\n  <router-outlet></router-outlet>\n  <app-footer style=\"text-align:center\"></app-footer>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _features_features_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./features/features.module */ "./src/app/features/features.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _features_features_module__WEBPACK_IMPORTED_MODULE_5__["FeaturesModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/features/bidding/Card.ts":
/*!******************************************!*\
  !*** ./src/app/features/bidding/Card.ts ***!
  \******************************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
var Card = /** @class */ (function () {
    function Card() {
        this.name = "";
        this.Hpoint = 0;
    }
    return Card;
}());



/***/ }),

/***/ "./src/app/features/bidding/bid-game/bid-game.component.css":
/*!******************************************************************!*\
  !*** ./src/app/features/bidding/bid-game/bid-game.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-spacer {\n flex: 1 1 auto;\n}\n\n.grid-container {\n    display: -ms-inline-grid;\n    display: inline-grid;\n    width: 100%;\n    -ms-grid-columns: auto auto auto;\n        grid-template-columns: auto auto auto;\n    background-color: #2196F3;\n    padding: 5px;\n}\n\n.grid-container > div {\n    padding: 5px;\n}\n\n.canvasCol {\n    -ms-grid-column: 1;\n        grid-column-start: 1;\n    -ms-grid-column-span: 2;\n    grid-column-end: 3;\n}\n\n.col {\n    -ms-grid-column: 4;\n        grid-column-start: 4;\n    -ms-grid-column-span: 0;\n    grid-column-end: 4; \n}"

/***/ }),

/***/ "./src/app/features/bidding/bid-game/bid-game.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/features/bidding/bid-game/bid-game.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\"> \n<mat-toolbar style=\" border-bottom: 2px dotted #003300;\">\n  <a (click)=\"back()\"><span><i class=\"header-icon material-icons\">arrow_back</i></span></a>\n  <span class=\"header-spacer\"></span>\n<span>{{currentExercise.name}}</span>\n</mat-toolbar>\n</div>\n\n<img #c_0 src=\"{{cardImgSrcs[0]}}\" (load)=\"drawCard(0)\" style='display: none;' />\n<img #c_1 src=\"{{cardImgSrcs[1]}}\" (load)=\"drawCard(1)\" style='display: none;' />\n<img #c_2 src=\"{{cardImgSrcs[2]}}\" (load)=\"drawCard(2)\" style='display: none;' />\n<img #c_3 src=\"{{cardImgSrcs[3]}}\" (load)=\"drawCard(3)\" style='display: none;' />\n<img #c_4 src=\"{{cardImgSrcs[4]}}\" (load)=\"drawCard(4)\" style='display: none;' />\n<img #c_5 src=\"{{cardImgSrcs[5]}}\" (load)=\"drawCard(5)\" style='display: none;' />\n<img #c_6 src=\"{{cardImgSrcs[6]}}\" (load)=\"drawCard(6)\" style='display: none;' />\n<img #c_7 src=\"{{cardImgSrcs[7]}}\" (load)=\"drawCard(7)\" style='display: none;' />\n<img #c_8 src=\"{{cardImgSrcs[8]}}\" (load)=\"drawCard(8)\" style='display: none;' />\n<img #c_9 src=\"{{cardImgSrcs[9]}}\" (load)=\"drawCard(9)\" style='display: none;' />\n<img #c_10 src=\"{{cardImgSrcs[10]}}\" (load)=\"drawCard(10)\" style='display: none;' />\n<img #c_11 src=\"{{cardImgSrcs[11]}}\" (load)=\"drawCard(11)\" style='display: none;' />\n<img #c_12 src=\"{{cardImgSrcs[12]}}\" (load)=\"drawCard(12)\" style='display: none;' />\n<img #biddings src=\"assets/images/bidding-cards.png\" (load)=\"drawBidding()\" style='display: none;'/>\n\n<div class=\"grid-container\"> \n    <div class=\"canvasCol\">\n       <canvas #canvas width=\"{{canvasWidth}}\" height=\"{{canvasHeight}}\" style=\"background:#003300;\"></canvas>\n    </div>\n    <div class=\"col\">\n        <mat-vertical-stepper [linear]=\"true\" #stepper>\n            <mat-step *ngFor=\"let inst of currentExercise.instructions\">\n                <ng-template matStepLabel>{{inst.label}}</ng-template>\n                <div>\n                   {{inst.subPart}}\n                </div>\n            </mat-step>\n            <mat-step>\n                <ng-template matStepLabel>Select your bid</ng-template>\n                <div>\n                    <button  mat-icon-button color=\"primary\" (click)=\"validate()\"><mat-icon>looks</mat-icon></button>\n                    <button  mat-icon-button color=\"primary\" (click)=\"next()\"><mat-icon>navigate_next</mat-icon></button>\n                    {{this.message}}\n                </div>\n            </mat-step>\n        </mat-vertical-stepper>\n    </div>\n    <!-- \n    <mat-grid-list cols=\"5\" rowHeight=\"100px\">\n        <mat-grid-tile [colspan]=4 [rowspan]=5>\n            <canvas #canvas width=\"{{canvasWidth}}\" height=\"{{canvasHeight}}\" style=\"background:#003300;\"></canvas>\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=1 [rowspan]=5>\n            <mat-vertical-stepper [linear]=\"true\" #stepper>\n                <mat-step>\n                  <ng-template matStepLabel>Count you HD points</ng-template>\n                </mat-step>\n                <mat-step>\n                    <ng-template matStepLabel>{{currentExercise.instructions}}</ng-template>\n                </mat-step>\n            </mat-vertical-stepper>\n            \n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=4 [rowspan]=1>\n            <button  mat-icon-button color=\"primary\" (click)=\"validate()\"><mat-icon>looks</mat-icon></button>\n            <button  mat-icon-button color=\"primary\" (click)=\"next()\"><mat-icon>navigate_next</mat-icon></button>\n    \n        </mat-grid-tile>\n    </mat-grid-list>\n-->\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/features/bidding/bid-game/bid-game.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/features/bidding/bid-game/bid-game.component.ts ***!
  \*****************************************************************/
/*! exports provided: BidGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidGameComponent", function() { return BidGameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bid_lesson_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bid-lesson.service */ "./src/app/features/bidding/bid-lesson.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Present the Bidding Game: the bottom part presents the 13 cards of the player he will use
 * to bid.
 * The top left has the current bidding sequence, the right bottom the potential bid to select from
 * The right column has principles for the exercises and explanation for the solution
 */
var BidGameComponent = /** @class */ (function () {
    /**
     * Get the current lesson with tutoials and exercises to process in this game
     * @param router
     * @param bidService to access to backend
     */
    function BidGameComponent(router, bidService) {
        var _this = this;
        this.router = router;
        this.bidService = bidService;
        this.canvasWidth = 1000;
        this.canvasHeight = 500;
        this.cardWidth = 85;
        this.cardHeight = 110;
        // dimensions for the bidding box on right bottom part of canvas
        this.biddingWidth = 250;
        this.biddingHeight = 220;
        this.biddingX = this.canvasWidth - 10 - this.biddingWidth;
        this.biddingY = this.canvasHeight - 10 - this.biddingHeight;
        this.biddingXStep = 23;
        this.biddingYStep = 15;
        this.colorText = ["C", "D", "H", "S", "NT"];
        // keep reference to each image html element to be used for drawing. The key is
        // the card code c_* of the player's cards
        this.cardImgs = new Map();
        // 13 images may have different image card
        this.cardImgSrcs = [];
        this.message = "";
        this.indexExercise = 0;
        // what user selected with the mouse
        this.bidValue = 0;
        this.bidColor = 0;
        // need to know which exercice was selected from the lesson page as a lesson has mutliple exercise
        this.currentExercise = this.bidService.getBidExercise();
        this.bidService.getLesson().subscribe(function (data) {
            _this.lesson = data;
        });
        this.hand = this.currentExercise.hands[0];
        this.loadCardImageNames();
    }
    BidGameComponent.prototype.loadCardImageNames = function () {
        for (var i = 0; i < 13; i++) {
            this.cardImgSrcs[i] = "assets/images/cards/" + this.hand.cards[i].imgSrc + ".png";
        }
    };
    BidGameComponent.prototype.back = function () {
        this.router.navigate(['bidLesson']);
    };
    // Go to the next exercise of the current lesson
    BidGameComponent.prototype.next = function () {
        this.indexExercise++;
        if (this.indexExercise <= this.lesson.exercises.length) {
            this.currentExercise = this.lesson.exercises[this.indexExercise];
            this.bidService.processCards(this.currentExercise);
            this.hand = this.currentExercise.hands[0];
            this.bidValue = 0;
            this.loadCardImageNames();
        }
        else {
            this.message = "No more exercice, change lesson by going back to the lessons home page.";
        }
        this.drawTable();
    };
    BidGameComponent.prototype.validate = function () {
        console.log("Validate the bid match solution");
        if (this.currentExercise.solution == (this.bidValue + this.colorText[this.bidColor])) {
            this.message = "Right...";
        }
        else {
            this.message = "Not yet";
        }
    };
    BidGameComponent.prototype.ngAfterViewInit = function () {
        this.canvasContext = this.canvas.nativeElement.getContext("2d");
        this.cardImgs.set("c_0", this.c_0);
        this.cardImgs.set("c_1", this.c_1);
        this.cardImgs.set("c_2", this.c_2);
        this.cardImgs.set("c_3", this.c_3);
        this.cardImgs.set("c_4", this.c_4);
        this.cardImgs.set("c_5", this.c_5);
        this.cardImgs.set("c_6", this.c_6);
        this.cardImgs.set("c_7", this.c_7);
        this.cardImgs.set("c_8", this.c_8);
        this.cardImgs.set("c_9", this.c_9);
        this.cardImgs.set("c_10", this.c_10);
        this.cardImgs.set("c_11", this.c_11);
        this.cardImgs.set("c_12", this.c_12);
        this.captureEvents(this.canvas.nativeElement);
        this.drawTable();
    };
    BidGameComponent.prototype.drawTable = function () {
        if (this.canvasContext) {
            this.canvasContext.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
            for (var i = 0; i < 13; i++) {
                this.drawCard(i);
            }
            this.drawBiddingText();
            this.drawBidding();
        }
    };
    BidGameComponent.prototype.drawCard = function (ref) {
        var _this = this;
        var cardXStep = 25;
        var element = this.cardImgs.get("c_" + ref).nativeElement;
        var image = new Image();
        image.src = this.cardImgSrcs[ref];
        image.onload = function () {
            _this.canvasContext.drawImage(image, _this.canvasWidth / 2 - 7 * cardXStep + ref * cardXStep, _this.canvasHeight - _this.cardHeight - 20, _this.cardWidth, _this.cardHeight);
        };
    };
    BidGameComponent.prototype.drawBiddingText = function () {
        this.canvasContext.font = "20px Georgia";
        this.canvasContext.fillStyle = "white";
        this.canvasContext.clearRect(0, 0, 100, 60);
        this.canvasContext.fillText(" S    W   " + "  N    E", 5, 17);
        // this.context.fillText("1C   -  " + " 2C   -",5,34);
        if (this.bidValue != 0) {
            this.canvasContext.fillText(this.bidValue + this.colorText[this.bidColor], 5, 34);
        }
        this.canvasContext.fillText("North", 420, 20);
        this.canvasContext.fillText("South", 420, 270);
        this.canvasContext.fillText("East", 650, 150);
        this.canvasContext.fillText("West", 30, 150);
    };
    /**
     * Draw bidding images and remove the bids that could not be done now due to last
     * previous bid
     */
    BidGameComponent.prototype.drawBidding = function () {
        this.canvasContext.drawImage(this.biddingImg.nativeElement, this.biddingX, this.biddingY, this.biddingWidth, this.biddingHeight);
        var color = this.canvasContext.fillStyle;
        this.canvasContext.fillStyle = "#003300";
        for (var i = 0; i < this.bidValue; i++) {
            this.canvasContext.fillRect(this.biddingX, this.biddingY, this.biddingXStep * 5, i * this.biddingYStep);
        }
        this.canvasContext.fillRect(this.biddingX + this.biddingXStep * (4 - this.bidColor), this.biddingY, this.biddingXStep * (1 + this.bidColor), this.bidValue * this.biddingYStep);
        this.canvasContext.fillStyle = color;
    };
    BidGameComponent.prototype.captureEvents = function (element) {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(element, 'mousedown').subscribe(function (res) {
            var rect = element.getBoundingClientRect();
            var x = res.clientX - rect.left;
            var y = res.clientY - rect.top;
            console.log(x, y);
            _this.bidColor = 5 - Math.round((x - _this.biddingX) / _this.biddingXStep);
            if (_this.bidColor < 0) {
                _this.bidColor = 0;
            }
            if (_this.bidColor > 4) {
                _this.bidColor = 4;
            }
            _this.bidValue = Math.round((y - _this.biddingY) / _this.biddingYStep);
            if (_this.bidValue > 7) {
                _this.bidValue = 7;
            }
            console.log(_this.bidValue + ' of ' + _this.bidColor);
            _this.drawBidding();
            _this.drawBiddingText();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('canvas'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BidGameComponent.prototype, "canvas", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('c_0'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BidGameComponent.prototype, "c_0", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('c_1'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BidGameComponent.prototype, "c_1", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('c_2'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BidGameComponent.prototype, "c_2", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('c_3'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BidGameComponent.prototype, "c_3", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('c_4'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BidGameComponent.prototype, "c_4", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('c_5'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BidGameComponent.prototype, "c_5", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('c_6'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BidGameComponent.prototype, "c_6", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('c_7'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BidGameComponent.prototype, "c_7", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('c_8'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BidGameComponent.prototype, "c_8", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('c_9'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BidGameComponent.prototype, "c_9", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('c_10'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BidGameComponent.prototype, "c_10", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('c_11'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BidGameComponent.prototype, "c_11", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('c_12'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BidGameComponent.prototype, "c_12", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('biddings'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BidGameComponent.prototype, "biddingImg", void 0);
    BidGameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bid-game',
            template: __webpack_require__(/*! ./bid-game.component.html */ "./src/app/features/bidding/bid-game/bid-game.component.html"),
            styles: [__webpack_require__(/*! ./bid-game.component.css */ "./src/app/features/bidding/bid-game/bid-game.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _bid_lesson_service__WEBPACK_IMPORTED_MODULE_2__["BidLessonService"]])
    ], BidGameComponent);
    return BidGameComponent;
}());



/***/ }),

/***/ "./src/app/features/bidding/bid-lesson.service.ts":
/*!********************************************************!*\
  !*** ./src/app/features/bidding/bid-lesson.service.ts ***!
  \********************************************************/
/*! exports provided: BidLessonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidLessonService", function() { return BidLessonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card */ "./src/app/features/bidding/Card.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
* Service to manage bidding lessons and support sharing data between
sibbling components
*/
var BidLessonService = /** @class */ (function () {
    function BidLessonService(http) {
        this.http = http;
        this.biddingAPIurl = "http://localhost:5000/api/biddings/";
    }
    BidLessonService.prototype.setLessonCategoryName = function (l) {
        this.lessonCategoryName = l;
    };
    BidLessonService.prototype.getLessonCategoryName = function () {
        return this.lessonCategoryName;
    };
    BidLessonService.prototype.getLesson = function () {
        var _this = this;
        if (this.lesson === undefined) {
            // get these using the user and category name
            return this.http.get(this.biddingAPIurl + "lessons/" + this.getLessonCategoryName())
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
                _this.lesson = data;
                return _this.lesson;
            }, function (error) { console.log("Error to get lesson " + error); }));
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.lesson);
        }
    };
    BidLessonService.prototype.getCurrentLesson = function () {
        return this.lesson;
    };
    BidLessonService.prototype.setBidExercise = function (exo) {
        this.currentExercise = exo;
        this.processCards(exo);
    };
    BidLessonService.prototype.getBidExercise = function () {
        return this.currentExercise;
    };
    BidLessonService.prototype.setTutorial = function (tutorial) {
        this.currentTutorial = tutorial;
    };
    /**
     * In the Bid exercice the list of card is an array of strings
     * ["AS","KS","QS","7S....
     * The second letter represents the color of the card.
     * Transform string list to a card list
     * @param list of cards
     */
    BidLessonService.prototype.processCards = function (e) {
        e.hands[0].cards = [];
        e.hands[0].cardsAsString.forEach(function (c) {
            var card = new _Card__WEBPACK_IMPORTED_MODULE_1__["Card"]();
            card.name = c;
            card.imgSrc = c[0] + "-of-";
            if (c[1] == "C") {
                card.imgSrc += "CLUBS";
            }
            if (c[1] == "S") {
                card.imgSrc += "SPADES";
            }
            if (c[1] == "D") {
                card.imgSrc += "DIAMONDS";
            }
            if (c[1] == "H") {
                card.imgSrc += "HEARTS";
            }
            e.hands[0].cards.push(card);
        });
        return e;
    };
    BidLessonService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BidLessonService);
    return BidLessonService;
}());



/***/ }),

/***/ "./src/app/features/bidding/bid-lesson/bid-lesson.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/features/bidding/bid-lesson/bid-lesson.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\nwidth: 100%;\n}\n\n.header-spacer {\nflex: 1 1 auto;\n}\n\n.header-icon {\npadding: 0 14px;\n}\n\nth.mat-sort-header-sorted {\ncolor: black;\n}"

/***/ }),

/***/ "./src/app/features/bidding/bid-lesson/bid-lesson.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/features/bidding/bid-lesson/bid-lesson.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-toolbar *ngIf=\"! selectedTutorial\">\n    <a (click)=\"back()\"><span><i class=\"header-icon material-icons\">arrow_back</i></span></a>\n    <span class=\"header-spacer\"></span>\n<span>{{title}}</span>\n</mat-toolbar>\n<div class=\"row\" *ngIf=\"! selectedTutorial\">\n    <h3>Tutorials</h3>\n    <table mat-table [dataSource]=\"lesson.tutorials\" matSort class=\"mat-elevation-z8\">\n       <!-- Name Column -->\n       <ng-container matColumnDef=\"name\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n        </ng-container>\n        <!-- Actions Column -->\n      <ng-container matColumnDef=\"actions\">\n          <mat-header-cell *matHeaderCellDef>\n          </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\">\n            <button mat-icon-button color=\"primary\" (click)=\"learn(element)\"><mat-icon>play_arrow</mat-icon></button>\n           </mat-cell>\n        </ng-container>\n        <mat-header-row *matHeaderRowDef=\"tutDisplayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: tutDisplayedColumns;\"></mat-row>\n    </table>\n    <h3>Exercises</h3>\n    <table mat-table [dataSource]=\"lesson.exercises\" matSort class=\"mat-elevation-z8\">\n      <!-- Name Column -->\n      <ng-container matColumnDef=\"name\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"completion\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Completion </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\"> {{element.completion}} </mat-cell>\n      </ng-container>\n      <!-- Actions Column -->\n      <ng-container matColumnDef=\"actions2\">\n        <mat-header-cell *matHeaderCellDef>\n  \n        </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\">\n          <button *ngIf=\"element.completion !== 1\" mat-icon-button color=\"primary\" (click)=\"open(element)\"><mat-icon>play_arrow</mat-icon></button>\n        </mat-cell>\n      </ng-container>\n  \n      <mat-header-row *matHeaderRowDef=\"exoDisplayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: exoDisplayedColumns;\"></mat-row>\n    </table>\n  </div>\n  <div class=\"row\" *ngIf=\"selectedTutorial\">\n    <app-tutorial-reader [tutorial]=\"selectedTutorial\" (doneReading)=\"closeTutorial($event)\"></app-tutorial-reader>\n  </div>"

/***/ }),

/***/ "./src/app/features/bidding/bid-lesson/bid-lesson.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/features/bidding/bid-lesson/bid-lesson.component.ts ***!
  \*********************************************************************/
/*! exports provided: BidLessonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidLessonComponent", function() { return BidLessonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bid_lesson_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bid-lesson.service */ "./src/app/features/bidding/bid-lesson.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Present two tables:
 *  - a list of bidding tutorials for explaining the concepts,
 *  - a list of exercices to train on the subject
 * But when a tutorial is selected the tables are replaced by a markdown reader.
 * When an exercice is selected it goes to the big game with graphical cards.
 */
var BidLessonComponent = /** @class */ (function () {
    function BidLessonComponent(router, bidService) {
        var _this = this;
        this.router = router;
        this.bidService = bidService;
        this.tutDisplayedColumns = ['name', 'actions'];
        this.exoDisplayedColumns = ['name', 'completion', 'actions2'];
        this.title = this.bidService.getLessonCategoryName();
        this.bidService.getLesson().subscribe(function (data) {
            _this.lesson = data;
        });
    }
    BidLessonComponent.prototype.ngOnInit = function () {
    };
    BidLessonComponent.prototype.back = function () {
        this.router.navigate(['bidLessonHome']);
    };
    BidLessonComponent.prototype.closeTutorial = function (done) {
        this.selectedTutorial = null;
    };
    BidLessonComponent.prototype.open = function (element) {
        console.log("open " + JSON.stringify(element));
        this.bidService.setBidExercise(element);
        this.router.navigate(['bidGame']);
    };
    // present the tutorial
    BidLessonComponent.prototype.learn = function (element) {
        console.log("learn " + JSON.stringify(element));
        this.selectedTutorial = element;
    };
    BidLessonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bid-lesson',
            template: __webpack_require__(/*! ./bid-lesson.component.html */ "./src/app/features/bidding/bid-lesson/bid-lesson.component.html"),
            styles: [__webpack_require__(/*! ./bid-lesson.component.css */ "./src/app/features/bidding/bid-lesson/bid-lesson.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _bid_lesson_service__WEBPACK_IMPORTED_MODULE_2__["BidLessonService"]])
    ], BidLessonComponent);
    return BidLessonComponent;
}());



/***/ }),

/***/ "./src/app/features/bidding/bid-lessons-home/bid-lessons-home.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/features/bidding/bid-lessons-home/bid-lessons-home.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.header-spacer {\n    flex: 1 1 auto;\n  }\n  \n.header-icon {\n  padding: 0 14px;\n}\n  \n.jbcard {\n  max-width: 200px;\n  margin-right: 15px;\n  margin-bottom: 15px;\n  box-shadow: 3px 3px #003300;\n}\n  \n.centerred {\n  display: block;\n  margin-left: auto;\n  margin-right: auto\n}\n  \n  "

/***/ }),

/***/ "./src/app/features/bidding/bid-lessons-home/bid-lessons-home.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/features/bidding/bid-lessons-home/bid-lessons-home.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar style=\" border-bottom: 2px dotted blue;\">\n  <a href=\"#/home\"><i class=\"material-icons\">home</i></a>\n  <span class=\"header-spacer\"></span>\n  <span>{{title}}</span>\n</mat-toolbar>\n<div class=\"container-fluid\">\n  <mat-grid-list cols=\"3\" rowHeight=\"400px\">\n    <mat-grid-tile>\n      <mat-card class=\"jbcard\">\n        <mat-card-header>\n          <div mat-card-avatar></div>\n          <mat-card-title>Opening</mat-card-title>\n          <mat-card-subtitle>Major 5</mat-card-subtitle>\n        </mat-card-header>\n        <img class=\"centerred\" mat-card-image src=\"assets/images/bidding-box-cards_1.png\" style=\"width:140px;\">\n        <mat-card-content>\n          <p>\n            Learn how to open bidding as attacker\n          </p>\n        </mat-card-content>\n        <mat-card-actions>\n          <button mat-raised-button (click)=\"opening()\">Learn</button>\n        </mat-card-actions>\n      </mat-card>\n    </mat-grid-tile>\n    <mat-grid-tile>\n      <mat-card class=\"jbcard\">\n        <mat-card-header>\n          <div mat-card-avatar></div>\n          <mat-card-title>Response</mat-card-title>\n          <mat-card-subtitle>First Round</mat-card-subtitle>\n        </mat-card-header>\n        <img class=\"centerred\" mat-card-image src=\"assets/images/bidding-box-cards_1.png\" style=\"width:140px;\">\n        <mat-card-content>\n          <p>\n            Learn how to respond to opening\n          </p>\n        </mat-card-content>\n        <mat-card-actions>\n          <button mat-raised-button (click)=\"response()\">Learn</button>\n        </mat-card-actions>\n      </mat-card>\n    </mat-grid-tile>\n    <mat-grid-tile>\n      <mat-card class=\"jbcard\">\n        <mat-card-header>\n          <div mat-card-avatar></div>\n          <mat-card-title>Defense - Interventions</mat-card-title>\n          <mat-card-subtitle>Major 5</mat-card-subtitle>\n        </mat-card-header>\n        <img class=\"centerred\" mat-card-image src=\"assets/images/bidding-box-cards_1.png\" style=\"width:140px;\">\n        <mat-card-content>\n          <p>\n            Learn how to bid in defense\n          </p>\n        </mat-card-content>\n        <mat-card-actions>\n          <button mat-raised-button (click)=\"defense()\">Learn</button>\n        </mat-card-actions>\n      </mat-card>\n    </mat-grid-tile>\n  </mat-grid-list>\n</div>"

/***/ }),

/***/ "./src/app/features/bidding/bid-lessons-home/bid-lessons-home.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/features/bidding/bid-lessons-home/bid-lessons-home.component.ts ***!
  \*********************************************************************************/
/*! exports provided: BidLessonsHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidLessonsHomeComponent", function() { return BidLessonsHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bid_lesson_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bid-lesson.service */ "./src/app/features/bidding/bid-lesson.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Present the list of bidding lessons per category. A category could be opening, defense, responses...
 */
var BidLessonsHomeComponent = /** @class */ (function () {
    function BidLessonsHomeComponent(router, bidService) {
        this.router = router;
        this.bidService = bidService;
        this.title = "Bidding Lesson Home";
    }
    BidLessonsHomeComponent.prototype.ngOnInit = function () {
    };
    BidLessonsHomeComponent.prototype.opening = function () {
        console.log('Opening setting');
        this.bidService.setLessonCategoryName('opening');
        this.router.navigate(['bidLesson']);
    };
    BidLessonsHomeComponent.prototype.defense = function () {
        console.log('Defense setting');
        this.bidService.setLessonCategoryName('defense');
        this.router.navigate(['bidLesson']);
    };
    BidLessonsHomeComponent.prototype.response = function () {
        console.log('Response setting');
        this.bidService.setLessonCategoryName('response');
        this.router.navigate(['bidLesson']);
    };
    BidLessonsHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bid-lessons-home',
            template: __webpack_require__(/*! ./bid-lessons-home.component.html */ "./src/app/features/bidding/bid-lessons-home/bid-lessons-home.component.html"),
            styles: [__webpack_require__(/*! ./bid-lessons-home.component.css */ "./src/app/features/bidding/bid-lessons-home/bid-lessons-home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _bid_lesson_service__WEBPACK_IMPORTED_MODULE_2__["BidLessonService"]])
    ], BidLessonsHomeComponent);
    return BidLessonsHomeComponent;
}());



/***/ }),

/***/ "./src/app/features/features.module.ts":
/*!*********************************************!*\
  !*** ./src/app/features/features.module.ts ***!
  \*********************************************/
/*! exports provided: FeaturesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesModule", function() { return FeaturesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/fesm5/ngx-markdown.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes */ "./src/app/features/routes.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/features/home/home.component.ts");
/* harmony import */ var _bidding_bid_lessons_home_bid_lessons_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bidding/bid-lessons-home/bid-lessons-home.component */ "./src/app/features/bidding/bid-lessons-home/bid-lessons-home.component.ts");
/* harmony import */ var _bidding_bid_lesson_bid_lesson_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bidding/bid-lesson/bid-lesson.component */ "./src/app/features/bidding/bid-lesson/bid-lesson.component.ts");
/* harmony import */ var _bidding_bid_game_bid_game_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bidding/bid-game/bid-game.component */ "./src/app/features/bidding/bid-game/bid-game.component.ts");
/* harmony import */ var _bidding_bid_lesson_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./bidding/bid-lesson.service */ "./src/app/features/bidding/bid-lesson.service.ts");
/* harmony import */ var _tutorial_reader_tutorial_reader_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tutorial-reader/tutorial-reader.component */ "./src/app/features/tutorial-reader/tutorial-reader.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var FeaturesModule = /** @class */ (function () {
    function FeaturesModule() {
    }
    FeaturesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_6__["routes"], {
                    useHash: true,
                    enableTracing: false
                }),
                ngx_markdown__WEBPACK_IMPORTED_MODULE_3__["MarkdownModule"].forRoot(),
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"]
            ],
            declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _bidding_bid_lessons_home_bid_lessons_home_component__WEBPACK_IMPORTED_MODULE_8__["BidLessonsHomeComponent"], _bidding_bid_lesson_bid_lesson_component__WEBPACK_IMPORTED_MODULE_9__["BidLessonComponent"], _bidding_bid_game_bid_game_component__WEBPACK_IMPORTED_MODULE_10__["BidGameComponent"], _tutorial_reader_tutorial_reader_component__WEBPACK_IMPORTED_MODULE_12__["TutorialReaderComponent"]],
            exports: [_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _bidding_bid_lessons_home_bid_lessons_home_component__WEBPACK_IMPORTED_MODULE_8__["BidLessonsHomeComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: [_bidding_bid_lesson_service__WEBPACK_IMPORTED_MODULE_11__["BidLessonService"]]
        })
    ], FeaturesModule);
    return FeaturesModule;
}());



/***/ }),

/***/ "./src/app/features/home/home.component.css":
/*!**************************************************!*\
  !*** ./src/app/features/home/home.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/features/home/home.component.html":
/*!***************************************************!*\
  !*** ./src/app/features/home/home.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <mat-grid-list cols=\"3\" rowHeight=\"400px\">\n    <mat-grid-tile>\n        <app-tilecard id=\"learnbid\" [smImg]=\"'assets/images/bidding-box-cards_1.png'\"  \n        [title]=\"'Bidding'\" \n        [subTitle]=\"'5 card Major'\"\n        [description]=\"'Learn how to bid using a step by step approach from beginner to expert'\" \n        [buttonName]=\"'Learn'\" [urlPath]=\"'bidLessonHome'\">\n      </app-tilecard>\n    </mat-grid-tile>\n    <mat-grid-tile>\n        <app-tilecard id=\"learncard\" [smImg]=\"'assets/images/hand.png'\"  \n        [title]=\"'Card Play'\" \n        [subTitle]=\"'Attack Play'\"\n        [description]=\"'Learn how to play your contract'\" \n        [buttonName]=\"'Learn'\" [urlPath]=\"'cardLessonHome'\">\n      </app-tilecard>\n    </mat-grid-tile>\n  \n  <mat-grid-tile>\n      <app-tilecard id=\"learncard\" [smImg]=\"'assets/images/hand.png'\"  \n      [title]=\"'Card Play'\" \n      [subTitle]=\"'Defence Play'\"\n      [description]=\"'Learn how to play defense'\" \n      [buttonName]=\"'Learn'\" [urlPath]=\"'defenseLessonHome'\">\n    </app-tilecard>\n  </mat-grid-tile>\n</mat-grid-list>\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/features/home/home.component.ts":
/*!*************************************************!*\
  !*** ./src/app/features/home/home.component.ts ***!
  \*************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/features/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/features/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/features/routes.ts":
/*!************************************!*\
  !*** ./src/app/features/routes.ts ***!
  \************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ "./src/app/features/home/home.component.ts");
/* harmony import */ var _bidding_bid_lessons_home_bid_lessons_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bidding/bid-lessons-home/bid-lessons-home.component */ "./src/app/features/bidding/bid-lessons-home/bid-lessons-home.component.ts");
/* harmony import */ var _bidding_bid_lesson_bid_lesson_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bidding/bid-lesson/bid-lesson.component */ "./src/app/features/bidding/bid-lesson/bid-lesson.component.ts");
/* harmony import */ var _bidding_bid_game_bid_game_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bidding/bid-game/bid-game.component */ "./src/app/features/bidding/bid-game/bid-game.component.ts");
/* harmony import */ var _tutorial_reader_tutorial_reader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tutorial-reader/tutorial-reader.component */ "./src/app/features/tutorial-reader/tutorial-reader.component.ts");





var routes = [
    // tutorial, and play
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    // all lessons about biddings
    { path: 'bidLessonHome', component: _bidding_bid_lessons_home_bid_lessons_home_component__WEBPACK_IMPORTED_MODULE_1__["BidLessonsHomeComponent"] },
    // list of bidding lesson for a seletected category
    { path: 'bidLesson', component: _bidding_bid_lesson_bid_lesson_component__WEBPACK_IMPORTED_MODULE_2__["BidLessonComponent"] },
    // bidding game with canvas
    { path: 'bidGame', component: _bidding_bid_game_bid_game_component__WEBPACK_IMPORTED_MODULE_3__["BidGameComponent"] },
    { path: 'tutorialReader', component: _tutorial_reader_tutorial_reader_component__WEBPACK_IMPORTED_MODULE_4__["TutorialReaderComponent"] },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];


/***/ }),

/***/ "./src/app/features/tutorial-reader/Tutorial.ts":
/*!******************************************************!*\
  !*** ./src/app/features/tutorial-reader/Tutorial.ts ***!
  \******************************************************/
/*! exports provided: Tutorial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tutorial", function() { return Tutorial; });
// A tutorial is a metadata about a markdown file to render to the user.
var Tutorial = /** @class */ (function () {
    function Tutorial() {
        this.maxIndex = 0;
    }
    return Tutorial;
}());



/***/ }),

/***/ "./src/app/features/tutorial-reader/tutorial-reader.component.css":
/*!************************************************************************!*\
  !*** ./src/app/features/tutorial-reader/tutorial-reader.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".reader-content {\n    width: 100%;\n    height: 100%;\n    -o-object-fit:contain;\n       object-fit:contain;\n  }\n  \n  .button-pad {\n    padding: 10px;\n  }"

/***/ }),

/***/ "./src/app/features/tutorial-reader/tutorial-reader.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/features/tutorial-reader/tutorial-reader.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-toolbar>\n    <a (click)=\"back()\"><span><i class=\"header-icon material-icons\">arrow_back</i></span></a>\n    <span class=\"header-spacer\"></span>\n</mat-toolbar>\n<markdown style=\"width=100%; object-fit=contain\" [src]=\"fileName\" ngPreserveWhitespaces></markdown>\n<div class=\"row button-pad\">\n    <div mat-dialog-actions>\n          <button *ngIf=\"! first()\" mat-button (click)=\"previous()\" >Previous</button>\n          <button *ngIf=\"! last()\" style=\"padding: 10 px;\" mat-button (click)=\"next()\" cdkFocusInitial>Next</button>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/features/tutorial-reader/tutorial-reader.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/features/tutorial-reader/tutorial-reader.component.ts ***!
  \***********************************************************************/
/*! exports provided: TutorialReaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialReaderComponent", function() { return TutorialReaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Tutorial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tutorial */ "./src/app/features/tutorial-reader/Tutorial.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TutorialReaderComponent = /** @class */ (function () {
    function TutorialReaderComponent() {
        this.doneReading = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.index = 0;
    }
    TutorialReaderComponent.prototype.ngOnInit = function () {
        if (this.tutorial.maxIndex == 0) {
            this.fileName = this.tutorial.urlMDPath + ".md";
        }
        else {
            this.fileName = this.tutorial.urlMDPath + "_" + this.index + ".md";
        }
    };
    TutorialReaderComponent.prototype.back = function () {
        this.doneReading.emit(true);
    };
    TutorialReaderComponent.prototype.next = function () {
        if (this.index < this.tutorial.maxIndex) {
            this.index++;
        }
        this.fileName = this.tutorial.urlMDPath + "_" + this.index + ".md";
    };
    TutorialReaderComponent.prototype.previous = function () {
        if (this.index > 0) {
            this.index--;
        }
        this.fileName = this.tutorial.urlMDPath + "_" + this.index + ".md";
    };
    TutorialReaderComponent.prototype.last = function () {
        return (this.index == this.tutorial.maxIndex);
    };
    TutorialReaderComponent.prototype.first = function () {
        return (this.index == 0);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _Tutorial__WEBPACK_IMPORTED_MODULE_1__["Tutorial"])
    ], TutorialReaderComponent.prototype, "tutorial", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TutorialReaderComponent.prototype, "doneReading", void 0);
    TutorialReaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tutorial-reader',
            template: __webpack_require__(/*! ./tutorial-reader.component.html */ "./src/app/features/tutorial-reader/tutorial-reader.component.html"),
            styles: [__webpack_require__(/*! ./tutorial-reader.component.css */ "./src/app/features/tutorial-reader/tutorial-reader.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TutorialReaderComponent);
    return TutorialReaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <br/>\n  <p>&copy; Jerome Boyer - {{version}} </p>\n</footer>"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.version = "V0.0.1";
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/shared/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mytopview {\n    width: 100%;\n    height: 15vh;\n    color: white;\n    text-align:center;\n  }"

/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mytopview\" style=\"background-color: #003300\">\n  <h2 style=\"color:white\">{{title}}</h2>\n</div>"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.title = "JMC Bridge";
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/shared/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/fesm5/ngx-markdown.js");
/* harmony import */ var _tilecard_tilecard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tilecard/tilecard.component */ "./src/app/shared/tilecard/tilecard.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _tutorial_dialog_tutorial_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tutorial-dialog/tutorial-dialog.component */ "./src/app/shared/tutorial-dialog/tutorial-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_markdown__WEBPACK_IMPORTED_MODULE_3__["MarkdownModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"]
            ],
            declarations: [_tilecard_tilecard_component__WEBPACK_IMPORTED_MODULE_4__["TilecardComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _tutorial_dialog_tutorial_dialog_component__WEBPACK_IMPORTED_MODULE_7__["TutorialDialogComponent"]],
            exports: [_tilecard_tilecard_component__WEBPACK_IMPORTED_MODULE_4__["TilecardComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/tilecard/tilecard.component.css":
/*!********************************************************!*\
  !*** ./src/app/shared/tilecard/tilecard.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jbcard {\n  max-width: 200px;\n  margin-right: 15px;\n  margin-bottom: 15px;\n  box-shadow: 3px 3px #003300;\n}\n\n.centerred {\n  display: block;\n  margin-left: auto;\n  margin-right: auto\n}\n"

/***/ }),

/***/ "./src/app/shared/tilecard/tilecard.component.html":
/*!*********************************************************!*\
  !*** ./src/app/shared/tilecard/tilecard.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"jbcard\">\n  <mat-card-header>\n    <div mat-card-avatar></div>\n    <mat-card-title>{{title}}</mat-card-title>\n    <mat-card-subtitle  *ngIf=\"subTitle\">{{subTitle}}</mat-card-subtitle>\n  </mat-card-header>\n  <img class=\"centerred\" mat-card-image src={{smImg}} style=\"width:140px;\">\n  <mat-card-content>\n    <p>\n      {{description}}\n    </p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-raised-button (click)=\"submit()\">{{buttonName}}</button>\n  </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/shared/tilecard/tilecard.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/tilecard/tilecard.component.ts ***!
  \*******************************************************/
/*! exports provided: TilecardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TilecardComponent", function() { return TilecardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TilecardComponent = /** @class */ (function () {
    function TilecardComponent(router) {
        this.router = router;
        this.title = "Title";
        this.subTitle = "";
        this.description = "The content";
        this.smImg = "assets/images/study.jpg";
        this.urlMdPath = "";
        this.buttonName = 'Submit';
        this.urlPath = 'home';
        this.style = '';
    }
    TilecardComponent.prototype.ngOnInit = function () {
        this.style = "background-image: url(smImg);background-size: cover;";
    };
    TilecardComponent.prototype.submit = function () {
        this.router.navigate([this.urlPath]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TilecardComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TilecardComponent.prototype, "subTitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TilecardComponent.prototype, "description", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TilecardComponent.prototype, "smImg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TilecardComponent.prototype, "urlMdPath", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TilecardComponent.prototype, "buttonName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TilecardComponent.prototype, "urlPath", void 0);
    TilecardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tilecard',
            template: __webpack_require__(/*! ./tilecard.component.html */ "./src/app/shared/tilecard/tilecard.component.html"),
            styles: [__webpack_require__(/*! ./tilecard.component.css */ "./src/app/shared/tilecard/tilecard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], TilecardComponent);
    return TilecardComponent;
}());



/***/ }),

/***/ "./src/app/shared/tutorial-dialog/tutorial-dialog.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/shared/tutorial-dialog/tutorial-dialog.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/tutorial-dialog/tutorial-dialog.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/shared/tutorial-dialog/tutorial-dialog.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{data.title}}</h1>\n<div mat-dialog-content>\n  <markdown style=\"width=100%; object-fit=contain\" [src]=\"data.urlMdPath\" ngPreserveWhitespaces></markdown>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onDoneClick()\" cdkFocusInitial>Done</button>\n</div>"

/***/ }),

/***/ "./src/app/shared/tutorial-dialog/tutorial-dialog.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/tutorial-dialog/tutorial-dialog.component.ts ***!
  \*********************************************************************/
/*! exports provided: TutorialDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialDialogComponent", function() { return TutorialDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var TutorialDialogComponent = /** @class */ (function () {
    function TutorialDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    TutorialDialogComponent.prototype.ngOnInit = function () {
    };
    TutorialDialogComponent.prototype.onDoneClick = function () {
        this.dialogRef.close();
    };
    TutorialDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tutorial-dialog',
            template: __webpack_require__(/*! ./tutorial-dialog.component.html */ "./src/app/shared/tutorial-dialog/tutorial-dialog.component.html"),
            styles: [__webpack_require__(/*! ./tutorial-dialog.component.css */ "./src/app/shared/tutorial-dialog/tutorial-dialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], TutorialDialogComponent);
    return TutorialDialogComponent;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jeromeboyer/Code/jbcodeforce/jmcbridge/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
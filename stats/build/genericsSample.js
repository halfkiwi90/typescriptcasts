"use strict";
// generics?
// Nothing to do with generics
// bad code
var addOne = function (a) {
    return a + 1;
};
var addTwo = function (a) {
    return a + 2;
};
var addThree = function (a) {
    return a + 3;
};
// 비슷한 코드를 복사 붙여넣기 하는 방식은 나쁘다.
// better code
var add = function (a, b) {
    return a + b;
};
// nothing to do with generics
// 따로 만들 수도 있지만
var HoldNumber = /** @class */ (function () {
    function HoldNumber() {
    }
    return HoldNumber;
}());
;
var HoldString = /** @class */ (function () {
    function HoldString() {
    }
    return HoldString;
}());
;
// use generics
var HoldAnything = /** @class */ (function () {
    function HoldAnything() {
    }
    return HoldAnything;
}());
// generic 을 사용해서 만들 수 있다.
var holdNumber2 = new HoldAnything();
var holdString2 = new HoldAnything();

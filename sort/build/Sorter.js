"use strict";
// 유니언 타입을 사용한 안좋은 코드 
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
// class Sorter {
// 	// 문자열돌 정렬 하려고 한다.
// 	// number[] | string 유니언 타입을 사용하면 number[], stirng에서 공통 속성, 메소드만 사용할 수 있다.
// 	// 사용할 수 있는 메소드 들이 제한 되기 때문에 type gaurd 라는 방식을 쓴다.
// 	// 원시타입은 typeof 로 참조타입은 instanceof 를 사용한다.
// 	// 유니언 타입으로 새로운 타입을 추가하는것은 좋은 방식은 아니다. 
// 	// 새로운 타입이 추가될 때마다 그에 맞은 타입가드를 추가해 줘야 한다. 
// 	constructor(public collection: number[] | string) {
// 	}
// 	// bubble sort 를 구현했다.
// 	// 이것을 오로지 숫자로 구성된 배열 타입에만 적용되도록 구성했다.
// 	// 그래서 문자열에는 적용 되지 않는다. 
// 	// 이유 1. 문자열은 스왑 안됨 
// 	// 2. 문자열 간의 비교는 alphabetical 하지 않음 ex) 'a' < 'X'// false  a는 코드넘버 97, X는 코드넘버 88 이라서.
// 	sort(): void {
// 		const { length } = this.collection;
// 		for (let i = 0; i < length; i++) {
// 			for (let j = 0; j < length - i - 1; j++) {
// 				// All of this only works if collection is number[]
// 				// If collection is an array of numbers
// 				// 조건문으로 instanceof Array 를 추가해주면 배열의 모든 속성, 메소드를 사용할 수 있다.
// 				if (this.collection instanceof Array) {
// 					// 이 블럭 안에서는 유니언으로 인한 제한을 받지 않는다.
// 					if (this.collection[j] > this.collection[j + 1]) {
// 						const leftHand = this.collection[j];
// 						this.collection[j] = this.collection[j + 1];
// 						this.collection[j + 1] = leftHand;
// 					}
// 				}
// 				// Only going to work if collection is a string
// 				if (typeof this.collection === 'string') {
// 				}
// 			}
// 		}
// 	}
// } 
// interface 를 활용한 좋은 코드
// 버블 정렬에 대해서 추상화를 한다. compare, swap  
// 그러면 그 타입만의 비교, 스왑 기능만 있다면 버블 정렬이 가능하게 되고 
// 새로운 타입이 추가가 되더라도 대처하기 쉬워진다. 재사용성과 확장성이 좋아진다.
// 또 버블 정렬을 모르더라도, 비교하고, 스왑하는 함수만 작성해준다면 버블 정렬을 사용할 수 있다.
// interface Sortable {
// 	length: number;
// 	compare(leftIdx: number, rightIdx: number): boolean
// 	swap(leftIdx: number, rightIdx: number): void;
// }
// export class Sorter {
// 	constructor(public collection: Sortable) {
// 	}
// 	sort(): void {
// 		const { length } = this.collection;
// 		for (let i = 0; i < length; i++) {
// 			for (let j = 0; j < length - i - 1; j++) {
// 				if (this.collection.compare(j, j + 1)) {
// 					this.collection.swap(j, j+ 1)
// 				}
// 			}
// 		}
// 	}
// } 
// 추상 클래스를 활용한 좋은 코드
// Sort 클래스에 있는 sort 메소드를 
// 다른 타입들의 클래스에 상속시켜주면
// const sort = new Sort(collection) 과 같은 절차 업이
// collection.sort() 만 하더라도 정렬이 되도록 만들 수 있다.
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    Sorter.prototype.sort = function () {
        var length = this.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;

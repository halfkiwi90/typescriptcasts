// tsc index.ts 컴파일러를 실행하면 해당 디렉토리에 index.js 파일이 만들어 진다.
// 컴파일된 파일과, 소스코드가 같은 디렉토리 상에 있다면 규모가 조금만 커져도 어지럽게 된다.
// 그래서 src, buil 디렉토리를 만들어서 분류 하기로 한다.
// ts config 파일을 만들어서 설정을 한다. tsc --init, tsc -w

// nodemon 과 concurrentcy 사용방법

class Sorter {
	// 문자열돌 정렬 하려고 한다.
	// number[] | string 유니언 타입을 사용하면 number[], stirng에서 공통 속성, 메소드만 사용할 수 있다.
	// 사용할 수 있는 메소드 들이 제한 되기 때문에 type gaurd 라는 방식을 쓴다.
	// 원시타입은 typeof 로 참조타입은 instanceof 를 사용한다.
	constructor(public collection: number[] | string) {
	}

	// bubble sort 를 구현했다.
	// 이것을 오로지 숫자로 구성된 배열 타입에만 적용되도록 구성했다.
	// 그래서 문자열에는 적용 되지 않는다. 
	// 이유 1. 문자열은 스왑 안됨 
	// 2. 문자열 간의 비교는 alphabetical 하지 않음 ex) 'a' < 'X'// false  a는 코드넘버 97, X는 코드넘버 88 이라서.
	sort(): void {
		const { length } = this.collection;

		for (let i = 0; i < length; i++) {
			for (let j = 0; j < length - i - 1; j++) {

				// All of this only works if collection is number[]
				// If collection is an array of numbers
				// 조건문으로 instanceof Array 를 추가해주면 배열의 모든 속성, 메소드를 사용할 수 있다.
				if (this.collection instanceof Array) {
					// 이 블럭 안에서는 유니언으로 인한 제한을 받지 않는다.
					if (this.collection[j] > this.collection[j + 1]) {
						const leftHand = this.collection[j];
						this.collection[j] = this.collection[j + 1];
						this.collection[j + 1] = leftHand;
					}
				}

				// Only going to work if collection is a string
				if (typeof this.collection === 'string') {
				}
			}
		}
	}
}

const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection)


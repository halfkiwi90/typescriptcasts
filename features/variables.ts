// type annotation 
let apples: number = 5;
// let apples = 5; <-- type inference
// 변수 선언과 변수 초기화를 한번에 할 때 타입스크립트는 초기화 하는 값의 타입으로 타입을 추론한다.

// 보통의 경우 type inference 사용,
// type annotions 사용할때 
//   1. any 타입을 리턴하는 함수
//   2. 변수 선언을 먼저하고 나중에 변수 초기화를 하는 경우
//   3. type inference를 사용 할 수 없을 때

let speed: string = 'fast';
let hasName:boolean = true;

let nothinMuch: null = null;
let nothing: undefined = undefined;

// buit in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 3, 4]; 
let truths: boolean[] = [true, false];

// Classes
class Car {

};
let car: Car = new Car();

// Object literal
let point: { x: number; y:number } = {
	x: 10,
	y: 20
};

// Function
const logNumber: (i: number) => void = (i: number) => {
	console.log(i);
};

// 
const json = '{"x": 10, "y":20}';
const coordinates = JSON.parse(json); // <-- function it returns any type
coordinates.asdfasdfsdf // <-- any type 이라 없는 속성, 메소드 사용가능 
console.log(coordinates); 

const coordinates2: { x: number; y:number } = JSON.parse(json); 


// 2) When we declare a variable on one line
// and initialization it later
let words = ['red', 'green', 'blue'];
let founWord;

for (let i = 0; i < words.length; i++) {
	if (words[i] === 'green') {
		founWord = true;
	}
}

// 3) Variable whose type cannot be inferred corectly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] > 0) {
		numberAboveZero = numbers[i]
	}
}

class ArrayOfNumbers {
	constructor(public collection: number[]) {}
		
	get(index: number): number {
		return this.collection[index]
	}
}

class ArrayOfStrings {
	constructor(public collection: string[]) {}

	get(index: number): string {
		return this.collection[index]
	}
}

// generics 로 두 클래스를 하나로 통합한다.
// T를 하나의 argumnet로 취급한다.
class ArrayOfAnything<T> {
	constructor(public collection: T[]){}

	get(index: number): T {
		return this.collection[index]
	}
}

// angle bracket 없이 작성해도 작동한다.
// ts가 타입을 추론 했기 때문에
new ArrayOfAnything(['a', 'b', 'c'])

// Example of generics with functions

function printStrings(arr: string[]): void {
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}

function printNumbers(arr: number[]): void {
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}

function printAnything<T>(arr: T[]): void {
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}


printAnything<string>(['a', 'b', 'c']);

// angle bracket 없어도 작동 잘함.
printAnything(['a', 'b', 'c']);


// Generic Constraints
interface Printable {
	print(): void;
}

class Car {
	print() {
		console.log('I am a car');
	}
}

class House {
	print() {
		console.log('I am a house');
	}
}

function printHouseOfCar<T extends Printable>(arr: T[]): void {
	for (let i = 0; i < arr.length; i++) {
		arr[i].print();
	}
}


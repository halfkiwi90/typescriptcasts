// generics?

// Nothing to do with generics
// bad code
const addOne = (a: number): number => {
	return a + 1;
}
const addTwo = (a: number): number => {
	return a + 2;
}
const addThree = (a: number): number => {
	return a + 3;
}
// 비슷한 코드를 복사 붙여넣기 하는 방식은 나쁘다.

// better code
const add = (a: number, b: number): number => {
	return a + b;
};

// nothing to do with generics
// 따로 만들 수도 있지만
class HoldNumber {
	data: number;
};

class HoldString {
	data: string;
};

// use generics
class HoldAnything<TypeOfData> {
	data: TypeOfData;
}

// generic 을 사용해서 만들 수 있다.
const holdNumber2 = new HoldAnything<number>();
const holdString2 = new HoldAnything<string>();



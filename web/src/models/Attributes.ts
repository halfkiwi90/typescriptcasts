export class Attributes<T> {
	// data 직접 접근하지 못하도록 private
	constructor(private data: T) {}

	// 리턴 타입은 정해져 있지 않기 때문에 수정해야 한다.
	// 유티언 타입 말고 다른 방법
	get = <K extends keyof T>(key: K): T[K] => {
		return this.data[key];
	}

	set = (update: T): void => {
		Object.assign(this.data, update);
	}

	getAll(): T {
		return this.data;
	}
}

// 1. in typescript string can be type
// 커스텀 문자열을 하나의 타입으로 사용할 수 있다.
// type BestName = 'stephen';
// const printName = (name: BestName): void => {}

// 2. in JS(therefore in TS), all object keys string
// 객체의 키값은 문자열이다.

// 위의 두가지 사항으로 객체의 키는 타입이 될 수 있다.


const oldCivic = {
	name: 'civic',
	year: 2000,
	broken: true,
	summary():string {
		return `Name: ${this.name}`
	}
};

// type annotation 이 너무 길다.
const printVehicle = (vehicle: { name: string; year: number; broken: boolean }): void => {
	console.log(`Name: ${vehicle.name}`);
	console.log(`Year: ${vehicle.year}`);
	console.log(`Broken? ${vehicle.broken}`);
};

interface Vehicle {
	summary(): string;
};

const logVehicle = (vehicle: Vehicle): void => {
	console.log(vehicle.summary());
};

logVehicle(oldCivic)

// interface 이름을 Vehicle 로 한것이 적절한가?, Reportable이 더 적절한 이름. 
// 함수명과 변수명도 printSummary, item 으로 변경하면 좋다. 

const printSummary = (item: Vehicle): void => {
	console.log(item.summary());
};

const drinks = {
	color: 'brown',
	carbonated: true,
	sugar: 40,
	summary(): string {
		return `My drink has ${this.sugar} grams of sugar`
	}
};

// oldcivic 과 drinks 는 둘다 summary 라는 같은 속성을 가ㅣㅈ고 있다. 
// 다른 속성을 가지고 있더라도 single interface로 재사용 가능 하다.
// 재사용성 고려

// General Strategy for Reusable Code in TS
// 1. Create fumtions that accept arguments that are typed with interfaces.
// 2. Objects/classes can decide to 'implement' a given interface to work with a function.
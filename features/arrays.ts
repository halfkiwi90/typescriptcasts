
const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake = [
	['f150'],
	['corolla'],
	['camaro']
];

// Help with inference when extrating values
// 배열로부터 값을 가져 올 때 TS 가 타입 추론을 할 수 있다.

const car1 = carMakers[0]; 
const myCar = carMakers.pop(); 

// Prevent incompatible values

// carMakers.push(100); 호환되지 않는 값 삽입 방지

// Help with 'map'
carMakers.map((car: string):string => {
	return car
});

// Flexible types
const importantDates: (Date | String)[] = [new Date(), '2021-10-20'];

// 


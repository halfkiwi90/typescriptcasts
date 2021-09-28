const drink = {
	color: 'brown',
	carbonated: true,
	sugar: 40
};

const pepsi = ['brown', true, 40];
// 배열로 나타낼 수 있지만 속성의 순서는 정해져 있지 않다.
// pepsi[0] = 30 가능

const cola: [string, boolean, number] = ['brown', true, 40]; 
// 순서가 있음 
// cola[0] = 30 <- error

type Drink = [string, boolean, number];
// type annotation 으로 표현 가능
const sprite : Drink = ['clear', true, 40];

const carSpecs: [number, number] = [400, 3354];
// tuple 을 사용할 경우 number가 무슨 속성인지 알기 어렵다.

const carStats = {
	horsePower: 400,
	weight: 3353
}
// 객체의 경우 알기 쉽다.
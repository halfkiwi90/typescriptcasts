// type annotaions in functions
const add = (a: number, b: number): number => {
	return a + b;
	// return 'asdf' <-- error
	// return a - b  <-- 에러 안남 
};

// argument 는 타입 명시 해줘야함
// return 값은 타입 추론 가능함 
// return 값 넣지 않는 실수 할 수 있으므로 리턴도 명시해주면 좋음 
const sub = (a: number, b: number) => {
	return a - b;
};

function divide (a:number , b:number): number {
  return a / b;
};

const multiply = function(a: number, b: number): number {
	return a * b ;
}

// no return
const logger = (message: string): void => {
	console.log(message);
	//return 'asdfasdf' <-- 에러
	// return null <--에러 안남
}

const throwError = (message: string): never => {
	throw new Error(message);
}

const todaysWeather = {
	date: new Date(),
	weather: 'sunny'
}

const logWeather = (forecast:{date: Date, weather: string}): void => {
	console.log(forecast.date);
	console.log(forecast.weather);
}
// ES2015
const logWeather2 = ({date, weather}: {date: Date, weather: string}) => {
	console.log(date);
	console.log(weather);
}

logWeather(todaysWeather)
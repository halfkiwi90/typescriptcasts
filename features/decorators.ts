class Boat {
	@testDecorator
	color: string = 'red'; 

	get formattedColor(): string {
		return `This boats color is ${this.color}`
	}

	@logError('sunk in ocean')
	pilot(): void {
		throw new Error();
		console.log('swish');
	}
}

// decorator factory
function testDecorator(target: any, key: string) {
	// color 속성에 접근할 수 없다.
	console.log(target[key]);
}

function logError(erroMessage: string) {
	return function (target: any, key: string, desc: PropertyDescriptor): void {
		const method = desc.value;

		desc.value = function() {
			try {
				method();
			} catch (e) {
				console.log(erroMessage);
			}
		}
	}
} 

new Boat().pilot();

// 데코레이터
// 데코레이터의 첫번째 전달인자는 객체의 프로토타입이다.
// testDecorator의 첫번째 전달인자에는 객체로 target에는 accessor 와 메소드를 확인 할 수 있다. 
// 데코레이터의 두번째 전달인자는 key of the property/ method/ accessor on the object
// 데코레이터는 처음 정의 될 때만 실행 된다.

// property descriptor는 객체의 속성이 writable, enumerable, configuable 한지 알려준다.
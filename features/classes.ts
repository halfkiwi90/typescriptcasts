class Vehicle1 {
	// public modifier 
	constructor(public color: string) {
		this.color = color;
	}

	protected honk():void {
		console.log('beep');
	}
};

const vehicle1 = new Vehicle1('blue');
console.log(vehicle1.color)

class Car1 extends Vehicle1 {

	constructor(public wheels: number, color: string) {
		super(color);
	}


	// 덮어 쓰기
	private drive(): void {
		console.log('vroom');
	}

	startDrivingProcess(): void {
		this.drive();
		this.honk();
	}
}

const car = new Car1(4, 'blue');

car.startDrivingProcess();
// car.drive(); 에러

// public (default): method can be called anywhere, anytime.
// private: method can be called by other mothods in this class.
// 					보안적으로 예방하고자 할 때, 다른 개발자들이 조작할 가능성 방지 하기 위해서
// protected: method can be called by other methods in this class or called by other methods in child classes.

// Where to Use Classes ?
// 
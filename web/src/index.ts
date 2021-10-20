import { UserForm } from "./views/UserForm";
import { User } from "./models/User";

const user = User.buildUser({ name: 'view', age: 20 })


const root = document.getElementById('root')

if (root) {
	const userForm = new UserForm(root, user)

	userForm.render();
}





// collection.on('change', () => {
// 	console.log(collection)
// })
// collection.fetch();

// interface에 optional ? 옵션을 줘서 data 없는 user 인스턴스를 만들었다.
// const user = new User({ name: 'noid' , age: 0 });

// user.attributes.get('id')
// user.attributes.get('name')
// user.attributes.get('age')
// user.sync.save()

// Before...
// user.save() 로 사용가능했지만
// refactor 하고나서는 user.sync.save() 해야한다.

// A quick reminder of accessors
// class Person {
// 	constructor(public firstName: string, public lastName: string) {}

// 	// get accessor 를 사용하면 메소드가 아닌 속성으로 취급할 수 있게한다.
// 	get fullName(): string {
// 		return `${this.firstName}, ${this.lastName}`
// 	}
// }
// const person = new Person('kang', 'hwan')
// console.log(person.fullName)

// console.log(user.get('name'))
// undefinde 라는 에러가 생겼다
// 각 클래스에 있는 메소드들을 화살표 함수로 바꿔줘서 this 가 인스턴스를 가르키도록 바꿔준다.

// Reminder on how 'this' works in javascript
// 여기서 this는 온점 옆의 값을 가르킨다. 
// const colors = {
// 	color: 'red',
// 	printColor() {
// 		console.log(this.color);
// 	}
// }
// this 값이 있는 경우
// console.log(colors.printcolor();)

// this 가 undefined 인 경우
// const printColor = colors.printColor;
// printColor();

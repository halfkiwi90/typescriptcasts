import { Eventing } from './Eventing';
import { ApiSync } from './ApiSync';
import { Attributes } from './Attributes';
import { AxiosResponse } from 'axios';

import { Model } from './Model';

export interface UserProps {
	id?: number;
	name?: string;
	age?: number;
}

const rootUrl = 'http://localhost:3000/users'

export class User extends Model<UserProps> {
	static buildUser(attrs: UserProps): User {
		return new User(
			new Attributes<UserProps>(attrs),
			new Eventing(),
			new ApiSync<UserProps>(rootUrl)
		)
	}
}

// User 클래스에서 Model 클래스로 속성을 추출하기 전의 코드
// export class User {
	// public events: Eventing = new Eventing();
	// Sync 에 hasid 해줬음에도 에러가 발생했다.
	// UserProps 에 id 속성이 optional 이고 Hasid 는 required option 이기 때문에 발생한 문제
	// public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
	// public attributes: Attributes<UserProps>;

	// constructor(attrs: UserProps) {
	// 	this.attributes = new Attributes<UserProps>(attrs);
	// }

	// 아래와 같은 방식으로 쓰면, 후에 Event클래스의 on 메소드를 수정할때 마다 수정해야한다.
	// on(eventName: string, callback: Callback): void {
	// 	this.events.on(eventName, callback);
	// }
	// get accessor 를 사용하면 된다.

	// 하나의 클래스만 사용하는 메소드
	// no need coordination between classes
	// get on() {
	// 	return this.events.on;
	// }

	// get trigger() {
	// 	return this.events.trigger;
	// }

	// get get() {
	// 	return this.attributes.get;
	// }

	// 다른 클래스들을 함께 이용해야하는 메소드
	// need coodination with classes
	// set(update: UserProps): void {
	// 	this.attributes.set(update)
	// 	this.events.trigger('change')
	// }

	// fetch(): void {
	// 	const id = this.attributes.get('id');

	// 	if (typeof id !== 'number') {
	// 		throw new Error('Cannot fetch without id')
	// 	}

	// 	this.sync.fetch(id).then((response: AxiosResponse) => {
	// 		this.set(response.data)
	// 	}) 
	// }

	// save(): void {
	// 	this.sync.save(this.attributes.getAll())
	// 		.then((response: AxiosResponse): void => {
	// 			this.trigger('save');
	// 		})
	// 		.catch(() => {
	// 			this.trigger('error');
	// 		})
	// }

	// 모델로 메소드 들을 가져 갔다.
// }
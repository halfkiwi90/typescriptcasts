import axios, { AxiosPromise, AxiosResponse } from "axios";

interface ModelAttributes<T> {
	set(update: T): void;
	getAll(): T;
	get<K extends keyof T>(key: K): T[K];
}

interface Sync<T> {
	fetch(id: number): AxiosPromise;
	save(data: T): AxiosPromise;
}

interface Events {
	on(eventName: string, callback: () => void): void;
	trigger(eventName: string): void;
}

interface HasId {
	id?: number
}

export class Model<T extends HasId> {
	constructor(
		private attributes: ModelAttributes<T>,
		private events: Events,
		private sync: Sync<T>
	){}

	// get on() {
	// 	return this.events.on;
	// }

	// get trigger() {
	// 	return this.events.trigger;
	// }

	// get get() {
	// 	return this.attributes.get;
	// }
로
	// getter 짧게 쓰는 문법, constructor argument로 event와, atrributes를 정의해서 사용하능한 문법
	on = this.events.on;
	trigger = this.events.trigger;
	get = this.attributes.get;

	set(update: T): void {
		this.attributes.set(update)
		this.events.trigger('change')
	}

	fetch(): void {
		const id = this.attributes.get('id');

		if (typeof id !== 'number') {
			throw new Error('Cannot fetch without id')
		}

		this.sync.fetch(id).then((response: AxiosResponse) => {
			this.set(response.data)
		}) 
	}

	save(): void {
		this.sync.save(this.attributes.getAll())
			.then((response: AxiosResponse): void => {
				this.trigger('save');
			})
			.catch(() => {
				this.trigger('error');
			})
	}
	
}
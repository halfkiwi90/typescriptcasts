// 함수를 타입으로 명시하고 싶을때 type alias 를 사용 하는 것이 좋다.
type Callback = () => void;

export class Eventing {
	events: { [key: string]: Callback[] } = {};

	on = (eventName: string, callback: Callback): void => {
		// 해당 이벤트가 없어서 undefined 일 수 있으니 빈배열 추가
		const handlers = this.events[eventName] || [];
		handlers.push(callback);
		this.events[eventName] = handlers;
	}

	trigger = (eventName: string): void => {
		const handlers = this.events[eventName];

		if (!handlers || handlers.length === 0)  return;

		handlers.forEach(callback => {
			callback();
		})
	}
}
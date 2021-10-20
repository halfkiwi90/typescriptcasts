import { Model } from "../models/Model";

export abstract class View<T extends Model<K>, K > {
	// Element represent any HTML element
	constructor(public parent: Element, public model: T) {
		this.bindModel();
	}

	abstract template(): string;


	eventsMap(): { [key: string]: () => void} {
		return {};
	}

	bindModel(): void {
		this.model.on('change', () => {
			this.render();
		})
	}

	// template 의 content는  document fragment이다.
	// document fragment는 부모가 없는 작은 html 객체.
	bindEvents(fragment: DocumentFragment): void {
		this.parent.innerHTML = '';

		const eventsMap = this.eventsMap();

		for (let eventKey in eventsMap) {
			const [eventName, selector] = eventKey.split(':');

			fragment.querySelectorAll(selector).forEach(element => {
				element.addEventListener(eventName, eventsMap[eventKey])
			})

		}
	}

	render(): void {
		const templateElement = document.createElement('template');
		templateElement.innerHTML = this.template();

		this.bindEvents(templateElement.content);

		this.parent.append(templateElement.content);
	}
}
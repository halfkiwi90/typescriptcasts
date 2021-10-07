import axios, { AxiosPromise }from "axios";

// generic 을 사용할때 id 라는 타입이 포함 되어있다고
// TS 에게 전달해 주기위해 interface 를 사용해 extends 해준다.
// tsconfig 파일의 strict 옵션이 true 라면 id 가 가질 수 있는 타입은 number 밖에 없다.
// tsconfig 파일 strict를 false로 바꿔서 id가 가질수 있는 타입을 number에서 number | undefined로 가능성을 늘려준다.
// 그렇게 해서 save 메소드의 조건문이 말이 되도록 한다. id 가 undefined 일 수 있으니.
interface HasId {
	id?: number;
}

export class ApiSync<T extends HasId> {
	constructor(public rootUrl: string) {}

	fetch(id: number): AxiosPromise {
		return axios.get(`${this.rootUrl}/${id}`);
	}

	save(data: T): AxiosPromise {
		const { id } = data;

		if (id) {
			return axios.put(`${this.rootUrl}/${id}`, data)
		} else {
			return axios.post(`${this.rootUrl}`, data)
		}
	}
}
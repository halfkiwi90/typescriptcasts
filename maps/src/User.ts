// 클래스를 export 할 것이기 때문에 파일명 첫번째 글자를 대문자로 했다.
import faker from 'faker';
import { Mappable } from './Map';

// faker 묘듈을 import 할 때 could not find a declaration file or module 에러가 생겼다.
// 순수 js로 쓰여진 라이브러리 이기 때문에 생긴 에러이다. 그래서 type definition file을 설치해 줘야한다.
// 일반적인 방법 @types/{library name}, DefinitelyTyped 프로젝트

// 이전에 받았던 axios 는 default로 타입 정의 파일이 포함 되어 있기 때문에 에러가 뜨지 않았다.

// 타입 정의 파일 설치후 (linux) 컨트롤 키와 함께 faker 를 클릭하면 타입정의파일로 이동하고 정의된 타입들을 볼 수 있다.
// faker 에서 adress 의 lat과 lng 는 문자열인것을 확인 했다.

// lat 과 lng 을 랜덤하게 생성해서 구글맵에 표시 하려고 한다.

// implements 로 이 클래스가 Mappable타입을 충족하는지 확인할 수 있다.
export class User implements Mappable{
	name: string;
	location: {
		lat: number;
		lng: number;
	};

	constructor() {
		this.name = faker.name.findName();
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			lng: parseFloat(faker.address.longitude())
		}

	}

	markerContent(): string {
		return `User name: ${this.name}`
	}

	color:string = 'red';
}

// TS 에서는 되도록이면 export deafault 하지 않는것을 추천.
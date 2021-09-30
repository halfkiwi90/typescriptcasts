// html script 태그로 google maps 를 불러와서 api를 사용하려고 한다..
// 브라우서 콘솔에서 google 이라는 변수가 있음을 확인 할 수 있다.
// 하지만 ts 에서는 google을 인식 할 수 없다. 
// 이전과 마찬가지로 google maps api 를 위한 타입 정의 파일을 npm 으로 다운 받아야 한다.

// google 타입 정의 소스파일로 간뒤
// (linux) 컨트롤 쉬프트 p 를 누른 후 fold level 2 명령어를 입력해서 google map가 가지고 있는 
// 속성들을 간단히 볼 수 있다.
// (TS 의 장점) Map 클래스를 보면 constructor 전달인자로 mapDiv 강ㅆ는데 타입이 Element 이다. html 요소를 전달인자로 받는다는것을 확인할 수 있다
// 두번째 전달인자로 opts: MapOptions 가 있다. interface로 타입이 정의 되어 있다. 정의된 사항을 보고 어떤 것들이 있는지 파악할 수 있다.
// 이런식으로 컨트롤 + 클릭을 해서 라이브러리가 어떻게 돌아가는지 힌트를 얻을 수 있다.

// google map 클래스로 만든 인스턴스의 메소드 들을 직접 사용하는 것은 좋지 않다. 다른 개발자들이 의도하지 않은 메소드를 사용할 수 있다.
// 그래서 다른 개발자가 map 메소드 사용에 제한을 걸어 주어야 한다. 
// Custom Map 클래스를 만들어서 map 인스턴스를 숨겨 직접적으로 사용하지 못하게 한다.

import { User } from './User';
import { Company } from './Company';

// Instructions to every other class
// on how they can be an argument to 'addMarker'
export interface Mappable {
	location: {
		lat: number;
		lng: number;
	}

	// 클릭 했을때 marker에 대한 content를 표시 해주기 위해서 interface에 문자열을 리턴해주는 메소드를 추가했다.
	// 각 클래스로 가서 markerContent 메소드를 추가해 주었다.
	markerContent():string

	// color 속성을 추가 했을때 index.ts 에 에러가 생긴다.
	// 에러가 생기는것은 물론 도움이 되는 일이지만
	// 에러가 어디서 부터 발생되었는지는 알기 어렵다.
	// 그래서 interface 를 export 한다음 User클래스에 implements Mappable 해줬다.
	// 이렇게 하면 에러가 발생한 장소와 이유를 분명하게 알 수 있다.
	color: string;
}

export class Map {
	// 제한 걸기위해서 private modifier 사용
	private googleMap: google.maps.Map;

	// 재사용성을 높이기 위해 divId 추가
	constructor(divId: string) {
		this.googleMap = new google.maps.Map(document.getElementById(divId), {
			zoom: 1,
			center: {
				lat: 0,
				lng: 0
			}
		});
	}

	// 메소드 이름만 다를뿐 동작이 같은 메소드 들이다. 
	// 하나로 압축 하는 것이 좋다.
	// // 클래스로 타입을 지정해 줄 수 있음.
	// addUserMarker(user: User): void {
	// 	new google.maps.Marker({
	// 		map: this.googleMap,
	// 		position: {
	// 			lat: user.location.lat,
	// 			lng: user.location.lng
	// 		}
	// 	})
	// }

	// addCompanyMarker(company: Company): void {
	// 	new google.maps.Marker({
	// 		map: this.googleMap,
	// 		position: {
	// 			lat: company.location.lat,
	// 			lng: company.location.lng
	// 		}
	// 	})
	// }

	// 방법 1.
	// User | Company 유니언 결합으로 두 클래스으 공통 필드인 location만 추출했다. 
	// 단점 확장성이 떨어진다. 마커하고 싶은 새로운 클래스를 만들때마다 전달인자에 or 로 붙여줘야 한다.
	// addMarker(mappable: User | Company): void {

	// 	// mappable.name 은 사용할 수 없다.

	// 	new google.maps.Marker({
	// 		map: this.googleMap,
	// 		position: {
	// 			lat: mappable.location.lat,
	// 			lng: mappable.location.lng
	// 		}
	// 	})
	// }

	// best solution
	// 인터페이스를 만든다. 
	// 접근 과정) marker 메소드를 사용 하고 싶다면 location 에 대한 정보만 있으면 되니 
	// Mappable 이라는 인터페이스를 만들어서 이 타입만 충족한다면 메소드를 사용할 수 있도록 한다.
	
	addMarker(mappable: Mappable): void {

		const marker = new google.maps.Marker({
			map: this.googleMap,
			position: {
				lat: mappable.location.lat,
				lng: mappable.location.lng
			}
		})

		marker.addListener('click', () => {
			const popUp = new google.maps.InfoWindow({
				content: mappable.markerContent()
			})

			popUp.open(this.googleMap, marker);
		})
	}


}
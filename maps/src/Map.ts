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
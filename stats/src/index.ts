// node standart module 또한 type definition file 을 다운받아야 한다.
// @types/node
import fs from 'fs';

// 작동 하지만 안좋은 코드

// parse csv파일을 분석하기 좋게 가공
// const matches = fs.readFileSync('football.csv', {
// 	encoding: 'utf-8'
// })
// .split('\n')
// .map((row: string): string[] => {
// 	return row.split(',')
// })

// analyze 맨채스터 유나이티드가 이긴 횟수 분석
// let manUnitedWins = 0;

// for (let match of matches) {
// 	if (match[1] === 'Man United' && match[5] === 'H') {
// 		manUnitedWins++;
// 	} else if (match[2] === 'Man United' && match[5] === 'A') {
// 		manUnitedWins++;
// 	}
// }

// 출력
// console.log(manUnitedWins)

// 위 코드가 좋지 않은 이유
// 1. 조건문, match[5] === 'H' 는 데이터에 대한 배경지식이 없으면 이해하기 어렵다.
// 2. 소스코드가 하드코딩되어 있다. csv파일을 변환해 줄 때 재사용 가능 하도록 만들자.
// 3. Data array is all strings 모든 요소가 문자열이다. 날짜는 Date 타입, 숫자는 숫자로 타입을 바꿔주는게 좋다.


// 좋은 코드 

import { CsvFileReader } from './CsvFileReader';

const reader = new CsvFileReader('football.csv');
reader.read();

// 다른 사람이 보거나 시간이 지난후 내가 봤을때 
// 이해하기 쉽도록 변수를 만들어 준다.
const homWin = 'H';
const awayWin = 'A';
// 여기ㅅ에서 사용하지 않지만 match[5] 에 또 하나의 값이 있다.
// 홈윈, 어웨이 윈 뿐만 아니라 무승부라는 정보도 있다는것은 다른 개발자 에게 중요한 정보일 수 있다.
// 그래서 사용하지는 않치만 선언은 해둔다.
const draw = 'D';
// 하지만 위의 방식으로는 사용되지 않는 값이라고 생각하고 지울 가능성이 있다.

// enum - enumeration
// 객체 형식이 아닌 이넘을 사용하는 이유는 의도적으로 다른 엔지니어에게 이넘값들 사이에 간계가 가깝다고 전달해 주는 의도로 사용. 
enum MatchResult {
	HomeWin = 'H',
	AwayWin = 'A',
	Draw = 'D'
}

let manUnitedWins = 0;

for (let match of reader.data) {
	if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
		manUnitedWins++;
	} else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
		manUnitedWins++;
	}
}

console.log(manUnitedWins);
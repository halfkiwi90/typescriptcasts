// 백업
import fs from 'fs';


// read 함수의 리턴 타입이 any인것은 부적절하다.
// 튜플로 타입을 정의해 주면 좋다.
;

export class CsvFileReader {
	data: string[][] = [];
	
	constructor(public filename: string) {}

	read(): void {
		this.data = fs.readFileSync(this.filename, {
			encoding: 'utf-8'
		})
		.split('\n')
		.map((row: string): string[] => {
			return row.split(',')
		})
	}

}
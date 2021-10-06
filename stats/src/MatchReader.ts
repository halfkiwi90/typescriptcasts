import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';
import { loadavg } from 'os';

type MatchData = [Date, string, string, number, number, MatchResult, string];

interface DataReader {
	read(): void;
	data: string[][];
}

export class MatchReader {

	data: MatchData[] = [];

	constructor(public reader: DataReader) {
	}

	load(): void {
		this.reader.read();

		this.data = this.reader.data.map((row: string[]): MatchData => {
			return [
				dateStringToDate(row[0]),
				row[1],
				row[2],
				parseInt(row[3]),
				parseInt(row[4]),
				// type asserstion 
				row[5] as MatchResult,	// expect 'H', 'A', 'D'
				row[6]
			]
		})
	}

}
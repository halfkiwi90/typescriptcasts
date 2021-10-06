"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
var fs_1 = __importDefault(require("fs"));
// read 함수의 리턴 타입이 any인것은 부적절하다.
// 튜플로 타입을 정의해 주면 좋다.
// csvFileReader 를 재사용하기 위해서 추상 클래스로 만들고 커스텀 함수에 대한 부분만 따로 때어 냈다. ( rowMap )
// 커스텁 타입도 추상화 해야하는데, 여기서는 MatchData 튜플
// 커스텀 타입은 어떻게 추상화 해서 전달 할 수 있을까? Generics 를 사용한다.
// type MatchData = [Date, string, string, number, number, MatchResult, string];
// generic 을 사용해서 커스텁 타입에 유연하게 적응 할 수 있도록 한다.
var CsvFileReader = /** @class */ (function () {
    function CsvFileReader(filename) {
        this.filename = filename;
        this.data = [];
    }
    CsvFileReader.prototype.read = function () {
        this.data = fs_1.default.readFileSync(this.filename, {
            encoding: 'utf-8'
        })
            .split('\n')
            .map(function (row) {
            return row.split(',');
        })
            .map(this.mapRow);
    };
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;

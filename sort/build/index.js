"use strict";
// tsc index.ts 컴파일러를 실행하면 해당 디렉토리에 index.js 파일이 만들어 진다.
// 컴파일된 파일과, 소스코드가 같은 디렉토리 상에 있다면 규모가 조금만 커져도 어지럽게 된다.
// 그래서 src, buil 디렉토리를 만들어서 분류 하기로 한다.
// ts config 파일을 만들어서 설정을 한다. tsc --init, tsc -w
Object.defineProperty(exports, "__esModule", { value: true });
var Numbercollection_1 = require("./Numbercollection");
var CharactersCollections_1 = require("./CharactersCollections");
var LInkedLIst_1 = require("./LInkedLIst");
// const charactersCollection = new CharacterCollection('Xaayb');
// const sorter = new Sorter(charactersCollection);
// sorter.sort();
// console.log(charactersCollection.data)
var linkedList = new LInkedLIst_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
// const sorter = new Sorter(linkedList);
// sorter.sort();
// linkedList.print();
// 추상 클래스
// 1. 추상 클래스 자체로는 인스턴스를 만들 수 없다.
// 2. 오로지 부모클래스로만 사용한다.
// 3. 자체로 가지고 있지 않은 값들로(자식클래스에서 제공 해준다.) 메소드들이 실행 되어야 한다.
var numbersCollection = new Numbercollection_1.NumbersCollection([50, 3, -7, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);
var charactersCollection = new CharactersCollections_1.CharacterCollection('Xayab');
charactersCollection.sort();
linkedList.sort();
console.log(charactersCollection.data);
linkedList.print();
// interface 특징
// 1. 서로 다른 클래스, 객체 간 결합이 쉽다.
// 2. 성질이 너무 다른 객체들을 함께 다루는 일이 있을 때 사용
// 2. 느슨한 결합
// abstract class 특징 
// 1. 서로 다른 클래스, 객체간 결합 쉽ㄴ디ㅏ.
// 2. 새로운 객체를 정의 하려고 할 때 사용
// 2. 강한 결합, 의존성 강하다 

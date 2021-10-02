// 연결리스트 

import { Sorter } from "./Sorter";

class Node {
	// 다음 노드이거나 마지막 노드일경우 null, deafault 값으로 null을 할당해 준다.
	next: Node | null = null;
	constructor(public data: number) {}
}

export class LinkedList extends Sorter{
	head: Node | null = null;

	add(data: number): void {
		const node = new Node(data);

		if (!this.head) {
			this.head = node;
			return;
		}

		let tail = this.head;
		while (tail.next) {
			tail = tail.next;
		}

		tail.next = node;
	}

	get length(): number {
		if (!this.head) {
			return 0;
		}

		let length = 1;
		let node = this.head;
		while (node.next) {
			length++;
			node = node.next;
		}

		return length
	}

	at(index: number): Node {
		if (!this.head) {
			throw new Error('Index out of bounds');
		}

		let counter = 0;

		// 타입 명시를 해줘야 하는 상황
		let node: Node | null = this.head;
		while (node) {
			if (counter === index) {
				return node;
			}

			counter++ 
			node = node.next;
		}

		// 에러 처리해줘야 함.
		throw new Error('Index out of bounds')
	}

	compare(leftIdx:number, rightIdx: number): boolean {
		if (!this.head) {
			throw new Error('List is Empty');
		}

		return this.at(leftIdx).data > this.at(rightIdx).data;
	}

	swap(leftIdx: number, rightIdx: number): void {
		const leftNode = this.at(leftIdx);
		const rightNode = this.at(rightIdx);

		const leftHand = leftNode.data;
		leftNode.data = rightNode.data;
		rightNode.data = leftHand;
	}

	print(): void {
		if (!this.head) {
			return;
		}

		let node: Node | null = this.head;
		while (node) {
			console.log(node.data);
			node = node.next;
		}
	}
}
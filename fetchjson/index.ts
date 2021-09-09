import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
	id: number;
	title: string;
	completed: boolean;
}
// interface is sturcture of objcet

axios.get(url).then(res => {
	const todo = res.data as Todo;

	const {id, title, completed} = todo;
	logTodo(id, title, completed);
})

const logTodo = (id: number, title:string, completed:boolean) => {
	console.log(`
		todo with ID: ${id}
		title : ${title}
		finished? : ${completed}
	`);
}

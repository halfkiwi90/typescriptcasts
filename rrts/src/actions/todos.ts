import axios from "axios";
import { Dispatch } from 'redux'
import { ActionTypes } from './types'

export interface Todo {
	id: number;
	title: string;
	completed: boolean
}

export interface fetchTodosActions {
	type: ActionTypes.fetchTodos;
	payload: Todo[];
}

export interface deleteTodosActions {
	type: ActionTypes.deleteTodo;
	payload: number;
}

const url = 'https://jsonplaceholder.typicode.com/todos';



export const fetchTodos = () => {
	return async (dispatch: Dispatch) => {
		// Todo 인터페이스를 넣어서 response 의 타입을 정해준다.
		const response = await axios.get<Todo[]>(url)

		// type: 'FETCH_TODO' 처럼 문자열을 사용하면 오타가 자주 발생 하기 때문에
		// enum 을 만들어서 unique 하게 관리 해주면 좋다.
		// 인터페이스를 만들어서 generic으로 명시해준다. (실수 방지)
		dispatch<fetchTodosActions>({
			type: ActionTypes.fetchTodos,
			payload: response.data
		})
	}
}

export const deleteTodo = (id: number): deleteTodosActions => {
	return {
		type: ActionTypes.deleteTodo,
		payload: id
	}
}



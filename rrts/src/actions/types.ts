import { fetchTodosActions, deleteTodosActions } from ".";

export enum ActionTypes {
	fetchTodos,
	deleteTodo
}

export type Action = fetchTodosActions | deleteTodosActions
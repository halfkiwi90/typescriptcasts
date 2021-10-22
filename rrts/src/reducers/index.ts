import { combineReducers } from "redux";
import { todoReducer } from './todos'
import { Todo } from '../actions'

// 원하는 상태를 설정하고
export interface StoreState {
	todos: Todo[];
}

// todoReducer가 리턴하는 값과, 우리가 원하는 스토어상태의 값이(interface 로 만들었음) 같은지
// generic으로 한번 더 검증한다.
export const reducers = combineReducers<StoreState>({
	todos: todoReducer
})
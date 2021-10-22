import React from "react";
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodo } from '../actions'
import { StoreState } from "../reducers";

interface AppProps {
	todos: Todo[];
	// 무엇이 react-thunk 인지 알려주기 여렵기 때문에 Function 타입을 명시해 준다.
	fetchTodos: Function;
	deleteTodo: typeof deleteTodo;
}

interface AppSate {
	fetching: boolean;
}

export class _App extends React.Component<AppProps, AppSate> {
	constructor(props: AppProps) {
		super(props);

		this.state = { fetching: false }
	}

	componentDidUpdate(prevProps: AppProps): void {
		if (!prevProps.todos.length && this.props.todos.length) {
			this.setState({ fetching: false })
		} 
	}

	onButtonClick = (): void => {
		this.props.fetchTodos();
		this.setState({ fetching: true })
	}

	onTodoClick = (id: number): void => {
		this.props.deleteTodo(id);
	}

	renderList(): JSX.Element[] {
		return this.props.todos.map((todo: Todo) => {
			return <div key={todo.id} onClick={() => this.onTodoClick(todo.id)}>{todo.title}</div>
		})
	}

	render() {
		return(
			<div>
				<button onClick={this.onButtonClick}>Fetch</button>
				{this.state.fetching ? 'LOADING' : null}
				{this.renderList()}
			</div>
		) 
	}
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
	return { todos };
}

export const App = connect(
	mapStateToProps,
	{ fetchTodos, deleteTodo }
)(_App)
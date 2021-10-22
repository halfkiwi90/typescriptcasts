import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { App } from './components/App'
import { reducers } from "./reducers";

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.querySelector('#root')
)

// interface AppProps {
// 	color?: string;
// }

// interface AppState {
// 	counter: number;
// }

// // 함수형 작성 방법
// // const App = (props: AppProps): JSX.Element => {
// // 	return<div>{props.color}</div>
// // }

// class App extends React.Component<AppProps, AppState> {
// 	// constructor(props: AppProps) {
// 	// 	super(props)
// 	// 	this.state = { counter: 0 };
// 	// }
// 	// 위 코드는 counter가 정의 되지 않는 반면 밑은 conter가 정의된다
// 	// 그 이유는 밑은 새로의 state를 새로 정의 했기 때문이다. (overwrite)
// 	// state = { counter: 0 }
	
// 	// 생성자함수를 사용하기 위해서는 state generic 을 추가해 줘야한다.
// 	// 아니면 미리 overwrite 해서 사용해도 된다.
// 	constructor(props: AppProps) {
// 		super(props);
// 		this.state = { counter: 0 }
// 	}

// 	onIncrement = (): void => {
// 		this.setState({ counter: this.state.counter + 1})
// 	}

// 	onDecrement = (): void => {
// 		this.setState({ counter: this.state.counter - 1})
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<button onClick={this.onIncrement}>Incre</button>
// 				<button onClick={this.onDecrement}>Decre</button>
// 				{this.state.counter}
// 			</div>
// 		)
// 	}
// }


// ReactDOM.render(
// 	<App color="red"/>,
// 	document.querySelector("#root")
// )
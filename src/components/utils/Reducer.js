import React, { useReducer } from "react";

const Reducer = () => {
	const [state, dispatch] = useReducer(
		(state, action) => {
			switch (action.type) {
				case "incr":
					return {
						...state,
						count: state.count + action.payload,
						clicks: state.clicks + action.payload,
					};
				case "decr":
					return { ...state, count: state.count - 1, clicks: state.clicks - 1 };
				case "changeName":
					return { ...state, user: "andrzej" };
				default:
					return state;
			}
		},
		{ user: "Steeve", count: 0, clicks: 0 }
	);
	return (
		<div className='container'>
			<div>current : {state.user}</div>
			<div>current : {state.clicks}</div>
			<div>current : {state.count}</div>
			<button onClick={() => dispatch({ type: "incr", payload: 1 })}>
				{" "}
				incr smth
			</button>
			<button onClick={() => dispatch("decr")}> decr smth</button>
			<button onClick={() => dispatch("changeName")}> chenage</button>
		</div>
	);
};

export default Reducer;

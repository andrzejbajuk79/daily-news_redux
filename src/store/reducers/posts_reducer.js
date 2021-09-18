import { GET_POSTS } from "../types";

export default function postReducer(state = {}, { type, payload }) {
	switch (type) {
		case GET_POSTS:
			return { ...state, ...payload };
		default:
			return state;
	}
}

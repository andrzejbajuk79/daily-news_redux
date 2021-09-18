import { CLEAR_POST_BY_ID, GET_POSTS, GET_POST_BY_ID } from "../types";

export default function postReducer(state = {}, { type, payload }) {
	switch (type) {
		case GET_POSTS:
			return { ...state, ...payload };
		case GET_POST_BY_ID:
			return { ...state, postById: payload };
		case CLEAR_POST_BY_ID:
			return { ...state, postById: {} };
		default:
			return state;
	}
}

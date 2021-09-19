import * as api from "../../API";
import {
	ADD_NEWSLETTER,
	CLEAR_NEWSLETTER,
	CLEAR_POST_BY_ID,
	GET_POSTS,
	GET_POST_BY_ID,
	SEND_MESSAGE,
} from "../types";
// /////////////////////////////////////////////////////////////
//                    POSTS
// /////////////////////////////////////////////////////////////

export const getPosts = (homePosts, page, order, limit) => ({
	type: GET_POSTS,
	payload: api.getPosts(homePosts, page, order, limit),
});

export const getPostById = (id) => {
	return {
		type: GET_POST_BY_ID, //
		payload: api.getPostById(id),
	};
};
export const clearPostById = (id) => {
	return {
		type: CLEAR_POST_BY_ID, //
		payload: {},
	};
};
export const sendMessage = (data) => {
	return {
		type: SEND_MESSAGE, //
		payload: api.sendMessage(data),
	};
};

// /////////////////////////////////////////////////////////////
//                    USER
// /////////////////////////////////////////////////////////////
export const addNewsLetter = (data) => ({
	type: ADD_NEWSLETTER,
	payload: api.addNewsLetter(data),
});

export const clearNewsletter = () => ({
	type: CLEAR_NEWSLETTER,
	payload: {},
});

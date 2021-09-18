import * as api from "../../API";
import { ADD_NEWSLETTER, GET_POSTS } from "../types";
// /////////////////////////////////////////////////////////////
//                    POSTS
// /////////////////////////////////////////////////////////////

export const getPosts = (homePosts, page, order, limit) => ({
	type: GET_POSTS,
	payload: api.getPosts(homePosts, page, order, limit),
});

// /////////////////////////////////////////////////////////////
//                    USER
// /////////////////////////////////////////////////////////////
export const addNewsLetter = (data) => ({
	type: ADD_NEWSLETTER,
	payload: api.addNewsLetter(data),
});

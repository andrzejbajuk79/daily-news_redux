import axios from "axios";

const URL_SERV = "http://localhost:3004";

export const getPosts = async (
	prevState,
	page = 1,
	order = "desc",
	limit = 6
) => {
	try {
		console.log(page, "strona");
		// http://localhost:3004/posts
		// ?page=1&_limit=3&_order=desc&_sort=id

		const response = await axios.get(
			`${URL_SERV}/posts?_page=${page}
		  &_limit=${limit}&_order=${order}&_sort=id`
		);

		return {
			posts: prevState.posts
				? [...prevState.posts, ...response.data]
				: response.data,
			page: page,
			end: response.data.length === 0 ? true : false,
		};
	} catch (err) {
		throw err;
	}
};

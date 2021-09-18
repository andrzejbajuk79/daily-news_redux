import React from "react";
import { useSelector, useDispatch } from "react-redux";

const HomePosts = () => {
	const homePosts = useSelector((state) => state.posts);

	return <div>homeposts</div>;
};

export default HomePosts;

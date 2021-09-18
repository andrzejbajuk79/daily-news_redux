import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../store/actions";
import { Spinner, Button } from "react-bootstrap";

const HomePosts = () => {
	const homePosts = useSelector((state) => state.posts);
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		dispatch(getPosts({}, 1, "desc", 6)); //page=1&_limit=3&_order=desc&_sort=id
	}, [dispatch]);
	const loadMore = () => {
		const page = homePosts.page + 1;
		setLoading(true);
		dispatch(getPosts(homePosts, page, "desc", 6)).then(() => {
			setLoading(false);
		});
	};

	return (
		<>
			{loading ? (
				<div style={{ textAlign: "center" }}>
					<Spinner animation='border' role='status'>
						<span className='visually-hidden'>Loading...</span>
					</Spinner>
				</div>
			) : null}
			{!homePosts.end && !loading ? (
				<Button variant='outline-dark' onClick={() => loadMore()}>
					Load more posts
				</Button>
			) : null}
		</>
	);
};

export default HomePosts;

import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import Moment from "react-moment";
import { LinkContainer } from "react-router-bootstrap";
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
			<Masonry
				breakpointCols={{ default: 3, 800: 2, 400: 1 }}
				className='my-masonry-grid'
				columnClassName='my-masonry-grid_column'
			>
				{homePosts.posts
					? homePosts.posts.map((item) => (
							<div key={item.id}>
								<img
									style={{ width: "100%", height: "200px" }}
									src={item.image}
								/>
								<div className='author'>
									<span>{item.author} - </span>
									<Moment format='DD MMMM'>{item.createdAt}</Moment>
								</div>
								<div className='content'>
									<div className='title'>{item.title}</div>
									<div className='excerpt'>{item.excerpt}</div>
									<LinkContainer to={`/article/${item.id}`} className='mt-3'>
										<Button onClick={() => {}} variant='light'>
											Read more
										</Button>
									</LinkContainer>
								</div>
							</div>
					  ))
					: null}
			</Masonry>
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

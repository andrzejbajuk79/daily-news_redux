import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { addNewsLetter, clearNewsletter } from "../../store/actions";
import { showToast } from "./Toast";

const NewsLetter = () => {
	const userData = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const textInput = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();
		const value = textInput.current.value;
		console.log(value);
		dispatch(addNewsLetter({ email: value }));
	};

	useEffect(() => {
		//failed / added
		if (userData.newsletter) {
			if (userData.newsletter === "added") {
				showToast("SUCCESS", "Dziekuje za subskrypcje");
				textInput.current.value = "";
				// dispatch(clearNewsLetter());
			}
			if (userData.newsletter === "failed") {
				showToast("ERROR", "Jestes juz w bazoe danych");
				textInput.current.value = "";
				// dispatch(clearNewsLetter());
			}
		}
	}, [userData]);
	useEffect(() => {
		return () => {
			dispatch(clearNewsletter());
		};
	}, [dispatch]);
	return (
		<>
			<div className='newsletter_container'>
				<h1> join newsletter</h1>
				<div className='form'>
					<Form onSubmit={handleSubmit} className='mt-4'>
						<Form.Group>
							<Form.Control
								type='text'
								placeholder='example :  youremail@gmail.com'
								ref={textInput}
							/>
							<br />
							<Button type='submit' variant='primary'>
								Add me to newsletter
							</Button>
						</Form.Group>
					</Form>
				</div>
			</div>
		</>
	);
};

export default NewsLetter;

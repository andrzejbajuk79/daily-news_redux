import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { addNewsLetter } from "../../store/actions";

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

	return (
		<>
			<div className='newsletter_container'>
				<h1> join newsletter</h1>
				<div className='form'>
					<Form onSubmit={handleSubmit} className='mt-4'>
						<Form.Group>
							<Form.Control
								type='text'
								placeholder='ezample :  youremail@gmail.com'
								ref={textInput}
							/>
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

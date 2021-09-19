import React from "react";
import { showToast } from "../utils/Toast";
import { useFormik } from "formik";
import { Alert } from "react-bootstrap";
import { initialValues } from "./InitialValues";
import { validationSchema } from "./ValidationSchema";
import { useDispatch } from "react-redux";
import { sendMessage } from "../../store/actions";
// import { DefaultTextInput } from "./inputs/DefaultTextInput";

const Contacts = () => {
	const formik = useFormik({
		initialValues: initialValues,
		validationSchema: validationSchema,
		onSubmit: (values, { resetForm }) => {
			dispatch(sendMessage(values)).then(({ payload }) => {
				if (payload) {
					resetForm();
					showToast("SUCCESS", "dziekujemy za subskrypcje");
				} else {
					showToast("SUCCESS", "cos poiszlo nie tak");
				}
			});
		},
	});
	const dispatch = useDispatch();

	return (
		<>
			<h1>contact us</h1>
			<form className='mt-3' onSubmit={formik.handleSubmit}>
				<div className='form-group'>
					{/* <DefaultTextInput
							name={"email"} //
							error={formik.errors.email}
							touched={formik.touched.email}
							{...formik.getFieldProps("email")}
						/> */}
					<label htmlFor='email'>Email address</label>
					<input
						type='email'
						className='form-control'
						name='email'
						placeholder='email@example.com'
						{...formik.getFieldProps("email")}
					/>
					{formik.errors.email && formik.touched.email ? (
						<Alert variant='danger'>{formik.errors.email}</Alert>
					) : null}
				</div>
				<div className='form-group'>
					<label htmlFor='name'>First name</label>
					<input
						type='text'
						className='form-control'
						name='firstname'
						placeholder='enter your name'
						{...formik.getFieldProps("firstname")}
					/>
					{formik.errors.firstname && formik.touched.firstname ? (
						<Alert variant='danger'>{formik.errors.firstname}</Alert>
					) : null}
				</div>
				<div className='form-group'>
					<label htmlFor='name'>Last name</label>
					<input
						type='text'
						className='form-control'
						name='lastname'
						placeholder='enter your name'
						{...formik.getFieldProps("lastname")}
					/>
					{formik.errors.lastname && formik.touched.lastname ? (
						<Alert variant='danger'>{formik.errors.lastname}</Alert>
					) : null}
				</div>
				<div className='form-group'>
					<label htmlFor='name'>Message</label>
					<textarea
						className='form-control'
						name='message'
						rows='3'
						{...formik.getFieldProps("message")}
					></textarea>
					{formik.errors.message && formik.touched.message ? (
						<Alert variant='danger'>{formik.errors.message}</Alert>
					) : null}
				</div>
				<button type='submit' className='btn btn-primary mb-2'>
					Send message
				</button>
			</form>
		</>
	);
};

export default Contacts;

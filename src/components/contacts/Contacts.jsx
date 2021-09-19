import React from "react";
import { Formik, useFormik } from "formik";
import { Alert } from "react-bootstrap";
import { initialValues } from "./InitialValues";
import { validationSchema } from "./ValidationSchema";
import * as Yup from "yup";
import { DefaultTextInput } from "./inputs/DefaultTextInput";

const Contacts = () => {
	const formik = useFormik({
		initialValues: initialValues,
		validationSchema: validationSchema,
		onSubmit: (values, { resetForm }) => {
			console.log(values);
		},
	});

	return (
		console.log(formik) || (
			<>
				<h1>contact us</h1>
				<form className='mt-3' onSubmit={formik.handleSubmit}>
					<div className='form-group'>
						{/* <DefaultTextInput
						name={"email"} //
						errors={formik.errors}
						touched={formik.touched}
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
							{...formik.getFieldProps("firstname")}
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
		)
	);
};

export default Contacts;

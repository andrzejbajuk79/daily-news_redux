import React from "react";
import { useFormik } from "formik";
import { youtubeInitialValues } from "./helpers/InitialValues";
import {
	youtubeValidate,
	youtubeValidationSchema,
} from "./helpers/ValidationSchema";

const OldYoutubeForm = () => {
	const formik = useFormik({
		//
		initialValues: youtubeInitialValues,
		onSubmit: (values) => {},
		// validate: youtubeValidate,
		validationSchema: youtubeValidationSchema,
	});

	return (
		<>
			<div className='row'>
				<form onSubmit={formik.handleSubmit}>
					<div className='col-md-6 mb-3'>
						<label htmlFor='name'>Name</label>
						<input
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.name}
							type='text'
							id='name'
							name='name'
						/>
						{formik.errors.name && formik.touched.name ? ( //
							<div className='error'>{formik.errors.name}</div>
						) : null}
					</div>
					<div className='col-md-6 mb-3 '>
						<label htmlFor='email'>Email</label>
						<input
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.email}
							type='text'
							id='email'
							name='email'
						/>
						{formik.errors.email && formik.touched.email ? ( //
							<div className='error'>{formik.errors.email}</div>
						) : null}
					</div>
					<div className='col-md-6 mb-3 '>
						<label htmlFor='channel'>Channel</label>
						<input
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.channel}
							type='text'
							id='channel'
							name='channel'
						/>
						{formik.errors.channel && formik.touched.channel ? ( //
							<div className='error'>{formik.errors.channel}</div>
						) : null}
					</div>
					<button type='submit' className='btn btn-primary btn-lg btn-block'>
						{" "}
						submit
					</button>
				</form>
			</div>
		</>
	);
};

export default OldYoutubeForm;

import React from "react";
import { useFormik } from "formik";
import { youtubeInitialValues } from "./InitialValues";

const YoutubeForm = () => {
	const formik = useFormik({
		//
		initialValues: youtubeInitialValues,
	});
	console.log(formik.values);

	return (
		<>
			<div className='row'>
				<form>
					<div className='col-md-6 mb-3'>
						<label htmlFor='name'>Name</label>
						<input
							onChange={formik.handleChange}
							value={formik.values.name}
							type='text'
							id='name'
							name='name'
						/>
					</div>
					<div className='col-md-6 mb-3'>
						<label htmlFor='email'>Email</label>
						<input
							onChange={formik.handleChange}
							value={formik.values.email}
							type='text'
							id='email'
							name='email'
						/>
					</div>
					<div className='col-md-6 mb-3'>
						<label htmlFor='channel'>Channel</label>
						<input
							onChange={formik.handleChange}
							value={formik.values.channel}
							type='text'
							id='channel'
							name='channel'
						/>
					</div>
					<button className='btn btn-primary btn-lg btn-block'> submit</button>
				</form>
			</div>
		</>
	);
};

export default YoutubeForm;

import React from "react";
import { Formik } from "formik";
import { initialValues1 } from "./helpers/InitialValues";
import * as Yup from "yup";

const FormOne = () => {
	return (
		<Formik
			initialValues={initialValues1}
			validationSchema={Yup.object({
				firstname: Yup.string().required("wymagane").max(5, "tylko 5"),
				lastname: Yup.string().required("wymagane").max(5, "tylko 5"),
				email: Yup.string().required("wymagane").email("niepoprawny"),
			})}
			onSubmit={() => {
				console.log("submitetd");
			}}
		>
			{({
				values,
				errors,
				touched,
				handleBlur,
				handleChange,
				handleSubmit,
			}) => {
				return (
					<>
						<div className='container'>
							<div className='col-md-12 mt-5'>
								<form onSubmit={handleSubmit}>
									<h4 className='mb-3'>Personal information</h4>

									<div className='row'>
										<div className='col-md-6 mb-3'>
											<label htmlFor='firstname'>First name</label>
											<input
												value={values.firstname}
												onChange={handleChange}
												onBlur={handleBlur}
												type='text'
												className='form-control'
												id='firstname'
												name='firstname'
											/>
											{errors.firstname && touched.firstname ? (
												<span>{errors.firstname}</span>
											) : null}
										</div>
										<div className='col-md-6 mb-3'>
											<label htmlFor='lastname'>Last name</label>
											<input
												value={values.lastname}
												onChange={handleChange}
												onBlur={handleBlur}
												type='text'
												className='form-control'
												id='lastname'
												name='lastname'
											/>
											{errors.lastname && touched.lastname ? (
												<span>{errors.lastname}</span>
											) : null}
										</div>
									</div>

									<div className='mb-3'>
										<label htmlFor='email'>Email</label>
										<input
											value={values.email}
											onChange={handleChange}
											onBlur={handleBlur}
											type='email'
											className='form-control'
											id='email'
											name='email'
											placeholder='you@example.com'
										/>
										{errors.email && touched.email ? (
											<span>{errors.email}</span>
										) : null}
									</div>

									<div className='row'>
										<div className='col-md-5 mb-3'>
											<label htmlFor='country'>Country</label>
											<select
												value={values.country}
												onChange={handleChange}
												className='custom-select d-block w-100'
												id='country'
												name='country'
											>
												<option value=''>Choose...</option>
												<option value='US'>United States</option>
												<option value='CA'>Canada</option>
												<option value='NL'>Netherlands</option>
											</select>
										</div>
										<div className='col-md-4 mb-3'>
											<label htmlFor='state'>State</label>
											<select
												value={values.state}
												onChange={handleChange}
												className='custom-select d-block w-100'
												id='state'
												name='state'
											>
												<option value=''>Choose...</option>
												<option value='california'>California</option>
												<option value='toronto'>Toronto</option>
												<option value='utrech'>Utrech</option>
											</select>
										</div>
										<div className='col-md-3 mb-3'>
											<label htmlFor='zip'>Zip</label>
											<input
												value={values.zip}
												onChange={handleChange}
												type='text'
												className='form-control'
												id='zip'
												name='zip'
											/>
										</div>
									</div>

									<hr className='mb-4' />
									<button
										className='btn btn-primary btn-lg btn-block'
										type='submit'
									>
										Submit
									</button>
								</form>
							</div>
						</div>
					</>
				);
			}}
		</Formik>
	);
};

export default FormOne;

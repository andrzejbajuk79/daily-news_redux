import React from "react";
import {
	Formik,
	useFormik,
	Form,
	Field,
	ErrorMessage,
	FieldArray,
} from "formik";
import { youtubeInitialValues } from "./helpers/InitialValues";
import {
	youtubeValidate,
	youtubeValidationSchema,
} from "./helpers/ValidationSchema";
import FieldPattern from "./helpers/FieldPattern";
import TextError from "./helpers/TextError";

const YoutubeForm = () => {
	const onSubmit = (values) => {
		console.log(values);
	};

	return (
		<>
			<Formik
				initialValues={youtubeInitialValues}
				validationSchema={youtubeValidationSchema}
				onSubmit={onSubmit}
			>
				<Form>
					{/* >>>>>>>>>>>>>>>>>>>> NAME <<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
					<div className='form-control'>
						<label htmlFor='name'>Name</label>
						<Field type='text' id='name' name='name' />
						<ErrorMessage name='name' component={TextError} />
					</div>
					{/* >>>>>>>>>>>>>>>>>>>> EMAIL <<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
					<div className='form-control'>
						<label htmlFor='email'>Email</label>
						<Field type='text' id='email' name='email' />
						<ErrorMessage name='email'>
							{(errorMsg) => <div className='error'>{errorMsg}</div>}
						</ErrorMessage>
					</div>
					{/* >>>>>>>>>>>>>>>>>>>> CHANNEL <<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
					<div className='form-control'>
						<label htmlFor='channel'>Channel</label>
						<Field type='text' id='channel' name='channel' />
						<ErrorMessage name='channel' component={TextError} />
					</div>
					{/* >>>>>>>>>>>>>>>>>>>> COMMENTS <<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
					<div className='form-control'>
						<label htmlFor='comments'>Comments</label>
						<Field as='textarea' id='comments' name='comments' />
					</div>
					{/* >>>>>>>>>>>>>>>>>>>> PHONE <<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
					<div className='form-control'>
						<label htmlFor='primaryPh'>Primary Phone No</label>
						<Field type='text' id='primaryPh' name='phoneNumbers[0]' />
					</div>
					<div className='form-control'>
						<label htmlFor='secondaryPh'>Secondary Phone No</label>
						<Field type='text' id='secondaryPh' name='phoneNumbers[1]' />
					</div>
					<div className='form-control'>
						<label htmlFor='secondaryPh'>List of numbers</label>
						<FieldArray name='phNumbers'>
							{(fieldArrayProps) => {
								console.log(fieldArrayProps);
								const { push, remove, form } = fieldArrayProps;
								const { values } = form;
								const { phNumbers } = values;
								return (
									<div>
										{phNumbers.map((phNumber, index) => (
											<div key={index}>
												<Field name={`phNumbers[${index}]`} />
												{index > 0 && (
													<button type='button' onClick={() => remove(index)}>
														-
													</button>
												)}
												<button type='button' onClick={() => push("")}>
													+
												</button>
											</div>
										))}
									</div>
								);
							}}
						</FieldArray>
					</div>

					{/* >>>>>>>>>>>>>>>>>>>> SOCIAL <<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
					<div className='form-control'>
						<label htmlFor='facebook'>Facebook</label>
						<Field type='text' id='facebook' name='social.facebook' />
					</div>
					<div className='form-control'>
						<label htmlFor='twitter'>Twitter</label>
						<Field type='text' id='twitter' name='social.twitter' />
					</div>

					{/* >>>>>>>>>>>>>>>>>>>> CUSTOM FIELD <<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
					<FieldPattern name='address' type='text' label='Address' />
					{/* >>>>>>>>>>>>>>>>>>>> BUTTON <<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
					<button type='submit' className='btn btn-primary '>
						submit
					</button>
				</Form>
			</Formik>
		</>
	);
};

export default YoutubeForm;

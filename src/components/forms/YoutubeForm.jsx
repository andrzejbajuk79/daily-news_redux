import React, { useState, useStatet } from "react";
import {
	Formik,
	useFormik,
	Form,
	Field,
	ErrorMessage,
	FieldArray,
} from "formik";
import {
	youtubeInitialValues,
	youtubesavedlValues,
} from "./helpers/InitialValues";
import {
	youtubeValidate,
	youtubeValidationSchema,
} from "./helpers/ValidationSchema";
import FieldPattern from "./reusable/FieldPattern";
import TextError from "./reusable/TextError";
import FieldArrayComp from "./reusable/FieldArray";

const YoutubeForm = () => {
	const [formValues, setFormValues] = useState(null);
	const onSubmit = (values, onSubmitProps) => {
		// console.log(values);
		// console.log(onSubmitProps);
		onSubmitProps.setSubmitting(false);
		onSubmitProps.resetForm();
	};

	return (
		<>
			<Formik
				initialValues={youtubeInitialValues || youtubesavedlValues}
				validationSchema={youtubeValidationSchema}
				onSubmit={onSubmit}
				// validateOnMount
				enableReinitialize
			>
				{(formik) => {
					console.log("formik props");
					return (
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
							{/* >>>>>>>>>>>>>>>>>>>> COMMENTS <<<<<<<<<<<<<<<<<<<<<<<< */}
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
							{/* >>>>>>>>>>>>>>>>>>>> FIELD ARR COMP PH NO<<<<<<<<<<<<<<<<<<<<< */}
							<FieldArrayComp name='phNumbers' label='List of numbers' />

							{/* >>>>>>>>>>>>>>>>>>>> SOCIAL <<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
							<div className='form-control'>
								<label htmlFor='facebook'>Facebook</label>
								<Field type='text' id='facebook' name='social.facebook' />
							</div>
							<div className='form-control'>
								<label htmlFor='twitter'>Twitter</label>
								<Field type='text' id='twitter' name='social.twitter' />
							</div>

							{/* >>>>>>>>>>>>>>>>>>>> CUSTOM FIELD ADDRESS <<<<<<<<<<<<<<<<<<<<<< */}
							<FieldPattern name='address' type='text' label='Address' />
							{/* >>>>>>>>>>>>>>>>>>>> BUTTON <<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
							<button
								onClick={() => setFormValues(youtubesavedlValues)}
								type='button'
								className='btn btn-primary '
							>
								{" "}
								load save{" "}
							</button>
							<button
								type='submit'
								disabled={
									!(formik.isValid && formik.dirty) || formik.isSubmitting
								}
								className='btn btn-primary '
							>
								submit
							</button>
						</Form>
					);
				}}
			</Formik>
		</>
	);
};

export default YoutubeForm;

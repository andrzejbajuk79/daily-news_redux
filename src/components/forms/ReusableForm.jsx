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
	initialReusFormValues,
	options,
	radioOptions,
} from "./helpers/InitialValues";
import { reusFormValidate } from "./helpers/ValidationSchema";
import FormikControls from "./helpers/FormikControls";

const ReusableForm = () => {
	const onSubmit = (values) => console.log("values", values);
	return (
		<Formik
			initialValues={initialReusFormValues}
			validationSchema={reusFormValidate}
			onSubmit={onSubmit}
		>
			{(formik) => (
				<Form>
					<FormikControls
						control='input'
						type='email'
						label='Email'
						name='email'
					/>

					<FormikControls
						control='textarea' //
						name='comments'
						label='Comments'
					/>
					<FormikControls
						control='select' //
						name='selectOption'
						label='Select a topic'
						options={options}
					/>
					<FormikControls
						control='radio'
						options={radioOptions} //
						name='radioOption'
						label='radio topic'
					/>
					<submit type='submit'>submit</submit>
				</Form>
			)}
		</Formik>
	);
};

export default ReusableForm;

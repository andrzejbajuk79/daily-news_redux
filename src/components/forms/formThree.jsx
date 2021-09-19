import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormThree = () => {
	const formikProps = {
		initialValues: { firstname: "", color: "" },
		validationSchema: Yup.object({
			firstname: Yup.string().required("wymagane"),
			lastname: Yup.string().required("wymagane"),
		}),
		onSubmit: (values) => {
			console.log(values);
		},
	};
	const lastnameCustomField = ({
		field, //name,value,onchange,onblur
		form: { touched, errors },
		...props
	}) => (
		<>
			<label>lastname</label>
			<input {...field} type='text' className='form-control' />
			{errors[field.name] && touched[field.name] ? (
				<span>{errors[field.name]}</span>
			) : null}
		</>
	);
	return (
		<Formik {...formikProps}>
			<div className='container'>
				<div className='col-md-12 mt-5'>
					<Form>
						<label htmlFor='firstname'>First name</label>
						<Field name='firstname' type='text' className='form-control' />
						<ErrorMessage name='firstname' />

						<hr className='mb-4' />
						<Field as='select' name='color' className='custom-select'>
							<option value='red'>red</option>
							<option value='green'>green</option>
							<option value='blue'>blue</option>
						</Field>
						<hr className='mb-4' />
						<Field
							component={lastnameCustomField} //
							name='lastname'
							placeholder='lastname'
						/>
						<hr className='mb-4' />
						<button className='btn btn-primary btn-lg btn-block' type='submit'>
							Submit
						</button>
					</Form>
				</div>
			</div>
		</Formik>
	);
};

export default FormThree;

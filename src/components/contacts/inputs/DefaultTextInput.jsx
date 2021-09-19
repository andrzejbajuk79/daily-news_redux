import React from "react";
import { Formik, useFormik } from "formik";
import { ErrorMessage, Field } from "formik";
import { Alert } from "react-bootstrap";

export const DefaultTextInput = ({ ...props }) => {
	const { name } = props;
	console.log(name);
	console.log(props.errors.email);
	console.log(props.errors[name]);
	return (
		<>
			<label className={"label"} htmlFor={props.name}>
				{props.name}
			</label>
			<input
				className='form-control'
				type={"text"}
				id={props.name}
				name={props.name}
				placeholder={`Type your ${props.name}`}
			/>
			{props.errors[name] && props.touched[name] ? (
				<Alert variant='danger'>{props.errors[name]}</Alert>
			) : null}
		</>
	);
};

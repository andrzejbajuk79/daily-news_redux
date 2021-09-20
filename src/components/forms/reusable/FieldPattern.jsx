import { Field } from "formik";
import React from "react";

const FieldPattern = ({ name, type, label }) => {
	return (
		<div className='form-control'>
			<label htmlFor={name}>{label}</label>
			<Field name={name}>
				{(props) => {
					const { field, form, meta } = props;
					// console.log("props", props);
					return (
						<div>
							{" "}
							<input type={type} id={name} {...field} />
							{meta.touched && meta.error ? <div>{meta.error}</div> : null}
						</div>
					);
				}}
			</Field>
		</div>
	);
};

export default FieldPattern;

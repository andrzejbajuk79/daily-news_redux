import React from "react";

import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

const Radio = (props) => {
	const { label, name, options, ...rest } = props;
	return (
		<div className='form-control'>
			<label>{label}</label>
			<Field name={name} {...rest}>
				{({ field }) =>
					console.log(field) ||
					options.map((option) => (
						<React.Fragment key={option.key}>
							<input
								type='radio'
								id={option.value}
								{...field}
								value={option.value}
								checked={field.value === option.value}
							/>
							<label htmlFor={option.value}>{option.key}</label>
						</React.Fragment>
					))
				}
			</Field>
			<ErrorMessage name={name} component={TextError} />
		</div>
	);
};

export default Radio;

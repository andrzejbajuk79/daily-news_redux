import { Field, FieldArray } from "formik";
import React from "react";

const FieldArrayComp = ({ name, label }) => {
	return (
		<div className='form-control'>
			<label htmlFor={name}>{label}</label>
			<FieldArray name={name}>
				{(fieldArrayProps) => {
					console.log(fieldArrayProps);
					const { push, remove, form } = fieldArrayProps;
					const { values } = form;
					const { phNumbers } = values;
					console.log("errors", form.errors);
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
	);
};

export default FieldArrayComp;

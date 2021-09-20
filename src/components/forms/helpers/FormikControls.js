import React from "react";
import Input from "../reusable/Input";
import Radio from "../reusable/Radio";
import Select from "../reusable/Select";
import TextArea from "../reusable/TextArea";

const FormikControls = (props) => {
	console.log(props);
	const { control, ...rest } = props;
	switch (control) {
		case "input":
			return <Input {...rest} />;
		case "textarea":
			return <TextArea {...rest} />;
		case "select":
			return <Select {...rest} />;
		case "radio":
			return <Radio {...rest} />;
		case "date":
		case "checkbox":
		default:
			return null;
	}
};

export default FormikControls;

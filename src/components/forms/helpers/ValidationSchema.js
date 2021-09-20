import * as Yup from "yup";

export const validationSchema = Yup.object({
	email: Yup.string()
		.required("Sorry the email is required")
		.email("This is not a valid email"),
	firstname: Yup.string().required("Sorry the name is required"),
	lastname: Yup.string().required("Sorry the lastname is required"),
	message: Yup.string()
		.required("Sorry yo to say samething")
		.max(500, "Sorry the message is too long"),
});

export const youtubeValidationSchema = Yup.object({
	email: Yup.string()
		.required("Email is required")
		.email("This is not a valid email"),
	// name: Yup.string().required("Name is required"),
	// channel: Yup.string().required("Channel is required"),
});

export const youtubeValidate = (values) => {
	let errors = {};
	if (!values.name) {
		errors.name = "Pole Wymagane";
	}
	if (!values.email) {
		errors.email = "Pole Wymagane";
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = "Invalid email address";
	}
	if (!values.channel) {
		errors.channel = "Pole Wymagane";
	}
	// console.log("bledy", errors);
	return errors;
};
export const reusFormValidate = Yup.object({
	email: Yup.string()
		.required("Sorry the email is required")
		.email("This is not a valid email"),
	comments: Yup.string()
		.required("Sorry yo to say samething")
		.max(500, "Sorry the message is too long"),
	selectOption: Yup.string().required("Sorry you have to choose"),
	radioOption: Yup.string().required("Sorry you have to choose"),
});

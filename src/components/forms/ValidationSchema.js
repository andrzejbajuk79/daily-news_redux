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

import * as yup from 'yup';

export const signUpSchema = yup.object().shape({
	name: yup
		.string()
		.required('You need to supply name')
		.matches(
			/^[a-z\u0400-\u04FF]{1,10}$/i,
            'First name should be all alphabetic characters.'
		),
		

	surname: yup
		.string()
		.required('You need to supply surname')
		.matches(
			/^[a-z\u0400-\u04FF]{1,10}$/i,
			'Surname should be all alphabetic characters.'
		),

	email: yup
		.string()
		.max(50)
		.email('Email is invalid')
		.required('You need to supply email.'),

	birthday: yup
		.date()
		.max(new Date())
		.required('You need to supply birthday'),

	username: yup
		.string()
		.required('You need to supply username')
		.matches(
			/^([a-z]+[._0-9A-Za-z]*)$/g,
			'User name should start from small letter, and contains letters, digits, . or _',
		),

	password: yup
		.string()
		.required('You need to supply the password')
		.max(30),

	confirmPassword: yup
		.string()
		.required('You need to confirm the password')
		.oneOf([yup.ref('password'), null], 'Confirm password does not match'),
});

export const loginSchema = yup.object().shape({
	login: yup.string().required(),
	password: yup.string().required(),
});

export const searchSchema = yup.object().shape({
	search: yup
		.string()
		.min(3, 'Should be must than 3 letter'),
});

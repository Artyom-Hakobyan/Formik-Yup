import React from 'react';
import { Formik, Form } from "formik"
import Text from './Text';
import * as Yup from 'yup'

const SignUp = () => {
    const validate = Yup.object({
        firstName: Yup.string()
            .max(20, "Maximum Limit: 20 characters")
            .required("Required"),
        lastName: Yup.string()
            .max(30, "Maximum Limit: 30 characters")
            .required("Required"),
        email: Yup.string()
            .email("Invalid Email")
            .required("Email is Required"),
        password: Yup.string()
            .min(5, "The Password must contain at least 5 characters")
            .required("Password is Required"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], "The Password doesnt match")
            .required("The Confirm Password should match with the input password"),
    })

    return (
        <Formik
            initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confirmPassword: "",
            }}
            validationSchema={validate}
        >
            {formik => (
                <div>
                    <h1 className='my-4 font-weight-bold-display-4'>Sign Up</h1>
                    <Form>
                        <Text label="First Name" name="firstName" type="text" />
                        <Text label="Last Name" name="lastName" type="text" />
                        <Text label="Email" name="email" type="email" />
                        <Text label="Password" name="password" type="password" />
                        <Text label="Confirm Password" name="confirmPassword" type="password" />
                        <button className='btn btn-dark mt-3'>Register</button>
                    </Form>
                </div>
            )}
        </Formik>
    );
};

export default SignUp;
import React from "react";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";

export default function SignIn() {
    const history = useHistory();
    return (
        <div>
            <h1>Halaman Masuk</h1>
            <div style={{ textAlign: "center" }}>
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                    }}
                    validate={(values) => {
                        const errors = {};
                        if (values.email === "") {
                            errors.email = "Required";
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                values.email
                            )
                        ) {
                            errors.email = "Invalid e-mail address";
                        } else if (values.password.length < 8) {
                            errors.password = "Minimum password 8 characters";
                        }
                        return errors;
                    }}
                    onSubmit={async (values) => {
                        const url =
                            "https://5e9fab2711b078001679ca71.mockapi.io/user";
                        const response = await fetch(url);
                        const result = await response.json();

                        const existingUser = result.find(
                            (element) => element.email === values.email
                        );

                        if (existingUser === undefined) {
                            alert('User not found');
                            history.push('/signup');
                        } else if (
                            existingUser.password !== values.password ||
                            existingUser.email !== values.email
                        ) {
                            alert('Wrong e-mail or password');
                        } else {
                            alert(
                                `Hello ${existingUser.email}`
                            );
                            history.push("/ShoppingList");
                        }
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => {
                        return (
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        placeholder="email"
                                    />
                                    <span
                                        style={{
                                            color: "red",
                                            fontStyle: "italic",
                                        }}
                                    >
                                        {errors.email &&
                                            touched.email &&
                                            errors.email}
                                    </span>
                                </div>
                                <div>
                                    <input
                                        type="password"
                                        name="password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                        placeholder="password"
                                    />
                                    <span
                                        style={{
                                            color: "red",
                                            fontStyle: "italic",
                                        }}
                                    >
                                        {errors.password &&
                                            touched.password &&
                                            errors.password}
                                    </span>
                                </div>
                                <button type="submit" disabled={isSubmitting}>
                                    Submit
                                </button>
                            </form>
                        );
                    }}
                </Formik>
            </div>
        </div>
    );
}
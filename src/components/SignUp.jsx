import React, { Component } from "react";
import { Formik } from "formik";
import { withRouter } from "react-router-dom";

class SignUp extends Component {
    render() {
        return (
            <div>
                <h1>Sign Up</h1>
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
                                errors.email = "Invalid email address";
                            } else if (values.password.length < 8) {
                                errors.password =
                                    "Minimum password 8 character";
                            }
                            return errors;
                        }}
                        onSubmit={(values) => {
                            const url =
                                "https://5e9fab2711b078001679ca71.mockapi.io/user";
                            const options = {
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify(values),
                                method: "POST",
                            };

                            fetch(url, options)
                                .then((response) => {
                                    return response.json();
                                })
                                .then((result) => {
                                    alert("Register succeed!");
                                    this.props.history.push("/signin");
                                });
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
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                    >
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
}

export default withRouter(SignUp);
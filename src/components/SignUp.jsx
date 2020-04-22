import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { withRouter } from 'react-router-dom';

class SignUp extends React.Component {
    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <h1>Sign Up</h1>
                <Formik
                    initialValues={{
                        fullName: '',
                        username: '',
                        email: '',
                        password: '',
                    }}
                    validate={(values) => {
                        const errors = {};

                        // Validasi untuk nama lengkap
                        // 1. Jika nama lengkap kosong, maka keluarkan "Nama lengkap harus diisi"
                        if (!values.fullName) {
                            errors.fullName = 'Nama lengkap harus diisi';
                        }

                        // Validasi untuk username
                        // 1. Jika username kosong, maka keluarkan "Username harus diisi"
                        if (!values.username) {
                            errors.username = 'Username harus diisi';
                        }

                        // Validasi untuk email
                        // 1. Jika email kosong, maka keluarkan "Email harus diisi"
                        if (!values.email) {
                            errors.email = 'Email harus diisi';
                        }
                        // 2. Kalau email tidak valid, maka keluarkan "Masukkan email yang valid"
                        else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                values.email
                            )
                        ) {
                            errors.email = 'Masukan email yang valid';
                        }

                        // Validasi untuk password
                        if (!values.password) {
                            errors.password = 'Password harus diisi';
                        } else if (values.password.length <= 8) {
                            errors.password =
                                'Password harus terdiri dari minimal 8 karakter';
                        }
                        return errors;
                    }}
                    onSubmit={(values) => {
                        const url =
                            'https://5e9407d7c7393c0016de4cfc.mockapi.io/users';

                        const options = {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(values),
                        };

                        fetch(url, options)
                            .then((response) => response.json())
                            .then((result) => {
                                alert('Registrasi berhasil! Silahkan login!');
                                this.props.history.push('/signin');
                            })
                            .catch((error) => console.log(error));
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <div>
                                <Field
                                    type='text'
                                    name='fullName'
                                    placeholder='Nama Lengkap'
                                />
                                <ErrorMessage name='fullName' component='div' />
                            </div>
                            <div>
                                <Field
                                    type='text'
                                    name='username'
                                    placeholder='Username'
                                />
                                <ErrorMessage name='username' component='div' />
                            </div>
                            <div>
                                <Field
                                    type='email'
                                    name='email'
                                    placeholder='Email'
                                />
                                <ErrorMessage name='email' component='div' />
                            </div>
                            <div>
                                <Field
                                    type='password'
                                    name='password'
                                    placeholder='Password'
                                />
                                <ErrorMessage name='password' component='div' />
                            </div>
                            <button type='submit' disabled={isSubmitting}>
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        );
    }
}

export default withRouter(SignUp);

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useHistory } from 'react-router';

function SignIn() {
    const history = useHistory();

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Sign In</h1>
            <div>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validate={(values) => {
                        const errors = {};

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
                        }

                        return errors;
                    }}
                    onSubmit={(values) => {
                        const url = `${process.env.REACT_APP_MOCKAPI_URL}/users`;

                        fetch(url)
                            .then((response) => response.json())
                            .then((results) => {
                                const loginUser = results.find(
                                    (result) => result.email === values.email
                                );

                                if (loginUser === undefined) {
                                    alert(
                                        'Anda tidak terdaftar, silahkan registrasi dahulu'
                                    );
                                } else if (
                                    loginUser.email !== values.email ||
                                    loginUser.password !== values.password
                                ) {
                                    alert('Email atau password salah');
                                } else {
                                    alert(
                                        'Login berhasil! Selamat datang kembali'
                                    );

                                    localStorage.setItem(
                                        'userLogin',
                                        JSON.stringify(values)
                                    );

                                    localStorage.setItem(
                                        'isLoggin',
                                        JSON.stringify('true')
                                    );

                                    history.push('/shopping-list');
                                }
                            })
                            .catch((error) => console.log(error));
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <div>
                                <Field
                                    type='email'
                                    name='email'
                                    placeholder='email'
                                />
                                <ErrorMessage name='email' component='div' />
                            </div>
                            <div>
                                <Field
                                    type='password'
                                    name='password'
                                    placeholder='password'
                                />
                                <ErrorMessage name='password' component='div' />
                            </div>
                            <button type='submit' disabled={isSubmitting}>
                                Sign In
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default SignIn;

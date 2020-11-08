import React from 'react'
import Container from "@material-ui/core/Container"
import * as Yup from "yup";
import "./Login.css"
import { Formik, Form, ErrorMessage } from "formik"
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import urls from "../../axios/config";


function Login({history}) {
    const [loading, setloading] = React.useState(false)
    const validationSchema = Yup.object({
        username: Yup.string().required('Required'),
        password: Yup.string().required('Required')
    });

    return (
        <div>
                <Container maxWidth="sm" className="loginContainer">
                    <div className="loginContainer__header">head</div>
                    <div className="loginContainer__content">
                        <h2>Welcome to CollegeSpace</h2>
                        <Formik
                            initialValues={{
                                username: '',
                                password: ''
                            }}
                            validationSchema={validationSchema}
                        onSubmit={(values) => {
                            setloading(loading => loading = true);
                            console.log(values);
                                    const data = {
                                        username: values.username,
                                        password: values.password
                                    }
                            axios.post(urls.BASE + '/login/', data).then(res => {
                                localStorage.setItem('token', res.data.data.token);
                                history.push('/home');
                            }).catch(e => console.log(e));
                                
                            }}
                        >
                            {
                                ({ handleChange, handleBlur, handleSubmit, values }) =>
                                    (
                                        <Container maxWidth="xs">
                                            <Form className="login__form" onSubmit={handleSubmit}>
                                                <TextField name="username" type="text" label="Username" value={values.username} onChange={handleChange} onBlur={handleBlur} />
                                                <ErrorMessage name="username" component="div"/>
                                                <TextField name="password" type="password" label="Password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
                                                <ErrorMessage name="password" component="div" />
                                                <Button disabled={loading} variant="outlined" type="submit" style={{ margin: "20px" }}>Login</Button>
                                            </Form>
                                        </Container>
                                    )
                            }
                        </Formik>
                    </div>
                    <div className="loginContainer__foot">{new Date().toISOString()}</div>
                </Container>
        </div>
    )
}

export default Login;

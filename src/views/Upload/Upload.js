import React from 'react'
import { Form, Formik, ErrorMessage } from "formik"
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core'
import * as Yup from "yup"

function Upload() {

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        subject: Yup.string().required('Required'),
        department: Yup.string().required('Required'),
        tag: Yup.array().required('Required')
    })

    // function upload(e) {
        
    // }

    return (
        <div>
            <h1>This is upload</h1>
            <Formik initialValues={{name: '', subject: '', department: '', tag: []}}>
                {
                    ({handleSubmit, handleBlur, handleChange, values}) => (
                        <Form onSubmit={handleSubmit}>
                            <TextField label="Name" onChange={handleChange} onBlur={handleBlur} />
                            <TextField label="Subject" onChange={handleChange} onBlur={handleBlur} />
                            {values.department + ' ceh'}
                            {/* <FormControl>
                                <InputLabel id="demo-simple-select-required-label">Age</InputLabel>
                                <Select label="Dept" value={values.department} onChange={(val) => {
                                    values.department = val;
                                    console.log(val);
                                }}>
                                    <MenuItem value={'10' }>Check1</MenuItem>
                                    <MenuItem value={'12' }>Check1</MenuItem>
                                    <MenuItem value={'20' }>Check1</MenuItem>
                                    <MenuItem value={'14' }>Check1</MenuItem>
                                </Select>
                            </FormControl>
                            <Select label="Dept" value={values.tag} onChange={handleChange}>
                                <MenuItem value={'10' }>Check1</MenuItem>
                                <MenuItem value={'12' }>Check1</MenuItem>
                                <MenuItem value={'20' }>Check1</MenuItem>
                                <MenuItem value={'14' }>Check1</MenuItem>
                            </Select> */}
                            <Button type='submit'></Button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}

export default Upload

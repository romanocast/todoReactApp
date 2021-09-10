import { Formik, Field, Form, FieldProps } from "formik";
import { Button, Grid, TextField, TextFieldProps, Typography } from "@material-ui/core";
import React from "react";
import * as Yup from "yup"
import Todo from "../../model/todo";

interface TodoFormProps {
    todo: Todo
    submitText: string
    submitFunction(todo: Todo):void
    resetFormAfterSubmit: boolean

}

const TodoForm: React.FC<TodoFormProps> = ({
    todo, submitText, submitFunction, resetFormAfterSubmit}) => {
    return(
        //Formink has ast least two properties
        // initalValues and on SUbmit
        <Formik
        enableReinitialize={true}
        initialValues={{title: todo.title}}
        validationSchema={todoValidationSchema}
        onSubmit={(values, {resetForm}) => {
            todo.title = values.title
            submitFunction(todo)
            if (resetFormAfterSubmit) { resetForm() }
        }}
        >
            {
                //Formink want a function wich return the 
                //component to be displayed
                //
                //Formik supplies  lot of properties to our funktion
                //but we are only interrested in 'values' for now
                ({errors, touched}) => {
                    //this usualy is a <form> component
                    //containing some fields and Labels
                    return <Form>
                                <Grid container direction='column' spacing={1}>
                                    <Grid item>
                                        <Field 
                                            name="title"
                                            component={MaterialUiField}
                                            placeholder='Enter a new ToDo'
                                            label=''
                                        />
                                        {errors.title && touched.title
                                            ? (<Typography color='secondary'>{errors.title}</Typography>)
                                            : null
                                        }
                                    </Grid>
                                    <Grid item>
                                        <Button
                                            type='submit'
                                            variant='contained' color='primary' fullWidth
                                        >{submitText}
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Form>
                }
            }
        </Formik>
    )
}

const MaterialUiField: React.FC<FieldProps & TextFieldProps> =
    ({field, form, ...textProps}) => <TextField fullWidth {...field} {...textProps}/>

const todoValidationSchema = Yup.object().shape({
    title: Yup.string().required('A ToDo is requiredd'),
})

export default TodoForm
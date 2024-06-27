import { Formik, Form, Field } from 'formik';
import {useId} from "react"
import css from "./ContactForm.module.css"

const initialValues = { 
    userName:"",
    userPhoneNumber: ""
}

export default function ContactForm() {

    const nameId = useId();
    const phoneId = useId()

    function handleSubmit (values, actions) {
        console.log(values);
        actions.resetForm()
    }
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.contactFormWraper}>
        <label htmlFor={nameId}>Name</label>
      <Field type="text" name="userName" id ={nameId}/>
      <label htmlFor={phoneId}>Number</label>
      <Field type="text" name="userPhoneNumber" id={phoneId}/>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

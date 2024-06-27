import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import {nanoid} from "nanoid"
import css from './ContactForm.module.css';

const initialValues = {
  name: '',
  number: '',
};

const contacFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'too short')
    .max(100, 'too Long')
    .required('Required'),
  number: Yup.string().length(9, 'should be 9 ').required('Required'),
});

export default function ContactForm({ onAdd }) {
  const nameId = useId();
  const phoneId = useId();

  //   const contacFormSchema =Yup.object().shape({
  //   userName:Yup.string().min(5, "too short")
  // })

  function handleSubmit(values, actions) {
    console.log(values);
    onAdd({
      id: nanoid(5),
      ...values,
      
    });
    //  console.log(onChange(values));
    actions.resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contacFormSchema}
    >
      <Form className={css.contactFormWraper}>
        <label className={css.contactFormLabel} htmlFor={nameId}>
          Name
        </label>
        <Field
          className={css.contactFormInput}
          type="text"
          name="name"
          id={nameId}
        />
        <ErrorMessage name="name" component="span" />
        <label className={css.contactFormLabel} htmlFor={phoneId}>
          Number
        </label>
        <Field
          className={css.contactFormInput}
          type="text"
          name="number"
          id={phoneId}
          placeholder="xxx-xx-xx"
        />
        <ErrorMessage name="number" component="span" />
        <button className={css.userFormButton} type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
}

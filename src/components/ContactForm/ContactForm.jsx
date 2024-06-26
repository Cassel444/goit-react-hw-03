import css from "./ContactForm.module.css";
import { nanoid } from "nanoid/non-secure";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";

const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string().max(12, "Too Long!").required("Required"),
});

function ContactForm({ onAdd }) {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const userId = nanoid();

  return (
    <Formik
      initialValues={{
        id: "",
        name: "",
        number: "",
      }}
      validationSchema={ContactFormSchema}
      onSubmit={(values, actions) => {
        onAdd({
          id: userId,
          name: values.name,
          number: values.number,
        });
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor={nameFieldId}>
          Name
        </label>
        <Field className={css.input} type="text" name="name" id={nameFieldId} />
        <ErrorMessage className={css.error} name="name" component="span" />
        <label className={css.label} htmlFor={numberFieldId}>
          Number
        </label>
        <Field
          className={css.input}
          type="tel"
          name="number"
          id={numberFieldId}
        />
        <ErrorMessage className={css.error} name="number" component="span" />
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
export default ContactForm;

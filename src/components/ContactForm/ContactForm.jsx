import css from "./ContactForm.module.css";
import { nanoid } from "nanoid/non-secure";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

function ContactForm({ e, onAdd, initialValues }) {
  const nameFieldId = nanoid();
  const numberFieldId = nanoid();
  const handleSubmit = (values, actions) => {
    e.preventDefault();
    onAdd({
      id: nanoid(),
      name: e.target.elements.name.value,
      number: e.target.elements.number.value,
    });
    actions.resetForm();
  };
  const ContactFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });
  return (
    <Formik initialValues={{ initialValues }} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <label htmlFor={nameFieldId}>Name</label>
        <Field className={css.field} type="text" name="name" id={nameFieldId} />
        <label htmlFor={numberFieldId}>Number</label>
        <Field
          className={css.field}
          type="number"
          name="number"
          id={numberFieldId}
        />
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
export default ContactForm;

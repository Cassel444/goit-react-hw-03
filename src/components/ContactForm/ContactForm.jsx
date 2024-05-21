import css from "./ContactForm.module.css";
import { nanoid } from "nanoid/non-secure";

function ContactForm({ onAdd }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
      id: nanoid(),
      name: e.target.elements.name.value,
      number: e.target.elements.number.value,
    });
    e.target.reset();
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input className={css.field} type="text" name="name" />
      <input className={css.field} type="number" name="number" />
      <button type="submit">Add contact</button>
    </form>
  );
}
export default ContactForm;

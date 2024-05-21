import css from "./Contact.module.css";

import { BsFillTelephoneFill, BsFillPersonFill } from "react-icons/bs";

function Contact({ person: { id, name, number }, onDelete }) {
  return (
    <>
      <div>
        <div className={css.element}>
          <span className={css.icon}>
            <BsFillPersonFill size={30} color="black" />
          </span>
          <p className={css.text}>{name}</p>
        </div>
        <div className={css.element}>
          <span className={css.icon}>
            <BsFillTelephoneFill size={30} color="black" />
          </span>
          <p className={css.text}>{number}</p>
        </div>
      </div>

      <button className={css.btn} onClick={() => onDelete(id)} type="submit">
        Delete
      </button>
    </>
  );
}
export default Contact;

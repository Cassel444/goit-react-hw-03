import css from "./Contact.module.css";

import { BsFillTelephoneFill, BsFillPersonFill } from "react-icons/bs";

function Contact({ person }) {
  return (
    <>
      <div>
        <div className={css.element}>
          <span className={css.icon}>
            <BsFillPersonFill size={30} color="black" />
          </span>
          <p className={css.text}>{person.name}</p>
        </div>
        <div className={css.element}>
          <span className={css.icon}>
            <BsFillTelephoneFill size={30} color="black" />
          </span>
          <p className={css.text}>{person.number}</p>
        </div>
      </div>

      <button className={css.btn} type="submit">
        Delete
      </button>
    </>
  );
}
export default Contact;

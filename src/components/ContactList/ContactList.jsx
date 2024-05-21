import Contact from "../Contact/Contact";

import css from "./ContactList.module.css";

function ContactList({ list }) {
  return (
    <ul className={css.lists}>
      {list.map((item) => {
        return (
          <li className={css.item} key={item.id}>
            <Contact person={item} />
          </li>
        );
      })}
    </ul>
  );
}

export default ContactList;

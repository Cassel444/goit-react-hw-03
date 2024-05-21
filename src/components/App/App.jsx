import css from "./App.module.css";
import informList from "../../informList.json";
import { useState, useEffect } from "react";

import ContactForm from "../ContactForm/ContactForm";
// import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";

const userInformation = () => {
  const userList = localStorage.getItem("user-data");
  return userList ? JSON.parse(userList) : informList;
};

function App() {
  const [user, setUser] = useState(informList);
  const [filter, setFilter] = useState('')

  const addContact = (newUser) => {
    setUser((prevUser) => {
      return [...prevUser, newUser];
    });
  };
  const deleteUser = (userId) => {
    setUser((prevUser) => {
      return prevUser.filter((user) => user.id !== userId);
    });
  };
  useEffect(() => {
    localStorage.setItem("user-data", JSON.stringify(user));
  }, [user]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      {/* <SearchBox /> */}
      <ContactList list={user} onDelete={deleteUser} />
    </div>
  );
}
export default App;

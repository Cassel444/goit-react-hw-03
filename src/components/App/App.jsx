import css from "./App.module.css";
import informList from "../../informList.json";
import { useState, useEffect } from "react";

import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";

const userInformation = () => {
  const userList = localStorage.getItem("user-data");
  return userList ? JSON.parse(userList) : informList;
};

function App() {
  const [users, setUser] = useState(userInformation);
  const [filter, setFilter] = useState("");

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

  const visibleUser = users.filter((user) =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    localStorage.setItem("user-data", JSON.stringify(users));
  }, [users]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList list={visibleUser} onDelete={deleteUser} />
    </div>
  );
}
export default App;

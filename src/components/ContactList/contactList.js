import React from "react";
import PropTypes from "prop-types";
import styles from "./contactList.module.css";

const ContactList = ({ contacts, onRemoveContact }) => (
  <ul className={styles.phoneList}>
    {contacts.map((contact) => (
      <li className = {styles.phoneList_item}key={contact.id}>
        {contact.name + " : " + contact.number}
        {
          <button
            className={styles.phoneList_button}
            type="button"
            name="delete"
            onClick={() => onRemoveContact(contact.id)}
          >
            delete
          </button>
        }
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  onRemoveContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
  })),
}

export default ContactList;
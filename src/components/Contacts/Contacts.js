import React from "react";
import PropTypes from "prop-types";
import styles from "./Contacts.module.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default function Contacts(props) {
  return (
    <div>
      
      <TransitionGroup component="ul" className={styles.list}>
        {props.contact.map((contact) => (
          <CSSTransition classNames="slide" timeout={250} key={contact.id}>
            <li className={styles.list_el}>
              <p className={styles.text}>{contact.text}</p>
              <p className={styles.text}>{contact.number}</p>
              <button
                onClick={() => props.deleteContact(contact.id)}
                className={styles.button}
              >
                Delete
              </button>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}
Contacts.propTypes = {
  contact: PropTypes.array,
  deleteContact: PropTypes.func,
};

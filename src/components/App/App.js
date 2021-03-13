import { v4 } from "uuid";
import styles from "./App.module.css";
import Contacts from "../Contacts/Contacts";
import React, { Component } from "react";
import ContactsCreator from "../ContactsCreator/ContactsCreator";
import Filter from "../Filter/Filter";
import { CSSTransition } from "react-transition-group";

export default class App extends Component {
  state = {
    contacts: [],
    filter: "",
    showAlert: false,
  };

  notify = () => {
    this.setState({ showAlert: true });
    setTimeout(() => this.setState({ showAlert: false }), 2000);
  };

  addContact = (text, number) => {
    if (this.state.contacts.some((e) => e.text === text) === true) {
      return this.notify();
    }
    const contact = {
      id: v4(),
      text: text,
      number: number,
    };
    this.setState((prevState) => {
      return {
        contacts: [...prevState.contacts, contact],
      };
    });
  };

  handleFilter = (e) => {
    this.setState({
      filter: e.target.value,
    });
  };

  deleteContact = (id) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter((contact) => {
          if (contact.id === id) {
            return false;
          } else {
            return true;
          }
        }),
      };
    });
  };

  render() {
    const filteredContacts = this.state.contacts.filter((contact) =>
      contact.text.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    return (
      <div>
        <CSSTransition
          unmountOnExit
          in={this.state.showAlert === true}
          classNames="slide"
          timeout={250}
        >
          <div className={styles.notify}>
            <p className={styles.text}>This contact is already on the page!</p>
          </div>
        </CSSTransition>
        <CSSTransition classNames="fade" in={true} appear timeout={500}>
          <h1>Phonebook</h1>
        </CSSTransition>

        <ContactsCreator addContact={this.addContact} />
        <Filter Filter={this.handleFilter} />
        <h2 className={styles.text}>Contacts</h2>
        <CSSTransition
          in={this.state.contacts.length > 0}
          classNames="fade"
          timeout={500}
          unmountOnExit
        >
          <Contacts
            contact={filteredContacts}
            deleteContact={this.deleteContact}
          />
        </CSSTransition>
      </div>
    );
  }
}

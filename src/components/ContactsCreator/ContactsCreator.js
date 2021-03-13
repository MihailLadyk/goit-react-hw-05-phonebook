import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./ContactsCreator.module.css";
import { CSSTransition } from "react-transition-group";

export default class ContactsCreator extends Component {
  state = {
    text: "",
    number: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.addContact(this.state.text, this.state.number);
  };

  textChange = (e) => {
    this.setState({ text: e.target.value });
  };

  numberChange = (e) => {
    this.setState({ number: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="input"
          onChange={this.textChange}
          placeholder="Name"
          className={styles.form__field}
        />

        <input
          type="number"
          placeholder="Number"
          onChange={this.numberChange}
          className={styles.form__field}
        />

        <CSSTransition classNames="fade" in={true} appear timeout={250}>
          <button className={styles.button}>Add contact</button>
        </CSSTransition>
      </form>
    );
  }
  static propTypes = {
    addContact: PropTypes.func,
  };
}

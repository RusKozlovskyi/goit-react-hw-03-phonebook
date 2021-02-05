import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./contactForm.module.css";

export default class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onAddContact({ ...this.state });
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <form className={styles.formEditor} onSubmit={this.handleSubmit}>
        <label className={styles.formEditor_label}>
          Name
          <input
            className={styles.formEditor_input}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label className={styles.formEditor_label}>
          Number
          <input
            className={styles.formEditor_input}
            type="text"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>
        <button className={styles.formEditor_button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
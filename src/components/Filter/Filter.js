import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from './Filter.module.css'

export default class Filter extends Component {
  render() {
    return (
      <div>
        <input placeholder="Filter" type="input" onChange={this.props.Filter} className={styles.form__field}/>
      </div>
    );
  }
  static propTypes = {
    Filter: PropTypes.func,
  };
}

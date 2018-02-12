import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classes from './Person.css';
import withClass from '../../hoc/withClass'

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[Person.js] inside constructor', props);
  }

  componentWillMount() {
    console.log('[Person.js] component will mount');
  }

  componentDidMount() {
    console.log('[Person.js] component did mount');
    if (this.props.position === 0) {
      this.inputElement.focus();
    }
  }

  render() {
    console.log('[Person.js] render');

    return (
      <div>
        <p onClick={this.props.click}>{this.props.name} is {this.props.age} years old.</p>
        <p>{this.props.children}</p>
        <input
          ref={(input) => this.inputElement = input }
          type="text"
          onChange={this.props.changed}
          value={this.props.name} />
      </div>
    )
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  change: PropTypes.func,
}

export default withClass(Person, classes.Person);

import React, { Component } from 'react';
import '../../App.css';
import Navigation from '../../components/Navigation';

class Contact extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <h1 className="App-title">Contact</h1>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Contact;

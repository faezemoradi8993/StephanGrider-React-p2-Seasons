import React, { Component } from 'react';
import './App.css';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
class App extends Component {
  state = { lat: null, errorMessage: '' };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(position => this.setState({ lat: position.coords.latitude }), err => this.setState({ errorMessage: err.message }));
  }
  renderContent() {
    if (this.state.lat && !this.state.errorMessage) {
      return (
        <div>

          <SeasonDisplay lat={this.state.lat} />
        </div>
      );
    }
    if (!this.state.lat && this.state.errorMessage) {
      return (
        <div>
          <h1>{this.state.errorMessage}</h1>

        </div>
      );
    }
    if (!this.state.lat && !this.state.errorMessage) {
      return (

        <Spinner message="Please Accept The Request !" />

      );
    }
  }

  render() {
    return (
      <div >
        {this.renderContent()}
      </div>
    );
  }

}

export default App;



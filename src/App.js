import React, { Component } from 'react';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes

import './App.css';
import MainForm from './MainForm/MainForm';
import MainSummary from './MainSummary/MainSummary';
import NavBar from './NavBar/NavBar';
// This object will allow us to
// easily convert numbers into US dollar values

class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    return (
      <div className="App">
          <NavBar/>
        <main>
          <MainForm 
            features={this.props.features} 
            selected={this.state.selected}
            handleFeatureChange={(feature, newValue) => this.updateFeature(feature,newValue)}/>
          <MainSummary selected={this.state.selected}/>
        </main>
      </div>
    );
  }
}

export default App;
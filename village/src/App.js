import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import { Switch, Route, Link } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };

    this.addSmurf = this.addSmurf.bind(this);
  }

  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => this.setState({
        ...this.state,
        smurfs: res.data
      }))
      .catch(err => {
        console.log(err);
        this.setState({
          ...this.state,
          smurfs: []
        })
      });
  }

  addSmurf(smurf) {
    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(res => this.setState({
        ...this.state,
        smurfs: res.data
      }))
      .catch(err => {
        console.log(err);
      });
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <Link to="/">Home</Link>
        <Link to="/smurf-form">New smurf</Link>
        <Switch>
          <Route path="/" exact render={(props) => <Smurfs smurfs={this.state.smurfs} />}/>
          <Route path="/smurf-form" exact render={(props) => <SmurfForm addSmurf={this.addSmurf} />}/>
        </Switch>
      </div>
    );
  }
}

export default App;

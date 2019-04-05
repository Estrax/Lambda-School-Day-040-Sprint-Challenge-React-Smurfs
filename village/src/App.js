import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf';
import { Switch, Route, withRouter } from 'react-router-dom';
import Navbar from './components/Navbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      currentSmurf: undefined,
      show: false
    };

    this.addSmurf = this.addSmurf.bind(this);
    this.updateSmurf = this.updateSmurf.bind(this);
    this.deleteSmurf = this.deleteSmurf.bind(this);
    this.clickOnSmurf = this.clickOnSmurf.bind(this);
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

  updateSmurf(smurf) {
    axios
      .put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
      .then(res => this.setState({
        ...this.state,
        smurfs: res.data
      }))
      .catch(err => {
        console.log(err);
      });
  }

  deleteSmurf(id) {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => this.setState({
        ...this.state,
        smurfs: res.data
      }))
      .catch(err => {
        console.log(err);
      });
  }

  clickOnSmurf(smurf) {
    this.setState({
      ...this.state,
      currentSmurf: smurf,
      show: true
    });
    this.props.history.push('/')
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact render={(props) => <Smurfs smurfs={this.state.smurfs} clickOnSmurf={this.clickOnSmurf} />}/>
          <Route path="/smurf-form" exact render={(props) => <SmurfForm smurf={{name: '', age: '', height: ''}} edit={false} submitForm={this.addSmurf} />}/>
          <Route path="/smurf/:id" exact render={(props) => <Smurf 
            name={this.state.currentSmurf.name}
            id={this.state.currentSmurf.id}
            age={this.state.currentSmurf.age}
            height={this.state.currentSmurf.height}
            key={this.state.currentSmurf.id}
            deleteSmurf={this.deleteSmurf}
            updateSmurf={this.updateSmurf}
            show={this.state.show}
          />}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);

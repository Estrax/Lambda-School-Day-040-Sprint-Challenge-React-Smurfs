import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.smurf.name || '',
      age: this.props.smurf.age || '',
      height: this.props.smurf.height || ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    if(this.props.edit){
      this.props.submitForm({
        id: this.props.smurf.id,
        name: this.state.name,
        age: this.state.age,
        height: this.state.height
      });
    }else{
      this.props.submitForm({
        name: this.state.name,
        age: this.state.age,
        height: this.state.height
      });
    }

    this.setState({
      name: '',
      age: '',
      height: ''
    });

    this.props.history.push('/');
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">{!this.props.edit ? "Add to the village" : "Update smurf"}</button>
        </form>
      </div>
    );
  }
}

export default withRouter(SmurfForm);

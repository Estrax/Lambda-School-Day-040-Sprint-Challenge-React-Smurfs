import React from 'react';
import { withRouter } from 'react-router-dom';

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick={() => {
        props.deleteSmurf(props.id);
        props.history.push('/');
      }}>Delete</button>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default withRouter(Smurf);


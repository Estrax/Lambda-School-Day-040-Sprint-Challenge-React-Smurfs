import React from 'react';
import { withRouter } from 'react-router-dom';
import SmurfForm from './SmurfForm';

const Smurf = props => {

  const deleteButton = props.show ? <button onClick={() => {
    props.deleteSmurf(props.id);
    props.history.push('/');
  }}>Delete</button> : " ";

  const editForm = props.show ? <div>
    <h4>Edit smurf</h4>
    <SmurfForm 
      edit={true} submitForm={props.updateSmurf} smurf={{id: props.id, name: props.name, age: props.age, height: props.height}}
    />
    </div> : " ";


  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      
      {deleteButton}
      {editForm}
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default withRouter(Smurf);


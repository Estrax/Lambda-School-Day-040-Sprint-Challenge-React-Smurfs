import React from 'react';
import { Link } from 'react-router-dom';

import Smurf from './Smurf';

const Smurfs = (props) => {
  return (
    <div className="Smurfs">
      <h1>Smurf Village</h1>
      <ul>
        {props.smurfs.map(smurf => {
          return (
            <Link to={`/smurf/${smurf.id}`} key={smurf.id} onClick={() => props.clickOnSmurf(smurf)}>
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;

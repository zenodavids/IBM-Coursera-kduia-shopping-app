import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Location = () => {
  const {dispatch } = useContext(AppContext);

    const changeLocation = (val)=>{
            dispatch({
                type: 'CHG_LOCATION',
                payload: val,
            })
    }
    

  return (
        <div className='alert alert-secondary'> Location {
      <select name="Location" id="Location" onChange={event=>changeLocation(event.target.value)}>
        <option value="£">Uk(£)</option>
        <option value="₹">India(₹)</option>
        <option value="€">Europe(€)</option>
        <option value="CAD">Canada(CAD)</option>
      </select>	
      }	
    </div>
    );
};

export default Location;

// In Location.js, you are importing AppContext and adding changeLication class to change the location along with its currencies. When you change the Location, currencies will be updated at all the required places.
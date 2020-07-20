import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import * as a from '../actions/index';

function Businesses(props) {
  useEffect(() => {
   const {dispatch} = props;
   const action = a.makeApiCall();
   dispatch(action);
  }, [])

  const { error, isLoaded, businesses } = props;
  if (error) {
    return (
      <React.Fragment>
        Error: {error.message}
      </React.Fragment>
    )
  } else if (!isLoaded) {
    return (
      <React.Fragment>
        Loading...
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <h1>Businesses</h1>
        <ul>
          {businesses.map((business, index) =>
            <li key={index}>
              <h3>{business.name}</h3>
              <p>{business.address}</p>
            </li>
          )}
        </ul>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    businesses: state.businesses,
    isLoaded: state.isLoaded,
    error: state.error
  }
}

export default connect(mapStateToProps)(Businesses);
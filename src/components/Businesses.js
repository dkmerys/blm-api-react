import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import * as a from '../actions/index';
import Business from "./Business";

function Businesses(props) {
  useEffect(() => {
   const {dispatch} = props;
   const action = a.makeApiCall();
   dispatch(action);
  }, [])

  const { error, isLoaded, businesses, handleSelectingBusiness } = props;
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
          {businesses.map((business, index) => {
            return <Business
              key={index}
              handleSelectingBusiness = {handleSelectingBusiness}
              business = {business} />
            })}
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
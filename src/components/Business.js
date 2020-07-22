import React from "react";
import PropTypes from "prop-types";

function Business(props) {
  const { name, address, business, handleSelectingBusiness } = props;
  return (
    <React.Fragment>
     <div onClick={() => handleSelectingBusiness(business)}>
       <h4>{business.name}</h4>
       <p>{business.address}</p>
      </div>
    </React.Fragment>
  )
}

Business.propTypes = {
  name: PropTypes.string,
  address: PropTypes.string,
  business: PropTypes.object,
  handleSelectingBusiness: PropTypes.func
}

export default Business;
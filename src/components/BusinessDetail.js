import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function BusinessDetail(props){
  const{business, handleEditingBusiness } = props;

  return (
    <React.Fragment>
      <h1>Business Details: {business.name}</h1>
      <p>Category: {business.category} </p>
      <p>Address: {business.address} </p>
      <p>{business.link} </p>
      <button onClick={() => handleEditingBusiness(business)}>Edit Business</button>
    </React.Fragment>
  )
}

BusinessDetail.propTypes = {
  business: PropTypes.object,
  handleEditingBusiness: PropTypes.func
}

export default BusinessDetail;
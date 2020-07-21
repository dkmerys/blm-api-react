import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as a from "./../actions/index"
import Businesses from "./Businesses";
import NewBusinessForm from "./NewBusinessForm";
import EditBusinessForm from "./EditBusinessForm";
import BusinessDetail from "./BusinessDetail";

function BusinessControl (props) {
  const { newBusinessFormVisible, editBusinessFormVisible, selectedBusiness } = props;

  return (
    <React.Fragment>
      <Businesses />
    </React.Fragment>
  )

}

const mapStateToProps = state => {
  return{
    newBusinessFormVisible: state.newBusinessFormVisible,
    editBusinessFormVisible: state.editBusinessFormVisible,
    selectedBusiness: state.selectedBusiness
  }
}

BusinessControl = connect(mapStateToProps)(BusinessControl);

export default BusinessControl;
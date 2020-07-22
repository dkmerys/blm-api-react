import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as a from "./../actions/index"
import Businesses from "./Businesses";
import NewBusinessForm from "./NewBusinessForm";
import EditBusinessForm from "./EditBusinessForm";
import BusinessDetail from "./BusinessDetail";

function BusinessControl (props) {
  let currentlyVisibleState = null;
  let buttonText = null
  const { newBusinessFormVisible, editBusinessFormVisible, selectedBusiness } = props;

  const [visibleForm, setForm] = useState(false);
  const [editing, setEditing] = useState(false);
  const [selectedBusinessId, setSelectedBusiness] = useState(null)

  function returnToList(){
    if(selectedBusinessId !== null) {
      setSelectedBusiness(null);
      setEditing(false);
      setForm(false);
    } else {
      setForm(visibleForm);
    }
  }
  
  if (editBusinessFormVisible === true){ 
    currentlyVisibleState = <EditBusinessForm
                              editing={editing}
                              setEditing={setEditing}
                              visibleForm={visibleForm}
                              setForm={setForm}
                              selectedBusiness={selectedBusinessId} />
    buttonText = "Return to Business List"
  } else if (selectedBusinessId !== null){
    currentlyVisibleState = <BusinessDetail
                            setSelectedBusiness={setSelectedBusiness}
                            selectedBusiness={selectedBusinessId}
                            editing={editing}
                            setEditing={setEditing} />
    buttonText = "Return to Business List"
  } else if (visibleForm === true){
    currentlyVisibleState = <NewBusinessForm
                            setForm={setForm}
                            visibleForm={visibleForm} />
    buttonText = "View Businesses"
  } else {
    currentlyVisibleState = <Businesses 
                            setSelectedBusiness={setSelectedBusiness}
                            selectedBusiness={selectedBusinessId} />
    buttonText = "Add Business"
  }

  return (
    <React.Fragment>
      <button onClick={ () => returnToList()}>{buttonText}</button>
      <button onClick={ () => a.toggleNewBusinessForm()}>Add a Business</button>
      {currentlyVisibleState}     
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
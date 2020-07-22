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
  let buttonText = null;
  let navButton = null;
  let navButton2 = null;
  const { addFormVisible, editFormVisible, selectedBusiness } = props;

  function returnToList(){
    
  //   if(selectedBusiness !== null) {
  //     setSelectedBusiness(null);
  //     setEditing(false);
  //     setForm(false);
  //   } else {
  //     setForm(visibleForm);
  //   }
  }

  const handleShowNewBusinessForm = (newBusiness) => {
    const { dispatch } = props;
    const action = a.toggleNewBusinessForm();
    dispatch(action);
  }

  const handleShowEditBusinessForm = (editBusiness) => {
    const { dispatch } = props;
    const action = a.toggleEditBusinessForm();
    dispatch(action);
  }


  const handleAddingBusiness = (newBusiness) => {
    handleShowNewBusinessForm();
    console.log("YOU ARE IN THE HANDLE ADDING NEW BUSINESS FUNCTION BEFORE THE API FUNCTION IS CALLED")
    const { dispatch } = props;
    const action = a.addBusinessToApi(newBusiness);
    dispatch(action);
  }

  const handleEditingBusiness = (businessToBeEdited) => {
    handleShowEditBusinessForm();
    const { dispatch } = props;
    const action = a.editBusiness(businessToBeEdited);
    dispatch(action);
  }
 
  const handleSelectingBusiness = (selectedBusiness) => {
    const {dispatch} = props;
    const action = a.selectBusiness(selectedBusiness);
    dispatch(action);
  }
  
  if (editFormVisible){ 
    currentlyVisibleState = <EditBusinessForm
                              // editing={editing}
                              // setEditing={setEditing}
                              // visibleForm={visibleForm}
                              // setForm={setForm}
                              handleEditingBusiness={handleEditingBusiness}/>
    buttonText = "Return to Business List"
    navButton =  <button onClick={ () => returnToList()}>{buttonText}</button>
  } else if (selectedBusiness !== null){
    currentlyVisibleState = <BusinessDetail 
                              business={selectedBusiness}
                              handleEditingBusiness={handleEditingBusiness}/>
    buttonText = "Return to Business List"
    navButton =  <button onClick={ () => returnToList()}>{buttonText}</button>
  } else if (addFormVisible){
    currentlyVisibleState = <NewBusinessForm
                            // setForm={setForm}
                            // visibleForm={visibleForm} 
                            handleAddingBusiness={handleAddingBusiness}/>
    buttonText = "View Businesses"
    navButton =  <button onClick={ () => returnToList()}>{buttonText}</button>
  } else {
    currentlyVisibleState = <Businesses 
                            handleSelectingBusiness = {handleSelectingBusiness} />
    buttonText = "Add Business"
    navButton =  <button onClick={ () => handleShowNewBusinessForm()}>{buttonText}</button>
    navButton2 =  <button onClick={ () => handleShowEditBusinessForm()}>Edit Business</button>
  }

  return (
    <React.Fragment> 
      {navButton}
      {navButton2}
      {currentlyVisibleState}     
    </React.Fragment>
  )

}

const mapStateToProps = state => {
  return{
    addFormVisible: state.addFormVisible,
    editFormVisible: state.editFormVisible,
    selectedBusiness: state.selectedBusiness
  }
}

BusinessControl = connect(mapStateToProps)(BusinessControl);

export default BusinessControl;
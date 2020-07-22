import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';
import { v4 } from "uuid";

function NewBusinessForm (props) {

  function addBusiness(event) {
    if(event.target.name.value !== ""){
    event.preventDefault();
    props.handleAddingBusiness({
      name: event.target.name.value,
      address: event.target.address.value,
      link: event.target.link.value,
      category: event.target.link.value,
      id: v4()
    })
    }
  }
    return(
      <React.Fragment>
        <ReusableForm
          formSubmissionHandler={addBusiness}
          buttonText='Add Business' />
        </React.Fragment>
    );
  
}

NewBusinessForm.propTypes = {
  handleAddingBusiness: PropTypes.func
}

export default NewBusinessForm;
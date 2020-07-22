import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';

function NewBusinessForm () {
  const {visibleForm, setForm} = props

  function addBusiness(event) {
    event.preventDefault();
    setForm(!visibleForm);
    return(
      <React.Fragment>
        <ReusableForm
          formSubmissionHandler={addBusiness}
          buttonText='Add Business' />
        </React.Fragment>
    );
  }
}

export default NewBusinessForm;
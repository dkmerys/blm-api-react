import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props){
  return(
    <React.Fragment>
      <form onSubmit ={props.formSubmissionHandler}>
        <input
          text='text'
          name='businessName'
          placeholder='Business Name' />
        <input
          text='text'
          name='businessAddress'
          placeholder='Business Address' />
        <input
          text='text'
          name='businessLink'
          placeholder='Business Link' />
        <input
          text='text'
          name='businessCategory'
          placeholder='Business Category' />
          <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm
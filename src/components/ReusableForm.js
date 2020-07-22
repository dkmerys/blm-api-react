import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props){
  return(
    <React.Fragment>
      <form onSubmit ={props.formSubmissionHandler}>
        <input
          text='text'
          name='name'
          placeholder='Business Name' />
        <input
          text='text'
          name='address'
          placeholder='Business Address' />
        <input
          text='text'
          name='link'
          placeholder='Business Link' />
        <input
          text='text'
          name='category'
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
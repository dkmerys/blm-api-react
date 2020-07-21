import * as c from './../actions/ActionTypes';

const defaultState = {
  isLoaded: false,
  businesses: [],
  error: null,
  addFormVisible: false,
  editFormVisible: false,
  selectedTicket: null
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case c.GET_BUSINESSES_SUCCESS:
      return Object.assign({}, state, {
        isLoaded: true,
        businesses: action.businesses
      });
    case c.GET_BUSINESSES_FAILURE:
      return Object.assign({}, state, {
        isLoaded: false,
        error: action.error
      });
    case c.TOGGLE_NEW_BUSINESS_FORM:
      return Object.assign({}, state, {
        addFormVisible: !state.addFormVisible
      })
    case c.TOGGLE_EDIT_BUSINESS_FORM:
      return Object.assign({}, state, {
        editFormVisible: !state.editFormVisible
      })
    default:
      return state;
    }
};
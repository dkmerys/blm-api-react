import * as c from './../actions/ActionTypes';

const defaultState = {
  isLoading: false,
  businesses: [],
  error: null
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case c.REQUEST_BUSINESSES:
      return Object.assign({}, state, {
        isLoading: true
      });
    case c.GET_BUSINESSES_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        businesses: action.businesses
      });
    case c.GET_BUSINESSES_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
      })
    default:
      return state;
    }
};
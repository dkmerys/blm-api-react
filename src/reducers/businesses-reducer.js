import * as c from './../actions/ActionTypes';

const defaultState = {
  isLoaded: false,
  businesses: [],
  error: null
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case c.REQUEST_BUSINESSES:
      return Object.assign({}, state, {
        isLoaded: true
      });
    case c.GET_BUSINESSES_SUCCESS:
      return Object.assign({}, state, {
        isLoaded: true,
        businesses: action.businesses
      });
    case c.GET_BUSINESSES_FAILURE:
      return Object.assign({}, state, {
        isLoaded: false,
        error: action.error
      })
    default:
      return state;
    }
};
import * as c from './../actions/ActionTypes';

const defaultState = {
  isLoaded: false,
  businesses: [],
  error: null,
  addFormVisible: false,
  editFormVisible: false,
  selectedBusiness: null
}

export default (state = defaultState, action) => {
  const { id, name, address, link, category } = action;
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
      });
    case c.SELECT_BUSINESS:
      if(state.selectedBusiness === null) {
      return Object.assign({}, state, {
        selectedBusiness: { 
          id: id,
          name: name,
          address: address,
          link: link,
          category: category
        }
      })
      } else {
        return Object.assign({}, state, {
          selectedBusiness: null
        })
      }
    case c.ADD_BUSINESS:
      return Object.assign({}, state, {
        businesses: {
          [id]: { 
            id: id,
            name: name,
            address: address,
            link: link,
            category: category
          }
        }
      })
    default:
      return state;
    }
};
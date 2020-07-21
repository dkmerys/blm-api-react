import businessesReducer from "../../reducers/businesses-reducer"
import * as c from './../../actions/ActionTypes';

describe("businessesReducer", () => {
  const defaultState = {
    isLoaded: false,
    businesses: [],
    error: null,
    addFormVisible: false,
    editFormVisible: false,
    selectedTicket: null
  }

  const loadingState = {
    isLoaded: false,
    businesses: [],
    error: null,
    addFormVisible: false,
    editFormVisible: false,
    selectedTicket: null
  };

  let action;

  test("return default sate if no action is passed", () => {
    expect(businessesReducer(defaultState, {type: null})).toEqual(
      {
        isLoaded: false,
        businesses: [],
        error: null,
        addFormVisible: false,
        editFormVisible: false,
        selectedTicket: null
      }
    )
  })

  test('successfully getting businesses should change isLoaded to true', () => {
    const businesses = "A business";
    action = {
      type: c.GET_BUSINESSES_SUCCESS,
      businesses
    };

    expect(businessesReducer(loadingState, action)).toEqual({
      isLoaded: true,
      businesses: "A business",
      error: null,
      addFormVisible: false,
      editFormVisible: false,
      selectedTicket: null
    });
  });

  test('failing to get businesses changes isLoaded to false and adds an error message', () => {
    const error = "ERROR";
    action = {
      type: c.GET_BUSINESSES_FAILURE,
      error
    }
    expect(businessesReducer(loadingState, action)).toEqual({
      isLoaded: false,
      businesses: [],
      error: "ERROR",
      addFormVisible: false,
      editFormVisible: false,
      selectedTicket: null
    })
  });

  test('successfully toggling the create business form on will change addFormVisible to true', () => {
    action = {
      type: c.TOGGLE_NEW_BUSINESS_FORM
    }
    expect(businessesReducer(loadingState, action)).toEqual({
      isLoaded: false,
      businesses: [],
      error: null,
      addFormVisible: true,
      editFormVisible: false,
      selectedTicket: null
    })
  })

  test('toggle the edit business form will change editFormVisible to true', () => {
    action = {
      type: c.TOGGLE_EDIT_BUSINESS_FORM
    }
    expect(businessesReducer(loadingState, action)).toEqual({
      isLoaded: false,
      businesses: [],
      error: null,
      addFormVisible: false,
      editFormVisible: true,
      selectedTicket: null
    })
  })

});
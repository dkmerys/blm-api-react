import businessesReducer from "../../reducers/businesses-reducer"
import * as c from './../../actions/ActionTypes';

describe("businessesReducer", () => {
  const defaultState = {
    isLoaded: false,
    businesses: [],
    error: null
  }

  const loadingState = {
    isLoaded: false,
    businesses: [],
    error: null
  };

  let action;

  test("return default sate if no action is passed", () => {
    expect(businessesReducer(defaultState, {type: null})).toEqual(
      {
        isLoaded: false,
        businesses: [],
        error: null
      }
    )
  })

  test('requesting business should successfully change isLoaded from false to true', () => {
    action = {
      type: c.REQUEST_BUSINESSES
    };

    expect(businessesReducer(defaultState, action)).toEqual({
      isLoaded: true,
      businesses: [],
      error: null
    })
  })

  test('successfully getting businesses should change isLoaded to false', () => {
    const businesses = "A business";
    action = {
      type: c.GET_BUSINESSES_SUCCESS,
      businesses
    };

    expect(businessesReducer(loadingState, action)).toEqual({
      isLoaded: false,
      businesses: "A business",
      error: null
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
      error: "ERROR"
    })
  })
});
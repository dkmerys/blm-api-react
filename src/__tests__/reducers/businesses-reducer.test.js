import businessesReducer from "../../reducers/businesses-reducer"
import * as c from './../../actions/ActionTypes';

describe("businessesReducer", () => {
  const defaultState = {
    isLoading: false,
    businesses: [],
    error: null
  }

  const loadingState = {
    isLoading: false,
    businesses: [],
    error: null
  };

  let action;

  test("return default sate if no action is passed", () => {
    expect(businessesReducer(defaultState, {type: null})).toEqual(
      {
        isLoading: false,
        businesses: [],
        error: null
      }
    )
  })

  test('requesting business should successfully change isLoading from false to true', () => {
    action = {
      type: c.REQUEST_BUSINESSES
    };

    expect(businessesReducer(defaultState, action)).toEqual({
      isLoading: true,
      businesses: [],
      error: null
    })
  })

  test('successfully getting businesses should change isLoading to false', () => {
    const businesses = "A business";
    action = {
      type: c.GET_BUSINESSES_SUCCESS,
      businesses
    };

    expect(businessesReducer(loadingState, action)).toEqual({
      isLoading: false,
      businesses: "A business",
      error: null
    });
  });

  test('failing to get businesses changes isLoading to false and adds an error message', () => {
    const error = "ERROR";
    action = {
      type: c.GET_BUSINESSES_FAILURE,
      error
    }
    expect(businessesReducer(loadingState, action)).toEqual({
      isLoading: false,
      businesses: [],
      error: "ERROR"
    })
  })
});
import * as a from "./../../actions/index";
import * as c from "./../../actions/ActionTypes";

describe("business reducer actions", () => {
  test("requestBusinesses should create REQUEST_BUSINESS action", () => {
    expect(a.requestBusinesses()).toEqual({
      type: c.REQUEST_BUSINESSES
    })
  });

  test("getBusinessesSuccess should create GET_BUSINESSES_SUCCESS action", () => {
    const business = 'a business';
    expect(a.getBusinessesSuccess(business)).toEqual({
      type: c.GET_BUSINESSES_SUCCESS,
      businesses: business
    })
  });

  test("getBusinessesFailure should create GET_BUSINESSES_FAILURE action", () => {
    const error = "ERROR";
    expect(a.getBusinessesFailure(error)).toEqual({
      type: c.GET_BUSINESSES_FAILURE,
      error: error
    })
  })

})
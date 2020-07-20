import * as c from "./ActionTypes";

export const requestBusinesses = () => ({
  type: c.REQUEST_BUSINESSES
})

export const getBusinessesSuccess = (businesses) => ({
  type: c.GET_BUSINESSES_SUCCESS,
  businesses: businesses
})

export const getBusinessesFailure = (error) => ({
  type: c.GET_BUSINESSES_FAILURE,
  error: error
})
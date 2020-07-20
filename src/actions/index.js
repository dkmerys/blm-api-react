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

export const makeApiCall = () => {
  return dispatch => {
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url = "https://warm-harbor-14009.herokuapp.com/businesses"
  return fetch(proxyurl + url)
    .then(response => response.json())
    .then((jsonResponse) => {
      dispatch(getBusinessesSuccess(jsonResponse))
    })
    .catch((error) => {
      dispatch(getBusinessesFailure(error))
    })
  }
}
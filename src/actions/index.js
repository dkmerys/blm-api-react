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
  const url = "http://localhost:3000/businesses/"
  return fetch(url)
    .then(response => response.json())
    .then((jsonResponse) => {
      dispatch(getBusinessesSuccess(jsonResponse))
    })
    .catch((error) => {
      dispatch(getBusinessesFailure(error))
    })
  }
}

export const toggleNewBusinessForm = () => ({
  type: c.TOGGLE_NEW_BUSINESS_FORM
})

export const toggleEditBusinessForm = () => ({
  type: c.TOGGLE_EDIT_BUSINESS_FORM
})

export const selectBusiness = (business) => {
  if(business !== null) {
    const { id, name, address, link, category} = business;
    return {
      type: c.SELECT_BUSINESS,
      id: id,
      name: name,
      address: address,
      link: link,
      category: category
    }
  } else {
    return {
      type: c.SELECT_BUSINESS
    }
  }
}

export const addBusinessToApi = (business) => {
  const { name, address, category, link, id } = business;
  console.log("YOU ARE IN THE API FUNCTION IN ACTIONS");
  console.log("NAME OF BUSINESS " + name)
  return dispatch => {
  const url = `http://localhost:3000/businesses?name=${name}&address=${address}&link=${link}&category=${category}`

  return fetch(url, {method: "POST"})
    .then(response => response.json())
    .then((jsonResponse) => {
      console.log("POST SUCCESS: "+ Object.entries(jsonResponse))
    })
    .catch((error) => {
      console.log("POST ERROR: " + error)
    })
  }
}

export const editBusiness = (business) => {
  const { name, address, category, link, id } = business;
  return {
    type: c.ADD_BUSINESS,
    id: id,
    name: name,
    address: address,
    link: link,
    category: category
  }
}
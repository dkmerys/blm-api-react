import businessesReducer from "../../reducers/businesses-reducer"
import * as c from './../../actions/ActionTypes';
import * as a from "./../../actions/index";

describe("businessesReducer", () => {
  const defaultState = {
    isLoaded: false,
    businesses: {},
    error: null,
    addFormVisible: false,
    editFormVisible: false,
    selectedBusiness: null
  }

  const loadingState = {
    isLoaded: false,
    businesses: {},
    error: null,
    addFormVisible: false,
    editFormVisible: false,
    selectedBusiness: null
  };

  const business1 = {
    id: "1",
    name: "A Heavenly Taste Cafe",
    address: "4200 NE MLK Jr Blvd, Portland, Or",
    link: "https://www.facebook.com/AHeavenlyTasteCafe/",
    category: "Food"
  }

  let action;

  test("return default sate if no action is passed", () => {
    expect(businessesReducer(defaultState, {type: null})).toEqual(
      {
        isLoaded: false,
        businesses: {},
        error: null,
        addFormVisible: false,
        editFormVisible: false,
        selectedBusiness: null
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
      selectedBusiness: null
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
      businesses: {},
      error: "ERROR",
      addFormVisible: false,
      editFormVisible: false,
      selectedBusiness: null
    })
  });

  test('successfully toggling the create business form on will change addFormVisible to true', () => {
    action = {
      type: c.TOGGLE_NEW_BUSINESS_FORM
    }
    expect(businessesReducer(loadingState, action)).toEqual({
      isLoaded: false,
      businesses: {},
      error: null,
      addFormVisible: true,
      editFormVisible: false,
      selectedBusiness: null
    })
  })

  test('toggle the edit business form will change editFormVisible to true', () => {
    action = {
      type: c.TOGGLE_EDIT_BUSINESS_FORM
    }
    expect(businessesReducer(loadingState, action)).toEqual({
      isLoaded: false,
      businesses: {},
      error: null,
      addFormVisible: false,
      editFormVisible: true,
      selectedBusiness: null
    })
  })
  
  test('select business changes the selectedBusiness to the business object', () => {
    action = a.selectBusiness(business1);
    expect(businessesReducer(loadingState, action)).toEqual({
      isLoaded: false,
      businesses: {},
      error: null,
      addFormVisible: false,
      editFormVisible: false,
      selectedBusiness: business1
    })
  })

  // REFACTORED TO CONTACT API

  // test("addBusiness should add new business to the API", () => {
  //   const { name, address, category, link, id } = business1;
  //   action = a.addBusiness({
  //     name: name,
  //     address: address,
  //     category: category,
  //     link: link,
  //     id: id
  //   })

  //   expect(businessesReducer(defaultState, action)).toEqual({
  //     isLoaded: false,
  //     businesses: {
  //       [id]: {
  //         name: name,
  //         address: address,
  //         category: category,
  //         link: link,
  //         id: id
  //       }
  //     },
  //     error: null,
  //     addFormVisible: false,
  //     editFormVisible: false,
  //     selectedBusiness: null
  //   })
  // })
});
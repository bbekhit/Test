import {
  GET_BRANDS,
  ADD_BRAND,
  DELETE_BRAND,
  BRAND_LOADING
} from "../actions/types";

const initialState = {
  brand: {},
  brands: [],
  loading: false
};

const brandReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BRAND:
      return {
        ...state,
        brands: [...state.brands, action.payload]
      };
    case GET_BRANDS:
      return {
        ...state,
        brands: action.payload
      };
    case DELETE_BRAND:
      return {
        ...state,
        brands: state.brands.filter(item => item._id !== action.payload)
      };
    case BRAND_LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
};

export default brandReducer;


export default combineReducers({
    auth: authReducer,
    product: productReducer,
    errors: errorsReducer,
    brand: brandReducer,
    model: modelReducer,
    cart: cartReducer,
    site: siteReducer,
    filters: filtersReducer
  });
  

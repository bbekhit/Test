import {
  FETCH_OFFERS_SUCCESS,
  RESET_LOADING,
  CHANGE_OFFER_STATUS,
} from "../actions/types";

const initialState = {
  offers: [],
  loading: true,
  messages: [],
};
const offerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_OFFERS_SUCCESS:
      return {
        ...state,
        offers: action.payload,
        loading: false,
      };
    case RESET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CHANGE_OFFER_STATUS:
      const nextState = [...state.offers];
      const offerIndex = nextState.findIndex(o => o.id === action.offerId);
      nextState[offerIndex].status = action.status;
      return {
        ...state,
        offers: nextState,
      };
    case MARK_MESSAGE_AS_READ:
      const newMessages = state.messages.map(message => {
        if (message.id === action.messageId) {
          message.isRead = true;
        }
        return message;
      });
      return { ...state, messages: newMessages };
    default:
      return state;
  }
};

export default offerReducer;

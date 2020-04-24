const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALERT:
      const { alertMessage, alertType, id } = action.payload;
      return {
        alertMessage,
        alertType,
        id,
      };
    case REMOVE_ALERT:
      return null;
    default:
      return state;
  }
};

export default alertReducer;

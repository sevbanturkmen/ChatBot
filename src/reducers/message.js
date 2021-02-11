import {SEND_MESSAGE, GET_MESSAGE} from '../actions/types';

const initialState = {
  messageSend: [],
};

export default function messageReducer(state = initialState, action) {
  switch (action.type) {
    case SEND_MESSAGE: {
      const message = [...state.messageSend, action.payload];
      return {
        ...state,
        messageSend: message,
      };
    }
    case GET_MESSAGE: {
      const message2 = [...state.messageSend, action.payload];
      return {
        ...state,
        messageSend: message2,
      };
    }
    default:
      return {
        ...state,
      };
  }
}

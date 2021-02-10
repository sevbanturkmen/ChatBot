import {SEND_MESSAGE} from '../actions/types';

const initialState = {
  message: [],
};

export default function messageReducer(state = initialState, action) {
  switch (action.type) {
    case SEND_MESSAGE:
      console.log(action.payload);
      return {
        ...state,
        message: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}

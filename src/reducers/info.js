import {SEND_VALUE} from '../actions/types';

const initialState = {
  values: [],
};

export default function infoReducer(state = initialState, action) {
  switch (action.type) {
    case SEND_VALUE: {
      const value = [...state.values, action.payload];
      return {
        ...state,
        values: value,
      };
    }
    default:
      return {
        ...state,
      };
  }
}

import {SEND_MESSAGE} from './types';

// fetch user's analysis
export const sendMessages = (message) => (dispatch) => {
  dispatch({
    type: SEND_MESSAGE,
    payload: message,
  });
};

import {SEND_MESSAGE, GET_MESSAGE} from './types';
import store from '../store';

export const sendMessages = (content) => {
  store.dispatch({
    type: SEND_MESSAGE,
    payload: {
      ...content,
    },
  });
};

export const recieveMessage = (content) => {
  store.dispatch({
    type: GET_MESSAGE,
    payload: {...content},
  });
};

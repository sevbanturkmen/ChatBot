import {SEND_VALUE, GET_MESSAGE} from './types';
import store from '../store';

export const sendValue = (content) => {
  console.log(content);
  store.dispatch({
    type: SEND_VALUE,
    payload: {
      ...content,
    },
  });
};

export const getValue = () => {
  store.dispatch({
    type: GET_VALUE,
    payload: null,
  });
};

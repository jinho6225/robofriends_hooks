import { CHANGE_SERACH_FIELD } from './constants.js';

export const setSearchField = (text) => {
  return {
    type: CHANGE_SERACH_FIELD,
    payload: text,
  };
};

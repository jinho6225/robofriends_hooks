import { CHANGE_SERACH_FIELD } from './constants.js';

const initialState = {
  searchFiled: '',
};

export const searchRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SERACH_FIELD:
      return Object.assign({}, state, { searchFiled: action.payload });
    default:
      return state;
  }
};

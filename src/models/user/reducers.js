import { USER_SETTOKEN } from './actions';

const initialState = {
  token: '',
};

const UserReducer =  (state = initialState, { type, payload }) => {
  switch(type) {
    case USER_SETTOKEN:
      return {
        ...state,
        token: payload.token,
      };
    default:
      return state;
  }
};
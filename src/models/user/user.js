export default {
  namespace: 'user',
  state: {
    token: '',
  },
  reducers: {
    setToken(state, { payload }) {
      return {
        ...state,
        token: payload.token,
      };
    },
  },
  effects: {},
};

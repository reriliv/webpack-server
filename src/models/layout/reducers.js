import {
  LAYOUT_UPDATEDATABASES,
  LAYOUT_UPDATECOLLECTIONS,
  LAYOUT_SELECTDATABASE,
  LAYOUT_SELECTCOLLECTION,
  LAYOUT_UPDATEDATALIST,
} from './actions';

const initialState = {
  databases: [],
  collections: {},
  currentDatabase: 'default',
  currentCollection: '',
  dataList: {}
};

const LayoutReducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case LAYOUT_UPDATEDATABASES:
      return {
        ...state,
        databases: payload.databases,
      };
    case LAYOUT_UPDATECOLLECTIONS:
      return {
        ...state,
        collections: payload.collections,
      };
    case LAYOUT_SELECTDATABASE:
      return {
        ...state,
        currentDatabase: payload.currentDatabase,
        currentCollection: ''
      };
    case LAYOUT_SELECTCOLLECTION:
      return {
        ...state,
        currentCollection: payload.currentCollection
      };
    case LAYOUT_UPDATEDATALIST:
      return{
        ...state,
        dataList: payload.dataList,
      };
    default:
      return state;
  };
};

export default LayoutReducer;
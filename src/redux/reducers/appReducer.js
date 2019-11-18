import constants from "../constants";
export default (state = {}, action) => {
  switch (action.type) {
    case constants.SEARCH_ACTION:
      return {
        ...state,
        ...{ searchText: action.payload.searchText }
      };
    case constants.SEARCH_RESULT_RECEIVED:
      return {
        ...state,
        ...{ autocomplete: action.payload.data }
      };
    case constants.ALBUM_RESULT_RECEIVED:
      return {
        ...state,
        ...{ albums: action.payload.data, autocomplete: [], albumsDetails: {} }
      };
    case constants.ALBUM_DETAILS_RESULT_RECEIVED:
      return {
        ...state,
        ...{ albumsDetails: action.payload.data, autocomplete: [] }
      };
    case constants.APPLICATION_ERROR:
      return {
        ...state,
        ...{ error: action.payload.err }
      };
    default:
      return state;
  }
};

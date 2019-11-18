import constants from "../constants";
export const searchAction = data => ({
  type: constants.SEARCH_ACTION,
  payload: {
    searchText: data
  }
});
export const findAlbumOfArtist = id => ({
  type: constants.FIND_ALBUM_BY_ARTIST_ACTION,
  payload: {
    id
  }
});
export const findAlbumDetailsByArtist = id => ({
  type: constants.FIND_ALBUM_DETAILS_BY_ID,
  payload: {
    id
  }
});

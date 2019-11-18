import { call, put } from "redux-saga/effects";
import constants from "../constants";
import fetch from "../services/fetch";
function* fetchSearch(action) {
  try {
    const data = yield call(fetch, {
      url: `/api/search/artist?q=${action.payload.searchText}`
    });
    yield put({
      type: constants.SEARCH_RESULT_RECEIVED,
      payload: { data: data.data.slice(0, 5) }
    });
  } catch (error) {
    yield put({
      type: constants.APPLICATION_ERROR,
      payload: { err: error }
    });
  }
}

function* fetchAlbumsByArtist(action) {
  try {
    const data = yield call(fetch, {
      url: `/api/artist/${action.payload.id}/albums`
    });
    yield put({
      type: constants.ALBUM_RESULT_RECEIVED,
      payload: { data: data.data }
    });
  } catch (error) {
    yield put({
      type: constants.APPLICATION_ERROR,
      payload: { err: error }
    });
  }
}
function* fetchAlbumsDetailsById(action) {
  try {
    const data = yield call(fetch, {
      url: `/api/album/${action.payload.id}`
    });
    yield put({
      type: constants.ALBUM_DETAILS_RESULT_RECEIVED,
      payload: { data: data }
    });
  } catch (error) {
    yield put({
      type: constants.APPLICATION_ERROR,
      payload: { err: error }
    });
  }
}
export { fetchSearch, fetchAlbumsByArtist, fetchAlbumsDetailsById };

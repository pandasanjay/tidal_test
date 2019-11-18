import { takeLatest } from "redux-saga/effects";
import constant from "../constants";
import {
  fetchSearch,
  fetchAlbumsByArtist,
  fetchAlbumsDetailsById
} from "./searchSaga";
export default function* rootSaga() {
  yield takeLatest(constant.SEARCH_ACTION, fetchSearch);
  yield takeLatest(constant.FIND_ALBUM_BY_ARTIST_ACTION, fetchAlbumsByArtist);
  yield takeLatest(constant.FIND_ALBUM_DETAILS_BY_ID, fetchAlbumsDetailsById);
}

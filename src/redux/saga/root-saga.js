import { takeLatest } from 'redux-saga/effects'
import constant from "../constants"
import { fetchSearch } from "./searchSaga"
export default function* rootSaga() {
    yield takeLatest(constant.SEARCH_ACTION, fetchSearch)
}
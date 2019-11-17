import { call } from 'redux-saga/effects'
import fetch from '../services/fetch'
function* fetchSearch(action) {
    const data = yield call(fetch, {
        url: `https://api.deezer.com/search?q=album:${action.payload.searchText}`
    })
    console.log(data)
}

export {
    fetchSearch
}
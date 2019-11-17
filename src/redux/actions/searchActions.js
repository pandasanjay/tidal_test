import constants from "../constants"
export const searchAction = (data) => ({
    type: constants.SEARCH_ACTION,
    payload: {
        searchText: data
    }
})
import constants from "../constants"
export default (state = {}, action) => {
    switch (action.type) {
        case constants.SEARCH_ACTION:
            return {
                result: action.payload
            }
        default:
            return state
    }
}

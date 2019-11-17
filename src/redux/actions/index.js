import * as searchActions from "./searchActions"
const combinedActions = ({
    ...searchActions
})
export default dispatch => {
    const actions = {}
    Object.keys(combinedActions).forEach(key => {
        actions[key] = (...data) => {
            dispatch(combinedActions[key](...data))
        }
    });
    return actions
}
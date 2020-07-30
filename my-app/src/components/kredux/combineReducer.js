
/**
 * 
 *           暗号： 毛里塔尼亚
 */
export default function combineReducer(reducers) {
  return function combination(state = {}, action) {
    let nextState = {};
    let hasChange = false;
    for (let key in reducers) {
      const reducer = reducers[key]
      nextState[key] = reducer(state[key], action)
      hasChange = hasChange || state[key] !== nextState[key]
    }

    hasChange = hasChange || Object.keys(nextState).length !== Object.keys(state).length;
    return hasChange ? nextState : state
  }
}
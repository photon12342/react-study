export const addReducer = (state = 0, { type, payload = 1 }) => state + payload

export const minusReducer = (state = 0, { type, payload = 1 }) => state - payload
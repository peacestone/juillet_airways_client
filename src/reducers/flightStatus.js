export default (state = {toggleStatusTable: false, flight: {} }, action) => {
  switch (action.type) {
    case 'DISABLE_STATUS_TABLE':
      return Object.assign({}, state, {toggleStatusTable: false});
    case 'RECEIVE_FLIGHT_STATUS':
      return Object.assign({}, state, {toggleStatusTable: true, error: false }, action.payload)
    case 'BAD_INPUT':
      return Object.assign({}, state, {toggleStatusTable: false, error: true})
    default:
      return state
  }
}

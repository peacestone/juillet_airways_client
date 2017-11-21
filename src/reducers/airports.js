export default (state = {airports: [], destinations: {origin_airport_id: null}}, action) => {

  switch (action.type) {
    case 'RECEIVE_AIRPORTS_INDEX':
      return Object.assign({}, state, action.payload)
    case 'RECEIVE_AIRPORT_DESTINATIONS':
      return Object.assign({}, state, {destinations: {origin_airport_id: action.origin_id, airports: action.airports}})
    default:
      return state
  }

}


//{origin_airport_id: NaN, airports: []}

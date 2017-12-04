const reservations = (state={isFetching: false, reservation: { flight: {flight_number: ''}, payment_info: {}, passenger: {}, route: {departure_airport: {}, arival_airport: {} } }, passenger: {}}, action) => {
  switch (action.type) {
    case 'ADD_TRAVELERS_DETAILS':
      return Object.assign({}, state, {traveler_info: action.payload})
      case 'FETCHING_RESERVATION':
        return Object.assign({}, state, {isFetching: 'true'})
      case 'RECIEVE_RESERVATION':
        return Object.assign({}, state, {isFetching: 'false'}, action.payload)
      case 'CLEAR_RESERVATION':
        return Object.assign({}, {isFetching: false, reservation: { flight: {flight_number: ''}, payment_info: {}, passenger: {}, route: {departure_airport: {}, arival_airport: {} } }, passenger: {}} )
    default:
      return state
  }
}

export default reservations

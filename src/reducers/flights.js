

const flights = (state = {isLoading: false,  flights: [], request: {departure_city: '', arival_city: '', departure_date: ''}, selectedFlight: {} }, action) => {
  switch (action.type) {
    case 'LOADING_FLIGHTS':
      return Object.assign({}, state, {isLoading: 'true'})
     case 'RECEIVE_FLIGHTS':
    return Object.assign({}, {isLoading: 'false'}, action.payload)
    case 'SELECT_FLIGHT':
      return Object.assign({}, state, {selectedFlight: action.payload})
      default:
        return state
      }

  }

  export default flights

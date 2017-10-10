export default (flightInfo) => {
  return (dispatch) => {
    dispatch({type: 'LOADING_FLIGHTS'})

    fetch('http://localhost:3001/api/flights/status', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({flights: flightInfo})
    })
    .then(
      response => response.json()
    .then(
        flight => {
          if (!flight.error){
           dispatch({type: 'RECEIVE_FLIGHT_STATUS', payload: flight})
           return
         }

         dispatch({type: 'BAD_INPUT'})
         }
      )
    )
  }
}

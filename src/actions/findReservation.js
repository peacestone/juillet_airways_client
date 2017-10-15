export default (reservation_query) => {
  return (dispatch) => {
    dispatch({type: 'FETCHING_RESERVATION'})

    fetch('https://juilet-air.herokuapp.com/api/reservations/find', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({reservation: reservation_query})
    })

    .then(
      response => {
        return response.json()
      }
    )
    .then( (reservation) => {
      dispatch({type: 'RECIEVE_RESERVATION', payload: reservation})})
  }
}

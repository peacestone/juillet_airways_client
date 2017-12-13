import fetch from 'isomorphic-fetch'

const createReservation = (travelerAndFlightInfo) => (
   (dispatch) => {
    dispatch({type: 'FETCHING_RESERVATION'})

    fetch('https://juiletapi.herokuapp.com/api/reservations', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({reservation: travelerAndFlightInfo})
    })
    .then(response => {
      if (response.ok) {
      return response.json()
      }
      throw new Error(response.statusText)
    }
  )
    .then(({reservation}) => dispatch({type: 'RECIEVE_RESERVATION' , payload: {reservation}}))


  }

)

export default createReservation

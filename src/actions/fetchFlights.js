import fetch from 'isomorphic-fetch'

const fetchFlights = (flightInput) => {
  return (
    (dispatch) => {
     dispatch({type: 'LOADING_FLIGHTS'})
       fetch('https://juilet-air.herokuapp.com/api/flights/find', {
      headers: {'Content-Type': 'application/json'},
       method: 'POST',
       body: JSON.stringify({flights: flightInput})
        }
      )
       .then(response => {
         if (response.ok) {
         return response.json()
        }
        throw new Error(response.statusText)
       })

       .then((flights) => { console.log(flights)
          dispatch({type: 'RECEIVE_FLIGHTS', payload: flights })})
     }
   )
 }

export default fetchFlights

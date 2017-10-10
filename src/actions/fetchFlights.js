import fetch from 'isomorphic-fetch'
//var myHeaders = new Headers();
//myHeaders.append('Content-Type', 'application/json');

const fetchFlights = (flightInput) => {
  return (
    (dispatch) => {
     dispatch({type: 'LOADING_FLIGHTS'})
       fetch('http://localhost:3001/api/flights/find', {
      headers: {'Content-Type': 'application/json'},
       method: 'POST',
       body: JSON.stringify({flights: flightInput})
       //body: JSON.stringify(
         //{flights: {departure_city: 'ATL', arival_city: "JFK", departure_date: '2017-10-22'}})
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

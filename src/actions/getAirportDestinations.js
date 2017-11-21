import fetch from 'isomorphic-fetch'

export default airport_id => (
  (dispatch) => {
    fetch(`http://localhost:3001/api/airports/${airport_id}/destinations`)
    .then(json => json.json())
    .then(airports => dispatch({type: 'RECEIVE_AIRPORT_DESTINATIONS', origin_id: airports.meta.origin_airport_id, airports: airports.airports}))
  }
)

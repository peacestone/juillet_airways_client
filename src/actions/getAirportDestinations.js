import fetch from 'isomorphic-fetch'

export default airport_id => (
  (dispatch) => {
    fetch(`http://localhost:3001/api/airports/${airport_id}/destinations`)
    .then(json => json.json())
    .then(airports => dispatch({type: 'RECEIVE_AIRPORT_DESTINATION', origin_id: airports.origin_id, airports: airports.airports}))
  }
)

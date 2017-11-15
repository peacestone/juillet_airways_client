import fetch from 'isomorphic-fetch'

const getAirports = () => {
  return (dispatch) => {
     fetch('http://localhost:3001/api/airports')
    .then((json) => json.json())
    .then((airports) => dispatch({type: 'RECEIVE_AIRPORTS_INDEX', payload: airports}))
  }
}

export default getAirports

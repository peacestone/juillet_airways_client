import fetch from 'isomorphic-fetch'

const getAirports = () => {
  return (dispatch) => {
     fetch('https://juiletapi.herokuapp.com/api/airports')
    .then((json) => json.json())
    .then((airports) => dispatch({type: 'RECEIVE_AIRPORTS_INDEX', payload: airports}))
  }
}

export default getAirports

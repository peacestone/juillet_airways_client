export default (state = [], action) => {

  switch (action.type) {
    case 'RECEIVE_AIRPORTS_INDEX':
      return action.payload
    default:
      return state
  }

}

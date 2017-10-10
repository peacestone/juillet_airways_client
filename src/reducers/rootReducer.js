import { combineReducers } from 'redux'
import reservations from './reservations'
import flights from './flights'
import flightStatus from './flightStatus'

export default combineReducers({reservations, flights, flightStatus})

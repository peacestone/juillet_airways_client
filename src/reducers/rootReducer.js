import { combineReducers } from 'redux'
import reservations from './reservations'
import flights from './flights'
import flightStatus from './flightStatus'
import airports from './airports'

export default combineReducers({reservations, flights, flightStatus, airports})

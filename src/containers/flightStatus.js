import React, {Component} from 'react'
import {Form, Button, Message} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { withRouter } from 'react-router'
import moment from 'moment'
import getFlightStatus from '../actions/getFlightStatus'

const today = moment().local()
const todayISO = today.clone().format()

class FlightStatus extends Component {
  constructor(props) {
    super(props)
    this.today = today
    this.todayISO = todayISO
    this.state = {
      flight_date: todayISO,
      flight_number: ''
    }
  }




  handleClick = event => {
    this.props.getFlightStatus(this.state)
  }

   handleChange = (e, {name, value}) => {
    this.setState({[name]: value  })
   }

  render(){
    const tomorrow = this.today.clone().add('1', 'days')
    const yesterday = this.today.clone().subtract('1', 'days')
    const options = [

      {key: 1, text: `Today, ${this.today.clone().format("MMM Do YYYY")}`, value: this.todayISO},
      {key: 2, text: `Tomorrow, ${tomorrow.clone().format("MMM Do YYYY")}`, value: tomorrow.clone().format()},
      {key: 3, text: `Yeseterday, ${yesterday.clone().format("MMM Do YYYY")}`, value: yesterday.clone().format()}
    ]
    return(
      <Form autoComplete="on" size='large' error={this.props.error} >
      {this.props.error && <Message error header='No flights were found!' />}
      <Form.Select error={this.props.error} label='Flight Date' name='flight_date' options={options} onChange={this.handleChange} value={this.state.flight_date}   />
      <Form.Input error={this.props.error} focus fluid size='large' onChange={this.handleChange}  name='flight_number' placeholder='Flight Number' />
      <Button color='green' onClick={this.handleClick} fluid size='large'>VIEW STATUS</Button>
      </Form>
    )
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({getFlightStatus: getFlightStatus}, dispatch)
)

const mapStateToProps = state => (
  {error: state.flightStatus.error}
)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FlightStatus))

import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import disableStatusTable from '../actions/disableStatusTable'
import {connect} from 'react-redux'
import {  Menu, Grid, Segment, Container } from 'semantic-ui-react'
import img from "../beach.jpg"
import BookAFlight from './bookAFlight'
import MyTrips from './myTrips'
import FlightStatus from './flightStatus'
import FlightStatusTable from '../components/flightStatusTable'


 class Widget extends Component {

   constructor(props){
     super(props)
     this.state = {
       activeItem: 'bookAFlight',
     }
   }

  handleItemClick = (event, data) => {
    this.setState({activeItem: data.name}
  )}

 handleDivClick = (event, data) => {
   !!this.props.toggleStatusTable && this.props.disableStatusTable()

 }

  render() {
    let activeItem
    if (this.state.activeItem === 'bookAFlight') {
      activeItem = <BookAFlight />
    }
    else if (this.state.activeItem === 'myTrips') {
      activeItem = <MyTrips />
    }
    else {
      activeItem = <FlightStatus />

    }
    return (
      <div  id='widget' style={{backgroundImage: "url(" + img  + ")", minHeight: '100%', backgroundSize: 'cover', position: 'relative'}} >

          <Grid
           textAlign='center'
            style={{height: '100%'}}
            //verticalAlign='middle'
            >
            <Grid.Column style={{maxWidth: 450}}>
            <div onClick={this.handleDivClick }>
               <Menu pointing attached='top' widths={3}>
                <Menu.Item name='bookAFlight'onClick={this.handleItemClick}  active={this.state.activeItem === 'bookAFlight'} > Book a Flight </Menu.Item>
                <Menu.Item name='myTrips' active={this.state.activeItem === 'myTrips'} onClick={this.handleItemClick}>My Trips </Menu.Item>
                <Menu.Item name='flightStatus' onClick={this.handleItemClick} active={this.state.activeItem === 'flightStatus'} >Flight Status</Menu.Item>
              </Menu>

              <Segment stacked attached='bottom' style={{marginBottom: '3%'}}>
                {activeItem}
              </Segment>
            </div>

            </Grid.Column>
          </Grid>
          { this.props.toggleStatusTable && <Container >
           <FlightStatusTable  />
          </Container> }
      </div>

    )
  }
}

const mapDispatchToProps = (dispatch) =>{
  return bindActionCreators({disableStatusTable: disableStatusTable}, dispatch)
}

const mapStateToProps = state => {
  return(
  {toggleStatusTable: state.flightStatus.toggleStatusTable}
)}

export default connect(mapStateToProps, mapDispatchToProps)(Widget)

import React, {Component} from 'react'
import {Menu, Header} from 'semantic-ui-react'
import WhereWeFly from './whereWeFly'

class navBar extends Component {

  constructor(props){
    super(props)
    this.state = {
      toggleWhereFly: false
    }
  }

  handleWhereFlyClick = () => this.setState({toggleWhereFly: !this.state.toggleWhereFly})


  render() {
    console.log(this.state)
    return(
      <div id='navBar' >
        <Menu borderless  size='massive' >
            <Menu.Item position='left' style={{letterSpacing: '0.3em'}} ><Header>Juliet Airways</Header></Menu.Item>

            <Menu.Item position='right' name='whereWeFly' onClick={this.handleWhereFlyClick} />

        </Menu>

        {this.state.toggleWhereFly && <WhereWeFly />}
      </div>
    )
  }

}

export default navBar

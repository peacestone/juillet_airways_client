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

   toggleOff = () => this.setState({toggleWhereFly: false})



  handleWhereFlyClick = () => this.setState({toggleWhereFly: !this.state.toggleWhereFly})



  render() {
    console.log(this.whereWeFlyNode)
    return(
      <div id='navBar' >
        <Menu borderless  size='massive' style={{marginBottom: '14px'}} >
            <Menu.Item position='left' style={{letterSpacing: '0.3em'}} ><Header>Juliet Airways</Header></Menu.Item>
            <span ref={node => {this.whereWeFlyNode = node}}><Menu.Item  position='right' name='whereWeFly' onClick={this.handleWhereFlyClick} /></span>
        </Menu>

        {this.state.toggleWhereFly && <WhereWeFly toggleOff={this.toggleOff} whereWeFlyNode={this.whereWeFlyNode} />}
      </div>
    )
  }

}

export default navBar

import React from 'react'

import RaisedButton from 'material-ui/RaisedButton'
import Popover from 'material-ui/Popover'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'

export default class ExamplePicker extends React.Component {

  constructor(props) {
    super(props)
    this.state = { open: false }
  }

  handleTouchTap = (event) => {
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget
    })
  }

  handleRequestClose = () => {
    this.setState({
      open: false
    })
  }

  onClick(value) {
    this.props.updateQuery(value)
    this.props.search(value)
    this.handleRequestClose()
  }

  render() {
    return (
      <div style={this.props.style}>
        <RaisedButton
          onClick={this.handleTouchTap}
          label="Choose example query"
          style={{ width: '90%', margin: '5%' }}
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          onRequestClose={this.handleRequestClose}
        >
          {this.props.examples.map(E => (<MenuItem onClick={this.onClick.bind(this, E[1])} primaryText={E[0]}/>))}
        </Popover>
      </div>
    )
  }

}

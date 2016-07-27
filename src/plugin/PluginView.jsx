import React from 'react'

export default class PluginView extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={this.props.style}>
        <this.props.plugin {...this.props} style={{ height: '100%' }}/>
      </div>
    )
  }

}

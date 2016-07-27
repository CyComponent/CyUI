import React from 'react'
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar'
import FontIcon from 'material-ui/FontIcon'

export default class PluginBar extends React.Component {

  isSelected(P) {
    if (P == this.props.selectedPlugin) {
      return { opacity: '70%' }
    } else {
      return {}
    }
  }

  handleSelect(P) {
    this.props.selectPlugin(P)
  }

  render() {
    return (
      <div style={this.props.style}>
        <Toolbar>
          <ToolbarGroup
            firstChild={true}
          >
            {this.props.plugins.map(P => (
              <FontIcon
                className='material-icons'
                style={this.isSelected(P)}
                onClick={this.handleSelect.bind(this, P)}
              >
                {P.iconName}
              </FontIcon>)
            )}
          </ToolbarGroup>
        </Toolbar>
      </div>
    )
  }

}

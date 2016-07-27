import React from 'react'
import Paper from 'material-ui/Paper';

import PluginBar from './PluginBar'
import PluginView from './PluginView'

export default class PluginViewer extends React.Component {

  static propTypes = {
    plugins: React.PropTypes.array.isRequired
  }

  constructor(props) {
    super(props)
    this.state = { selected: this.props.plugins[0] }
  }

  selectPlugin(plugin) {
    this.setState({
      selected: plugin
    })
  }

  render() {
    const pluginStyle = {
      height: '100%'
    }
    var { plugins, ...other } = this.props
    return (
      <div style={pluginStyle}>
        <PluginBar
         style={{ height: '8%' }}
         plugins={plugins}
         selectedPlugin={this.state.selected}
         selectPlugin={this.selectPlugin.bind(this)}
        />
        <PluginView
          style={{ height: '92%', overflow: 'scroll' }}
          plugin={this.state.selected.plugin}
          {...other}
        />
      </div>
    )
  }

}

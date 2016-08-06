import React from 'react'

import RaisedButton from 'material-ui/RaisedButton'

export default class SearchButton extends React.Component {

  handleSearch = () => {
    this.props.search(
      this.props.query
    )
  }

  render() {
    return (
      <div style={this.props.style}>
        <RaisedButton
          label="Search"
          secondary={true}
          style={{ width: '90%', margin: '5%' }}
          onClick={this.handleSearch}
        />
      </div>
    )
  }

}

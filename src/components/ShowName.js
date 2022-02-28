import React, { Component } from 'react'

export default class ShowName extends Component {
  render() {
      console.log('show ra day ne', this);
    return (
      <div>
          <p>{this.props.name}</p>
          <p>{this.props.name1}</p>
      </div>
    )
  }
}

import React, { Component } from 'react'

export default class ShowName extends Component {
  render() {
    //   console.log('show ra day ne', this.props.name);
    return (
      <div>
          <p>{this.props.name}</p>
      </div>
    )
  }
}

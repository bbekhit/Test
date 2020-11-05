import React, { Component } from 'react'

export default class Bind_React extends Component {
  render() {
    return (
      <div>
         <Button onClick = {this.handleNameChange.bind(this,'new Name')}>Click</Button>
         {/* if i didn't use bind while passing arguments it will excute right away */}
         <Button onClick = {() => this.handleNameChange('new Name')}>Click</Button>
      </div>
    )
  }
}

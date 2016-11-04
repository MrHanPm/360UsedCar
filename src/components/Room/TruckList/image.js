import React, { Component } from 'react'
// import { Link } from 'react-router'
// import Heads from './Head'


export default class TruckList extends Component {
  componentWillMount () {
    let { params: { id } } = this.props
    this.props.inGet(id)
  }
  componentDidMount() {
    // state = this.props || {}
  }

  render () {
    return (
      <div>
        对方尴尬
      </div>
    )
  }
}

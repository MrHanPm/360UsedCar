import React, { Component } from 'react'
// import { Link } from 'react-router'

// import { connect } from 'react-redux'
import Navbar from 'COMPONENT/Navbar/comment'
// import { injectReducer } from 'REDUCER'
// injectReducer('room', require('REDUCER/room/').default)

// @connect(
//   ({ room }) => ({ room }),
//   require('ACTION/room').default
// )

export default class TruckList extends Component {
  componentWillMount () {
    // let { params: { truckId } } = this.props
    // this.props.getImg(truckId)
  }
  componentDidMount() {

  }

  render () {
    return (
    <div style={{height: '100%'}}>
        <div className="TrLiBox">
            <div className="comment-head">
                <p>一汽解放 解放J6P牵引车</p>
                <div className="circum">
                    <span>车况很好(20)</span>
                    <span>保养的不错(20)</span>
                    <span>动力强劲(19)</span>
                </div>
                <div className="harm">
                    <span>外观有轻微损伤(20)</span>
                    <span>磨损严重(12)</span>
                    <span>有严重撞伤(2)</span>
                </div>
            </div>
            <ul className="posts-list">
                <li>
                    <div className="info">
                        <span className="good current"></span>
                        <span className="good"></span>
                        <span className="good"></span>
                        <span className="good"></span>
                        <span className="good"></span>
                        <figure><img src="http://usr.im/32x32" alt="" /></figure>
                        <span className="user-wrap">打的去唐朝</span>
                    </div>
                    <div className="content">
                        <p>说到底，始终是垃圾，就是某些停留在10年前对国产卡车印象！</p>
                    </div>
                    <footer>
                        <span className="time">17分钟前</span>
                        <i className="reply">回复</i>
                    </footer>
                    <div className="comment-mess">
                    </div>
                </li>
            </ul>
        </div>
        <Navbar style={{top: '-60px'}}/>
    </div>
    )
  }
}

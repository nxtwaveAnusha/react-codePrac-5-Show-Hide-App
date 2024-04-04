import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {frtName: false, lstName: false}

  firstName = () => {
    this.setState(prevState => ({frtName: !prevState.frtName}))
  }
  lastName = () => {
    this.setState(prevState => ({lstName: !prevState.lstName}))
  }

  render() {
    const {frtName, lstName} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="names-container">
          <div className="first-name-container">
            <button className="btn" onClick={this.firstName}>
              Show/Hide Firstname
            </button>
            {frtName && <p className="name">Joe</p>}
          </div>
          <div className="last-name-container">
            <button className="btn" onClick={this.lastName}>
              Show/Hide Lastname
            </button>
            {lstName && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide

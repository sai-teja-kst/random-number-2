// Write your code here RandomNumberGenerator

import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {n: 0}

  render() {
    const {n} = this.state

    const onGenerate = () => {
      const x = Math.floor(Math.random() * 100)
      this.setState({n: x})
    }

    return (
      <div className="bg-container">
        <div className="bg-card">
          <h1 className="header">Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button type="submit" className="btn-primary" onClick={onGenerate}>
            Generate
          </button>
          <p className="counter">{n}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator

import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {heads: 0, tails: 0, isHead: true}

  spinCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)

    if (tossResult === 0) {
      this.setState(prevState => ({
        heads: prevState.heads + 1,
        isHead: true,
      }))
    } else {
      this.setState(prevState => ({
        tails: prevState.tails + 1,
        isHead: false,
      }))
    }
  }

  render() {
    const {heads, tails, isHead} = this.state
    const total = heads + tails

    const coinImg = isHead
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="coinToss-container">
        <div className="coinToss-card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="heads-or-tails">Heads (or) Tails</p>
          <img src={coinImg} alt="toss result" className="coin-img" />
          <button type="button" className="toss-btn" onClick={this.spinCoin}>
            Toss Coin
          </button>
          <div className="coins-count-container">
            <p className="coins-count">Total: {total}</p>
            <p className="coins-count">Heads: {heads}</p>
            <p className="coins-count">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss

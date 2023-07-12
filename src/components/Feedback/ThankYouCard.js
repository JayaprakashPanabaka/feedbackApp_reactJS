import {Component} from 'react'
import './index.css'

class ThankYouCard extends Component {
  render() {
    const {resources} = this.props

    return (
      <div className="thanks-container">
        <img
          src={resources.loveEmojiUrl}
          alt="love emoji"
          className="love-emoji"
        />
        <h1 className="thanks-heading">Thank you!</h1>
        <p className="thanks-text">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }
}

export default ThankYouCard

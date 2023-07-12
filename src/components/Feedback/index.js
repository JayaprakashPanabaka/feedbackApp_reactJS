// Write your React code here.
import {Component} from 'react'
import './index.css'

import EmojisCard from './EmojisCard'
import ThankYouCard from './ThankYouCard'

class Feedback extends Component {
  state = {isClicked: false}

  onEmojiClicked = () => {
    const {isClicked} = this.state
    this.setState({isClicked: true})
  }

  render() {
    const {resources, isClicked} = this.props
    // console.log(resources)

    return (
      <div className="bg-container">
        <div className="main-card">
          {isClicked ? (
            <ThankYouCard resources={resources} />
          ) : (
            <EmojisCard
              resources={resources}
              onEmojiClicked={this.onEmojiClicked}
            />
          )}
        </div>
      </div>
    )
  }
}

export default Feedback

import {Component} from 'react'
import './index.css'

class EmojisCard extends Component {
  onClickEmoji = () => {
    const {onEmojiClicked} = this.props
    onEmojiClicked()
  }

  render() {
    const {resources} = this.props
    console.log(resources)
    return (
      <div className="emojis-container">
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emojis-card">
          {resources.emojis.map(emoji => (
            <li key={emoji.id} className="emojis-list">
              <button
                type="button"
                className="emoji-btn"
                onClick={this.onClickEmoji}
              >
                <img
                  src={emoji.imageUrl}
                  alt={emoji.name}
                  className="emoji-img"
                />{' '}
                <br />
                <p className="emoji-name">{emoji.name}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default EmojisCard

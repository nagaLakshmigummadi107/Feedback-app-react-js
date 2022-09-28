// Write your React code here.
import {Component} from 'react'

import './index.css'

import Emoji from '../Emoji'

class Feedback extends Component {
  state = {feedbackGiven: false}

  changeFeedbackPage = () => {
    // const {feedbackGiven} = this.state
    this.setState(prevState => ({
      feedbackGiven: !prevState.feedbackGiven,
    }))
  }

  render() {
    const {feedbackGiven} = this.state

    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    return (
      <div className="feedbackApp-bg-container">
        {!feedbackGiven && (
          <div className="feedbackApp-container">
            <h1 className="feedback-ques">
              How satisfied are you with our customer support performance?
            </h1>

            <ul className="emojis-bg-container">
              {emojis.map(eachItem => (
                <Emoji
                  key={eachItem.id}
                  imageUrl={eachItem.imageUrl}
                  name={eachItem.name}
                  changeFeedbackPage={this.changeFeedbackPage}
                />
              ))}
            </ul>
          </div>
        )}
        {feedbackGiven && (
          <div className="feedbackApp-container">
            <img className="love-emoji" src={loveEmojiUrl} alt="love emoji" />
            <h1 className="thankYou-heading">Thank You!</h1>
            <p>
              We will use your feedback to improve our customer support
              performance
            </p>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback

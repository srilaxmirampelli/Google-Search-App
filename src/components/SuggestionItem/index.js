// Write your code here
import './index.css'

import {Component} from 'react'

class SuggestionItem extends Component {
  onClickArrow = () => {
    const {suggestionDetails, selectSuggestion} = this.props
    const {suggestion, source} = suggestionDetails

    // Open the link in a new tab
    window.open(source, '_blank')

    selectSuggestion(suggestion)
  }

  render() {
    const {suggestionDetails, selectSuggestion} = this.props
    const {id, suggestion, source} = suggestionDetails
    return (
      <li className="each-suggestion">
        <p className="suggestion">{suggestion}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
          onClick={this.onClickArrow}
        />
      </li>
    )
  }
}

export default SuggestionItem

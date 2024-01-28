// Write your code here
import './index.css'

import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {userSelected: ''}

  selectSuggestion = suggestion => {
    this.setState({userSelected: suggestion})
  }

  onChangeSearchInput = event => {
    this.setState({userSelected: event.target.value})
  }

  render() {
    const {suggestionsList} = this.props
    const {userSelected} = this.state

    const searchResults = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(userSelected.toLowerCase()),
    )

    return (
      <div className="google-suggestions-app">
        <div className="content-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="google-logo"
          />
          <ul className="search-container">
            <div className="search-bar-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-icon"
              />
              <input
                type="search"
                placeholder="Search Google"
                className="input-search-bar"
                value={userSelected}
                onChange={this.onChangeSearchInput}
              />
            </div>
            {searchResults.map(each => (
              <SuggestionItem
                suggestionDetails={each}
                key={each.id}
                selectSuggestion={this.selectSuggestion}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions

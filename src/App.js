import GoogleSuggestions from './components/GoogleSuggestions'

import './App.css'

const suggestionsList = [
  {
    id: 1,
    suggestion: 'srilaxmi rampelli linkedIn',
    source: 'https://www.linkedin.com/in/srilaxmirampelli/',
  },
  {
    id: 2,
    suggestion: 'srilaxmi rampelli github',
    source: 'https://github.com/srilaxmirampelli/',
  },
  {
    id: 3,
    suggestion: 'srilaxmi rampelli youtube channel',
    source: 'https://www.youtube.com/channel/UCAxgUQ7YdrbZV3O96dthJ_g',
  },
  {
    id: 4,
    suggestion: 'srilaxmi rampelli twitter',
    source: 'https://twitter.com/srilaxmirampely',
  },
  {
    id: 5,
    suggestion: 'srilaxmi rampelli portfolio',
    source: 'https://srilaxmiprofile.ccbp.tech/',
  },
  {
    id: 6,
    suggestion: 'srilaxmi rampelli projects',
    source: 'https://srilaxmireactjs.ccbp.tech/',
  },
]

const App = () => <GoogleSuggestions suggestionsList={suggestionsList} />

export default App

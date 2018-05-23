import React, { Component } from 'react'
import LanguageContext from './Language'
import Home from './Home'

class App extends Component {
  state = { language: 'th' }

  setLanguage = (language) => {
    this.setState({ language })
  }

  render() {
    return (
      <LanguageContext.Provider value={{ language: this.state.language }}>
        <div style={{ textAlign: 'center' }}>
          <nav style={{ textAlign: 'right' }}>
            <span onClick={() => this.setLanguage('th')}>TH</span>
            /
            <span onClick={() => this.setLanguage('en')}>EN</span>
          </nav>
          <Home />
        </div>
      </LanguageContext.Provider>
    )
  }
}

export default App
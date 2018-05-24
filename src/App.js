import React, { Component } from 'react'
import Home from './Home'

class App extends Component {
  state = { language: 'th' }

  setLanguage = (language) => {
    this.setState({ language })
  }

  render() {
    return (
        <div style={{ textAlign: 'center' }}>
          <nav style={{ textAlign: 'right' }}>
            <span onClick={() => this.setLanguage('th')}>TH</span>
            /
            <span onClick={() => this.setLanguage('en')}>EN</span>
          </nav>
          <Home language={this.state.language} />
        </div>
    )
  }
}

export default App
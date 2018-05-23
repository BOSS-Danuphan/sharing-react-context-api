import React from 'react'
import LanguageContext from './Language'
import Feed from './Feed'

const Home = props => (
  <LanguageContext.Consumer>
    {({ language }) => (
      <div>
        <h1>{ language === 'th' ? 'หน้าหลัก' : 'Homepage' }</h1>
        <Feed />
      </div>
    )}
  </LanguageContext.Consumer>
)

export default Home

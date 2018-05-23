import React from 'react'
import LanguageContext from './Language'

const Feed = () => (
  <LanguageContext.Consumer>
    {({ language }) => (
      <div>
        <h2>{ language === 'th' ? 'โพสล่าสุด' : 'Recent Posts' }</h2>
      </div>
    )}
  </LanguageContext.Consumer>
)

export default Feed

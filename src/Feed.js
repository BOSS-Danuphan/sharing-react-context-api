import React from 'react'

const Feed = ({ language }) => (
  <div>
    <h2>{ language === 'th' ? 'โพสล่าสุด' : 'Recent Posts' }</h2>
  </div>
)

export default Feed

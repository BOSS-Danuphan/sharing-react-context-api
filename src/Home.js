import React from 'react'
import Feed from './Feed'

const Home = ({ language }) => (
  <div>
    <h1>{ language === 'th' ? 'หน้าหลัก' : 'Homepage' }</h1>
    <Feed language={language} />
  </div>
)

export default Home

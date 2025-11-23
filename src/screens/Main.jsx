import React from 'react'
import NavBar from './NavBar'
import Hero from './Hero'
import SkillSection from './SkillSection'
import AboutMe from './AboutMe'

const Main = () => {
  return (
    <div>
        <NavBar />
        <Hero />
        {/* <SkillSection /> */}
        <AboutMe />
    </div>
  )
}

export default Main
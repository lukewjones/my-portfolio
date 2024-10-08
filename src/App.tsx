import { Fragment } from 'react'
import './App.css'
import Header from './components/Header'
import Skills from './components/Skills.tsx'
import Work from './components/Work.tsx'
import Footer from './components/Footer.tsx'
import RefCard from './components/RefCard.tsx'
import { references } from './components/data.tsx'
import { HorizontalTicker } from "react-infinite-ticker"

function App() {
  return (
    <>
      <Header />
      <div className='site'>
        <div className='hook'>A jr. front-end engineer—excited to build products people love.</div>

        <div className="cards-wrapper">
          <div className="cards">
            <HorizontalTicker duration={90000}>
              {references.map((refData) => {
                return (
                  <Fragment key={refData.description}>
                    <RefCard {...refData} />
                  </Fragment>
                )
              })}
            </HorizontalTicker>
          </div>
        </div>

        <div className='container'>
          <div className='about-me'>
            <div className='intro'>Hi, I'm Luke Jones.</div>
            <div className='text'>
              I am a junior front-end engineer, who is eager to make my mark on the world of software engineering. 
              Driven by determination to grow, im always excited to take on challengesand learn new things!
              <br />
              <br />
              I learned SWE from the Frontend Developer Career Path on Scrimba.com which helped me become very familiar with
              HTML, CSS, JavaScript, and React, as well as many other concepts essential to software engineering.
              <br />
              <br />
              Away from the screen, I'm a people person who loves concerts, photography, movies,
               meeting new people and building friendships with anyone and everyone.
              <br />
              <br />
              Reach out to me if you'd like to collaborate on a project, discuss web development,
              or simply connect over our shared passions.
            </div>
          </div>
          <div className='container-two'>
          <Skills />
          <Work  />
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App

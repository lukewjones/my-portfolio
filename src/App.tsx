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
              I am a junior front-end engineer to make meaningful contributions to the software engineering landscape. 
              Driven by determination to grow, I'm always excited to take on new challenges and learn new things!
              <br />
              <br />
              I honed my software engineering skills through the Frontend Developer Career Path on Scrimba, 
              where I became proficient in HTML, CSS, JavaScript, React, and other key software engineering concepts.
              <br />
              <br />
              Outside of coding, I’m a people person who loves concerts, photography, movies, meeting new people,
              and building friendships with anyone and everyone.
              <br />
              <br />
              Feel free to reach out if you’d like to collaborate on a project, talk web development, or 
              simply connect over shared passions.
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

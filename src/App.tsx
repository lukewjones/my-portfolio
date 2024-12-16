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
        <h1 className='hook'>A jr. front-end engineer—excited to build products people love.</h1>

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
            <div className='title'>About Me</div>
            <div className='text'>
              Hi, I'm Luke Jones! I am a junior front-end engineer, eager to make meaningful contributions to the software engineering landscape. 
              Driven by determination to grow, I'm always excited to take on new challenges and learn new things!
              <br />
              <br />
              I honed my software engineering skills through the Frontend Developer Career Path on Scrimba, 
              where I became proficient in HTML, CSS, JavaScript, React, and other key software engineering concepts.
              <br />
              <br />
              Outside of coding, I’m a people person who loves concerts, <a className='instagram' href='https://www.instagram.com/luke_william_jones/' >photography</a>, <a className='letterboxd' href='https://boxd.it/BhP5a'>movies</a>, meeting new people,
              and building friendships with anyone and everyone.
              <br />
              <br />
              Feel free to <a className='Email' href='mailto:lukewjones2004@gmail.com?subject=Hello%20Luke&body=I%20would%20like%20to%20connect%20with%20you!'>reach out</a> if you’d like to collaborate on a project, talk web development, or 
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

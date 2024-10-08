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
              My specialty is in creating web systems with exceptional performance, and an attentiveness to detail 
              that allows me to succeed in building pixel perfect, meticulously crafted digital experiences.
              <br />
              <br />
              I'm an active contributor to the open-source ecosystems creating and contributing to packages, developer 
              tools and plugins, and language specs around languages and frameworks like React, Svelte, and Tailwind CSS
              <br />
              <br />
              Away from the screen, I'm an extrovert who loves to engage in outdoor adventures, travel, meet new 
              people, and cherish moments with family and close friends.
              <br />
              <br />
              Feel free to reach out if you'd like to collaborate, discuss web development, 
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

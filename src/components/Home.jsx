import React, { Component, state } from 'react'
import memo from '../../src/images/duck.jpeg';
import Contact from './Contact';
export default class Home extends Component {
  render() {
     
      state = {
        name:'Eman Hassan',
        job: 'Developer',
        btn: 'Contact me'

      }
    return (
        <header>
        <div className='container header__container'>
         <h2>Ciao , I'm  {state.name} </h2>
         <br />
         <div className='text-animate'>
          <h4 className="text-light"> {state.job} </h4>
          </div>
          <div>
          <Contact/>
            <div className='me__container'>
          <div className='me'>
            <img src={memo} alt="memo" />
          </div>
          </div>
          </div>
        </div>
      </header>
    )
  }
}

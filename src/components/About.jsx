import React, { useState } from 'react'
import Resume from './Resume';

const About = () => {
  const [state] = useState({name: 'Emanon', job: 'Software Developer',
  para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quo, facilis repellat, quidem expedita, in laborum tenetur nobis nulla quasi blanditiis praesentium obcaecati quaerat recusandae id at eum voluptates quis voluptas aliquam cumque eveniet ad iusto. Velit ut ea aliquam distinctio minus. Maiores culpa aperiam accusamus facere sapiente esse commodi repudiandae, perferendis modi molestias qui illo cumque, odit iste consectetur adipisci dignissimos alias placeat a obcaecati ut nobis ea architecto deserunt. Dicta quae beatae delectus quam perferendis ex unde. Itaque odit quia porro consectetur perspiciatis maiores similique corrupti id mollitia eum. Laboriosam iste voluptatibus culpa eligendi voluptatum blanditiis consequuntur consequatur    '
})

  return (
    <section id='about'>
      <br/>
      <br/>
      <h2>About <span>me :</span></h2>
     <div className="container about__container">

      <div className="about__content">
      <div className="job-title"><h2>I'm <span className='animate'>BioInformatics Engineer</span></h2></div>
        <div> <p>{state.para}</p>
      </div>
      </div>
     </div>
     <Resume/>
      <br /> <br /> <br />
    </section>
  )
}

export default About;
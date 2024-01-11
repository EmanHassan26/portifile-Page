
import React, {Component} from 'react';
import {IoLogoWhatsapp} from 'react-icons/io';
import {AiFillLinkedin} from 'react-icons/ai';
import {MdEmail} from 'react-icons/md';


export default class FooterSocial extends Component {
    render() {
      return (
        <>
    <div className='header__socials' id='headersocials' >
        <a title='LinkedIn' href="https://www.linkedin.com" target='_blank' rel="noreferrer"><AiFillLinkedin/></a>
        <a title='WhatsApp' href="https://wa.me/201060062584" target='_blank' rel="noreferrer"><IoLogoWhatsapp/></a>
        <a title='Gmail' href="mailto:rawanfouda840@gmail.com" target='_blank' rel="noreferrer"><MdEmail/></a>
        </div>
        </>
  )
      }
}


import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' onClick={()=> {setPlayState(true)}} />
        </div>
        <div className="about-right">
            <h3>Conhecendo o assunto:</h3>
            <h2>O QUE NUNCA TE CONTARAM SOBRE O LIXO</h2>
            <p>PARA ONDE VAI TODO O LIXO DO MUNDO? Vai tudo para os oceanos? Para os países mais pobres? Afinal, o que acontece com todo o lixo que é produzido diariamente no mundo?</p>
            <p>créditos: Canal Nostalgia</p>
        </div>
    </div>
  )
}

export default About
import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = ()=>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

const slideBackward = ()=>{
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <div className='testimonials'> 
    <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
    <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
    <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info" >
                        <img src={user_1} alt=""/>
                        <div onClick={() =>  window.open('https://pt.euronews.com/green/2024/01/16/reciclagem-de-cigarros-a-eslovaquia-esta-a-transformar-filtros-em-asfalto-para-estradas', '_blank')} style={{cursor:'pointer'}}>
                            <h3 className='h3'>Reciclagem de cigarros <span className='span'>  (pt.euronews.com) </span></h3>
                            </div>
                        </div>
                        <p className='manchete'>A Eslováquia está a transformar <g className='g'>filtros em asfalto</g> para estradas</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt=""/>
                        <div onClick={() =>  window.open('https://veja.abril.com.br/coluna/radar-economico/agroindustria-utiliza-97-mil-toneladas-de-plastico-reciclado-diz-estudo', '_blank')} style={{cursor:'pointer'}}>
                            <h3 className='h3'>Plástico Reciclado <span className='span'>  (veja.abril.com.br) </span></h3>
                            </div>
                        </div>
                        <p className='manchete'>Agroindústria utiliza <g className='g'>97 mil toneladas de plástico</g> reciclado, diz estudo</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt=""/>
                        <div onClick={() =>  window.open('https://pt.euronews.com/2024/03/18/como-fazer-arte-a-partir-de-metal-descartavel', '_blank')} style={{cursor:'pointer'}}>
                            <h3 className='h3'>Reciclagem de Metal Descartável <span className='span'>  (pt.euronews.com) </span></h3>
                            </div>
                        </div>
                        <p className='manchete'>Um antigo reparador de automóveis transformou <g className='g'>metais descartáveis em arte</g>​</p>
                </div>
            </li>

        </ul>
    </div>
    </div>
  )
}

export default Testimonials
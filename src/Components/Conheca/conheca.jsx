import React from 'react'
import './conheca.css'
import program_1 from '../../assets/program-1.png'
import program_2 from '../../assets/program-2.png'
import program_3 from '../../assets/program-3.png'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'

const conheca = () => {
  return (
    <div className="programs">
    <div
        className="program"
        onClick={() => (window.location.pathname = '/reciclagem-mecanica')}
    >
        <img src={program_1} alt="" />
        <div className="caption">
        <img src={program_icon_1} alt="" />
        <p>Reciclagem Mecânica</p>
        </div>
    </div>
        <div className="program" onClick={() => (window.location.pathname = '/reciclagem-energetica')}>
            <img src={program_2} alt="" />
            <div className="caption">
                <img src={program_icon_2} alt="" />
                <p>Reciclagem Energética</p>
            </div>
        </div>
        <div className="program"  onClick={() => (window.location.pathname = '/reciclagem-quimica')}>
            <img src={program_3} alt="" />
            <div className="caption">
                <img src={program_icon_3} alt="" />
                <p>Reciclagem Química</p>
            </div>
        </div>
    </div>
  )
}

export default conheca
import React from 'react'
import { NavLink } from 'react-router-dom'
import './Wellcome.css'

export default function Wellcome() {
  return (
    <section className='wellcome-page'>
        <div className="wellcome-gradient-container">
            <h2 className='wellcome-title'>HI!</h2>
            <div className="wellcome-container">
                <h1 className='wellcome-description-title'>Добро пожаловать на сайт TOT STUDIO</h1>
                <h1 className='wellcome-description'>Этот сайт выглядит как игровой / научно-фантастический интерфейс. всё содержимое внутри пытается это отразить.</h1>
                <h1 className='wellcome-description'>Здесь вы найдёте "работы" и "достижения", которые показывают прогресс нашей студии, а также сможете следить за статусом занятости студии.</h1>
                <NavLink className="wellcome-button" to={'/main'}><p>ПЕРЕЙТИ В СТУДИЮ</p></NavLink>
            </div> 
        </div>
    </section>
  )
}
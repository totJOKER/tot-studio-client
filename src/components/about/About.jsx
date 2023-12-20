import React from 'react'
import './About.css'
import { Skills } from '../../store/store'
import axios from 'axios';

export default function About() {

  let [logs, setLogs] = React.useState([]);
  React.useEffect(() => {
    let data = axios.get('http://localhost:8000/api/logs')
      .then(res => {
        setLogs(res.data);
      })
  }, [])

  return (
    <main className='page main-page-component'>
      <div className='about-main-div element-show'>
        <p className='about-main-title'>O нас</p>

        <div className='about-info-div'>
          <p className='about-info-p'>Информация</p>
          <div className='about-info-info-div'>
            <p className='about-info-info-p'>Расположение:</p><p className='about-info-info-p opacity'>Новосибирск</p>
          </div>
          <div className='about-info-info-div'>
            <p className='about-info-info-p'>Занятость команды:</p><p className='about-info-info-p opacity'>Работа над проектом</p>
          </div>
        </div>

        <div className='about-skills-div'>
          <p className='about-skills-p'>Скиллы</p>
          <div className='about-skills-skills-div'>
            {Skills.map(el => (
              <div className='about-skills-skill-div'>
                <p className='about-skills-skill-name'>{el.name}</p>
                <p className='about-skills-skill-description'>{el.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className='about-update-div'>
          <p>Журнал последних обновлений:</p>
          <div className='about-update-list'>
            {logs.map(data => (
              <div className='about-update-update'>
                <p>{data.name}</p>
                <p>дата: {data.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
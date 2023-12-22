import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './works.css'
import axios from 'axios'
import WorksSelect from './WorksSelect'
import { worksArr } from '../../store/store';

export default function Works() {
    
    const isIdWorks = (idSel) => {
        localStorage.setItem('work', idSel)
    }

    let [works, setWorks] = React.useState([])
    React.useEffect(() => {
        let data = axios.get('http://localhost:8000/api/works')
            .then(res => {
                setWorks(res.data)
            })
    }, [])
  return (
    <main className='page works-page'>
        <p className='element-show works-title'>Работы</p>
        <div className="element-show works-folder-page">
            <main className='work-is-select'>
                <Outlet/>
            </main>
            <section className='works-folder'>
                <div className="works-folder-title">Проводник</div>
                <div className="works-folder-directory">Расположение: </div>
                <div className="works-folder-container">
                {works.map(data => (
                    // eslint-disable-next-line react/jsx-key
                    <NavLink className="works-button" onClick={() => isIdWorks(`/works/${data.id}`)} id={data.id} to={`/works/${data.id}`} value={data.id} key={data.id}>
                        <img className='works-button-image' src="/images/works-folder-image.svg" alt="" />
                        <div className="works-button-info">
                            <p className="works-button-text">{data.category}/{data.work}</p>
                            <p className="works-button-text">{data.weigth}</p>
                        </div>
                    </NavLink>
                ))}
                </div>
            </section>
        </div>
    </main>
  )
}

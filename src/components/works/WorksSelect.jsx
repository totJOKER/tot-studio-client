import React from 'react'
import axios from 'axios'

export default function WorksSelect() {
    
    let workSelect = localStorage.getItem('work')

    let [works, setWorks] = React.useState([])
    React.useEffect(() => {
        let data = axios.get('http://localhost:8000/api/works')
            .then(res => {
                setWorks(res.data)
            })
    }, [])
  return (
    <div>

        {works.map((data, i) => {
            if (workSelect[7] == i + 1) {
                return (
                    // eslint-disable-next-line react/jsx-key
                    <section className='element-show work-info-container'>
                        <div className="work-description-info">
                            <div className="work-description-title">Детали</div>
                            <div className="work-description-box">
                                <p className="work-text-title">Имя проекта</p>
                                <p className="work-text">{data.work}</p>
                            </div>
                            <div className="work-description-box">
                                <p className="work-text-title">Описание</p>
                                <p className="work-text">{data.description}</p>
                            </div>
                        </div>
                        {data.image != '' ? 
                            <div className="work-stack-info-container">
                                <img className='work-image' src={data.image} alt="" />
                            </div>
                            : 
                            <></>
                        }
                        <div className="work-stack-info-container">
                            <p className='work-description-title'>Используемые технологии</p>
                            <div className="work-stack-info">
                                {data.stack.includes('NJS') ? <img className='work-image-stack' src="/images/jsW.svg" alt="" /> : <></> }
                                {data.stack.includes('JSX') ? <img className='work-image-stack' src="/images/reactW.svg" alt="" /> : <></> }
                                {data.stack.includes('GIT') ? <img className='work-image-stack' src="/images/gitW.svg" alt="" /> : <></> }
                                {data.stack.includes('JS') ? <img className='work-image-stack' src="/images/javaScriptW.svg" alt="" /> : <></> }
                                {data.stack.includes('FM') ? <img className='work-image-stack' src="/images/figmaW.svg" alt="" /> : <></> }
                            </div>
                        </div>
                        <div className="work-shell">
                            <p className="work-shell-p">О проекте:</p>
                            <p className="work-shell-text">{data.shell}</p>
                        </div>
                    </section>
                )
            }
        })}
    </div>
  )
}

import React from 'react'
import axios from 'axios';
import HomeLogo from '../../assets/model/homeLogo/HomeLogo';
import LogoScene from '../../assets/model/LogoScene/LogoScene';

export default function InfoStudioBar() {

    let [works, setWorks] = React.useState([]);
    React.useEffect(() => {
        let data = axios.get('http://localhost:8000/api/navbar')
            .then(res => {
                setWorks(res.data);
            })
    }, [])

    return (
        <nav className='nav-static'>
            <div className='nav-info-tracking'>
                <div className='nav-info-bar'>
                    {/* {works.map(data => (
                        <p className='nav-works-num'>{data.works}</p>
                    ))} */}
                    <p className='nav-works-p'>Выполнено работ</p>
                </div>
            </div>
            <div className='nav-info-container'>
                <div className='logo-image-container'>
                    {/* <img className='logo-image' src="" alt="" /> */}
                    <LogoScene />
                </div>

                <div className='nav-info-text-box'>
                    <p className='nav-info-name'>Название</p>
                    <p className='nav-info-description'>TOT STUDIO</p>
                </div>

                <div className='nav-info-text-box'>
                    <p className='nav-info-name'>Медиа</p>
                    <p className='nav-info-description'>Telegram</p>
                </div>

                <div className='nav-info-text-box'>
                    <p className='nav-info-name'>Сайт</p>
                    <p className='nav-info-description'>TotStudio.Com</p>
                </div>

                <div className='nav-info-text-box'>
                    <p className='nav-info-name'>Почта</p>
                    <p className='nav-info-description-back'>totstudio@gmail.com</p>
                </div>

                <div className='nav-info-text-box'>
                    <p className='nav-info-name'>Время работы</p>
                    <p className='nav-info-description-border'>4:00 - 18:00 [MSK]</p>
                </div>
            </div>
        </nav>
    )
}
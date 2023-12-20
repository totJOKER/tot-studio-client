import React from 'react'
import './bar.css'

export default function InfoWorkBar() {
    let date = new Date();
    let localDate = new Date(`August 19, 2023 ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} GMT+07:00`);
    let studioTime = `${localDate.getHours()}:${localDate.getMinutes()}`;
    let localTime;
    if (date.getMinutes() < 10) {
        localTime = `${date.getHours()}:0${date.getMinutes()}`
    } else {
        localTime = `${date.getHours()}:${date.getMinutes()}`
    }
    let TimeArr = [
        {
            timeType: 'ВАШЕ ВРЕМЯ',
            time: localTime,
        },
        {
            timeType: 'ВРЕМЯ СТУДИИ',
            time: studioTime,
        }
    ]

    return (
        <nav className='nav-static'>
            <div className='nav-info-tracking'>
                <div className='nav-info-bar'>
                    {TimeArr.map(data => (
                        <div className='time-container'>
                            <p className='time-info'>{data.timeType}</p>
                            <p className='time-p'>{data.time}</p>
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    )
}
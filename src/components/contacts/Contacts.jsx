import React, { useState } from 'react'
import './Contacts.css'
import { ContactsTable } from '../../store/store'
import axios from 'axios';

export default function Contacts() {

  let name = React.useRef()
  let mail = React.useRef()
  let application = React.useRef()

  const postData = () => {
    if ( name.current.value != '' && mail.current.value != '' && application.current.value != '') {
      if (mail.current.value.includes('@') && application.current.value.length >= 20 && mail.current.value.length >= 7 && application.current.value.length <= 65000) {
        let addPost = axios.post('http://localhost:8000/api/applications', {
          id: null,
          nameAdd: name.current.value,
          mailAdd: mail.current.value,
          applicationAdd: application.current.value,
        })
        name.current.value = ''
        mail.current.value = ''
        application.current.value = ''
        localStorage.setItem("name", '')
        localStorage.setItem("mail", '')
        localStorage.setItem("app", '')
        alert('все гуд')
      } else {
        alert('наебни говна олух почту мне дай сои хуец молодец')
      }
    } else {
      alert('вы заполнили не все поля ахах лохи')
    }
  }

  const setLocalText = () => {
    localStorage.setItem("name", name.current.value);
    localStorage.setItem("mail", mail.current.value);
    localStorage.setItem("app", application.current.value);
  }

  return (
    <main className='page contact-page'>
      <section className='contacts-section element-show'>
        <div className='contacts-main-inputer-div'>
            <p className='contacts-statement-p'>Оставьте Заявку</p>
            <div className='contacts-statement-getstate-div'>
              <div className='contacts-statement-getstate-input-div'>
                <p className='contacts-statement-getstate-input-p'>Представтесь</p>
                <input onInput={setLocalText} ref={name}  placeholder='name'  defaultValue={localStorage.getItem('name')} type="text" className='contacts-statement-getstate-input' />
              </div>
              <div className='contacts-statement-getstate-input-div'>
                <p className='contacts-statement-getstate-input-p'>Почта</p>
                <input onInput={setLocalText} ref={mail} defaultValue={localStorage.getItem("mail")}  placeholder='your.name@example.com' type="mail" className='contacts-statement-getstate-input' />
              </div>
              <div className='contacts-statement-getstate-input-div'>
                <p className='contacts-statement-getstate-input-p'>Обрaщение</p>
                <textarea onInput={setLocalText} defaultValue={localStorage.getItem("app")} rows="10" cols="50" ref={application} placeholder='ввести...' className='sender'></textarea>
              </div>
            </div>
            <button onClick={postData} className='contacts-inputer-send-button'><p>Отправить</p></button>
        </div>

        <div className='contacts-main-info-div'>
          <div className='contacts-info-contacts-heading'>
            <p className='contacts-info-heading-p'>Контакты</p>
            <p className='contacts-info-desc-p'>все, что связано с нашей студией</p>
          </div>
          <div className='contacts-info-contacts-ns'>
            <div className='contacts-info-ns-shrink'>
            {ContactsTable.map(data => (
              <p className='contacts-info-p-name'>{data.name}</p>
            ))}
            </div>
            <div className='contacts-info-ns-shrink'>
            {ContactsTable.map(data => (
              <p className='contacts-info-p-statement'>{data.statement}</p>
            ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './reset.css'
import Header from './components/header/Header'
import InfoStudioBar from './components/static-bar/InfoStudioBar'
import InfoWorkBar from './components/static-bar/InfoWorkBar'
import Main from './components/main/Main'
import About from './components/about/About'
import Contacts from './components/contacts/Contacts'
import Works from './components/works/works'
import Wellcome from './components/WellcomePage/Wellcome'
import WorksSelect from './components/works/WorksSelect'

export default function App() {
  return (
    <BrowserRouter>
      <main className='main-page'>
        <InfoStudioBar />
        <Routes>
            <Route index Component={Wellcome} />
            <Route path='/main' Component={Main} />
            <Route path='/about' Component={About} />
            <Route path='/works' Component={Works}>
              <Route path='/works/:id' Component={WorksSelect} />
            </Route>
            <Route path='/contacts' Component={Contacts} />

        </Routes>
        <Header />
        <InfoWorkBar />
      </main>
      <div className='background'><div className='gradient-container'></div></div>
    </BrowserRouter>
  )
}
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GeneralInformation from './components/GeneralInformation.jsx'
import EducationalExperience from './components/EducationalExperience.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <GeneralInformation/>
    <EducationalExperience></EducationalExperience>
  </StrictMode>,
)

import React from 'react'

import Card from './Card-proyect'

import './styles/Proyects.scss'
import weather from '../assets/img/weather-app.png'
import pomodro from '../assets/img/pomodoro.png'
import todo from '../assets/img/to-do.png'

export default function Proyects(){
    return (
        <div id='proyects-container'>
            <h2>Proyects</h2>
            <div className='proyects width-container'>
                <Card 
                    name="Weather App"
                    content="This project was developed at Henry's Bootcamp with React and Redux. The public weather api was used "
                    img={weather}
                    url={'https://the-weather-webapp.netlify.app/'}
                    urlGitHub={'https://github.com/maxi326519/clima-app'}
                />
                <Card 
                    name="Pomodoro App"
                    content="The app for manage your time more efficuently, breaking it up into small pomodoro beats and adding breaks in between"
                    img={pomodro}
                    url={'https://pomodoro-page.netlify.app/'}
                    urlGitHub={'https://github.com/maxi326519/pomodoro-app'}
                />
                <Card 
                    name="To Do App"
                    content="The to do app to manage your tasks, adding date limite and time limite for them, and grouping them into categories"
                    img={todo}
                    url={'https://the-todo-list-webapp.netlify.app/'}
                    urlGitHub={'https://github.com/maxi326519/to-do-list-app'}
                />
            </div>
{/*             <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path d="M0,128L34.3,160C68.6,192,137,256,206,266.7C274.3,277,343,235,411,224C480,213,549,235,617,250.7C685.7,267,754,277,823,256C891.4,235,960,181,1029,170.7C1097.1,160,1166,192,1234,202.7C1302.9,213,1371,203,1406,197.3L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
 */}        </div>
    )
}
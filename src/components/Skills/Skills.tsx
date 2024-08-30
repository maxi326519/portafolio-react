import Icon from './Icon'

import './Skills.scss'
import LogoHtml from '../../assets/svg/html.svg'
import LogoCss from '../../assets/svg/css.svg'
import LogoJS from '../../assets/svg/javascript.svg'
import LogoNodeJS from '../../assets/svg/nodejs.svg'
import LogoSass from '../../assets/svg/sass.svg'
import LogoReact from '../../assets/svg/react.svg'

export default function Skills(){
    return(
        <div id='skills'>
            <h2>Skills</h2>
            <div className='skills__container width-container'>
                <Icon className={'icon-js'} svg={LogoJS}/>
                <Icon className={'icon-css'} svg={LogoCss}/>
                <Icon className={'icon-html'} svg={LogoHtml}/>
                <Icon className={'icon-node'} svg={LogoNodeJS}/>
                <Icon className={'icon-sass'} svg={LogoSass}/>
                <Icon className={'icon-react'} svg={LogoReact}/>
            </div>
        </div>
    )
}
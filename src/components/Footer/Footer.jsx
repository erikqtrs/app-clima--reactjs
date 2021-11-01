import React from 'react'
import openWeather from '../../assets/img/openweather.png'
import timeZone from '../../assets/img/timezone.png'
import logo from '../../assets/img/logo.png'
import './footer.scss'

export const Footer = () => {
    return (
        <footer>
            <div className="content__footer">
                <header className="header__footer">
                    <div className="logo">
                        <img src={logo} alt=""/>
                    </div>
                    <div className="text">
                        <h3> TimeWeath </h3>
                    </div>
                </header>
                <div className="apis">
                    <h3> Powered By </h3>
                    <div className="content__apis">
                        <div className="logo__weather logo__api">
                            <img src={openWeather} alt=""/>
                        </div>
                        <div className="logo__time logo__api">
                            <img src={ timeZone } alt=""/>
                        </div>
                    </div>
                </div>

                <div className="copy__rights">
                    <p> Todos los Derechos Reservados &copy; 2020 | Erik Carcelén </p>
                </div>
                
            </div>
        </footer>
    )
}

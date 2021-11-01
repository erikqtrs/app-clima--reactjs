import React from 'react'
import logo from '../../assets/img/logo.png'
import './header.scss'
export const HeaderComponent = () => {
    return (
        <header className="app__header">
            <div className="header__app-content">
                <div className="header__logo">
                    <img
                        src={ logo }
                        alt="logo app"
                    />
                </div>
                <div className="header__title">
                    <h1> TimeWeath </h1>
                    <h3> Your Weather Browser </h3>
                </div>
            </div>
        </header>
    )
}

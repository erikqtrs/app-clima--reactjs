import React, { useContext, Fragment } from 'react'
import { WeatherContext } from '../../context/WeatherContext'
import { DateTime } from '../DateTime/DateTime'
import { WiHumidity, WiBarometer} from 'react-icons/wi'
import { FaEye, FaCloud, FaMapMarkerAlt } from 'react-icons/fa'
import './weather.scss'
import { IconContext } from 'react-icons/lib'


export const Weather = () => {

    const { apiWeather } = useContext(WeatherContext)
    const { data, error } = apiWeather
    
    return(
      <Fragment>
        {
                error !== '' ? (
                    <div className="error">
                        { `${error}` }
                    </div>
                )
                :
                null
        }
        {
           Object.keys(data).length !== 0  ? (
            <div className="main__card">
              <div className="row header">
                <header className="header__place">
                  <h2> <FaMapMarkerAlt/> { data.name }, { data.sys?.country } </h2>
                  <DateTime/>
                </header>
              </div>
              
              <div className="row-general">
                <div className="column-1">
                  <section className="section__weather">
                    <div className="content__weather content">
                    {
                        data.weather?.map( w => {
                          return(
                            <Fragment key={w.id}>
                              <h4> { w.main } </h4>
                              <h4> { w.description } </h4>
                              <img src={`http://openweathermap.org/img/wn/${w.icon}@2x.png`} alt=""/>
                            </Fragment>
                          )
                        } )
                    }
                    <p> { Math.floor( data.main?.temp ) } &deg;C </p>
                    </div>
                  </section>
                </div>
      
                <div className="column-2">
                  <div className="row-1">
                    <section className="section__meteorological">
                      <header className="header__meteorological">
                        <h4> Meteorological Data </h4>
                      </header>
                      <div className="content__meteorological content-flex">
                        <IconContext.Provider value={{ className: 'react-icons' }}>
                          <div className="mt__data">
                            <h5> <WiHumidity/> </h5>
                            <span> { data.main?.humidity }% </span>
                          </div>
                          <div className="mt__data">
                            <h5> <FaEye/> </h5>
                            <span> { data.visibility }m </span>
                          </div>
                          <div className="mt__data">
                            <h5> <FaCloud/> </h5>
                            <span> { data.clouds?.all }% </span>
                          </div>
                          <div className="mt__data">
                            <h5> <WiBarometer/> </h5>
                            <span> { data.main?.pressure }hPa </span>
                          </div>
                        </IconContext.Provider>
                      </div>
                    </section>
                  </div>
      
                  <div className="row-2">
                    <div className="column">
                      <section className="section__temp-min-max">
                        <div className="content__temp__min-max content-flex">
                            <div className="temp__min">
                              <h4> Temp Min </h4>
                              <span> { Math.floor(data.main?.temp_min) }&deg;C </span>
                            </div>
                            <div className="temp__max">
                              <h4> Temp Max </h4>
                              <span> { Math.floor(data.main?.temp_max) }&deg;C </span>
                            </div>
                        </div>
                      </section>
                    </div>
                    <div className="column">
                      <section className="section__wind">
                        <header className="header__wind">
                          <h4> Wind </h4>
                        </header>
                        <div className="content__wind content-flex">
                            <div className="wind__data">
                              <h5> Deg </h5>
                              <span> { data.wind?.deg }&deg; </span>
                          </div>
                          <div className="wind__data">
                              <h5> Speed </h5>
                              <span> { data.wind?.speed }m/s </span>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
        
            </div>
          ): null
        }
      </Fragment>
      
    )
    
   
    
   
}

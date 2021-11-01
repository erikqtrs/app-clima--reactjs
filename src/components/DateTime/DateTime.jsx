import React, { useState, useEffect, useContext, Fragment } from 'react'
import axios from 'axios'
import { WeatherContext } from '../../context/WeatherContext'
import './datetime.scss'

export const DateTime = () => {
    
    const {apiWeather, getLocation} = useContext(WeatherContext)
    const { data } = apiWeather
    
    const [apiTimeZone, setApiTimeZone] = useState({})
   

    useEffect(() => {
        const getDateTime = async () => {
            if (data) {
                const [ lat, lon ] = getLocation()
                const APIKEY = process.env.REACT_APP_TIMEZONE_APIKEY;
                const url = `https://api.timezonedb.com/v2.1/get-time-zone?key=${APIKEY}&format=json&by=position&lat=${lat}&lng=${lon}`;
                let response = null
                try {
                    response = await axios.get(url)
                    setApiTimeZone({
                        ...apiTimeZone,
                        loading: false,
                        data: response.data,
                        error: ''
                    })
                    console.log( response.data )
                    
                } catch (error) {
                    setApiTimeZone({
                        ...apiTimeZone,
                        loading: false,
                        data: {},
                        error: ''
                    })
                }
               }
        }
        
        getDateTime()
    }, [data])
   
    

    return (
       <Fragment>
           <h3> { apiTimeZone.data?.formatted } </h3>
       </Fragment>
    )
}

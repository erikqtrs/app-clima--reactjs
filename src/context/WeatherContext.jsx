import React, { createContext, useState, useEffect } from 'react'
import { useForm } from '../hooks/useForm';
import axios from 'axios'

//Creacion del context
export const WeatherContext = createContext();

export const WeatherContextProvider = (props) => {
    

    //useForm-manejo del formulario
    const [ formValues, handleInput ] =  useForm({
        city: "",
        country: ""
    })
    const { city, country } = formValues

    //state para el weather
    const [apiWeather, setApiWeather] = useState({
        loading: true,
        data: {},
        error: ''
    })

    //state para controlar el llamado a la api
    const [queryMade, setQueryMade] = useState(false)

    useEffect(() => {
        const getWeather = async () => {
            
            if (queryMade) {
                let APIKEY = process.env.REACT_APP_WEATHER_APIKEY ;
                let url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${APIKEY}&units=metric`
                let response = null
                try {
                    response = await axios.get(url);
                    setApiWeather({
                        ...apiWeather,
                        loading: false,
                        data: response.data,
                        error: ''
                    })
                    setQueryMade(false)
                    console.log(response.data)
                    
                } catch (error) {
                    setApiWeather({
                        ...apiWeather,
                        loading: false,
                        data: {},
                        error: `${error}`
                    })
                    setQueryMade(false)
                }
            }
        }
        getWeather();
    }, [queryMade])

    const getLocation = () => {
        return [ apiWeather.data.coord?.lat, apiWeather.data.coord?.lon ]
    }
    return(
        <WeatherContext.Provider value={{
            apiWeather,
            formValues,
            handleInput,
            setQueryMade,
            queryMade,
            getLocation
        }}>
            { props.children }
        </WeatherContext.Provider>
    )

}

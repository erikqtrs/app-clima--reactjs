import React, { Fragment, useContext, useState } from 'react'
import { WeatherContext } from '../../context/WeatherContext'
import { FaSearch } from 'react-icons/fa'
import './form.scss'
import { IconContext } from 'react-icons/lib'
  


 

export const FormComponent = () => {
    
    const {formValues, handleInput, setQueryMade, apiWeather} = useContext(WeatherContext)
    const [errorForm, setErrorForm] = useState(false)
    const { city, country } = formValues
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (city.trim() === '' || country.trim() === '') {
            setErrorForm( true )
        }else{
            setErrorForm( false )
        }
        setQueryMade(true)       
        
    }

    

    return (
        <Fragment>
            {
                errorForm ? (
                    <div className="errorForm">
                        <p> Todos los campos son obligatorios </p>
                    </div>
                )
                : null
            }
            <form onSubmit={ handleSubmit } className="form">
                <div className="form__items">
                    <input
                        type="text"
                        placeholder="Write your city"
                        name="city"
                        value={city}
                        onChange={handleInput}
                    />
                </div>
                <div className="form__items">
                    <select
                        name="country"
                        value={country}
                        onChange={handleInput} 
                    >
                        <option value="select">--Select a country--</option>
                        <option value="af">Afghanistan</option>
                        <option value="ar">Argentina</option>
                        <option value="au">Australia</option>
                        <option value="at">Austria</option>
                        <option value="be">Belgium</option>
                        <option value="bo">Bolivia</option>
                        <option value="br">Brazil</option>
                        <option value="ca">Canada</option>
                        <option value="cl">Chile</option>
                        <option value="cn">China</option>
                        <option value="co">Colombia</option>
                        <option value="cr">Costa Rica</option>
                        <option value="hr">Croatia</option>
                        <option value="cu">Cuba</option>
                        <option value="ec">Ecuador</option>
                        <option value="eg">Egypt</option>
                        <option value="fi">Finland</option>
                        <option value="fr">France</option>
                        <option value="de">Germany</option>
                        <option value="gr">Greece</option>
                        <option value="in">India</option>
                        <option value="ir">Iran</option>
                        <option value="iq">Iraq</option>
                        <option value="il">Israel</option>
                        <option value="it">Italy</option>
                        <option value="jm">Jamaica</option>
                        <option value="jp">Japan</option>
                        <option value="kr">Soth Korea</option>
                        <option value="my">Malaysia</option>
                        <option value="mx">Mexico</option>
                        <option value="nl">Netherlands</option>
                        <option value="nz">New Zeland</option>
                        <option value="no">Norway</option>
                        <option value="pa">Panama</option>
                        <option value="py">PAraguay</option>
                        <option value="pe">Peru</option>
                        <option value="pt">Portugal</option>
                        <option value="qa">Qatar</option>
                        <option value="ru">Russia</option>
                        <option value="sa">Saudi Arabia</option>
                        <option value="sg">Singapore</option>
                        <option value="es">Spain</option>
                        <option value="se">Sweden</option>
                        <option value="ch">Switzerland</option>
                        <option value="tr">Turkey</option>
                        <option value="ua">Ukraine</option>
                        <option value="ae">United Arab Emirates</option>
                        <option value="gb">United Kingdom</option>
                        <option value="us">United States</option>
                        <option value="uy">Uruguay</option>
                        <option value="ve">Venezuela</option>
                    </select>
                </div>
                <div className="form__items">
                    <IconContext.Provider value={{
                        className:"react-icons",
                        color: "black"
                    }}>
                        <button>
                            Search
                        </button>
                    </IconContext.Provider>
                </div>
            </form>
        </Fragment>
    )
}

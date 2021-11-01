import React, { Fragment } from 'react';
import { WeatherContextProvider } from './context/WeatherContext';
import { FormComponent } from './components/Form/Form';
import { HeaderComponent } from './components/Header/Header';
import { Weather } from './components/WeatherItem/Weather';
import { Footer } from './components/Footer/Footer';




function App() {
  return (
    <Fragment>
      <HeaderComponent/>
      
      <div className="container">
        <WeatherContextProvider>
              <FormComponent/>
              <Weather/>
        </WeatherContextProvider>
      </div>

      <Footer/>      
    </Fragment>
  );
}

export default App;

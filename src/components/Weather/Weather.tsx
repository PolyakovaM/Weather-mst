import React from 'react'

import { FavoriteCities } from "../FavoriteCities/FavoriteCities"
import { WeatherField } from "../WeatherField/WeatherField"
import { InfoAboutWeather } from "../InfoAboutWeather/InfoAboutWeather"
import { EmptyDiv, WeatherForecastItems } from "./WeatherStyles"
import { ButtonToOpen } from '../Modal/ButtonToOpen'

export const Weather = () => {
  return (
    <EmptyDiv>
      <WeatherField />
      <WeatherForecastItems>
        <FavoriteCities />
        <InfoAboutWeather />
      </WeatherForecastItems>
      <ButtonToOpen />
    </EmptyDiv>
  )
}
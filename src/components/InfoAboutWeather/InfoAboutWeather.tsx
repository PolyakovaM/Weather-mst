import React from 'react'
import { observer } from 'mobx-react-lite'
import { find } from 'lodash'

import { localStore, weatherStore } from '../../store/weatherStore'

import {
  InfoAboutWeatherBlock, 
  InfoAboutWeatherButton, 
  EmptySpan, 
  CityDiv, 
  WeatherIcon, 
  WeatherDiv, 
  InfoAboutWeatherButtonDiv
} from './InfoAboutWeatherStyle'

export const InfoAboutWeather = observer(() => {

  const {
    addFavoriteCity, 
    favoriteCities
  } = localStore

  const {
    result, 
    weatherIcon
  } = weatherStore

  if (!result) return null

  const {
    name,
    main,
    clouds,
    wind
  } = result

  const checkExistValue = () => {
    const isExistValue = find(favoriteCities, city => city === name)
    if (!isExistValue) addFavoriteCity(name)
  }

  return (
    <InfoAboutWeatherBlock>
      <CityDiv>
        {name}
        <WeatherIcon src={weatherIcon || ''} alt='weatherIcon' />
      </CityDiv>
      <WeatherDiv>
        <EmptySpan>Температура</EmptySpan>
        <EmptySpan>{Math.round(main.temp)}°</EmptySpan>
      </WeatherDiv>
      <WeatherDiv>
        <EmptySpan>Ощущается как</EmptySpan>
        <EmptySpan>{Math.round(main.feels_like)}°</EmptySpan>
      </WeatherDiv>
      <WeatherDiv>
        <EmptySpan>Облачность</EmptySpan>
        <EmptySpan>{clouds.all}%</EmptySpan>
      </WeatherDiv>
      <WeatherDiv>
        <EmptySpan>Влажность</EmptySpan>
        <EmptySpan>{main.humidity}%</EmptySpan>
      </WeatherDiv>
      <WeatherDiv>
        <EmptySpan>Давление</EmptySpan>
        <EmptySpan>{Math.round(main.pressure / 1.333)} мм рт.ст.</EmptySpan>
      </WeatherDiv>
      <WeatherDiv>
        <EmptySpan>Ветер</EmptySpan>
        <EmptySpan>{Math.round(wind.speed)} м/с</EmptySpan>
      </WeatherDiv>
      <InfoAboutWeatherButtonDiv>
        <InfoAboutWeatherButton onClick={checkExistValue}>
          Добавить в избранное
        </InfoAboutWeatherButton>
      </InfoAboutWeatherButtonDiv>
    </InfoAboutWeatherBlock>
  )
})

import React, { 
  BaseSyntheticEvent, 
  KeyboardEvent, 
  useState 
} from 'react'
import { observer } from 'mobx-react-lite'

import { weatherStore } from '../../store/weatherStore'

import { 
  EmptyDiv, 
  EmptyHeader, 
  WeatherFieldInput, 
  WeatherFieldButton, 
  ErrorMessageDiv, 
  EmptyDivForm
} from './WeatherFieldStyle'

export const WeatherField = observer(() => {
  const {
    getData, 
    searchError,
    setSearchError
  } = weatherStore
  const [city, setCity] = useState('')

  const onChangeValue = (e: BaseSyntheticEvent) => {
    setCity(e.currentTarget.value.trimLeft())
    if (searchError) setSearchError(false)
  }

  const handleSubmit = () => {
    getData(city) 
    setCity('')
  }

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  return (
    <EmptyDiv>
      <EmptyHeader>Weather Forecast</EmptyHeader>
      <EmptyDivForm>
        <WeatherFieldInput 
          onChange={onChangeValue} 
          value={city} 
          onKeyDown={onKeyDown}
          placeholder='Введите название города'
        />
        <WeatherFieldButton onClick={handleSubmit}>Найти</WeatherFieldButton>
        {searchError && (
          <ErrorMessageDiv>
            По данному запросу ничего не найдено! Попробуй еще раз :)
          </ErrorMessageDiv>
        )}
      </EmptyDivForm>
    </EmptyDiv>
  )
})

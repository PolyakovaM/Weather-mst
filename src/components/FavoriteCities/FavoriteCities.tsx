import React from 'react'
import { observer } from 'mobx-react-lite'
import { map } from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import { localStore, weatherStore } from '../../store/weatherStore'
import { 
  EmptySpan, 
  FavoriteCityDiv, 
  AddedCitiesDiv, 
  AddedCity, 
  EmptyDiv, 
  IconDiv 
} from './FavoriteCitiesStyle'

export const FavoriteCities = observer(() => {
  const { favoriteCities, deleteFavoriteCity } = localStore

  const { getData } = weatherStore
  
  return (
    <FavoriteCityDiv>
      <EmptySpan>Избранное</EmptySpan>
      <AddedCitiesDiv>
        {map(favoriteCities, city => (
          <AddedCity key={city}>
            <EmptyDiv onClick={() => getData(city)}>
              {city}
            </EmptyDiv>
            <IconDiv>
              <FontAwesomeIcon 
                onClick={() => {deleteFavoriteCity(city)}} 
                icon={faTimes}
              />
            </IconDiv>
          </AddedCity>
        ))}
      </AddedCitiesDiv>
    </FavoriteCityDiv>
  )
})

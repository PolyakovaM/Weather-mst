import { 
  cast, 
  flow, 
  types 
} from "mobx-state-tree"
import filter from "lodash/filter"
import { persistInLocalStorage } from "mobx-state-tree-localstorage"

const key = 'ffc2c0eee045e3efaee8dbcbe56a9aaf'

const WeatherFavoritesCity = types
  .model({
    favoriteCities: types.array(types.string)
  })
  .actions(self => ({
    addFavoriteCity(city: string) {
      self.favoriteCities.push(city)
    },
    deleteFavoriteCity(cityDelete: string) {
      self.favoriteCities = cast(filter(self.favoriteCities, city => city !== cityDelete))
    }
  }))

const Weather = types
  .model({
    result: types.frozen(),
    weatherIcon: types.maybeNull(types.string),
    searchError: false
  })
  .actions(self => ({
    setResult(result: any) {
      self.result = result
    },
    setSearchError(searchError: boolean) {
      self.searchError = searchError
    },
    setWeatherIcon(weatherIcon: string) {
      self.weatherIcon = weatherIcon
    }
  }))
  .actions(self => ({
    setSearchError(value: boolean) {
      self.searchError = value
    },
    // getData: flow(function*(city: string) {
    //   const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=ru`
    //   const data = yield fetch(url)
    //   try {
    //     const result = yield data.json()
    //     const img =  `http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png` 
    //     self.searchError = false
    //     self.result = result
    //     self.weatherIcon = img
    //   } catch (error) {
    //     console.error("Failed to fetch projects", error)
    //     self.searchError = true
    //   }
    // })
    async getData (city: string) {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=ru`
      const data = await fetch(url)
      try {
        const result = await data.json()
        const img =  `http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png` 
        self.setSearchError(false)
        self.setResult(result)
        self.setWeatherIcon(img)
      } catch (error) {
        console.error("Failed to fetch projects", error)
        self.setSearchError(true)
      }
    }
  }))

export const localStore = persistInLocalStorage({
  tree: WeatherFavoritesCity,
  id: 'WeatherFavoritesCity',
  initialState: {
    favoriteCities: ['Киев']
  }
})

export const weatherStore = Weather.create()

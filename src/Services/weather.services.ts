import api from '../api'
import useSWR from "swr";

export const useGetCurrentLocation = (langtitude: number, longtitude: number) => {

    const {data, error, isValidating} = useSWR( langtitude ? 'current-location' : null, async () =>  {
        const respone = await api.weatherApi.getCurrentLocation(langtitude, longtitude)
        return respone
      },
      {revalidateOnFocus : false}
    )
    return {data, error, isValidating}
}

export const useGetCityLocation = (city: string) => {
    const {data, error, isValidating} = useSWR('city-location', async () => {
        const respone = await api.weatherApi.getCityLocation(city)
        const res = await api.weatherApi.getCurrentLocation(respone.coord.lat, respone.coord.lon)
        return res
    },
    {revalidateOnFocus : false})
    return {data, error, isValidating}

} 
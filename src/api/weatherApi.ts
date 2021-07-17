import apiBase from './base'
import {iOneCall, iCurrent} from '../model'

export default class weatherApi {
    public async getCurrentLocation(langtitude: number, longtitude: number) {
        return await apiBase.get<iOneCall>(`/onecall?lat=${langtitude}&lon=${longtitude}&exclude=hourly,minutely&units=metric&appid=f3903d4b90a1acf2c29ae8a2151445a3`)
    }

    public async getCityLocation(city: string) {
        return await apiBase.get<iCurrent>(`/weather?q=${city}&appid=f3903d4b90a1acf2c29ae8a2151445a3&units=metric`)
    }
}
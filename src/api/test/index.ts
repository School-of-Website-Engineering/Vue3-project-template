// http://www.weather.com.cn/data/sk/101190408.html
import http from '@/utils/http';
export const WEATHER_NOW = '/data/sk/101190408.html';

export interface WeatherNow {
    weatherinfo: Record<string, never>;
}
class WeatherService implements WeatherApi {
    getWeatherNow(): Promise<WeatherNow> {
        return http.get(WEATHER_NOW);
    }
}

export interface WeatherApi {
    getWeatherNow(): Promise<WeatherNow>;
}

export default new WeatherService();

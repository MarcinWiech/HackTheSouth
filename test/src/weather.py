import configparser
import requests

test_json = "{'coord': {'lon': -0.13, 'lat': 51.51}, 'weather': [{'id': 803, 'main': 'Clouds', 'description': 'broken clouds', 'icon': '04d'}], 'base': 'stations', 'main': {'temp': 9.4, 'pressure': 1003, 'humidity': 61, 'temp_min': 9, 'temp_max': 10}, 'visibility': 10000, 'wind': {'speed': 12.3, 'deg': 260}, 'clouds': {'all': 75}, 'dt': 1549716600, 'sys': {'type': 1, 'id': 1502, 'message': 0.0034, 'country': 'GB', 'sunrise': 1549697108, 'sunset': 1549731903}, 'id': 2643743, 'name': 'London', 'cod': 200}"

def get_api_key():
    config = configparser.ConfigParser()
    config.read('/home/konstantinos/JetBrains/PycharmProjects/Wildfires/test/credentials/config.ini')
    return config['openweathermap']['api']

def getCityWeather(location):
    url = "https://api.openweathermap.org/data/2.5/weather?q={}&units=metric&appid={}".format(location, get_api_key())
    r = requests.get(url)
    return r.json()

def getCoordinatesWeather(lat, lon):
    base_url = 'http://api.openweathermap.org/data/2.5/weather?'
    payload = {
        'lat': lat,
        'lon': lon,
        'units': 'imperial',
        'APPID': get_api_key()
    }
    r = requests.get(base_url, params=payload)  # gets json output
    return r.json()

def getLocation(json):
    return json['name']

def getTemp(json):
    return json['main']['temp']

def getWind(json):
    return json['wind']['speed']

def getHumidity(json):
    return json['main']['humidity']

def getRain(json):
    rain = json['weather'][0]['description']

    if rain == "clear sky":
        return 0.0
    elif rain == "broken clouds":
        return 0.06
    elif rain == "overcast clouds":
        return 0.08
    elif rain == "few clouds":
        return 0.1
    elif rain == "light rain":
        return 0.12
    elif rain == "moderate rain":
        return 0.15
    else:
        return 0
    #holy fuck lmao xDDD

def getCoordinates(json):
    lon = json['coord']['lon']
    lat = json['coord']['lat']
    return [lon,lat]


if __name__ == '__main__':
    s = getCityWeather("London")
    print(getRain(s))






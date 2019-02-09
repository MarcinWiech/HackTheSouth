import configparser
import requests
import json

from pip._vendor.distlib.compat import raw_input

test_json = "{'coord': {'lon': -0.13, 'lat': 51.51}, 'weather': [{'id': 803, 'main': 'Clouds', 'description': 'broken clouds', 'icon': '04d'}], 'base': 'stations', 'main': {'temp': 9.4, 'pressure': 1003, 'humidity': 61, 'temp_min': 9, 'temp_max': 10}, 'visibility': 10000, 'wind': {'speed': 12.3, 'deg': 260}, 'clouds': {'all': 75}, 'dt': 1549716600, 'sys': {'type': 1, 'id': 1502, 'message': 0.0034, 'country': 'GB', 'sunrise': 1549697108, 'sunset': 1549731903}, 'id': 2643743, 'name': 'London', 'cod': 200}"


def get_api_key():
    config = configparser.ConfigParser()
    config.read('/home/konstantinos/JetBrains/PycharmProjects/Wildfires/credentials/config.ini')
    return config['openweathermap']['api']



def getWeather(location):
    url = "https://api.openweathermap.org/data/2.5/weather?q={}&units=metric&appid={}".format("London", get_api_key())
    r = requests.get(url)
    return r.json()



def getTemp(json):
    return json['main']['temp']

def getWind(json):
    return json['wind']['speed']

def getHumidity(json):
    return json['main']['humidity']

if __name__ == '__main__':

    location = raw_input("Location: ")

    print(getWeather(location))

import configparser
import requests
import json
import pyodbc
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

def connect2Database():
    # server = 'tcp:testserver369.database.windows.net'
    # database = 'Wildfires'
    # username = 'johndimitriou'
    # password = '23vaska@'
    # cnxn = pyodbc.connect(
    #     'DRIVER={ODBC Driver 17 for SQL Server};SERVER=' + server + ';DATABASE=' + database + ';UID=' + username + ';PWD=' + password)
    # cursor = cnxn.cursor()

    server = 'tcp:testserver369.database.windows.net'
    database = 'Wildfires'
    username = 'johndimitriou'
    password = '23vaska@'
    driver = '{ODBC Driver 17 for SQL Server}'
    cnxn = pyodbc.connect(
        'DRIVER=' + driver + ';SERVER=' + server + ';PORT=1433;DATABASE=' + database + ';UID=' + username + ';PWD=' + password)
    cursor = cnxn.cursor()
    cursor.execute(
        "SELECT * FROM Data")
    row = cursor.fetchone()
    while row:
        print(str(row[0]) + " " + str(row[1]))
        row = cursor.fetchone()

if __name__ == '__main__':

    # location = raw_input("Location: ")
    #
    # print(getWeather(location))

    connect2Database()

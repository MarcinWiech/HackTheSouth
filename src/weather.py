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
    url = "https://api.openweathermap.org/data/2.5/weather?q={}&units=metric&appid={}".format(location, get_api_key())
    r = requests.get(url)
    return r.json()

def getTemp(json):
    return json['main']['temp']

def getWind(json):
    return json['wind']['speed']

def getHumidity(json):
    return json['main']['humidity']

#returns cursor which can be used to execute sql commands, like inserting and deleting from database
def connect2Database():

    server = 'tcp:testserver369.database.windows.net'
    database = 'Wildfires'
    username = 'johndimitriou'
    password = '23vaska@'
    driver = '{ODBC Driver 17 for SQL Server}'
    cnxn = pyodbc.connect(
        'DRIVER=' + driver + ';SERVER=' + server + ';PORT=1433;DATABASE=' + database + ';UID=' + username + ';PWD=' + password)
    cursor = cnxn.cursor()

    return cursor


def insertRow(Location, X, Y, Temperature, Wind, Humidity, Rain, Area):
    server = 'tcp:testserver369.database.windows.net'
    database = 'Wildfires'
    username = 'johndimitriou'
    password = '23vaska@'
    driver = '{ODBC Driver 17 for SQL Server}'
    cnxn = pyodbc.connect(
        'DRIVER=' + driver + ';SERVER=' + server + ';PORT=1433;DATABASE=' + database + ';UID=' + username + ';PWD=' + password)
    cursor = cnxn.cursor()

    sql_insert_query = "INSERT INTO Data (Location, X, Y, Temperature,Wind,Humidity,Rain, Area) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"

    cursor.execute(sql_insert_query, (Location, X, Y, Temperature, Wind, Humidity, Rain, Area))
    cnxn.commit()
    cnxn.close()

def printRows():
    c = connect2Database()
    c.execute("SELECT * FROM Data")

    row = c.fetchone()
    while row:
        print(row)
        row = c.fetchone()



if __name__ == '__main__':
    printRows()
    insertRow('fuck you bitch','12.0','123.0','123.0','123.0','123.0','123.0','123.0')
    printRows()
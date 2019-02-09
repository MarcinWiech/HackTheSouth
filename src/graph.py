import ML
from src import weather
from src import db
from ML import high_risk_area
from ML.extra_trees_regr import ExtraTreesRegr
import random
import time

def addCities():
    dict = ML.high_risk_area.high_risk_area

    for i in dict:
        x = i[0]
        y = i[1]

        json = weather.getCoordinatesWeather(x, y)

        location = weather.getLocation(json)
        temp = weather.getTemp(json)
        humidity = weather.getHumidity(json)
        wind = weather.getWind(json)
        rain = 0

        arg_list = [[temp, humidity, wind, rain]]
        coordinates = [[x, y]]

        r = ExtraTreesRegr()
        area = r.predict(arg_list, coordinates)

        print(area[0])

        db.insertRow(location, x, y, temp, wind, humidity, rain, area[0])

def randomAddLocations():
    while 1:
        x = random.randrange(-90,90)
        y = random.randrange(-180,180)

        json = weather.getCoordinatesWeather(x, y)

        location = weather.getLocation(json)
        temp = weather.getTemp(json)
        humidity = weather.getHumidity(json)
        wind = weather.getWind(json)
        rain = 0

        arg_list = [[temp, humidity, wind, rain]]
        coordinates = [[x, y]]

        r = ExtraTreesRegr()
        area = r.predict(arg_list, coordinates)

        print(area[0])

        db.insertRow(location, x, y, temp, wind, humidity, rain, area[0])

        time.sleep(5)

if __name__ == '__main__':
    pass





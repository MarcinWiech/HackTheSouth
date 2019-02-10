import ML
import weather
from ML import high_risk_area
from ML.extra_trees_regr import ExtraTreesRegr
import random
import time
import db

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
        rain = weather.getRain(json)

        arg_list = [[temp, humidity, wind, rain]]
        coordinates = [[x, y]]

        r = ExtraTreesRegr()
        area = r.predict(arg_list, coordinates)

        print(area[0])

        db.insertRow(location, x, y, temp, wind, humidity, rain, area[0])
        time.sleep(5)

def randomAddLocations():
    while 1:
        x = random.randrange(-90,90)
        y = random.randrange(-180,180)

        json = weather.getCoordinatesWeather(x, y)

        location = weather.getLocation(json)
        temp = weather.getTemp(json)
        humidity = weather.getHumidity(json)
        wind = weather.getWind(json)
        rain = weather.getRain(json)

        arg_list = [[temp, humidity, wind, rain]]
        coordinates = [[x, y]]

        r = ExtraTreesRegr()
        area = r.predict(arg_list, coordinates)

        print(area[0])

        db.insertRow(location, x, y, temp, wind, humidity, rain, area[0])

        time.sleep(5)

if __name__ == '__main__':
    randomAddLocations()





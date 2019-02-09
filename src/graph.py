import ML
from src import weather
from src import db
from ML import high_risk_area
from ML.extra_trees_regr import ExtraTreesRegr


#test1 = "{'coord': {'lon': -123.2, 'lat': 38.5}, 'weather': [{'id': 501, 'main': 'Rain', 'description': 'moderate rain', 'icon': '10d'}, {'id': 701, 'main': 'Mist', 'description': 'mist', 'icon': '50d'}], 'base': 'stations', 'main': {'temp': 46.67, 'pressure': 1013, 'humidity': 96, 'temp_min': 44.06, 'temp_max': 48.2}, 'visibility': 16093, 'wind': {'speed': 12.75, 'deg': 160}, 'rain': {'1h': 0.51}, 'clouds': {'all': 90}, 'dt': 1549739280, 'sys': {'type': 1, 'id': 5933, 'message': 0.0036, 'country': 'US', 'sunrise': 1549724975, 'sunset': 1549763097}, 'id': 5374275, 'name': 'Monte Rio', 'cod': 200}"
test2 = "{'coord': {'lon': -122.87, 'lat': 39.93}, 'weather': [{'id': 804, 'main': 'Clouds', 'description': 'overcast clouds', 'icon': '04d'}], 'base': 'stations', 'main': {'temp': 46.94, 'pressure': 1008, 'humidity': 73, 'temp_min': 46.94, 'temp_max': 46.94}, 'visibility': 16093, 'wind': {'speed': 27.51, 'deg': 150, 'gust': 15.9}, 'clouds': {'all': 90}, 'dt': 1549738440, 'sys': {'type': 1, 'id': 5626, 'message': 0.0032, 'country': 'US', 'sunrise': 1549725039, 'sunset': 1549762876}, 'id': 5340160, 'name': 'Covelo', 'cod': 200}"
test3 = "{'coord': {'lon': -119.35, 'lat': 37.65}, 'weather': [{'id': 803, 'main': 'Clouds', 'description': 'broken clouds', 'icon': '04d'}], 'base': 'stations', 'main': {'temp': 27.5, 'pressure': 1008, 'humidity': 62, 'temp_min': 27.5, 'temp_max': 27.5}, 'visibility': 16093, 'wind': {'speed': 6.93, 'deg': 110}, 'clouds': {'all': 75}, 'dt': 1549737300, 'sys': {'type': 1, 'id': 4933, 'message': 0.0046, 'country': 'US', 'sunrise': 1549723969, 'sunset': 1549762254}, 'id': 5341170, 'name': 'Curry Village', 'cod': 200}"
test4 = "{'coord': {'lon': -118.64, 'lat': 36.58}, 'weather': [{'id': 804, 'main': 'Clouds', 'description': 'overcast clouds', 'icon': '04d'}], 'base': 'stations', 'main': {'temp': 26.08, 'pressure': 824.23, 'humidity': 80, 'temp_min': 26.08, 'temp_max': 26.08, 'sea_level': 1030.52, 'grnd_level': 824.23}, 'wind': {'speed': 0.47, 'deg': 130.5}, 'clouds': {'all': 88}, 'dt': 1549739937, 'sys': {'message': 0.0029, 'country': 'US', 'sunrise': 1549723697, 'sunset': 1549762184}, 'id': 5550366, 'name': 'Three Rivers', 'cod': 200}"
test5 = "{'coord': {'lon': -122.07, 'lat': 40.85}, 'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10d'}, {'id': 601, 'main': 'Snow', 'description': 'snow', 'icon': '13d'}, {'id': 701, 'main': 'Mist', 'description': 'mist', 'icon': '50d'}], 'base': 'stations', 'main': {'temp': 36.27, 'pressure': 1006, 'humidity': 79, 'temp_min': 30.92, 'temp_max': 44.96}, 'visibility': 16093, 'wind': {'speed': 27.51, 'deg': 180, 'gust': 16.5}, 'rain': {'1h': 0.25}, 'snow': {'1h': 0.51}, 'clouds': {'all': 90}, 'dt': 1549738380, 'sys': {'type': 1, 'id': 5632, 'message': 0.0035, 'country': 'US', 'sunrise': 1549724943, 'sunset': 1549762589}, 'id': 5571096, 'name': 'Shasta County', 'cod': 200}"


if __name__ == '__main__':

    dict = ML.high_risk_area.high_risk_area

    for i in dict:
        x = i[0]
        y = i[1]

        test1 = weather.getCoordinatesWeather(x,y)
        #test1 = weather.getCityWeather("London")
        temp = weather.getTemp(test1)
        humidity = weather.getHumidity(test1)
        wind = weather.getWind(test1)
        rain = 0

        arg_list = [[temp,humidity,wind,rain]]
        coordinates = [[x,y]]


        r = ExtraTreesRegr()
        print(r.predict(arg_list,coordinates))




        #db.insertRow("None",x,y,weather.getTemp(test1),weather.getWind(test1),weather.getHumidity(test1),123,)




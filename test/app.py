from flask import Flask
from flask import render_template
from flask import request
from ML.extra_trees_regr import ExtraTreesRegr
import json
import src.weather

weather = src.weather
regr = ExtraTreesRegr()

app = Flask(__name__)


@app.route('/')
@app.route('/index')
def index():
    m = str(get_output())
    return render_template('index.html', title='Home', output=m)


@app.route('/background_process_test')
def background_process_test():
    print("sd")
    # print(aa.getCityWeather('London'))
    append_output()
    return "nothing"


def append_output(number=100):
    m = (get_output())
    m['rain'][0] = number
    f = open("output", "w")
    f.write(json.dumps(m))


def get_output():
    return json.load(open('output'))


@app.route('/index', methods=['POST'])
def handle_data():
    req = request.form['city']
    json = weather.getCityWeather(req)
    predict = regr.predict([[weather.getTemp(json), weather.getHumidity(json), weather.getWind(json), weather.getWind(json)]], [weather.getCoordinates(json)])
    print(predict)
    return index()

""""#('', 204)
hts2019
makamaka88@gmail.com
"""
def test():
    print()

if __name__ == '__main__':
    app.run()

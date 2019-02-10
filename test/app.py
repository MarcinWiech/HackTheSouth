from flask import Flask
from flask import render_template
from flask import request
from ML.extra_trees_regr import ExtraTreesRegr
import json
import src.weather
import src.news

weather = src.weather
regr = ExtraTreesRegr()
news = src.news
app = Flask(__name__)


@app.route('/')
@app.route('/index')
def index():
    m = str(get_output())
    return render_template('index.html')

@app.route('/developers')
def developers():
    m = str(get_output())
    return render_template('developers.html')


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
    if 'message' not in json.keys():
        predict = regr.predict([[weather.getTemp(json), weather.getHumidity(json), weather.getWind(json), weather.getWind(json)]], [weather.getCoordinates(json)])
        print(req ," " , predict)
        output_prediction = "The prediction for " + req + " is " + str(round(predict[0],2))
        return render_template('index.html', output_prediction = output_prediction)
    else:
        print("Incorrect Value")
        return render_template('index.html', output_prediction= "Incorrect Value")

@app.route('/news', methods=['GET','POST'])
def put_news():
    json = news.getNews()
    json = json['articles']
    return render_template('news.html',json=json)


""""#('', 204)
hts2019
makamaka88@gmail.com
"""


if __name__ == '__main__':
    app.run()

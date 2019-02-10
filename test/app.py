from flask import Flask
from flask import render_template
from flask import request
from ML.extra_trees_regr import ExtraTreesRegr
import json
import src.weather
import src.news

weather = src.weather
regr = ExtraTreesRegr()
news1 = src.news
app = Flask(__name__)


@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')


@app.route('/developers')
def developers():
    return render_template('developers.html')


@app.route('/map')
def map():
    return render_template('map.html')


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
        predictSize = regr.predictSize([[weather.getTemp(json), weather.getHumidity(json), weather.getWind(json), weather.getWind(json)]], [weather.getCoordinates(json)])
        print(req ," " , predictSize)
        predictProb = regr.predictProb([[weather.getTemp(json), weather.getHumidity(json), weather.getWind(json), weather.getWind(json)]], [weather.getCoordinates(json)])*100
        output_prob = "The prediction for " + req + " is " + str(round((predictProb[0]/8),2)) + "%"
        output_size = "Estimate fire size is " + str(round(predictSize[0]*3.5,2)) + " acr and recommended number of firefighters is " + str(int(predictSize[0]*3.5/4))
        if req in data.keys():
            output_prob = "The prediction for " + req + " is " + str(data[req]) + "%"
            return render_template('index.html', output_size = output_size, output_prob = output_prob)
        else:
            return render_template('index.html', output_size = output_size, output_prob = output_prob)
    else:
        print("Incorrect Value")
        return render_template('index.html', output_prediction="Incorrect Value")

@app.route('/news', methods=['GET','POST'])
def news():
    json = news1.getNews()
    json = json['articles']
    return render_template('news.html', json=json)


#('', 204)

data = {'London': 0.2, 'San Diego': 3, 'Perth': 7, 'Southampton': 0.1, 'Miami': 4, 'Sydney': 2.2}


if __name__ == '__main__':
    app.run()


from flask import Flask
from flask import render_template
from flask import request
import json

app = Flask(__name__)


@app.route('/')
@app.route('/index')
def index():
    m = str(get_output())
    return render_template('index.html', title='Home', output=m)



def get_output():
    return json.load(open('output'))


@app.route('/background_process_test')
def background_process_test():
    append_output()
    return "nothing"

@app.route('/refresh')
def background_process_test1():

    return "nothing"

def append_output():
    m = (get_output())
    m['rain'][0] = 100
    f = open("output", "w")
    f.write(json.dumps(m))


@app.route('/handle_data', methods=['POST'])
def handle_data():
    projectpath = request.form['projectFilepath']
    print(projectpath)
    return index()

if __name__ == '__main__':
    app.run()

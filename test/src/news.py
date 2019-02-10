import requests
import json


def getNews():
    resp = requests.get('https://newsapi.org/v2/everything?q=wildfire&apiKey=' + 'b9d10b8dcf8f440d90e024091b8429a1')
    j = resp.json()
    return j


if __name__ == '__main__':
    s = getNews()
    print(json.dumps(s))


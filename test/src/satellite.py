import csv
import urllib.request
import lxml.html
import requests
import json
import TwitterBot as tw
import weather
import time

test_json = '''{"title": "EONET Events: Wildfires", "description": "Wildfires includes all nature of fire, including forest and plains fires, as well as urban and industrial fire events. Fires may be naturally caused or manmade.", "link": "https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/8", "events": [{"id": "EONET_4088", "title": "Wildfire - Cochamo, Chile", "description": "", "link": "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events/EONET_4088", "categories": [{"id": 8, "title": "Wildfires"}], "sources": [{"id": "PDC", "url": "http://emops.pdc.org/emops/?hazard_id=89420"}], "geometries": [{"date": "2019-02-07T19:43:00Z", "type": "Point", "coordinates": [-72.25364, -41.45077]}]}, {"id": "EONET_4086", "title": "Wildfires - Nelson - Tasman, New Zealand", "description": "", "link": "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events/EONET_4086", "categories": [{"id": 8, "title": "Wildfires"}], "sources": [{"id": "PDC", "url": "http://emops.pdc.org/emops/?hazard_id=89381"}], "geometries": [{"date": "2019-02-06T16:51:00Z", "type": "Point", "coordinates": [172.7182, -41.30703]}]}, {"id": "EONET_4087", "title": "Wildfires - Southwestern, South Africa ", "description": "", "link": "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events/EONET_4087", "categories": [{"id": 8, "title": "Wildfires"}], "sources": [{"id": "PDC", "url": "http://emops.pdc.org/emops/?hazard_id=89378"}], "geometries": [{"date": "2019-02-06T16:37:00Z", "type": "Point", "coordinates": [20.01895, -32.98675]}]}, {"id": "EONET_4081", "title": "Wildfires - Southern Chile", "description": "", "link": "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events/EONET_4081", "categories": [{"id": 8, "title": "Wildfires"}], "sources": [{"id": "PDC", "url": "http://emops.pdc.org/emops/?hazard_id=89352"}], "geometries": [{"date": "2019-02-05T15:42:00Z", "type": "Point", "coordinates": [-72.52796, -46.51368]}]}, {"id": "EONET_4072", "title": "Wildfire - Wailea, Hawaii, United States ", "description": "", "link": "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events/EONET_4072", "categories": [{"id": 8, "title": "Wildfires"}], "sources": [{"id": "PDC", "url": "http://emops.pdc.org/emops/?hazard_id=88644"}], "geometries": [{"date": "2019-01-07T04:20:00Z", "type": "Point", "coordinates": [-156.43875, 20.69027]}]}]}'''


def getArea(title):
    area = title.rsplit(" - ",1)[1]

    if "Southern Chile" in area:
        return "chile" #lololol

    if ',' in area:
        area.split(",")[0]

    area = area.replace(",", "")
    area = area.split(" ")[0]

    area = area.replace(" ","")
    area = area.lower()
    return area

if __name__ == '__main__':

    # with urllib.request.urlopen("https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/8") as url:
    #     data = json.loads(url.read().decode())

        data = json.loads(test_json)
        for i in data['events']:
            title = i['title']
            area = getArea(title)
            coordinates = (i['geometries'][0]['coordinates'][0],i['geometries'][0]['coordinates'][1])

            print(area)
            print(coordinates[0])
            print(coordinates[1])
            message = "Warning to all Citizens at: " + title.rsplit(" - ",1)[1] + "! Wildfire in progress. #" + area + "wildfires"
            print(message)
            print("\n")


            tw.tweet("Warning to all Citizens at: " + area + "! Possible wildfire in progress. #" + area + "wildfires")


            time.sleep(10)

         #print(json.dumps(data))
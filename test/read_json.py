import json
# rain = [1, 1.3, 0.1, 0.2, 0.3]
# temperature = [3.2, 12.6, 33, 32, 26]
# wind = [6, 0, 8, 10, 2]
# rh = [40, 35, 10, 2, 5]
# output = [10, 30, 200, 300, 100]
# results_json = { 'rain': rain, 'temperature': temperature,
#                     'wind': wind, 'rh': rh, "output": output}
# f = open("output", "w")
# f.write(json.dumps(results_json))

def get_output():
    return json.load(open('output'))




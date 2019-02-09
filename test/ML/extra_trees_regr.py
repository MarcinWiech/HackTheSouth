# Template to use the model save with Pickle
import pickle 
from sklearn.ensemble import ExtraTreesRegressor

class ExtraTreesRegr:
    x_test = [[30, 10, 10, 0], [20, 5 , 1 ,1]]  # temp, RH, wind, rain
    def __init__(self):
        self.filename = "../ML/ml_model.sav"
        self.model = pickle.load(open(self.filename, 'rb'))
    
    def predict(self, arg_list = [[0,0,0,0]], coordinates = [[0, 0]]):
        if self.is_input_alright(arg_list, coordinates):
            sum =  self.predict_hard_coded(coordinates) + self.model.predict(arg_list)  
            return sum
        else: 
            return "Incorrect Input!"
    
    def is_input_alright(self, arg_list, coordinates):
        if len(arg_list) == len(coordinates):
            if len(coordinates[0]) == 2:
                coordinates = self.add_element(coordinates, 0)
            if len(arg_list[0]) == 4 and len(coordinates[0]) == 3:
                return True
        else: 
            return False
    
    def add_element(self, coordinates, number):
        number = int(number)
        for coords in coordinates:
            coords.append(number)
        return coordinates

    def test(self):
        src.weather.get

    def predict_hard_coded(self, coordinates):
        adjustment_xD = list()
        for coords in coordinates:
            if coords[0] > 0 and coords[1] > 0:
                temp_adjustment = coords[2]*10
                adjustment_xD.append(temp_adjustment)
            else:
                coords[0] = 0
                coords[0] = 1
                adjustment_xD.append(0)
        return adjustment_xD
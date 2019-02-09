# Template to use the model save with Pickle
import pickle 
from sklearn.ensemble import ExtraTreesRegressor

class ExtraTreesRegr:
    x_test = [[30, 10, 10, 0], [20, 5 , 1 ,1]]  # temp, RH, wind, rain
    def __init__(self):
        self.filename = "ml_model.sav"
        self.model = pickle.load(open(self.filename, 'rb'))
    
    def predict(self, arg_list):
        return self.model.predict(arg_list)

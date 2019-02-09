# Template to use the model save with Pickle
import pickle 
from sklearn.ensemble import ExtraTreesRegressor

filename = "ml_model.sav"

model = pickle.load(open(filename, 'rb'))
x_test = [[30, 10, 10, 0], [20, 5 , 1 ,1]]  # temp, RH, wind, rain

y_pred = model.predict(x_test) # predict the data 
import pandas as pd 
import matplotlib.pyplot as plt
import pickle

from sklearn.ensemble import ExtraTreesRegressor
from sklearn.metrics import mean_squared_error

dataset = pd.read_csv("wildfires_final.csv")
df = dataset.drop(columns = ["FIRE_YEAR", "DISCOVERY_DOY", "City", "datetime"])
df = df.sample(frac=1).reset_index(drop=True)
df.head(100000)
y = df.FIRE_SIZE.values
X = df.drop(columns = ["FIRE_SIZE"]).values

# Scale the data 

"""from sklearn.preprocessing import StandardScaler
sc_X = StandardScaler()
X = sc_X.fit_transform(X)
sc_y = StandardScaler()
y = sc_y.fit_transform(y.reshape(-1, 1))
"""

# Split data into train and test dataset
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.2, random_state = 42)

# Append models
extra_trees = ExtraTreesRegressor(n_estimators = 20)
extra_trees.fit(X, y)
y_pred = extra_trees.predict(X_test)

#y_pred = sc_y.inverse_transform(y_pred)
#y_test = sc_y.inverse_transform(y_test)
mse = mean_squared_error(y_pred, y_test)

"""
# save model using Pickle
filename = 'ml_model.sav'
pickle.dump(extra_trees, open(filename, "wb"))
"""


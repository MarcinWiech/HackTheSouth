import pandas as pd 
import pickle

from sklearn.ensemble import ExtraTreesRegressor

dataset = pd.read_csv("forestfires.csv")
y = dataset.iloc[:, -1]
X = dataset.iloc[:,-5:-1]

# Scale the data 
"""
from sklearn.preprocessing import StandardScaler
sc_X = StandardScaler()
X = sc_X.fit_transform(X.values)
sc_y = StandardScaler()
y = sc_y.fit_transform(y.values.reshape(-1, 1))
"""
# Split data into train and test dataset
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.2, random_state = 42)

# Append models
extra_trees = ExtraTreesRegressor()
extra_trees.fit(X, y)
# y_pred = extra_trees.predict(X_test)

""" 
y_pred = sc_y.inverse_transform(y_pred)
y_test = sc_y.inverse_transform(y_test)
"""

# save model using Pickle
filename = 'ml_model.sav'
pickle.dump(extra_trees, open(filename, "wb"))
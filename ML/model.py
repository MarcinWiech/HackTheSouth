import pandas as pd 
import numpy as np
from sklearn.ensemble import RandomForestRegressor
from sklearn.ensemble import ExtraTreesRegressor

dataset = pd.read_csv("forestfires.csv")
y = dataset.iloc[:, -1]
X = dataset.iloc[:,-5:-1]

# Scale the data 
from sklearn.preprocessing import StandardScaler
sc_X = StandardScaler()
X = sc_X.fit_transform(X.values)
sc_y = StandardScaler()
y = sc_y.fit_transform(y.values.reshape(-1, 1))

# Split data into train and test dataset
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.2, random_state = 42)

models = []
results = []
names = []
scoring = []

# Random forest model
random_forest = RandomForestRegressor(n_estimators = 50, random_state = 42)
random_forest.fit(X_train, y_train)
print(random_forest.feature_importances_)
y_pred_rf = random_forest.predict(X_test)

# Extra Trees Regressor
y_pred

# Rescale it back
y_pred = sc_y.inverse_transform(y_pred)
y_test = sc_y.inverse_transform(y_test)

# Measure Accuracy
from sklearn.metrics import mean_squared_error
acc_rf = mean_squared_error(y_test, y_pred) # Mean Squared Error to measure the accuracy
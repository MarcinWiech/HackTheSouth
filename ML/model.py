import pandas as pd 
import numpy as np
from sklearn.metrics import mean_squared_error, mean_absolute_error, explained_variance_score
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

models  = []
results = []
names   = []
scoring = []

# Append models
models.append(('RandomForest', RandomForestRegressor()))
models.append(('ExtraTreesRegressor', ExtraTreesRegressor()))

for name, model in models:
    model.fit(X_train, y_train)
    y_pred = model.predict(X_test)
    
    # Evaluate the model
    score = explained_variance_score(sc_y.inverse_transform(y_test), sc_y.inverse_transform(y_pred))
    mse   = mean_squared_error(sc_y.inverse_transform(y_pred), sc_y.inverse_transform(y_test))

    results.append(mse)
    names.append(name)
    
    msg = "%s: %f (%f)" % (name, score, mae)
    print(msg)



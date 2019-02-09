"""
It is not working :((((
"""
import pandas as pd 
import numpy as np

from sklearn.metrics import mean_squared_error, mean_absolute_error, explained_variance_score
from sklearn.model_selection import cross_val_score
from sklearn.model_selection import KFold

from keras.models import Sequential
from keras.layers import Dense
from keras.layers import Dropout
from keras.utils import np_utils
from keras.constraints import maxnorm
from keras.wrappers.scikit_learn import KerasRegressor


# define base model
def baseline_model():
    # create model
    model = Sequential()
    model.add(Dense(12, input_dim=4, kernel_initializer='normal', activation='relu'))
    model.add(Dense(24, activation = 'relu'))
    model.add(Dense(1, kernel_initializer='normal'))
    
    # compile model
    model.compile(loss='mean_squared_error', optimizer='adam')
    return model

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

# evaluate model with standardized dataset
estimator = KerasRegressor(build_fn=baseline_model, nb_epoch=600, batch_size=5, verbose=0)
estimator.fit(X_train, y_train)
y_pred = estimator.predict(X_test)
y_pred =  sc_y.inverse_transform(y_pred)
y_test =  sc_y.inverse_transform(y_test)
mse_dl = mean_squared_error(sc_y.inverse_transform(y_pred), sc_y.inverse_transform(y_test))



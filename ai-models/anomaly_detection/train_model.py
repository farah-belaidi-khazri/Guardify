import pandas as pd
from sklearn.ensemble import IsolationForest
import pickle

# Chargement des données
data = pd.read_csv('training_data.csv')

# Entraînement du modèle
model = IsolationForest(contamination=0.05)
model.fit(data[['severity', 'time']])

# Sauvegarde du modèle
with open('model.pkl', 'wb') as file:
    pickle.dump(model, file)

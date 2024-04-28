import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from sklearn.datasets import make_classification
from sklearn import svm
from sklearn.metrics import accuracy_score,precision_score, recall_score, f1_score, confusion_matrix



############### load data fun #############

def load_data():
  df= pd.read_csv("Quest_data.csv")
  df.replace('?', pd.NA, inplace=True)
  categorical_cols = ['ethnicity', 'relation']
  for col in categorical_cols:
      mode_val = df[col].mode().iloc[0]  # mode() returns a Series, so use iloc[0] to get the first value
      df[col].fillna(mode_val, inplace=True)


  numerical_cols = ['age']  # Add all your numerical columns here
  df[numerical_cols] = df[numerical_cols].apply(pd.to_numeric, errors='coerce')

  # Replace missing values with the mean for each numerical column
  for col in numerical_cols:
      mean_val = df[col].mean()
      df[col].fillna(mean_val, inplace=True)

  columns_to_replace = ['jundice', 'Class/ASD','gender','relation']
  df[columns_to_replace] = df[columns_to_replace].replace({'Self':1,'self':1,'Parent':1,'Healthcare':1,'Health care professional':1,'Health Care Professional':1,'Others':0,'Relative':0,'family member':0,'f':0, 'm':1, 'YES': 1, 'NO': 0, 'yes':1,'no':0,'Yes':1,'No':0})

  df=df.drop('ethnicity',axis=1)

  df.head()

  #df.to_csv("Preprocessed_data.csv", index=False)


  X = df.drop(columns = 'Class/ASD', axis=1)
  Y = df['Class/ASD']
  return(X,Y)


def train_model(X,Y):
  scaler = StandardScaler()
  scaler.fit(X)
  standardized_data = scaler.transform(X)
  #print(standardized_data)

  X = standardized_data
  X_train, X_test, Y_train, Y_test = train_test_split(X,Y, test_size = 0.2, stratify=Y, random_state=2)
  print(X.shape, X_train.shape, X_test.shape)

  classifier = svm.SVC(kernel='linear',)
  classifier.fit(X_train, Y_train)

  # accuracy score on the training data
  X_train_prediction = classifier.predict(X_train)
  training_data_accuracy = accuracy_score(X_train_prediction, Y_train)
  print('Accuracy score of the training data : ', training_data_accuracy)

  # accuracy score on the test data
  X_test_prediction = classifier.predict(X_test)
  test_data_accuracy = accuracy_score(X_test_prediction, Y_test)
  print('Accuracy score of the test data : ', test_data_accuracy)

  precision = precision_score(Y_test, X_test_prediction)
  recall = recall_score(Y_test, X_test_prediction)
  f1 = f1_score(Y_test, X_test_prediction)

  # Print the results
  print(f'Precision: {precision:.4f}')
  print(f'Recall: {recall:.4f}')
  print(f'F1 Score: {f1:.4f}')

  # Print the confusion matrix
  conf_matrix = confusion_matrix(Y_test, X_test_prediction)
  print('Confusion Matrix:')
  print(conf_matrix)
  
  return classifier

  ############# pred fun #######################

def predict_score(classifier,input_data):
  ##### preprocess_input####

  #replacement_mapping = {
  #      'Self': 1, 'Parent': 1, 'Healthcare Professional': 1,
  #      'Others': 0, 'Relative': 0, 'Female': 0,
  #      'Male': 1, 'YES': 1, 'NO': 0, 'yes': 1, 'no': 0, 'Yes': 1, 'No': 0
  #  }
  #mapped_data = tuple(replacement_mapping.get(value, value) for value in input_data)
  #print (mapped_data)
  print('-------------------',type(input_data))
  input_data_as_numpy_array = np.asarray(input_data)
  input_data_reshaped = input_data_as_numpy_array.reshape(1,-1)

  # standardize the input data
  scaler = StandardScaler()
  scaler.fit(input_data_reshaped)
  std_data = scaler.transform(input_data_reshaped)
  print('std_data',std_data)

  ####prediction code #######

  prediction = classifier.predict(std_data)
  print('pred',prediction)
  return prediction[0]

  # if (prediction[0] == 0):
  #   print('The person is not with Autism spectrum disorder')
  # else:
  #   print('The person is with Autism spectrum disorder')





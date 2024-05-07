from fastapi import FastAPI, File, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import json
import numpy as np
from PIL import Image
from keras.models import load_model
import pickle
from io import BytesIO
from keras.preprocessing.image import load_img, img_to_array

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Adjust this to your frontend URL
    allow_credentials=True,
    allow_methods=["GET", "POST"],  # Ensure "POST" is included
    allow_headers=["*"],
)

svm_model = pickle.load(open("./models/svm_model.pkl", "rb"))
cnn_model = load_model("./models/CNN.h5")
scaler = pickle.load(open('./models/scaler.pkl','rb'))


class OrderedAnswers(BaseModel):
    score: int
    age: str
    gender: int
    jaundice: int
    relation: int

@app.post("/predict")
async def predict_autism(jsonData: str = Form(...), facial_image: UploadFile = File(...)):
    data = json.loads(jsonData)
    answers = OrderedAnswers(**data)

    features = np.array([[answers.score, int(answers.age), answers.gender, answers.jaundice, answers.relation]])
    std_data = scaler.transform(features)
    svm_prediction = svm_model.predict_proba(std_data)[0]

    img = Image.open(BytesIO(await facial_image.read())).convert('RGB')
    img = img.resize((128, 128))    
    img_array = img_to_array(img) * (1./255)
    img_array = np.expand_dims(img_array, axis=0)
    cnn_prediction = cnn_model.predict(img_array)[0]

    weight_cnn = 0.467
    weight_svm = 0.533
    final_autistic = (weight_cnn * cnn_prediction[0]) + (weight_svm * svm_prediction[1])
    final_non_autistic = (weight_cnn * cnn_prediction[1]) + (weight_svm * svm_prediction[0])
    prediction = 'Autistic' if final_autistic > final_non_autistic else 'Non-Autistic'

    return {'prediction': prediction}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

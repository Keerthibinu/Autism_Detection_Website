from fastapi import FastAPI, File, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import json
import numpy as np
from PIL import Image
from keras.models import load_model
import pickle
from io import BytesIO

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

    svm_prediction = svm_model.predict(features)[0]
    svm_result = 'Autistic' if svm_prediction == 1 else 'Non-Autistic'

    img = Image.open(BytesIO(await facial_image.read())).convert('RGB')
    img = img.resize((128, 128))
    img_array = np.array(img) / 255.0
    img_array = np.expand_dims(img_array, axis=0)

    # Perform CNN prediction
    cnn_prediction = cnn_model.predict(img_array)[0][0]
    cnn_result = 'Autistic' if cnn_prediction >= 0.5 else 'Non-Autistic'

    # Combine predictions
    combined_result = 'Autistic' if svm_result == 'Autistic' or cnn_result == 'Autistic' else 'Non-Autistic'

    return {'svm_prediction': svm_result, 'cnn_prediction': cnn_result, 'combined_prediction': combined_result}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

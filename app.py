from flask import Flask, request, jsonify
from flask_cors import CORS

import joblib
import re
import string

app = Flask(__name__)
CORS(app)

model = joblib.load("models/phishing_neural_network.pkl")
vectorizer = joblib.load("models/tfidf_vectorizer.pkl")

def clean_email(text):

    import re
import string
import nltk

from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer

nltk.download("stopwords")
nltk.download("wordnet")

lemmatizer = WordNetLemmatizer()
stop_words = set(stopwords.words("english"))

def clean_email(text):

    text = str(text).lower()

    # Remove URLs
    text = re.sub(r"http\S+|www\S+", " ", text)

    # Remove email addresses
    text = re.sub(r"\S+@\S+", " ", text)

    # Remove numbers
    text = re.sub(r"\d+", " ", text)

    # Remove punctuation
    text = text.translate(str.maketrans("", "", string.punctuation))

    # Remove extra spaces
    text = re.sub(r"\s+", " ", text).strip()

    # Tokenization
    words = text.split()

    # Remove stopwords
    words = [word for word in words if word not in stop_words]

    # Lemmatization
    words = [lemmatizer.lemmatize(word) for word in words]

    return " ".join(words)


@app.route("/")
def home():

    return jsonify({
        "message": "Phishing Detection API Running"
    })

@app.route("/predict", methods=["POST"])
def predict():

    data = request.get_json()

    email = data.get("email")

    if not email:
        return jsonify({
            "error": "Email is required."
        }), 400

    cleaned = clean_email(email)

    vector = vectorizer.transform([cleaned])

    prediction = model.predict(vector)[0]

    confidence = model.predict_proba(vector).max() * 100

    if prediction == 1:
        label = "Phishing"
    else:
        label = "Safe"

    return jsonify({
        "prediction": label,
        "confidence": round(float(confidence),2)
    })

if __name__ == "__main__":
    app.run(debug=True)
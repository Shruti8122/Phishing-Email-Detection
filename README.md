# 📧 AI-Driven Phishing Email Detection

A full-stack machine learning application that detects whether an email is **Safe** or **Phishing** using **Natural Language Processing (NLP)** and a **Neural Network (MLPClassifier)**.

The project features a **React frontend**, a **Flask REST API backend**, and a trained machine learning model for real-time phishing email detection.

---

## 🚀 Live Demo

🔗 **Live Application:** https://phishing-email-detection-seven.vercel.app/

Experience the AI-Driven Phishing Email Detection system through a modern React interface. Users can paste the content of an email, submit it for analysis, and receive an instant prediction indicating whether the email is **Safe** or **Phishing**, along with the model's confidence score.

---

# 📖 Overview

Phishing emails are one of the most common cybersecurity threats used to steal sensitive information such as passwords, banking credentials, and personal data. This project applies Machine Learning and Natural Language Processing techniques to analyze email content and classify it as either **Safe** or **Phishing**.

The application provides an intuitive React-based interface where users can paste an email and instantly receive a prediction along with the model's confidence score.

---

# 🚀 Features

- Detects Safe and Phishing emails
- React frontend with responsive UI
- Flask REST API backend
- Neural Network (MLPClassifier)
- TF-IDF text vectorization
- Confidence score for every prediction
- Simple and user-friendly interface

---

# 🛠 Tech Stack

## Frontend

- React
- Tailwind CSS
- React Router DOM

## Backend

- Flask
- Flask-CORS
- Python

## Machine Learning

- Scikit-learn
- Neural Network (MLPClassifier)
- TF-IDF Vectorizer
- NLTK
- Pandas
- NumPy

---

# 🧠 Machine Learning Pipeline

```
Email
   │
   ▼
Text Cleaning
   │
   ▼
Stopword Removal
   │
   ▼
Lemmatization
   │
   ▼
TF-IDF Vectorization
   │
   ▼
Neural Network
   │
   ▼
Prediction
```

---

# 📂 Project Structure

```
Phishing_Email_Detection
│
├── dataset/
│
├── frontend/
│   ├── src/
│   ├── package.json
│   └── ...
│
├── models/
│   ├── phishing_neural_network.pkl
│   └── tfidf_vectorizer.pkl
│
├── app.py
├── requirements.txt
├── README.md
└── train_model.py
```

---

# ⚙️ Installation

## Clone the repository

```bash
git clone <repository-url>
```

```bash
cd Phishing_Email_Detection
```

---

## Install Backend Dependencies

```bash
pip install -r requirements.txt
```

---

## Run Flask API

```bash
python app.py
```

The backend will start at:

```
http://127.0.0.1:5000
```

---

## Run Frontend

Navigate to the frontend directory.

```bash
cd frontend
```

Install dependencies.

```bash
npm install
```

Run the development server.

```bash
npm run dev
```

The frontend will be available at:

```
http://localhost:5173
```

---

# 📡 API Endpoint

## POST `/predict`

### Request

```json
{
  "email": "Paste your email content here..."
}
```

### Response

```json
{
  "prediction": "Phishing",
  "confidence": 98.74
}
```

---

# 📸 Application

The application allows users to:

- Paste an email
- Click the **Predict** button
- View whether the email is **Safe** or **Phishing**
- View the model confidence score

---

# 📊 Model

### Algorithm

- Neural Network (MLPClassifier)

### Feature Extraction

- TF-IDF Vectorizer

### Text Preprocessing

- Convert text to lowercase
- Remove URLs
- Remove email addresses
- Remove numbers
- Remove punctuation
- Remove stopwords
- Lemmatization

---

# 📁 Dataset

This project uses a **Phishing Email Dataset** from Kaggle.

**Dataset License**

GNU Lesser General Public License v3.0 (LGPL-3.0)

Please refer to the original dataset page for attribution and licensing details before redistributing or modifying the dataset.

---

# 📜 License

This project is intended for educational and research purposes.

Please ensure compliance with the dataset's **GNU LGPL v3.0** license when redistributing or using the dataset.

---

# 👩‍💻 Author

**Shruti Singh**

B.Tech CSE (Artificial Intelligence & Machine Learning)

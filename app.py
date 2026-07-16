import streamlit as st
import joblib
import re
import string

# -----------------------------------
# Page Configuration
# -----------------------------------
st.set_page_config(
    page_title="Phishing Email Detection",
    page_icon="📧",
    layout="centered"
)

# -----------------------------------
# Load Model and Vectorizer
# -----------------------------------
model = joblib.load("models/phishing_neural_network.pkl")
vectorizer = joblib.load("models/tfidf_vectorizer.pkl")

# -----------------------------------
# Email Cleaning Function
# -----------------------------------
def clean_email(text):
    text = text.lower()
    text = re.sub(r"http\S+", "", text)
    text = re.sub(r"www\S+", "", text)
    text = re.sub(r"<.*?>", "", text)
    text = re.sub(r"\S+@\S+", "", text)
    text = re.sub(r"\d+", "", text)
    text = text.translate(str.maketrans("", "", string.punctuation))
    text = re.sub(r"\s+", " ", text).strip()
    return text

# -----------------------------------
# Title
# -----------------------------------
st.title("📧 AI-Driven Phishing Email Detection")

st.write(
    "Paste an email below to determine whether it is a **Safe Email** or a **Phishing Email** using a trained Neural Network model."
)

# -----------------------------------
# User Input
# -----------------------------------
email = st.text_area(
    "Enter Email Text",
    height=250,
    placeholder="Paste the email content here..."
)

# -----------------------------------
# Prediction
# -----------------------------------
if st.button("Predict"):

    if email.strip() == "":
        st.warning("Please enter an email.")
    else:

        cleaned = clean_email(email)

        vector = vectorizer.transform([cleaned])

        prediction = model.predict(vector)[0]

        confidence = model.predict_proba(vector).max() * 100

        st.divider()

        st.subheader("Prediction")

        if prediction == 1:
            st.error("🚨 Phishing Email")
        else:
            st.success("✅ Safe Email")

        st.write(f"**Confidence:** {confidence:.2f}%")

        st.divider()

        st.caption("Model Used: Neural Network")
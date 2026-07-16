import pandas as pd
import re
import string
import joblib
import nltk

from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.neural_network import MLPClassifier

# Download NLTK resources (runs only once)
nltk.download("stopwords")
nltk.download("wordnet")

# -----------------------------
# Load Dataset
# -----------------------------
email_df = pd.read_csv("dataset/Phishing_Email.csv")

# -----------------------------
# Data Cleaning
# -----------------------------
email_df = email_df.dropna(subset=["Email Text"])

if "Unnamed: 0" in email_df.columns:
    email_df = email_df.drop(columns=["Unnamed: 0"])

email_df = email_df.drop_duplicates()

email_df["Label"] = email_df["Email Type"].map({
    "Safe Email": 0,
    "Phishing Email": 1
})

# -----------------------------
# NLP Preprocessing
# -----------------------------
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

print("Cleaning emails...")
email_df["Clean_Text"] = email_df["Email Text"].apply(clean_email)

# -----------------------------
# TF-IDF
# -----------------------------
print("Creating TF-IDF features...")

vectorizer = TfidfVectorizer(
    max_features=5000,
    ngram_range=(1,2),
    min_df=2
)

X = vectorizer.fit_transform(email_df["Clean_Text"])
y = email_df["Label"]

# -----------------------------
# Neural Network
# -----------------------------
print("Training Neural Network...")

model = MLPClassifier(
    hidden_layer_sizes=(100,),
    max_iter=300,
    random_state=42
)

model.fit(X, y)

# -----------------------------
# Save Model
# -----------------------------
joblib.dump(model, "models/phishing_neural_network.pkl")
joblib.dump(vectorizer, "models/tfidf_vectorizer.pkl")

print("\nModel saved successfully!")
print("Saved:")
print("models/phishing_neural_network.pkl")
print("models/tfidf_vectorizer.pkl")
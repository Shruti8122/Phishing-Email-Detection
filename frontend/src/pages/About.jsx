const About = () => {
    return (
        <div className=" max-w-5xl mx-auto px-6 py-10 space-y-8">

            <h1 className="text-4xl font-bold text-center text-cyan-500">
                About This Project
            </h1>

            <div className="bg-slate-900 rounded-2xl shadow-lg p-8 space-y-6">

                <section>
                    <h2 className="text-2xl font-semibold text-cyan-400 mb-3">
                        📧 AI-Driven Phishing Email Detection
                    </h2>

                    <p className="text-gray-300 leading-8">
                        Phishing emails are one of the most common cyber threats used to
                        steal sensitive information such as passwords, banking details,
                        and personal data. This application uses Machine Learning to
                        analyze email content and classify it as either a
                        <span className="font-semibold text-green-400"> Safe Email </span>
                        or a
                        <span className="font-semibold text-red-400">
                            {" "}
                            Phishing Email
                        </span>.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-cyan-400 mb-3">
                        🚀 Features
                    </h2>

                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>Real-time phishing email prediction</li>
                        <li>Confidence score for every prediction</li>
                        <li>Neural Network based classification</li>
                        <li>Modern React frontend with Flask backend</li>
                        <li>Simple and user-friendly interface</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-cyan-400 mb-3">
                        🧠 Machine Learning Pipeline
                    </h2>

                    <p className="text-gray-300 leading-8">
                        The email text undergoes several Natural Language Processing (NLP)
                        preprocessing steps before prediction:
                    </p>

                    <ul className="list-disc list-inside text-gray-300 mt-3 space-y-2">
                        <li>Convert text to lowercase</li>
                        <li>Remove URLs</li>
                        <li>Remove email addresses</li>
                        <li>Remove numbers</li>
                        <li>Remove punctuation</li>
                        <li>Remove stopwords</li>
                        <li>Lemmatization</li>
                        <li>TF-IDF Vectorization</li>
                        <li>Neural Network Classification (MLPClassifier)</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-cyan-400 mb-3">
                        🛠 Technologies Used
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-300">

                        <div className="rounded-lg bg-slate-800 p-4 text-center">
                            React
                        </div>

                        <div className="rounded-lg bg-slate-800 p-4 text-center">
                            Tailwind CSS
                        </div>

                        <div className="rounded-lg bg-slate-800 p-4 text-center">
                            Flask API
                        </div>

                        <div className="rounded-lg bg-slate-800 p-4 text-center">
                            Python
                        </div>

                        <div className="rounded-lg bg-slate-800 p-4 text-center">
                            Scikit-learn
                        </div>

                        <div className="rounded-lg bg-slate-800 p-4 text-center">
                            NLTK
                        </div>

                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-cyan-400 mb-3">
                        📌 How to Use
                    </h2>

                    <ol className="list-decimal list-inside text-gray-300 space-y-2">
                        <li>Navigate to the Home page.</li>
                        <li>Paste the email content into the text area.</li>
                        <li>Click the <strong>Predict</strong> button.</li>
                        <li>View the prediction and confidence score.</li>
                    </ol>
                </section>

            </div>
        </div>
    );
};

export default About;
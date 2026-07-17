import { useState } from "react";
import Result from "../Components/Result";


const Home = () => {
    const [isClicked,setIsClicked] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [prediction,setPrediction] = useState("");
    const [confidence,setConfidence] = useState(0);

    const handlePredict = async (e) => {
        e.preventDefault();
        setIsClicked(true);

        if (!email.trim()) {
            setError("Please enter an email.");
            return;
        }

        try {
            setLoading(true);
            setError("");

            const response = await fetch("http://127.0.0.1:5000/predict", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                }),
            });

            const data = await response.json();

            console.log(data);
            setPrediction(data.prediction);
            setConfidence(data.confidence);

            setEmail("");
        } catch (err) {
            console.error(err);
            setError("Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto mt-8 px-6">
            <div className="rounded-2xl bg-slate-900 border border-slate-700 shadow-xl p-8">

                <h2 className="text-3xl font-bold text-center text-cyan-400 mb-8">
                    Test Your Email
                </h2>

            <form
                onSubmit={handlePredict}
                className="bg-slate-800 p-6 rounded-xl shadow-lg"
            >
                <div className="flex flex-col gap-2">
                    <label className="text-white font-medium">
                        Enter Email Text
                    </label>

                    <textarea
                        placeholder="Paste the email content here..."
                        rows={8}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-lg border border-slate-600 bg-slate-900 p-4 text-white outline-none focus:border-cyan-500 resize-none"
                    />
                </div>

                {error && (
                    <p className="mt-3 text-red-500">{error}</p>
                )}

                <button
                    type="submit"
                    disabled={loading}
                    className="mt-6 w-full rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 py-3 text-white font-semibold hover:opacity-90 disabled:opacity-50"
                >
                    {loading ? "Predicting..." : "Predict"}
                </button>
            </form>

            {
                isClicked && (
                    <Result confidence={confidence} prediction={prediction}/>
                )
            }
        </div>
        </div>
    );
};

export default Home;
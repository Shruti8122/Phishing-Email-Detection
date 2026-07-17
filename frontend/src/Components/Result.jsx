const Result = ({ confidence, prediction }) => {
    const isPhishing = prediction === "Phishing";

    return (
        <div className="max-w-4xl mx-auto mt-8 px-6">
            <div className="rounded-2xl bg-slate-900 border border-slate-700 shadow-xl p-8">

                <h2 className="text-3xl font-bold text-center text-cyan-400 mb-8">
                    Prediction Result
                </h2>

                <div className="space-y-6">

                    <div className="flex items-center justify-between rounded-xl bg-slate-800 p-5">
                        <span className="text-lg font-medium text-gray-300">
                            Prediction
                        </span>

                        <span
                            className={`px-5 py-2 rounded-full font-semibold text-white ${isPhishing
                                    ? "bg-red-600"
                                    : "bg-green-600"
                                }`}
                        >
                            {isPhishing ? "🚨 Phishing" : "✅ Safe"}
                        </span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl bg-slate-800 p-5">
                        <span className="text-lg font-medium text-gray-300">
                            Confidence
                        </span>

                        <span className="text-xl font-bold text-cyan-400">
                            {confidence}%
                        </span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl bg-slate-800 p-5">
                        <span className="text-lg font-medium text-gray-300">
                            Model Used
                        </span>

                        <span className="font-semibold text-white">
                            Neural Network
                        </span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Result;
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className=" min-h-[80vh] flex items-center justify-center px-6">
            <div className="max-w-xl w-full bg-slate-900 border border-slate-700 rounded-2xl shadow-xl p-10 text-center">

                <h1 className="text-8xl font-extrabold text-cyan-500">
                    404
                </h1>

                <h2 className="mt-4 text-3xl font-bold text-white">
                    Page Not Found
                </h2>

                <p className="mt-4 text-gray-400 leading-7">
                    Oops! The page you're looking for doesn't exist or may have been
                    moved. Please check the URL or return to the homepage.
                </p>

                <Link
                    to="/"
                    className="inline-block mt-8 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white transition hover:opacity-90"
                >
                    ← Back to Home
                </Link>

            </div>
        </div>
    );
};

export default NotFound;
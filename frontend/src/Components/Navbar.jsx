import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-8 py-4 bg-slate-900 text-white shadow-md">
            <div className="flex items-center gap-3">
                <p className="text-3xl">📧</p>
                <h1 className="text-xl font-bold">
                    AI-Driven Phishing Email Detection
                </h1>
            </div>

            <div className="flex items-center gap-6">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "text-cyan-400 font-semibold"
                            : "hover:text-cyan-400 transition-colors"
                    }
                >
                    Home
                </NavLink>

                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive
                            ? "text-cyan-400 font-semibold"
                            : "hover:text-cyan-400 transition-colors"
                    }
                >
                    About
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
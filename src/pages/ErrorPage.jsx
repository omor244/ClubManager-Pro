import { useNavigate } from "react-router";
import { motion } from "framer-motion";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-lime-50 to-white px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white shadow-xl rounded-2xl p-10 max-w-md text-center border border-gray-100"
      >
        {/* Icon */}
        <div className="mx-auto w-20 h-20 bg-lime-100 rounded-full flex items-center justify-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-12 h-12 text-lime-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m0 3.75h.008v.008H12v-.008zm0-14.25a9 9 0 100 18 9 9 0 000-18z"
            />
          </svg>
        </div>

        {/* Headings */}
        <h1 className="text-3xl font-extrabold text-gray-800">
          Oops! Something Went Wrong
        </h1>
        <p className="mt-3 text-gray-600 leading-relaxed">
          The page you're looking for is unavailable or an unexpected error
          occurred.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-2 rounded-lg border border-lime-500 text-lime-600 font-medium hover:bg-lime-50 transition"
          >
            ← Go Back
          </button>

          <button
            onClick={() => navigate("/")}
            className="px-6 py-2 rounded-lg bg-lime-500 text-white font-medium hover:bg-lime-600 transition shadow-lg"
          >
            Go Home
          </button>
        </div>

        {/* Footer text */}
        <p className="mt-6 text-xs text-gray-400">
          If the issue continues, please contact support.
        </p>
      </motion.div>
    </div>
  );
};

export default ErrorPage;

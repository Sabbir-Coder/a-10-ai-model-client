import { use, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const { signInUser, signInWithGoogle, user } = use(AuthContext);
  const [error, setError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  if (user) {
    return <Navigate to='/' replace />;
  }

  const handleLogIn = (event) => {
    event.preventDefault();
    setError(""); // Clear previous errors
    const email = event.target.email.value;
    const password = event.target.password.value;

    signInUser(email, password)
      .then((result) => {
        event.target.reset();
        navigate(location.state || "/");
      })
      .catch((err) => {
        console.log(err);
        // Firebase auth errors are often technical, providing a generic message or cleaning it up is better
        setError(err.message.replace("Firebase: ", ""));
      });
  };

  const handleGoogleSignIn = () => {
    setError("");
    signInWithGoogle()
      .then((result) => {
        navigate(location?.state || "/");
      })
      .catch((err) => {
        console.log(err);
        setError(err.message.replace("Firebase: ", ""));
      });
  };

  return (
    <div className="card bg-base-100 mt-13 w-full mx-auto max-w-sm shrink-0 shadow-2xl border border-gray-200">
      <div className="card-body">
        <h1 className="text-3xl font-bold text-center mb-4">Login</h1>

        {/* Error Display */}
        {error && (
          <div className="bg-red-50 text-red-500 text-sm px-4 py-2 rounded-lg border border-red-100 text-center mb-2">
            {error}
          </div>
        )}

        <form onSubmit={handleLogIn}>
          <fieldset className="fieldset p-0">

            <label className="label font-medium pb-1">Email</label>
            <input
              type="email"
              name="email"
              className="input w-full rounded-full border-gray-300 focus:border-blue-500 focus:outline-none"
              placeholder="Email address"
              required
            />

            <label className="label font-medium pb-1 mt-3">Password</label>
            <input
              type="password"
              name="password"
              className="input w-full rounded-full border-gray-300 focus:border-blue-500 focus:outline-none"
              placeholder="Enter password"
              required
            />
            <div className="text-right mt-2">
              <a href="#" className="link link-hover text-xs text-gray-500">Forgot password?</a>
            </div>

            <button className="btn text-white mt-6 rounded-full bg-linear-to-r from-[#004BD3] to-[#004ad37c] w-full border-none shadow-lg hover:shadow-xl transition-all">
              Login
            </button>
          </fieldset>
        </form>

        <div className="divider text-gray-400 text-xs my-6">OR CONTINUE WITH</div>

        <button
          onClick={handleGoogleSignIn}
          className="btn bg-white text-gray-700 hover:bg-gray-50 rounded-full border border-gray-200 w-full flex items-center justify-center gap-2"
        >
          <FaGoogle className="text-lg text-blue-500" />
          Google
        </button>

        <p className="text-center text-sm mt-6 text-gray-600">
          New to our website?{" "}
          <Link
            className="text-[#004BD3] font-bold hover:underline"
            to="/auth/register"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

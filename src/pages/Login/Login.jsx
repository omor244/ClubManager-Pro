// Login.jsx
import { Link, Navigate, useLocation, useNavigate } from 'react-router';
import { FcGoogle } from 'react-icons/fc';
import { TbFidgetSpinner } from 'react-icons/tb';
import { toast } from 'react-hot-toast';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import { saveorupdateuser } from '../../utility/utility';
import { Home } from 'lucide-react';

const Login = () => {
  const { signIn, signInWithGoogle, loading, user, setLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';
 
  console.log(from)
  console.log(location)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Form submission
  const onSubmit = async (data) => {
    const { email, password } = data;


    setLoading(true);
    try {
    const {user} = await signIn(email, password);

      await saveorupdateuser({ name: user?.displayName, email: user?.email, image: user?.photoURL })
      navigate(from, { replace: true });
      toast.success('Login Successful');
    } catch (err) {
      toast.error(err?.message || 'Login Failed');
    } finally {
      setLoading(false);
    }
  };

  // Google Sign-In
  const handleGoogleSignIn = async () => {
    if (loading) return;
    setLoading(true);
    try {
   const {user} =  await signInWithGoogle();

      await saveorupdateuser(
        {
          name: user?.displayName,
          email: user?.email,
          image: user?.photoURL
        }
      )
      navigate(from, { replace: true });
      toast.success('Login Successful');
    } catch (err) {
      toast.error(err?.message || 'Google Sign-in Failed');
    } finally {
      setLoading(false);
    }
  };

  if (user) return <Navigate to={from} replace />;

  return (
    <div className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
       
      <Link
        to="/"
        className="absolute top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-blue-600 transition-all shadow-lg group"
      >
        <Home size={16} className="group-hover:scale-110 transition-transform" />
        Go Home
      </Link>
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('https://i.ibb.co/y9VqSwb/images.jpg')" }}
        >
          <div className="w-full h-full bg-black opacity-30"></div>
        </div>
      </div>

      {/* Login Card */}
      <div className="relative z-10 w-full  max-w-md md:max-w-sm shadow-2xl">
        <div
          className="card w-full p-8 pt-10 rounded-lg bg-gradient-to-b from-[#2a68b4] to-[#45a0d8] text-white relative"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 30px), 50% 100%, 0 calc(100% - 30px))',
          }}
        >
          {/* Title */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold mb-1 tracking-wider flex items-center justify-center">
              <span className="mr-2 text-xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M12 20.005v-5.292M12 4.354v-5.292M12 20.005a4 4 0 110-5.292M12 4.354a4 4 0 110 5.292M12 20.005a4 4 0 110 5.292" />
                </svg>
              </span>
              ClubManager Pro
            </h1>
            <p className="text-sm opacity-90 mt-1">Login to access your account</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email */}
            <div className="form-control mb-4">
              <input
                type="email"
                placeholder="Enter email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Invalid email format',
                  },
                })}
                className="input input-bordered p-1 input-sm w-full bg-white/50 bg-opacity-30 border-none placeholder-white text-white focus:outline-none focus:ring-1 focus:ring-white"
              />
              {errors.email && <p className="text-red-300 text-xs mt-1">{errors.email.message}</p>}
            </div>

            {/* Password */}
            <div className="form-control mb-6">
              <input
                type="password"
                placeholder="Enter password"
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at  least 6 characters',
                  },
                })}
                className="input input-bordered p-1  input-sm w-full bg-white/50 bg-opacity-30 border-none placeholder-white text-white focus:outline-none focus:ring-1 focus:ring-white"
              />
              {errors.password && <p className="text-red-300 text-xs mt-1">{errors.password.message}</p>}
            </div>

            {/* Submit */}
            <div className="form-control mb-4">
              <button
                type="submit"
                className="btn btn-sm text-base-100 bg-black py-1 bg-opacity-60 border-none hover:bg-black hover:bg-opacity-80 rounded-full w-full"
                disabled={loading}
              >
                {loading ? <TbFidgetSpinner className="animate-spin m-auto text-white" /> : 'Login'}
              </button>
            </div>
          </form>

          {/* Forgot Password */}
          <div className="text-center mb-4">
            <button className="text-xs hover:underline hover:text-lime-500 text-white/80 cursor-pointer">
              Forgot password?
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px bg-white opacity-40"></div>
            <p className="px-3 text-sm opacity-80">Or login with</p>
            <div className="flex-1 h-px bg-white opacity-40"></div>
          </div>

          {/* Google Sign-In */}
          <div
            onClick={loading ? null : handleGoogleSignIn}
            className={`flex justify-center items-center space-x-2 border border-white border-opacity-40 rounded-full my-4 p-2 cursor-pointer transition-colors ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-black hover:bg-opacity-20'
              }`}
          >
            <FcGoogle size={24} />
            <p className="text-sm font-medium">Continue with Google</p>
          </div>

          {/* Signup Link */}
          <p className="text-center text-sm mt-4 opacity-90">
            Don't have an account?{' '}
            <Link to="/signup" className="underline font-bold text-white hover:text-opacity-80">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
   
  );
};

export default Login;

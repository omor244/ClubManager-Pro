import { Link, useLocation, useNavigate } from 'react-router';
import { FcGoogle } from 'react-icons/fc';
// Assuming useAuth path is correct
import useAuth from '../../hooks/useAuth';
import { toast } from 'react-hot-toast';
import { TbFidgetSpinner } from 'react-icons/tb';

import { useForm } from 'react-hook-form';
import { Imageupload, saveorupdateuser } from '../../utility/utility';

const SignUp = () => {
  // 1. Destructuring auth functions and state
  const { createUser, updateUserProfile, signInWithGoogle, loading, setLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';

  // 2. Setup React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  // 3. Main Form Submission Handler
  const handelonsubmit = async (data) => {
    // Stop execution if already loading
    if (loading) return;
    setLoading(true); // Manually set loading true at the start of async work

    const { name, email, password, image } = data;
    const imagefile = image[0];

    try {
      // 1. Image Upload
      const imageURL = await Imageupload(imagefile);
      console.log('Uploaded Image URL:', imageURL);

      // 2. User Registration (Firebase/Auth)
      await createUser(email, password);

      await saveorupdateuser({ name, email, image: imageURL });
      // 3. Update User Profile (Firebase)
      await updateUserProfile(name, imageURL);

      // 4. Save/Update User in your database (utility function)

      navigate(from, { replace: true });
      toast.success('Signup Successful');

    } catch (err) {
      console.error('Signup Error:', err);
      // Firebase errors often have a "auth/" prefix, check the err.message
      toast.error(err?.message || 'Signup failed. Please try again.');
    } finally {
      setLoading(false); // Ensure loading is turned off regardless of success/fail
    }
  };

  // 4. Handle Google Signin
  const handleGoogleSignIn = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const result = await signInWithGoogle();
      const user = result.user; // Get the user object

      // Save/Update user data in DB (optional, but good practice for Google Sign-in)
      await saveorupdateuser({ name: user.displayName, email: user.email, image: user.photoURL });

      navigate(from, { replace: true });
      toast.success('Google Signup Successful');
    } catch (err) {
      console.error('Google Sign-in Error:', err);
      toast.error(err?.message || 'Google sign-in failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">

      {/* --- Right Section: Background Image & Overlay --- */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('https://i.ibb.co.com/y9VqSwb/images.jpg')" }}
        >
          <div className="w-full h-full bg-black opacity-30"></div>
        </div>
      </div>

      {/* --- Left Section: Friend Finder Card (Floating/Slanted) --- */}
      <div
        className="relative z-10 w-full  max-w-md md:max-w-xs lg:max-w-sm 
                            "
      >
        <div className="card w-full p-8 pt-10 rounded-lg 
                                bg-gradient-to-b from-[#2a68b4] to-[#45a0d8] 
                                text-white relative"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 30px), 50% 100%, 0 calc(100% - 30px))'
          }}
        >

          {/* Logo/Title Section */}
        

          {/* Form Content */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold mb-1 tracking-wider flex items-center justify-center">
              <span className="mr-2 text-xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M12 20.005v-5.292M12 4.354v-5.292M12 20.005a4 4 0 110-5.292M12 4.354a4 4 0 110 5.292M12 20.005a4 4 0 110 5.292" />
                </svg>
              </span>
              ClubManager Pro
            </h1>
            <p className="text-sm opacity-90">Signup now and meet awesome people around the world!</p>
          </div>

          <form onSubmit={handleSubmit(handelonsubmit)}>

            {/* Input 1: Name */}
            <div className="form-control mb-4">
              <input
                type="text"
                name="name"
                placeholder="Enter name"
                {...register('name', {
                  required: 'Name is required',
                  maxLength: {
                    value: 20,
                    message: 'Your name is too long'
                  }
                })}
                className="input  p-1 input-bordered input-sm w-full bg-white/50 bg-opacity-30 border-none placeholder-white text-white focus:outline-none focus:ring-1 focus:ring-white"
              />
              {errors.name && <p className="text-red-300 text-xs mt-1">{errors.name.message}</p>}
            </div>

            {/* Input 2: Image Upload */}
            <div className='form-control mb-4'>
             
              <input
                {...register('image', {
                  required: 'Profile image is required',
                })}
                type='file'
                id='image'
                accept='image/*'
                className='block w-full h-10 text-sm text-gray-500
                                file:mr-4 file:px-4
                                file:rounded-md file:border-0
                                file:text-sm file:font-semibold
                                file:bg-white file:text-lime-700
                                hover:file:bg-lime-100
                                bg-gray-100 border border-dashed border-white/50 rounded-md cursor-pointer
                                focus:outline-none focus:ring-2 focus:ring-white focus:border-white
                                py-2'
              />
              {errors.image && <p className="text-red-300 text-xs mt-1">{errors.image.message}</p>}
            </div>

            {/* Input 3: Email */}
            <div className="form-control mb-4">
              <input
                type="email"
                placeholder="Enter email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Entered value does not match email format',
                  }
                })}
                className="input p-1 input-bordered input-sm w-full bg-white/50 bg-opacity-30 border-none placeholder-white text-white focus:outline-none focus:ring-1 focus:ring-white"
              />
              {errors.email && <p className="text-red-300 text-xs mt-1">{errors.email.message}</p>}
            </div>

            {/* Input 4: Password (FIXED VALIDATION) */}
            <div className="form-control mb-6">
              <input
                type="password"
                name="password"
                placeholder="Enter a password"
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters',
                  },
                  // ^ (?=.* [a - z])(?=.* [A - Z]).{6,} $

                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                    message: 'Must include uppercase, number, and special character.',
                  }
                })}
                className="input p-1 input-bordered input-sm w-full bg-white/50 bg-opacity-30 border-none placeholder-white text-white focus:outline-none focus:ring-1 focus:ring-white"
              />
              {/* Display Password Errors */}
              {errors.password && <p className="text-red-300 text-xs mt-1">{errors.password.message}</p>}
            </div>

            {/* Terms Text */}
            <p className="text-xs mb-6 text-center opacity-80">
              By signing up you agree to the terms
            </p>

            {/* Signup Button */}
            <div className="form-control mb-4">
              <button
                type="submit"
                className="btn btn-sm text-base-100 py -1 bg-black bg-opacity-60 border-none hover:bg-black hover:bg-opacity-80 rounded-full w-32 mx-auto disabled:opacity-50 w-full"
                disabled={loading}
              >
                {loading ? (
                  <TbFidgetSpinner className='animate-spin m-auto text-white' />
                ) : (
                  <span className='text-lg font-medium w-full'>Sign Up</span>
                )}
              </button>
            </div>
          </form>

          {/* Divider/Social Section */}
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px bg-white opacity-40"></div>
            <p className="px-3 text-sm opacity-80">
              Signup with social
            </p>
            <div className="flex-1 h-px bg-white opacity-40"></div>
          </div>

          {/* Google Sign-In Button */}
          <div
            onClick={loading ? null : handleGoogleSignIn}
            className={`flex justify-center items-center space-x-2 border border-white border-opacity-40 rounded-full my-4 p-2 cursor-pointer transition-colors ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white hover:bg-opacity-20'}`}
          >
            <FcGoogle size={24} />
            <p className='text-sm font-medium'>Continue with Google</p>
          </div>

          {/* Login Link */}
          <p className="text-center text-sm mt-4 opacity-90">
            Already have an account?{' '}
            <Link
              to='/login'
              className='underline font-bold text-white hover:text-opacity-80'
            >
              Login
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
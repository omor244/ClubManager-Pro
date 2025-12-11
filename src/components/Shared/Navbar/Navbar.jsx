import Container from '../Container';
import { AiOutlineMenu, AiOutlineUser } from 'react-icons/ai';
import { useState } from 'react';
import { Link } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import avatarImg from '../../../assets/images/placeholder.jpg';
// --- IMPORTANT ---

// -----------------

// Define Professional Colors
const PRIMARY_COLOR = 'text-[#E57300]'; // Deep Orange/Gold for accent (matching the logo colors)
const PRIMARY_HOVER = 'hover:text-[#E57300]';
const TEXT_COLOR = 'text-gray-700'; // Dark text for readability

const Navbar = () => {
  const { user, logOut } = useAuth();
  // Placeholder for the role hook, replace with actual fetch later
  const role = "Member";
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className='fixed w-full bg-white z-10 shadow-lg'>
      <div className='py-4 border-b border-gray-100'>
        <Container>
          <div className='flex flex-row items-center justify-between gap-3 md:gap-0'>

            {/* 1. Logo: ClubManager Pro Image (Left) */}
            <Link to='/'>
              <img
                src="https://i.ibb.co.com/ccVjst2X/Chat-GPT-Image-Dec-6-2025-08-44-10-AM.png"
                alt='ClubManager Pro Logo'
                width='150' // Adjusted size to fit the logo comfortably
                height='auto'
                className='object-contain w-32 md:w-40 lg:w-48'
              />
            </Link>

            {/* 2. Main Navigation Links (Center) */}
            <div className={`hidden md:flex flex-row items-center gap-8 font-semibold ${TEXT_COLOR}`}>
              <Link to='/' className={`${PRIMARY_HOVER} transition duration-200`}>Home</Link>
              <Link to='/clubs' className={`${PRIMARY_HOVER} transition duration-200`}>Clubs</Link>

              {/* Central Dashboard Link - Highlighted */}
              <Link
                to={user ? '/dashboard' : '/login'}
                className={`py-1 px-3 rounded-full border-2 border-transparent ${PRIMARY_COLOR} ${PRIMARY_HOVER} hover:border-[#FEEFD0] transition duration-200`}
              >
                Dashboard
              </Link>

              <Link to='/events' className={`${PRIMARY_HOVER} transition duration-200`}>Events</Link>
            </div>

            {/* 3. User Profile / Auth Links (Right) */}
            <div className='relative'>
              <div className='flex flex-row items-center gap-3'>

                {/* User Profile/Auth Button - No small avatar/icon fallback inside button */}
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className={`p-2 md:py-1 md:px-3 border border-neutral-300 flex flex-row items-center gap-2 rounded-full cursor-pointer hover:shadow-lg transition ${TEXT_COLOR}`}
                >
                  <AiOutlineMenu size={20} />
                  <div className='hidden md:flex items-center gap-2'>
                    {user ? (
                      <>
                        {/* Logged In: Name, Role, Avatar */}
                        <div className='flex flex-col text-right text-sm leading-none'>
                          <span className='font-bold'>{user.displayName?.split(' ')[0] || 'Profile'}</span>
                          <span className='text-xs font-medium text-gray-500'>({role})</span>
                        </div>
                        <img
                          className='rounded-full object-cover'
                          referrerPolicy='no-referrer'
                          src={user?.photoURL || avatarImg}
                          alt='profile'
                          height='30'
                          width='30'
                        />
                      </>
                    ) : (
                      // Logged Out: Show only a placeholder user icon next to the menu icon
                      <div className='font-semibold'>
                        <AiOutlineUser size={20} className={PRIMARY_COLOR} />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Dropdown Menu */}
              {isOpen && (
                <div className='absolute rounded-lg shadow-2xl w-[12rem] bg-white overflow-hidden right-0 top-14 text-sm z-20'>
                  <div className='flex flex-col cursor-pointer'>

                    {/* Public Links (Mobile View only) */}
                    <Link
                      to='/'
                      onClick={closeMenu}
                      className={`block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-medium ${TEXT_COLOR}`}
                    > Home </Link>
                    <Link
                      to='/clubs'
                      onClick={closeMenu}
                      className={`block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-medium ${TEXT_COLOR}`}
                    > Clubs </Link>
                    <Link
                      to='/events'
                      onClick={closeMenu}
                      className={`block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-medium ${TEXT_COLOR}`}
                    > Events </Link>

                    {/* Authentication Links */}
                    {user ? (
                      <>
                        <Link
                          to='/dashboard'
                          onClick={closeMenu}
                          className={`px-4 py-3 font-semibold ${PRIMARY_COLOR} hover:bg-neutral-100 transition`}
                        >
                          My Dashboard
                        </Link>
                        <Link to={'/dashboard/profile'}>Profile</Link>
                        <div
                          onClick={() => {
                            logOut();
                            closeMenu();
                          }}
                          className={`px-4 py-3 font-semibold ${TEXT_COLOR} hover:bg-neutral-100 transition cursor-pointer`}
                        >
                          Logout
                        </div>
                      </>
                    ) : (
                      <>
                        <Link
                          to='/login'
                          onClick={closeMenu}
                          className={`px-4 py-3 font-semibold ${TEXT_COLOR} hover:bg-neutral-100 transition`}
                        >
                          Login
                        </Link>
                        <Link
                            to='/signup'
                          onClick={closeMenu}
                          className={`px-4 py-3 font-semibold ${TEXT_COLOR} hover:bg-neutral-100 transition`}
                        >
                          Sign up
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
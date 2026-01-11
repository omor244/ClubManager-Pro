import Container from '../Container';
import { AiOutlineMenu, AiOutlineUser } from 'react-icons/ai';
import { useState } from 'react';
import { Link } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import avatarImg from '../../../assets/images/placeholder.jpg';
import useRole from '../../../hooks/useRole';
import useTheme from '../useTheme/useTheme';
// --- IMPORTANT ---

// -----------------

// Define Professional Colors
const PRIMARY_COLOR = 'text-[#E57300]'; // Deep Orange/Gold for accent (matching the logo colors)
const PRIMARY_HOVER = 'hover:text-[#E57300]';
const TEXT_COLOR = 'text-gray-700'; // Dark text for readability

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { user, logOut } = useAuth();
  // Placeholder for the role hook, replace with actual fetch later
  const role = useRole();
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
              <Link to='/about' className={`${PRIMARY_HOVER} transition duration-200`}>About</Link>
              {
                user && <>
                  <Link to='/dashboard' className={`${PRIMARY_HOVER} transition duration-200`}>Analytics</Link>
                </>
              }
            </div>

            {/* 3. User Profile / Auth Links (Right) */}
            <div className='relative'>
              <div className='flex flex-row items-center gap-3'>

                {/* User Profile/Auth Button - No small avatar/icon fallback inside button */}
                <div className=''>
                  {/* <input type="checkbox" defaultChecked onChange={toggleTheme} className="toggle toggle-lg" /> */}
                  <label className="swap swap-rotate btn btn-ghost btn-circle">
                    {/* This hidden checkbox controls the state */}
                    <input type="checkbox" onChange={toggleTheme} className="hidden" />

                    {/* Sun Icon (Visible when checked/Dark Mode) */}
                    <svg className="swap-on fill-orange-400 w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                    {/* Moon Icon (Visible when unchecked/Light Mode) */}
                    <svg className="swap-off fill-indigo-500 w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.69Z" /></svg>
                  </label>
                </div>
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
                          <span className='text-xs font-medium text-gray-500'>({role.role})</span>
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
                        <Link className={`px-4 py-3 font-semibold ${PRIMARY_COLOR} hover:bg-neutral-100 transition`} to={'/dashboard/profile'}>Profile</Link>
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
import Container from '../Container';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
// Import the X icon for modern compliance
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router';
// Import the logo image used in the Navbar



const Footer = () => {
  // Define colors consistent with the Navbar
  const BG_COLOR = 'bg-gray-800'; // Dark slate background
  const TEXT_COLOR = 'text-gray-300';
  const ACCENT_HOVER = 'hover:text-[#E57300]'; // Deep Orange/Gold

  return (
    <footer className={`${BG_COLOR} py-12`}>
      <Container>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700 pb-8'>

          {/* 1. Logo & About Section */}
          <div className='col-span-1 md:col-span-2 space-y-4'>
            <Link to='/'>
              <h2 className='text-white py-3.5 text-3xl font-bold'>ClubManager <br /> Pro</h2>
            </Link>
            <p className={`text-sm ${TEXT_COLOR}`}>
              ClubSphere is the premier platform for discovering, joining, and managing local clubs and events, turning community aspirations into reality.
            </p>
          </div>

          {/* 2. Quick Links Section */}
          <div>
            <h3 className={`text-lg font-bold text-white mb-4`}>Quick Links</h3>
            <ul className={`space-y-3 ${TEXT_COLOR}`}>
              <li><Link  className={`text-sm ${ACCENT_HOVER} transition`}>Home</Link></li>
              <li><Link  className={`text-sm ${ACCENT_HOVER} transition`}>Browse Clubs</Link></li>
              <li><Link  className={`text-sm ${ACCENT_HOVER} transition`}>Upcoming Events</Link></li>
              <li><Link  className={`text-sm ${ACCENT_HOVER} transition`}>Dashboard</Link></li>
            </ul>
          </div>

          {/* 3. Support & Legal Section */}
          <div>
            <h3 className={`text-lg font-bold text-white mb-4`}>Support</h3>
            <ul className={`space-y-3 ${TEXT_COLOR}`}>
              <li><Link  className={`text-sm ${ACCENT_HOVER} transition`}>Contact Us</Link></li>
              <li><Link  className={`text-sm ${ACCENT_HOVER} transition`}>Privacy Policy</Link></li>
              <li><Link  className={`text-sm ${ACCENT_HOVER} transition`}>Terms of Service</Link></li>
              <li><Link  className={`text-sm ${ACCENT_HOVER} transition`}>How It Works</Link></li>
            </ul>
          </div>
        </div>

      
        {/* Bottom Bar: Copyright and Social Icons */}
        <div className='flex flex-col md:flex-row items-center justify-between pt-6'>
          {/* Copyright */}
          <p className={`text-sm ${TEXT_COLOR}`}>
            &copy; {new Date().getFullYear()} ClubSphere. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className='flex space-x-6 mt-4 md:mt-0'>
            <a
              href='https://github.com/your-project-repo'
              target='_blank'
              rel='noopener noreferrer'
              className={`text-xl ${TEXT_COLOR} ${ACCENT_HOVER} transition`}
              aria-label="GitHub Repository"
            >
              <FaGithub />
            </a>
            <a
              href='https://linkedin.com/'
              target='_blank'
              rel='noopener noreferrer'
              className={`text-xl ${TEXT_COLOR} ${ACCENT_HOVER} transition`}
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
            <a
              href='https://x.com/'
              target='_blank'
              rel='noopener noreferrer'
              className={`text-xl ${TEXT_COLOR} ${ACCENT_HOVER} transition`}
              aria-label="Follow us on X (Twitter)"
            >
              <FaXTwitter /> {/* Using the FaXTwitter icon */}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
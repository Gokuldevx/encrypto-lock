import { Button } from '../components/ui/button';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Check if user is on home page
  const isHomePage = location.pathname === '/';

  // Check if user is on auth or signup pages
  const isAuthPage = location.pathname.startsWith('/auth');

  // Show sign out button everywhere except home and auth pages
  const showSignOut = !isHomePage && !isAuthPage;

  const handleSignOut = () => {
    // Add any sign-out logic here (clear tokens, etc.)
    navigate('/');
  };

  return (
    <nav className="bg-[#f4efca] border-b border-[#f66435]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link 
            to="/" 
            className="text-2xl font-extrabold text-[#f66435] tracking-tight hover:opacity-80 transition-opacity">
            EncryptoLock
          </Link>
          <div className="flex gap-4 items-center">
            {showSignOut ? (
              <Button 
                onClick={handleSignOut}
                
              >
                Log Out
              </Button>
            ) : isHomePage && (
              <Button 
                onClick={() => navigate('/auth/signIn')}
              >
                Sign Up / Login
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

import { Button } from '../components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';
import { LockIcon } from 'lucide-react';

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
    <nav className="bg-[#f4efca] border-b-2 border-[#f66435] ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <h2 className=" flex items-center gap-2 text-2xl font-extrabold text-gray-900 tracking-tight hover:opacity-80 transition-opacity">
          <LockIcon className="w-10 h-9 text-[#f66435]" />
            EncryptoLock
          </h2>

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

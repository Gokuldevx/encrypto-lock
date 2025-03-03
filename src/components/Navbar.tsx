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
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link 
            to="/" 
            className="text-2xl font-extrabold text-primary tracking-tight hover:opacity-80 transition-opacity">
            EncryptoLock
          </Link>
          <div className="flex gap-4 items-center">
            {showSignOut ? (
              <Button 
                onClick={handleSignOut}
                className="text-white shadow-lg 
                bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700
                transform transition-all duration-300 ease-in-out
                hover:scale-105 hover:shadow-xl
                active:scale-95 active:shadow-md">
                Log Out
              </Button>
            ) : isHomePage && (
              <Button 
  onClick={() => navigate('/auth/signIn')}
  className="text-white shadow-lg 
  bg-gradient-to-r from-primary to-[#f66435] hover:from-primary/90 hover:to-[#f66435]/90
  transform transition-all duration-300 ease-in-out
  hover:scale-105 hover:shadow-xl
  active:scale-95 active:shadow-md
  flex items-center gap-2"
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

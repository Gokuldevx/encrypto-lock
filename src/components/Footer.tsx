import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#f66435] text-[#f4efca] py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Branding Section */}
          <div className="space-y-6">
            <Link to="/" className="block">
              <h2 className="text-3xl font-bold">EncryptoLock</h2>
            </Link>
            <p className="text-lg text-gray-700 font-semibold">
              Secure your sensitive data with industry-grade encryption.
            </p>
            <p className="text-gray-700 font-semibold">
              EncryptoLock empowers you to store and manage credentials safely while maintaining full control over your encrypted secrets.
            </p>
          </div>

          {/* Navigation Sections */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Features Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Features</h3>
              <nav className="space-y-3">
                <Link to="/" className="block text-gray-700 hover:text-[#f4efca]/80 transition-colors">
                  Encrypt Data
                </Link>
                <Link to="/" className="block text-gray-700 hover:text-[#f4efca]/80 transition-colors">
                  Decrypt Data
                </Link>
                <Link to="/" className="block text-gray-700 hover:text-[#f4efca]/80 transition-colors">
                  Audit Logs
                </Link>
              </nav>
            </div>

            {/* Support Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Support</h3>
              <nav className="space-y-3">
                <Link to="/faq" className="block text-gray-700 hover:text-[#f4efca]/80 transition-colors">
                  FAQs
                </Link>
                <Link to="/contact" className="block text-gray-700 hover:text-[#f4efca]/80 transition-colors">
                  Contact Support
                </Link>
                <Link to="/privacy" className="block text-gray-700 hover:text-[#f4efca]/80 transition-colors">
                  Privacy Policy
                </Link>
              </nav>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#f4efca] text-center text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} EncryptoLock. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

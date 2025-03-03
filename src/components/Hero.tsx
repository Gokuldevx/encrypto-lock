// import { useNavigate } from 'react-router-dom';

export const Hero = () => {
  // const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary to-[#f66435] bg-clip-text text-transparent">
          Store your Credentials Securely
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-20 max-w-3xl mx-auto">
          Store your secrets securely without any hesitation.
        </p>
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mt-16">
          
          <div className="mt-32 text-sm text-gray-500">
            Safe and Secure secret storage service
          </div>
        </div>
      </div>
    </div>
  );
};
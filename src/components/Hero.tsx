import { LockIcon, UserIcon, ShieldCheckIcon, ClipboardListIcon, KeyIcon, BellIcon } from 'lucide-react';
export const Hero = () => {

  const features = [
    { 
      title: "Secure Encrypted Storage", 
      description: "Your secrets are encrypted using AES-256 encryption with a unique key derived from your passphrase using PBKDF2 and a secure salt.", 
      icon: <LockIcon className="w-8 h-8 mb-4 text-orange-600" /> 
    },
    { 
      title: "User Authentication & Access Control", 
      description: "Only authenticated users can encrypt and decrypt their stored secrets. Secrets are linked to user accounts securely.", 
      icon: <UserIcon className="w-8 h-8 mb-4 text-orange-600" /> 
    },
    { 
      title: "HMAC Integrity Verification", 
      description: "Each secret is protected with HMAC verification, ensuring its integrity and detecting unauthorized modifications or tampering.", 
      icon: <ShieldCheckIcon className="w-8 h-8 mb-4 text-orange-600" /> 
    },
    { 
      title: "Audit Trail & Logging", 
      description: "Every encryption, decryption, and failed access attempt is logged in the audit trail for security monitoring and compliance.", 
      icon: <ClipboardListIcon className="w-8 h-8 mb-4 text-orange-600" /> 
    },
    { 
      title: "Strong Key Derivation", 
      description: "Keys are derived using PBKDF2 with a randomly generated salt, preventing brute-force attacks and enhancing security.", 
      icon: <KeyIcon className="w-8 h-8 mb-4 text-orange-600" /> 
    },
    { 
      title: "Real-time User Feedback", 
      description: "Get instant notifications on encryption, decryption, and errors through user-friendly toast messages.", 
      icon: <BellIcon className="w-8 h-8 mb-4 text-orange-600" /> 
    }
  ];
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4efca]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900">
          Secure Your Secrets with {" "}
          <span className="text-[#f66435] relative">
              EncryptoLock
          </span>
        </h1><br/>
        <p className="text-xl md:text-2xl text-gray-700 mb-20 max-w-3xl mx-auto">
          Protect and organize your sensitive credentials with cutting-edge encryption.  
          Experience security, simplicity, and reliability—without compromise.
        </p>
        <section className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                {feature.icon}
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

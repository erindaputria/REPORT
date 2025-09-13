import { useState } from "react";

export default function SignUpPage() {
  const [activeTab, setActiveTab] = useState("signup");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-8">
          {/* Tab Navigation */}
          <div className="flex mb-8">
            <button
              onClick={() => setActiveTab("signup")}
              className={`flex-1 py-3 px-4 text-sm font-medium rounded-l-lg border ${
                activeTab === "signup"
                  ? "bg-[#507687] text-white border-[#507687]"
                  : "bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200"
              }`}
            >
              Sign up
            </button>
            <button
              onClick={() => setActiveTab("login")}
              className={`flex-1 py-3 px-4 text-sm font-medium rounded-r-lg border-t border-r border-b ${
                activeTab === "login"
                  ? "bg-[#507687] text-white border-[#507687]"
                  : "bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200"
              }`}
            >
              Log in
            </button>
          </div>

          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img
              src="/assets/Logo Report.png"
              alt="Logo Report"
              className="w-16 h-16 object-contain shadow-md rounded-full"
            />
          </div>

          {/* Title */}
          <h1 className="text-2xl font-poppins text-center text-gray-900 mb-8">
            Sign up
          </h1>

          {/* Social Login Buttons */}
          <div className="space-y-3 mb-6">
            <button className="w-full flex items-center justify-center py-3 px-4 bg-[#507687] hover:bg-[#405f73] text-white rounded-[40px] border border-[#3b5998] transition-colors">
              <svg
                className="w-5 h-5 mr-3"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Sign up with Facebook
            </button>

            <button className="w-full flex items-center justify-center py-3 px-4 bg-[#507687] hover:bg-[#405f73] text-white rounded-[40px] border border-gray-300 transition-colors">
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Sign up with Google
            </button>
          </div>

          {/* OR Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-black"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-black">OR</span>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-4 mb-6">
            {/* First Name and Last Name */}
            <div className="grid grid-cols-2 gap-3">
              <div className="text-left">
                <label className="block text-sm font-poppins text-gray-800 mb-1">
                  First name
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) =>
                    handleInputChange("firstName", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#507687] focus:border-transparent"
                  placeholder=""
                />
              </div>
              <div className="text-left">
                <label className="block text-sm font-poppins text-gray-800 mb-1">
                  Last name
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) =>
                    handleInputChange("lastName", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#507687] focus:border-transparent"
                  placeholder=""
                />
              </div>
            </div>

            {/* Email Address */}
            <div className="text-left">
              <label className="block text-sm font-poppins text-gray-800 mb-1">
                Email address
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#507687] focus:border-transparent"
                placeholder=""
              />
            </div>
          </div>

          {/* Sign Up Button */}
          <button
            className="w-full bg-[#507687] hover:bg-[#456073] text-white py-3 rounded-md font-medium transition-colors"
            onClick={() => {
              console.log("Sign up clicked", formData);
            }}
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

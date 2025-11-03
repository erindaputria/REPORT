import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const KataSandiBaru = () => {
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState({
    newPassword: false,
    confirmPassword: false,
  });
  const [errors, setErrors] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error ketika user mulai mengetik
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const toggleShowPassword = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  // ✅ FUNGSI VALIDASI PASSWORD
  const validatePassword = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length < minLength) {
      return "Password minimal 8 karakter";
    }
    if (!hasUpperCase) {
      return "Password harus mengandung huruf besar";
    }
    if (!hasLowerCase) {
      return "Password harus mengandung huruf kecil";
    }
    if (!hasNumbers) {
      return "Password harus mengandung angka";
    }
    if (!hasSpecialChar) {
      return "Password harus mengandung karakter spesial";
    }
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Reset errors
    setErrors({
      newPassword: "",
      confirmPassword: "",
    });

    let hasError = false;

    // ✅ VALIDASI PASSWORD BARU
    const passwordError = validatePassword(formData.newPassword);
    if (passwordError) {
      setErrors((prev) => ({ ...prev, newPassword: passwordError }));
      hasError = true;
    }

    // ✅ VALIDASI KONFIRMASI PASSWORD
    if (formData.newPassword !== formData.confirmPassword) {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: "Konfirmasi password tidak sesuai",
      }));
      hasError = true;
    }

    if (hasError) {
      setIsLoading(false);
      return;
    }

    try {
      // Simulasi API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // ✅ LANGSUNG NAVIGASI KE LOGIN
      navigate("/login");
    } catch (error) {
      console.error("Error:", error);
      setErrors({
        newPassword: "Terjadi kesalahan. Silakan coba lagi.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-6xl flex flex-col md:flex-row overflow-hidden">
        {/* Kolom kiri - Form Reset Password */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col items-center text-center relative order-2 md:order-1">
          {/* Logo */}
          <div className="mb-4 md:mb-6">
            <img
              src="/assets/Logo Report.png"
              alt="Logo Report"
              className="w-12 h-12 md:w-14 md:h-14 object-contain shadow-md rounded-full mx-auto"
            />
          </div>

          <h1 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
            Ubah Password
          </h1>
          <p className="text-gray-600 mb-6 md:mb-8 text-sm">
            Ubah kata sandi akunmu dengan memasukkan kata sandi baru
          </p>

          {/* Form reset password */}
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-sm mb-6 text-left"
          >
            {/* Kata Sandi Baru */}
            <div className="mb-6">
              <label
                htmlFor="newPassword"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Kata sandi baru
              </label>
              <input
                type={showPassword.newPassword ? "text" : "password"}
                id="newPassword"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleInputChange}
                required
                className={`w-full px-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.newPassword ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.newPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.newPassword}
                </p>
              )}
              {/* Checkbox Tampilkan */}
              <div className="flex items-center mt-2">
                <input
                  type="checkbox"
                  id="showNewPassword"
                  checked={showPassword.newPassword}
                  onChange={() => toggleShowPassword("newPassword")}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor="showNewPassword"
                  className="ml-2 text-sm text-[#226597]"
                >
                  Tampilkan kata sandi
                </label>
              </div>
            </div>

            {/* Konfirmasi Kata Sandi */}
            <div className="mb-6">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Konfirmasi kata sandi
              </label>
              <input
                type={showPassword.confirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
                className={`w-full px-3 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.confirmPassword ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.confirmPassword}
                </p>
              )}
              {/* Checkbox Tampilkan */}
              <div className="flex items-center mt-2">
                <input
                  type="checkbox"
                  id="showConfirmPassword"
                  checked={showPassword.confirmPassword}
                  onChange={() => toggleShowPassword("confirmPassword")}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor="showConfirmPassword"
                  className="ml-2 text-sm text-[#226597]"
                >
                  Tampilkan kata sandi
                </label>
              </div>
            </div>

            {/* Button */}
            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#226597] hover:bg-[#1a507a] disabled:bg-gray-400 text-white py-3 rounded-full font-medium transition-colors"
              >
                {isLoading ? "Mengubah Password..." : "Ubah Password"}
              </button>
            </div>
          </form>

          {/* Footer untuk mobile */}
          <div className="mt-8 pt-4 border-t border-gray-200 w-full md:hidden"></div>
        </div>

        {/* Kolom kanan: gambar */}
        <div className="w-full md:w-1/2 bg-[#226597] flex items-start justify-start order-1 md:order-2">
          <img
            src="/assets/Login.png"
            alt="Login Illustration"
            className="object-contain w-4/5 h-auto max-h-64 md:max-h-none opacity-90 ml-0"
          />
        </div>
      </div>
    </div>
  );
};

export default KataSandiBaru;

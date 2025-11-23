import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

const LogIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors({
      email: "",
      password: "",
    });

    // === DUMMY LOGIN (TAMBAHAN) ===
    const dummyUsers = [
      {
        email: "masyarakat@gmail.com",
        password: "masyarakat123",
        role: "masyarakat",
        redirect: "/berandamasyarakat",
      },
      {
        email: "seksi@gmail.com",
        password: "seksi123",
        role: "seksi",
        redirect: "/berandaseksi",
      },
      {
        email: "bidang@gmail.com",
        password: "bidang123",
        role: "bidang",
        redirect: "/dashboardbidang",
      },
      {
        email: "adminkota@gmail.com",
        password: "adminkota123",
        role: "admin kota",
        redirect: "/dashboardkota",
      },
      {
        email: "adminopd@gmail.com",
        password: "adminopd123",
        role: "admin opd",
        redirect: "/dashboardopd",
      },
      {
        email: "teknisi@gmail.com",
        password: "teknisi123",
        role: "teknisi",
        redirect: "/dashboardteknisi",
      },
      {
        email: "pegawai@gmail.com",
        password: "pegawai123",
        role: "pegawai",
        redirect: "/beranda",
      },
    ];

    const matched = dummyUsers.find(
      (user) =>
        user.email === formData.email &&
        user.password === formData.password
    );

    if (matched) {
      localStorage.setItem("role", matched.role);
      Swal.fire({
  title: `Anda login sebagai ${matched.role}`,
  icon: "success",
  timer: 2000,
  showConfirmButton: false,
  allowOutsideClick: false,
  allowEscapeKey: false,
  didClose: () => {
    navigate(matched.redirect);
  }
});
return;

    }
    // === END DUMMY LOGIN ===

    const payload = {
      email: formData.email,
      password: formData.password,
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();

        if (response.status === 401) {
          if (errorData.message?.toLowerCase().includes("email")) {
            setErrors({ email: "Email salah", password: "" });
          } else if (errorData.message?.toLowerCase().includes("password")) {
            setErrors({ email: "", password: "Kata sandi salah" });
          } else {
            setErrors({ email: "Email salah", password: "Kata sandi salah" });
          }
        } else {
          throw new Error("Login gagal!");
        }
        return;
      }

      const data = await response.json();
      console.log("Login success:", data);

      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      alert("Login berhasil!");
      navigate("/beranda");
    } catch (error) {
      console.error("Error:", error);

      setErrors({
        email: "Terjadi kesalahan",
        password: "Terjadi kesalahan",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-6xl flex flex-col md:flex-row overflow-hidden">
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col items-center text-center relative order-2 md:order-1">

          <div className="mb-4 md:mb-6">
            <img
              src="/assets/Logo Report.png"
              alt="Logo Report"
              className="w-12 h-12 md:w-14 md:h-14 object-contain shadow-md rounded-full mx-auto"
            />
          </div>

          <h1 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
            Masuk
          </h1>
          <p className="text-gray-600 mb-6 md:mb-8 text-sm">
            Gunakan email atau lainnya untuk melanjutkan
          </p>

          <form
            onSubmit={handleSubmit}
            className="w-full max-w-sm space-y-4 mb-6 text-left"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Alamat email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#226597] focus:border-transparent ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Kata sandi
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#226597] focus:border-transparent ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
              <div className="flex items-center mt-2">
                <input
                  type="checkbox"
                  id="showPassword"
                  checked={showPassword}
                  onChange={(e) => setShowPassword(e.target.checked)}
                  className="w-4 h-4 text-[#226597] border-gray-300 rounded focus:ring-[#226597]"
                />
                <label
                  htmlFor="showPassword"
                  className="ml-2 text-sm text-[#226597]"
                >
                  Tampilkan kata sandi
                </label>
              </div>
            </div>

            <div className="text-right mb-4">
              <Link
                to="/lupapassword"
                className="text-sm text-[#226597] underline hover:no-underline"
              >
                Lupa kata sandi?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-[#226597] hover:bg-[#1a507a] text-white py-3 rounded-full font-medium transition-colors"
            >
              Masuk
            </button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Belum punya akun?{" "}
              <Link
                to="/register"
                className="text-[#226597] hover:underline font-medium"
              >
                Daftar di sini
              </Link>
            </p>
          </div>
        </div>

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

export default LogIn;

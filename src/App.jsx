import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Beranda } from "./pages/beranda/Beranda";

//*-- Auth --*/
import Register from "./pages/Register";
import LogIn from "./pages/Login";

//*-- Pengguna --*/
import Profil from "./pages/profil/ProfilSaya";
import Tampilan from "./pages/profil/Tampilan";
import KnowledgeBase from "./pages/beranda/KnowledgeBase";
import PelaporanOnline from "./pages/beranda/pelaporan/PelaporanOnline";
import FormLaporan from "./pages/beranda/pelaporan/FormLaporan";
import Pelacakan from "./pages/beranda/pelaporan/Pelacakan";
import Pengajuan from "./pages/beranda/pengajuan/Pengajuan";
import ResetPassword from "./pages/beranda/pengajuan/ResetPassword";
import AksesSistem from "./pages/beranda/pengajuan/AksesSistem";
import Permintaan from "./pages/beranda/pengajuan/Permintaan";
import SuksesPelayanan from "./pages/beranda/pengajuan/SuksesPelayanan";
import SuksesPelaporan from "./pages/beranda/pelaporan/SuksesPelaporan";
import BerandaSeksi from "./pages/beranda/Seksi/BerandaSeksi";
import LayoutSeksi from "./components/Layout/LayoutSeksi";
import LayoutTeknisi from "./components/Layout/LayoutTeknisi";
import LayoutKota from "./components/Layout/LayoutKota";
import PengajuanSeksi from "./pages/beranda/Seksi/PengajuanSeksi";
import PenugasanSeksi from "./pages/beranda/Seksi/PenugasanSeksi"
import FormPenugasanSeksi from "./pages/beranda/Seksi/FormPenugasanSeksi"
import MonitoringSeksi from "./pages/beranda/Seksi/MonitoringSeksi"
import StatistikSeksi from "./pages/beranda/Seksi/StatistikSeksi"
import ArsipSeksi from "./pages/beranda/Seksi/ArsipSeksi"
import ReopenSeksi from "./pages/beranda/Seksi/ReopenSeksi"
import RatingSeksi from "./pages/beranda/Seksi/RatingSeksi";
import DashboardTeknisi from "./pages/beranda/Teknisi/DashboardTeknisi";
import ProfilMasyarakat from "./pages/profil/ProfilMasyarakat";
import CekDetailTeknisi from "./pages/beranda/Teknisi/CekDetailTeknisi";
import UpdateProgressTeknisi from "./pages/beranda/Teknisi/UpdateProgresTeknisi";
import RatingTeknisi from "./pages/beranda/Teknisi/RatingTeknisi";
import DashboardKota from "./pages/beranda/AdminKota/DashboardKota"
import CekDetailKota from "./pages/beranda/AdminKota/CekDetailKota";
import StatistikKotaKL from "./pages/beranda/AdminKota/StatistikKotaKL";
import StatistikKotaLP from "./pages/beranda/AdminKota/StatistikKotaLP"
import StatistikKotaTT from "./pages/beranda/AdminKota/StatistikKotaTT";
import RateKota from "./pages/beranda/AdminKota/RateKota";
import RateKotaOpd from "./pages/beranda/AdminKota/RateKotaOpd";

//*-- Helpdesk --*/
import HelpdeskChat from "./components/beranda/Helpdesk";

//*-- Bidang --*/
import DashboardBidang from "./pages/bidang/DashboardBidang";
import AksiTiket from "./pages/bidang/AksiTiket";

function App() {
  return (
    <Router>
      <Routes>
        {/* Halaman dengan Layout */}
        <Route path="/" element={<LayoutSeksi />}>
          <Route path="berandaseksi" element={<BerandaSeksi />} />    
          <Route path="pengajuanseksi" element={<PengajuanSeksi />} />
          <Route path="penugasanseksi" element={<PenugasanSeksi />} />
          <Route path="formpenugasanseksi" element={<FormPenugasanSeksi />} />
          <Route path="monitoringseksi" element={<MonitoringSeksi />} />
          <Route path="statistikseksi" element={<StatistikSeksi />} />
          <Route path="arsipseksi" element={<ArsipSeksi />} />
          <Route path="reopenseksi" element={<ReopenSeksi />} />
          <Route path="ratingseksi" element={<RatingSeksi />} />
        </Route>

        {/* Layout TEKNISI */}
        <Route path="/" element={<LayoutTeknisi />}>
          <Route path="dashboardteknisi" element={<DashboardTeknisi />} />
          <Route path="cekdetailteknisi" element={<CekDetailTeknisi />} />
          <Route path="updateprogresteknisi" element={<UpdateProgressTeknisi />} />
          <Route path="ratingteknisi" element={<RatingTeknisi />} />
        </Route>

        {/* Layout KOTA */}
        <Route path="/" element={<LayoutKota />}>
          <Route path="dashboardkota" element={<DashboardKota />} />
          <Route path="cekdetailkota" element={<CekDetailKota />} />
          <Route path="statistikkotakl" element={<StatistikKotaKL />} />
          <Route path="statistikkotalp" element={<StatistikKotaLP />} />
          <Route path="statistikkotatt" element={<StatistikKotaTT />} />
          <Route path="ratekota" element={<RateKota />} />
          <Route path="ratekotaopd/:opdName" element={<RateKotaOpd />} />
          <Route path="ratekotaopd" element={<RateKotaOpd />} />
        </Route>



        {/* Halaman tanpa Layout */}
        <Route path="/beranda" element={<Beranda />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/profilsaya" element={<Profil />} />
        <Route path="/tampilan" element={<Tampilan />} />
        <Route path="/knowledgebase" element={<KnowledgeBase />} />
        <Route path="/pelaporanonline" element={<PelaporanOnline />} />
        <Route path="/formlaporan" element={<FormLaporan />} />
        <Route path="/pelacakan" element={<Pelacakan />} />
        <Route path="/pengajuan" element={<Pengajuan />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/aksessistem" element={<AksesSistem />} />
        <Route path="/permintaan" element={<Permintaan />} />
        <Route path="/suksespelayanan" element={<SuksesPelayanan />} />
        <Route path="/suksespelaporan" element={<SuksesPelaporan />} />
        <Route path="/profilmasyarakat" element={<ProfilMasyarakat />} />
        <Route path="/dashboardbidang" element={<DashboardBidang />} />
        <Route path="/aksibidang" element={<AksiTiket />} />
        <Route path="/helpdesk" element={<HelpdeskChat />} />
      </Routes>
    </Router>
  );
}

export default App;

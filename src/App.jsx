import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Beranda } from "./pages/beranda/Beranda";

//*-- Auth --*/
import Register from "./pages/Register";
import LogIn from "./pages/Login";
import LupaPassword from "./pages/LupaPassword";
import MasukKode from "./pages/MasukKode";
import KataSandiBaru from "./pages/KataSandiBaru";

//*-- Pengguna --*/
import Profil from "./pages/profil/ProfilSaya";
import Tampilan from "./pages/profil/Tampilan";
import KnowledgeBase from "./pages/beranda/KnowledgeBase";
import PelaporanOnline from "./pages/beranda/pelaporan/PelaporanOnline";
import FormLaporan from "./pages/beranda/pelaporan/FormLaporan";
import FormScanAset from "./pages/beranda/pelaporan/FormScanAset";
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
import PenugasanSeksi from "./pages/beranda/Seksi/PenugasanSeksi";
import FormPenugasanSeksi from "./pages/beranda/Seksi/FormPenugasanSeksi";
import MonitoringSeksi from "./pages/beranda/Seksi/MonitoringSeksi";
import StatistikSeksi from "./pages/beranda/Seksi/StatistikSeksi";
import ArsipSeksi from "./pages/beranda/Seksi/ArsipSeksi";
import ReopenSeksi from "./pages/beranda/Seksi/ReopenSeksi";
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
import KnowledgeBaseKota from "./pages/beranda/AdminKota/KnowledgeBaseKota";
import AksiKBKota from "./pages/beranda/AdminKota/AksiKBKota";
import KBEditorKota from "./pages/beranda/AdminKota/KBEditorKota";
import LihatArtikelKota from "./pages/beranda/AdminKota/LihatArtikelKota";
import PengumumanKota from "./pages/beranda/AdminKota/PengumumanKota";

//*-- Masyarakat --*/
import { BerandaMasyarakat } from "./pages/masyarakat/BerandaMasyarakat";
import SidebarMasyarakat from "./pages/masyarakat/SidebarMasyarakat";
import PengajuanBidang from "./pages/beranda/Seksi/PengajuanBidang";
import MonitoringTiketSeksi from "./pages/beranda/Seksi/MonitoringTiketSeksi"
import DetailRating from "./pages/beranda/Seksi/DetailRating";
import LayananChat from "./pages/beranda/Seksi/LayananChat"
import LayananPesan from "./pages/beranda/Seksi/LayananPesan";
import RFCTeknisi from "./pages/beranda/Teknisi/RFCTeknisi"
import BuatFormRFC from "./pages/beranda/Teknisi/BuatFormRFC"
import EditFormRFC from "./pages/beranda/Teknisi/EditFormRFC";
import LihatFormRFC from "./pages/beranda/Teknisi/LihatFormRFC";

//*-- Helpdesk --*/
import HelpdeskChat from "./components/beranda/Helpdesk";

//*-- Bidang --*/
import DashboardBidang from "./pages/bidang/DashboardBidang";
import AksiTiket from "./pages/bidang/AksiTiket";
import BuatPengumumanKota from "./pages/beranda/AdminKota/BuatPengumumanKota";
import MonitoringBidang from "./pages/bidang/MonitoringBidang";
import RatingKepuasan from "./pages/bidang/RatingKepuasan";

//*-- Admin OPD --*/
import DashboardOpd from "./pages/adminopd/DashboardOpd";
import CekDetail from "./pages/adminopd/CekDetail";
import KnowledgeBaseDraft from "./pages/adminopd/KnowledgeBaseDraft";
import KnowledgeBaseDiajukan from "./pages/adminopd/KnowledgeBaseDiajukan";
import DraftBaru from "./pages/adminopd/DraftBaru";
import RatingKepuasanOpd from "./pages/adminopd/RatingKepuasanOpd";
import LayananChatSeksi from "./pages/beranda/Seksi/LayananChat";

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
          <Route path="pengajuanbidang" element={<PengajuanBidang />} />
          <Route path="monitoringtiketseksi" element={<MonitoringTiketSeksi />} />
          <Route path="/monitoring-tiket/:id" element={<MonitoringTiketSeksi />} />
          <Route path="detailrating" element={<DetailRating />} />
          <Route path="layananchat" element={<LayananChat />} />
          <Route path="layananpesan" element={<LayananPesan />} />
        </Route>

        {/* Layout TEKNISI */}
        <Route path="/" element={<LayoutTeknisi />}>
          <Route path="dashboardteknisi" element={<DashboardTeknisi />} />
          <Route path="cekdetailteknisi" element={<CekDetailTeknisi />} />
          <Route path="updateprogresteknisi" element={<UpdateProgressTeknisi />} />
          <Route path="ratingteknisi" element={<RatingTeknisi />} />
          <Route path="rfcteknisi" element={<RFCTeknisi />} />
          <Route path="buatformrfc" element={<BuatFormRFC />} />
          <Route path="editformrfc" element={<EditFormRFC />} />
          <Route path="lihatformrfc" element={<LihatFormRFC />} />
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
          <Route path="knowledgebasekota" element={<KnowledgeBaseKota />} />
          <Route path="aksikbkota" element={<AksiKBKota />} />
          <Route path="kbeditorkota" element={<KBEditorKota />} />
          <Route path="lihatartikelkota" element={<LihatArtikelKota />} />
          <Route path="pengumumankota" element={<PengumumanKota />} />
          <Route path="buatpengumumankota" element={<BuatPengumumanKota />} />
        </Route>

        {/* Halaman tanpa Layout */}
        <Route path="/beranda" element={<Beranda />} />
        <Route path="/berandamasyarakat" element={<BerandaMasyarakat />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/lupapassword" element={<LupaPassword />} />
        <Route path="/masukkode" element={<MasukKode />} />
        <Route path="/katasandibaru" element={<KataSandiBaru />} />
        <Route path="/profilsaya" element={<Profil />} />
        <Route path="/tampilan" element={<Tampilan />} />
        <Route path="/knowledgebase" element={<KnowledgeBase />} />
        <Route path="/pelaporanonline" element={<PelaporanOnline />} />
        <Route path="/formscanaset" element={<FormScanAset />} />
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
        <Route path="/monitoringbidang" element={<MonitoringBidang />} />
        <Route path="/ratingkepuasan" element={<RatingKepuasan />} />
        <Route path="/dashboardopd" element={<DashboardOpd />} />
        <Route path="/cekdetail" element={<CekDetail />} />
        <Route path="/knowledgebasedraft" element={<KnowledgeBaseDraft />} />
        <Route
          path="/knowledgebasediajukan"
          element={<KnowledgeBaseDiajukan />}
        />
        <Route path="/draftbaru" element={<DraftBaru />} />
        <Route path="/ratingkepuasanopd" element={<RatingKepuasanOpd />} />
        <Route path="/sidebarmasyarakat" element={<SidebarMasyarakat />} />
        <Route path="/helpdesk" element={<HelpdeskChat />} />
      </Routes>
    </Router>
  );
}

export default App;

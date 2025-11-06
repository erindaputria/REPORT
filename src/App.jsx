import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Beranda } from "./pages/beranda/Beranda";
import { BerandaMasyarakat } from "./pages/masyarakat/BerandaMasyarakat";

//*-- Auth --*/
import Register from "./pages/Register";
import LogIn from "./pages/Login";
import LupaPassword from "./pages/LupaPassword";
import MasukKode from "./pages/MasukKode";
import KataSandiBaru from "./pages/KataSandiBaru";

//*-- Pengguna Pegawai --*/
import Profil from "./pages/profil/ProfilSaya";
import Tampilan from "./pages/profil/Tampilan";
import KnowledgeBase from "./pages/beranda/KnowledgeBase";
import PelaporanOnline from "./pages/beranda/pelaporan/PelaporanOnline";
import FormLaporan from "./pages/beranda/pelaporan/FormLaporan";
import FormScanAset from "./pages/beranda/pelaporan/FormScanAset";
import Pelacakan from "./pages/beranda/pelaporan/Pelacakan";
import Pengajuan from "./pages/beranda/pengajuan/Pengajuan";
import FormPengajuan from "./pages/beranda/pengajuan/FormPengajuan";
import SuksesPelayanan from "./pages/beranda/pengajuan/SuksesPelayanan";
import SuksesPelaporan from "./pages/beranda/pelaporan/SuksesPelaporan";
import DataDitemukan from "./pages/beranda/pelaporan/DataDitemukan";

//*-- Seksi --*/
import BerandaSeksi from "./pages/beranda/Seksi/BerandaSeksi";
import LayoutSeksi from "./components/Layout/LayoutSeksi";
import PengajuanSeksi from "./pages/beranda/Seksi/PengajuanSeksi";
import PenugasanSeksi from "./pages/beranda/Seksi/PenugasanSeksi";
import FormPenugasanSeksi from "./pages/beranda/Seksi/FormPenugasanSeksi";
import MonitoringSeksi from "./pages/beranda/Seksi/MonitoringSeksi";
import StatistikSeksi from "./pages/beranda/Seksi/StatistikSeksi";
import ArsipSeksi from "./pages/beranda/Seksi/ArsipSeksi";
import ReopenSeksi from "./pages/beranda/Seksi/ReopenSeksi";
import RatingSeksi from "./pages/beranda/Seksi/RatingSeksi";

//*-- Teknisi --*/
import LayoutTeknisi from "./components/Layout/LayoutTeknisi";
import DashboardTeknisi from "./pages/beranda/Teknisi/DashboardTeknisi";
import CekDetailTeknisi from "./pages/beranda/Teknisi/CekDetailTeknisi";
import UpdateProgressTeknisi from "./pages/beranda/Teknisi/UpdateProgresTeknisi";
import RatingTeknisi from "./pages/beranda/Teknisi/RatingTeknisi";

//*-- Kota --*/
import LayoutKota from "./components/Layout/LayoutKota";
import DashboardKota from "./pages/beranda/AdminKota/DashboardKota";
import CekDetailKota from "./pages/beranda/AdminKota/CekDetailKota";
import StatistikKotaKL from "./pages/beranda/AdminKota/StatistikKotaKL";
import StatistikKotaLP from "./pages/beranda/AdminKota/StatistikKotaLP";
import StatistikKotaTT from "./pages/beranda/AdminKota/StatistikKotaTT";
import RateKota from "./pages/beranda/AdminKota/RateKota";
import RateKotaOpd from "./pages/beranda/AdminKota/RateKotaOpd";
import KnowledgeBaseKota from "./pages/beranda/AdminKota/KnowledgeBaseKota";
import AksiKBKota from "./pages/beranda/AdminKota/AksiKBKota";
import KBEditorKota from "./pages/beranda/AdminKota/KBEditorKota";
import LihatArtikelKota from "./pages/beranda/AdminKota/LihatArtikelKota";
import PengumumanKota from "./pages/beranda/AdminKota/PengumumanKota";
import BuatPengumumanKota from "./pages/beranda/AdminKota/BuatPengumumanKota";

//*-- Masyarakat --*/
import SidebarMasyarakat from "./pages/masyarakat/SidebarMasyarakat";
import ProfilMasyarakat from "./pages/profil/ProfilMasyarakat";
import FormMasyarakat from "./pages/masyarakat/FormMasyarakat";

//*-- Helpdesk --*/
import HelpdeskChat from "./components/beranda/Helpdesk";

//*-- Bidang --*/
import DashboardBidang from "./pages/bidang/DashboardBidang";
import AksiTiket from "./pages/bidang/AksiTiket";
import MonitoringBidang from "./pages/bidang/MonitoringBidang";
import RatingKepuasan from "./pages/bidang/RatingKepuasan";

//*-- Admin OPD --*/
import DashboardOpd from "./pages/adminopd/DashboardOpd";
import CekDetail from "./pages/adminopd/CekDetail";
import KnowledgeBaseDraft from "./pages/adminopd/KnowledgeBaseDraft";
import KnowledgeBaseDiajukan from "./pages/adminopd/KnowledgeBaseDiajukan";
import DraftBaru from "./pages/adminopd/DraftBaru";
import RatingKepuasanOpd from "./pages/adminopd/RatingKepuasanOpd";
import StatistikKategori from "./pages/adminopd/StatistikKategori";
import StatistikPrioritas from "./pages/adminopd/StatistikPrioritas";
import StatistikTahunan from "./pages/adminopd/StatistikTahunan";

//*-- Notifikasi --*/
import NotifDibuat from "./pages/notifikasi/NotifDibuat";
import NotifDiproses from "./pages/notifikasi/NotifDiproses";
import NotifMaintenance from "./pages/notifikasi/NotifMaintenance";
import NotifDarurat from "./pages/notifikasi/NotifDarurat";
import NotifUmum from "./pages/notifikasi/NotifUmum";

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
          <Route
            path="updateprogresteknisi"
            element={<UpdateProgressTeknisi />}
          />
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
        <Route path="/formpengajuan" element={<FormPengajuan />} />
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
        <Route path="/dataditemukan" element={<DataDitemukan />} />
        <Route path="/formmasyarakat" element={<FormMasyarakat />} />
        <Route path="/helpdesk" element={<HelpdeskChat />} />

        <Route path="/statistikkategori" element={<StatistikKategori />} />
        <Route path="/statistikprioritas" element={<StatistikPrioritas />} />
        <Route path="/statistiktahunan" element={<StatistikTahunan />} />

        <Route path="/notifdibuat" element={<NotifDibuat />} />
        <Route path="/notifdiproses" element={<NotifDiproses />} />
        <Route path="/notifmaintenance" element={<NotifMaintenance />} />
        <Route path="/notifdarurat" element={<NotifDarurat />} />
        <Route path="/notifumum" element={<NotifUmum />} />
      </Routes>
    </Router>
  );
}

export default App;

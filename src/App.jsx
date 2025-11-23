import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ===== Auth =====
import Register from "./pages/Register";
import LogIn from "./pages/Login";
import LupaPassword from "./pages/LupaPassword";
import MasukKode from "./pages/MasukKode";
import KataSandiBaru from "./pages/KataSandiBaru";

// ===== Layout =====
import LayoutSeksi from "./components/Layout/LayoutSeksi";
import LayoutTeknisi from "./components/Layout/LayoutTeknisi";
import LayoutPegawai from "./components/Layout/LayoutPegawai";
import LayoutKota from "./components/Layout/LayoutKota";
import LayoutMasyarakat from "./components/Layout/LayoutMasyarakat";

// ===== Seksi =====
import BerandaSeksi from "./pages/beranda/Seksi/BerandaSeksi";
import PengajuanSeksi from "./pages/beranda/Seksi/PengajuanSeksi";
import PenugasanSeksi from "./pages/beranda/Seksi/PenugasanSeksi";
import FormPenugasanSeksi from "./pages/beranda/Seksi/FormPenugasanSeksi";
import MonitoringSeksi from "./pages/beranda/Seksi/MonitoringSeksi";
import StatistikSeksi from "./pages/beranda/Seksi/StatistikSeksi";
import ArsipSeksi from "./pages/beranda/Seksi/ArsipSeksi";
import ReopenSeksi from "./pages/beranda/Seksi/ReopenSeksi";
import RatingSeksi from "./pages/beranda/Seksi/RatingSeksi";
import MonitoringTiketSeksi from "./pages/beranda/Seksi/MonitoringTiketSeksi";
import DetailRating from "./pages/beranda/Seksi/DetailRating";
import LayananChat from "./pages/beranda/Seksi/LayananChat";
import LayananPesan from "./pages/beranda/Seksi/LayananPesan";
import PengajuanBidang from "./pages/beranda/Seksi/PengajuanBidang";

// ===== Teknisi =====
import DashboardTeknisi from "./pages/beranda/Teknisi/DashboardTeknisi";
import CekDetailTeknisi from "./pages/beranda/Teknisi/CekDetailTeknisi";
import UpdateProgressTeknisi from "./pages/beranda/Teknisi/UpdateProgresTeknisi";
import RatingTeknisi from "./pages/beranda/Teknisi/RatingTeknisi";
import RFCTeknisi from "./pages/beranda/Teknisi/RFCTeknisi";
import BuatFormRFC from "./pages/beranda/Teknisi/BuatFormRFC";
import EditFormRFC from "./pages/beranda/Teknisi/EditFormRFC";
import LihatFormRFC from "./pages/beranda/Teknisi/LihatFormRFC";

// ===== Pegawai =====
import KnowledgeBase from "./pages/pegawai/KnowledgeBase";
import Profil from "./pages/pegawai/ProfilSaya";
import Tampilan from "./pages/pegawai/Tampilan";

// ===== Kota =====
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

// ===== Masyarakat =====
import BerandaMasyarakat from "./pages/masyarakat/BerandaMasyarakat";
import ProfilMasyarakat from "./pages/masyarakat/ProfilMasyarakat";
import FormMasyarakat from "./pages/masyarakat/FormMasyarakat";
import LandingPage from "./pages/masyarakat/LandingPage";
import KBMasyarakat from "./pages/masyarakat/KBMasyarakat";
import TampilanMasyarakat from "./pages/masyarakat/TampilanMasyarakat";
import PelaporanMasyarakat from "./pages/masyarakat/PelaporanMasyarakat";
import SuksesLapor from "./pages/masyarakat/SuksesLapor";
import DataDitemukanMasyarakat from "./pages/masyarakat/DataDitemukanMasyarakat";
import PelacakanMasyarakat from "./pages/masyarakat/PelacakanMasyarakat";
import RiwayatMasyarakat from "./pages/masyarakat/riwayatmasyarakat";
import LihatHistory from "./pages/masyarakat/LihatHistory";
import LihatRating from "./pages/masyarakat/LihatRating";
import BeriRating from "./pages/masyarakat/BeriRating";
import ReopenPegawai from "./pages/masyarakat/ReopenPegawai";
import ReopenMasyarakat from "./pages/masyarakat/ReopenMasyarakat";
import KotakMasukMasyarakat from "./pages/masyarakat/KotakMasukMasyarakat";

// ===== Bidang / OPD =====
import DashboardBidang from "./pages/bidang/DashboardBidang";
import AksiTiket from "./pages/bidang/AksiTiket";
import MonitoringBidang from "./pages/bidang/MonitoringBidang";
import RatingKepuasan from "./pages/bidang/RatingKepuasan";
import DetailBidang from "./pages/bidang/DetailBidang";
import LihatRatingBidang from "./pages/bidang/LihatRatingBidang";

import DashboardOpd from "./pages/adminopd/DashboardOpd";
import CekDetail from "./pages/adminopd/CekDetail";
import KnowledgeBaseDraft from "./pages/adminopd/KnowledgeBaseDraft";
import KnowledgeBaseDiajukan from "./pages/adminopd/KnowledgeBaseDiajukan";
import DraftBaru from "./pages/adminopd/DraftBaru";
import RatingKepuasanOpd from "./pages/adminopd/RatingKepuasanOpd";
import StatistikKategori from "./pages/adminopd/StatistikKategori";
import StatistikPrioritas from "./pages/adminopd/StatistikPrioritas";
import StatistikTahunan from "./pages/adminopd/StatistikTahunan";
import StatistikBulanan from "./pages/adminopd/StatistikBulanan";
import LihatArtikel from "./pages/adminopd/LihatArtikel";

// ===== Notifikasi =====
import NotifDibuat from "./pages/notifikasi/NotifDibuat";
import NotifDiproses from "./pages/notifikasi/NotifDiproses";
import NotifMaintenance from "./pages/notifikasi/NotifMaintenance";
import NotifDarurat from "./pages/notifikasi/NotifDarurat";
import NotifUmum from "./pages/notifikasi/NotifUmum";

import NotifDaruratMasyarakat from "./pages/masyarakat/NDaruratMasyarakat";
import NotifDibuatMasyarakat from "./pages/masyarakat/NDibuatMasyarakat";
import NotifDiprosesMasyarakat from "./pages/masyarakat/NDiprosesMasyarakat";
import NotifMaintenanceMasyarakat from "./pages/masyarakat/NMaintenanceMasyarakat";
import NotifUmumMasyarakat from "./pages/masyarakat/NUmumMasyarakat";

// ===== Kotak Masuk =====
import KotakMasuk from "./pages/kotakmasuk/KotakMasuk";
import KotakMasukBidang from "./pages/bidang/KotakMasukBidang";
import KotakMasukOpd from "./pages/adminopd/KotakMasukOpd";

function App() {
  return (
    <Router>
      <Routes>

        {/* ===================== ROOT / LOGIN ===================== */}
        <Route path="/" element={<LogIn />} />
        <Route path="/login" element={<LogIn />} />

        {/* ===================== AUTH ===================== */}
        <Route path="/register" element={<Register />} />
        <Route path="/lupapassword" element={<LupaPassword />} />
        <Route path="/masukkode" element={<MasukKode />} />
        <Route path="/katasandibaru" element={<KataSandiBaru />} />

        {/* ===================== SEKSI ===================== */}
        <Route path="/seksi" element={<LayoutSeksi />}>
          <Route path="beranda" element={<BerandaSeksi />} />
          <Route path="pengajuan" element={<PengajuanSeksi />} />
          <Route path="penugasan" element={<PenugasanSeksi />} />
          <Route path="formpenugasan" element={<FormPenugasanSeksi />} />
          <Route path="monitoring" element={<MonitoringSeksi />} />
          <Route path="monitoringtiket" element={<MonitoringTiketSeksi />} />
          <Route path="statistik" element={<StatistikSeksi />} />
          <Route path="arsip" element={<ArsipSeksi />} />
          <Route path="reopen" element={<ReopenSeksi />} />
          <Route path="rating" element={<RatingSeksi />} />
          <Route path="detailrating" element={<DetailRating />} />
          <Route path="chat" element={<LayananChat />} />
          <Route path="pesan" element={<LayananPesan />} />
          <Route path="pengajuanbidang" element={<PengajuanBidang />} />
        </Route>

        {/* ===================== TEKNISI ===================== */}
        <Route path="/teknisi" element={<LayoutTeknisi />}>
          <Route path="dashboard" element={<DashboardTeknisi />} />
          <Route path="cekdetail" element={<CekDetailTeknisi />} />
          <Route path="updateprogres" element={<UpdateProgressTeknisi />} />
          <Route path="rating" element={<RatingTeknisi />} />
          <Route path="rfc" element={<RFCTeknisi />} />
          <Route path="buatform" element={<BuatFormRFC />} />
          <Route path="editform" element={<EditFormRFC />} />
          <Route path="lihatform" element={<LihatFormRFC />} />
        </Route>

        {/* ===================== PEGAWAI ===================== */}
        <Route path="/pegawai" element={<LayoutPegawai />}>
          <Route path="knowledgebase" element={<KnowledgeBase />} />
          <Route path="profil" element={<Profil />} />
          <Route path="tampilan" element={<Tampilan />} />
        </Route>

        {/* ===================== KOTA ===================== */}
        <Route path="/kota" element={<LayoutKota />}>
          <Route path="dashboard" element={<DashboardKota />} />
          <Route path="cekdetail" element={<CekDetailKota />} />
          <Route path="statistik-kl" element={<StatistikKotaKL />} />
          <Route path="statistik-lp" element={<StatistikKotaLP />} />
          <Route path="statistik-tt" element={<StatistikKotaTT />} />
          <Route path="ratekota" element={<RateKota />} />
          <Route path="ratekotaopd" element={<RateKotaOpd />} />
          <Route path="kb" element={<KnowledgeBaseKota />} />
          <Route path="aksikb" element={<AksiKBKota />} />
          <Route path="kbedit" element={<KBEditorKota />} />
          <Route path="artikel" element={<LihatArtikelKota />} />
          <Route path="pengumuman" element={<PengumumanKota />} />
          <Route path="buatpengumuman" element={<BuatPengumumanKota />} />
        </Route>

        {/* ===================== MASYARAKAT ===================== */}
        <Route path="/masyarakat" element={<LayoutMasyarakat />}>
          <Route path="beranda" element={<BerandaMasyarakat />} />
          <Route path="profil" element={<ProfilMasyarakat />} />
          <Route path="form" element={<FormMasyarakat />} />
          <Route path="landing" element={<LandingPage />} />
          <Route path="kb" element={<KBMasyarakat />} />
          <Route path="tampilan" element={<TampilanMasyarakat />} />
          <Route path="pelaporan" element={<PelaporanMasyarakat />} />
          <Route path="sukseslapor" element={<SuksesLapor />} />
          <Route path="dataditemukan" element={<DataDitemukanMasyarakat />} />
          <Route path="pelacakan" element={<PelacakanMasyarakat />} />
          <Route path="riwayat" element={<RiwayatMasyarakat />} />
          <Route path="lihathistory" element={<LihatHistory />} />
          <Route path="lihatrating" element={<LihatRating />} />
          <Route path="berirating" element={<BeriRating />} />
          <Route path="reopen" element={<ReopenMasyarakat />} />
          <Route path="kotakmasuk" element={<KotakMasukMasyarakat />} />
        </Route>

        {/* ===================== BIDANG ===================== */}
        <Route path="/bidang/dashboard" element={<DashboardBidang />} />
        <Route path="/bidang/aksi" element={<AksiTiket />} />
        <Route path="/bidang/monitoring" element={<MonitoringBidang />} />
        <Route path="/bidang/rating" element={<RatingKepuasan />} />
        <Route path="/bidang/detail" element={<DetailBidang />} />
        <Route path="/bidang/lihatrating" element={<LihatRatingBidang />} />

        {/* ===================== OPD ===================== */}
        <Route path="/opd/dashboard" element={<DashboardOpd />} />
        <Route path="/opd/cekdetail" element={<CekDetail />} />
        <Route path="/opd/draft" element={<KnowledgeBaseDraft />} />
        <Route path="/opd/diajukan" element={<KnowledgeBaseDiajukan />} />
        <Route path="/opd/draftbaru" element={<DraftBaru />} />
        <Route path="/opd/rating" element={<RatingKepuasanOpd />} />
        <Route path="/opd/statistik-kategori" element={<StatistikKategori />} />
        <Route path="/opd/statistik-prioritas" element={<StatistikPrioritas />} />
        <Route path="/opd/statistik-tahunan" element={<StatistikTahunan />} />
        <Route path="/opd/statistik-bulanan" element={<StatistikBulanan />} />
        <Route path="/opd/artikel" element={<LihatArtikel />} />
        <Route path="/opd/kotakmasuk" element={<KotakMasukOpd />} />

        {/* ===================== LEVEL SISTEM LAIN ===================== */}
        <Route path="/notifikasi/dibuat" element={<NotifDibuat />} />
        <Route path="/notifikasi/diproses" element={<NotifDiproses />} />
        <Route path="/notifikasi/maintenance" element={<NotifMaintenance />} />
        <Route path="/notifikasi/darurat" element={<NotifDarurat />} />
        <Route path="/notifikasi/umum" element={<NotifUmum />} />
      </Routes>
    </Router>
  );
}

export default App;

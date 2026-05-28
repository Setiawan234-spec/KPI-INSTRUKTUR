<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>MineOps Monitor — INDE MINING</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Syne:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js"></script>
<link rel="stylesheet" href="css/style.css">
</head>
<body>

<!-- Sidebar -->
<aside class="sidebar" id="sidebar">
  <div class="sidebar-logo">
    <div class="logo-icon"><i class="fa-solid fa-mountain-sun"></i></div>
    <div class="logo-text">
      <span class="logo-title">MineOps</span>
      <span class="logo-sub">Monitor</span>
    </div>
  </div>

  <div class="sidebar-meta">
    <div class="meta-item"><i class="fa-solid fa-location-dot"></i> INDE MINING</div>
    <div class="meta-item"><i class="fa-solid fa-calendar"></i> Maret 2026</div>
  </div>

  <nav class="sidebar-nav">
    <div class="nav-group-label">Menu Utama</div>
    <a href="#" class="nav-item active" data-page="dashboard">
      <i class="fa-solid fa-gauge-high"></i><span>Dashboard</span>
    </a>
    <a href="#" class="nav-item" data-page="instruktur">
      <i class="fa-solid fa-users"></i><span>Instruktur</span>
    </a>
    <a href="#" class="nav-item" data-page="perintah">
      <i class="fa-solid fa-clipboard-list"></i><span>Perintah Kerja</span>
    </a>
    <a href="#" class="nav-item" data-page="kpi">
      <i class="fa-solid fa-chart-line"></i><span>KPI Report</span>
    </a>
    <a href="#" class="nav-item" data-page="laporan">
      <i class="fa-solid fa-file-lines"></i><span>Data Laporan</span>
    </a>

    <div class="nav-group-label">Integrasi</div>
    <a href="#" class="nav-item" data-page="wa">
      <i class="fa-brands fa-whatsapp"></i><span>WhatsApp Bot</span>
    </a>
    <a href="#" class="nav-item" data-page="tg">
      <i class="fa-brands fa-telegram"></i><span>Telegram Bot</span>
    </a>
    <a href="#" class="nav-item" data-page="sheets">
      <i class="fa-brands fa-google"></i><span>Google Sheets</span>
    </a>
    <a href="#" class="nav-item" data-page="n8n">
      <i class="fa-solid fa-diagram-project"></i><span>n8n Workflow</span>
    </a>

    <div class="nav-group-label">Sistem</div>
    <a href="#" class="nav-item" data-page="settings">
      <i class="fa-solid fa-gear"></i><span>Pengaturan</span>
    </a>
  </nav>

  <div class="sidebar-footer">
    <div class="sidebar-user">
      <div class="user-avatar">ADM</div>
      <div class="user-info">
        <span class="user-name">Admin</span>
        <span class="user-role">Supervisor</span>
      </div>
    </div>
  </div>
</aside>

<!-- Main -->
<div class="main-wrap">

  <!-- Topbar -->
  <header class="topbar">
    <button class="menu-toggle" id="menuToggle"><i class="fa-solid fa-bars"></i></button>
    <div class="topbar-title" id="pageTitle">Dashboard</div>
    <div class="topbar-actions">
      <div class="clock-badge" id="liveClock">00:00:00 WIB</div>
      <button class="icon-btn notif-btn" id="notifBtn">
        <i class="fa-solid fa-bell"></i>
        <span class="notif-dot" id="notifDot"></span>
      </button>
      <button class="btn-primary" id="sendSummaryBtn">
        <i class="fa-brands fa-whatsapp"></i> Kirim Summary
      </button>
    </div>
  </header>

  <!-- Page content -->
  <main class="content" id="mainContent">

    <!-- DASHBOARD PAGE -->
    <div class="page active" id="page-dashboard">

      <!-- KPI cards -->
      <div class="metric-grid">
        <div class="metric-card">
          <div class="metric-icon blue"><i class="fa-solid fa-users"></i></div>
          <div class="metric-body">
            <div class="metric-val">24</div>
            <div class="metric-label">Total Manpower</div>
          </div>
          <div class="metric-badge blue">Instruktur Operator</div>
        </div>
        <div class="metric-card">
          <div class="metric-icon green"><i class="fa-solid fa-circle-check"></i></div>
          <div class="metric-body">
            <div class="metric-val green" id="sudahCount">18</div>
            <div class="metric-label">Sudah Lapor</div>
          </div>
          <div class="progress-wrap">
            <div class="progress-bar"><div class="progress-fill green" style="width:75%"></div></div>
            <span class="progress-pct">75%</span>
          </div>
        </div>
        <div class="metric-card">
          <div class="metric-icon red"><i class="fa-solid fa-circle-xmark"></i></div>
          <div class="metric-body">
            <div class="metric-val red" id="belumCount">6</div>
            <div class="metric-label">Belum Lapor</div>
          </div>
          <div class="metric-badge red"><i class="fa-solid fa-triangle-exclamation"></i> Reminder 14:00</div>
        </div>
        <div class="metric-card">
          <div class="metric-icon amber"><i class="fa-solid fa-trophy"></i></div>
          <div class="metric-body">
            <div class="metric-val amber">72%</div>
            <div class="metric-label">Avg Achievement</div>
          </div>
          <div class="metric-badge amber">High Performance</div>
        </div>
      </div>

      <!-- Middle row -->
      <div class="two-col">

        <!-- Report status -->
        <div class="card">
          <div class="card-header">
            <span class="card-title">Status Laporan Harian</span>
            <div class="tab-group">
              <button class="tab active">Hari ini</button>
              <button class="tab">Minggu ini</button>
            </div>
          </div>
          <div class="report-list" id="reportList"></div>
          <div class="card-footer">
            <button class="btn-outline full-width" id="reminderAll">
              <i class="fa-solid fa-paper-plane"></i> Kirim Reminder ke Semua yang Belum Lapor
            </button>
          </div>
        </div>

        <!-- KPI achievement -->
        <div class="card">
          <div class="card-header">
            <span class="card-title">Achievement KPI Bulanan</span>
            <div class="tab-group">
              <button class="tab active">Bulan ini</button>
              <button class="tab">Minggu</button>
              <button class="tab">Harian</button>
            </div>
          </div>
          <div class="achieve-list" id="achieveList"></div>
          <hr class="divider">
          <div class="tier-row" id="tierRow"></div>
          <div class="card-footer">
            <button class="btn-outline full-width" onclick="switchPage('kpi')">
              Lihat Detail KPI Per Individu <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- KPI Table -->
      <div class="card">
        <div class="card-header">
          <span class="card-title">Monitoring Item KPI — Instruktur Operator</span>
          <div class="filters">
            <select class="select-sm" id="filterInstruktur">
              <option>Semua Instruktur</option>
              <option>Achmad Hidayat</option>
              <option>Amirudin</option>
              <option>Budi Wiyanto</option>
              <option>Setiawan</option>
            </select>
            <select class="select-sm">
              <option>Maret 2026</option>
              <option>Februari 2026</option>
            </select>
          </div>
        </div>
        <div class="table-wrap">
          <table class="data-table" id="kpiTable"></table>
        </div>
      </div>

      <!-- Bottom row -->
      <div class="two-col">

        <!-- AI Summary -->
        <div class="card">
          <div class="card-header">
            <div class="ai-header">
              <div class="ai-icon"><i class="fa-solid fa-robot"></i></div>
              <span class="card-title">Rekomendasi AI & Summary Harian</span>
            </div>
          </div>
          <div class="summary-box">
            <div class="summary-title">📊 Daily Performance — 28 Maret 2026</div>
            <div class="summary-row"><span class="s-label">✅ Sudah kirim</span><span class="s-val green">18 orang</span></div>
            <div class="summary-row"><span class="s-label">❌ Belum kirim</span><span class="s-val red">6 orang</span></div>
            <div class="summary-row"><span class="s-label">⚠️ Format salah</span><span class="s-val amber">1 orang</span></div>
          </div>
          <div class="summary-box blue" style="margin-top:10px;">
            <div class="summary-title">🚧 Kendala Terbanyak</div>
            <div class="kendala-item">1. Susah mendapat sarana — <b>5 laporan</b></div>
            <div class="kendala-item">2. Delay unit — <b>3 laporan</b></div>
            <div class="kendala-item">3. Hujan — <b>2 laporan</b></div>
          </div>
          <div class="summary-box amber" style="margin-top:10px;">
            <div class="summary-title">💡 Rekomendasi AI</div>
            <div class="rekomendasi-item">→ Fokus coaching operator achievement &lt;50%</div>
            <div class="rekomendasi-item">→ Evaluasi area dengan kendala sarana tertinggi</div>
            <div class="rekomendasi-item">→ Monitor kedisiplinan pengiriman laporan shift pagi</div>
            <div class="rekomendasi-item">→ Tindak lanjut delay unit di area PIT</div>
          </div>
          <div class="card-footer">
            <button class="btn-wa full-width" id="generateSummary">
              <i class="fa-brands fa-whatsapp"></i> Generate & Kirim Summary ke WA/Telegram
            </button>
          </div>
        </div>

        <!-- Timeline -->
        <div class="card">
          <div class="card-header">
            <span class="card-title">Jadwal Otomatis Hari Ini</span>
          </div>
          <div class="timeline" id="timeline"></div>
        </div>
      </div>
    </div>

    <!-- KPI PAGE -->
    <div class="page" id="page-kpi">
      <div class="card">
        <div class="card-header">
          <span class="card-title">KPI Report — Detail Per Individu</span>
          <select class="select-sm">
            <option>Maret 2026</option>
            <option>Februari 2026</option>
          </select>
        </div>
        <div class="indiv-grid" id="indivGrid"></div>
      </div>
      <div class="card" style="margin-top:14px;">
        <div class="card-header"><span class="card-title">Grafik Achievement Bulanan</span></div>
        <div style="position:relative;height:280px;">
          <canvas id="kpiChart" role="img" aria-label="Bar chart achievement KPI bulanan per instruktur">Achievement KPI per instruktur</canvas>
        </div>
      </div>
    </div>

    <!-- LAPORAN PAGE -->
    <div class="page" id="page-laporan">
      <div class="card">
        <div class="card-header">
          <span class="card-title">Data Laporan Masuk</span>
          <div class="filters">
            <input type="date" class="select-sm" value="2026-03-28">
            <select class="select-sm"><option>Semua Status</option><option>Achieve</option><option>Not Achieve</option></select>
          </div>
        </div>
        <div class="table-wrap">
          <table class="data-table" id="laporanTable"></table>
        </div>
      </div>
    </div>

    <!-- WA PAGE -->
    <div class="page" id="page-wa">
      <div class="two-col">
        <div class="card">
          <div class="card-header">
            <span class="card-title">Pesan Masuk WhatsApp</span>
            <span class="badge green" id="waBotStatus">● Aktif</span>
          </div>
          <div class="chat-list" id="chatList"></div>
          <div class="card-footer">
            <div id="waInputForm"></div>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <span class="card-title">Summary Generator</span>
            <button class="btn-primary btn-sm" onclick="switchPage('settings');setTimeout(()=>document.querySelector('.stab:nth-child(5)').click(),100)">
              <i class="fa-solid fa-key"></i> API Config
            </button>
          </div>
          <div class="summary-preview" id="summaryPreview"></div>
          <div class="card-footer" style="display:flex;gap:8px;">
            <button class="btn-outline" id="copySummary" style="flex:1"><i class="fa-solid fa-copy"></i> Copy</button>
            <button class="btn-wa" onclick="sendWaSummaryNow()" style="flex:1"><i class="fa-brands fa-whatsapp"></i> Kirim via API</button>
          </div>
        </div>
      </div>
    </div>

    <!-- INSTRUKTUR PAGE -->
    <div class="page" id="page-instruktur">
      <div class="instruktur-grid" id="instrukturGrid"></div>
    </div>

    <!-- PERINTAH PAGE -->
    <div class="page" id="page-perintah">
      <div class="card">
        <div class="card-header"><span class="card-title">Kirim Perintah Kerja Harian</span></div>
        <div class="form-grid">
          <div class="form-group">
            <label>Tanggal</label>
            <input type="date" class="input" value="2026-03-28">
          </div>
          <div class="form-group">
            <label>Shift</label>
            <select class="input"><option>S01 - Pagi</option><option>S02 - Siang</option><option>S03 - Malam</option></select>
          </div>
          <div class="form-group full">
            <label>Tugas 1</label>
            <input type="text" class="input" value="Observasi minimal 5 operator di PIT area">
          </div>
          <div class="form-group full">
            <label>Tugas 2</label>
            <input type="text" class="input" value="Evaluasi OCC & EPP masing-masing 5 orang">
          </div>
          <div class="form-group full">
            <label>Tugas 3</label>
            <input type="text" class="input" value="Safety observasi dan personal contact 8 orang">
          </div>
          <div class="form-group full">
            <label>Kirim Ke</label>
            <div class="channel-opts">
              <label class="check-opt"><input type="checkbox" checked> <i class="fa-brands fa-whatsapp"></i> WhatsApp</label>
              <label class="check-opt"><input type="checkbox" checked> <i class="fa-brands fa-telegram"></i> Telegram</label>
            </div>
          </div>
        </div>
        <div class="card-footer">
          <button class="btn-wa" id="sendPerintah"><i class="fa-solid fa-paper-plane"></i> Kirim Perintah Kerja</button>
        </div>
      </div>
      <div class="card" style="margin-top:14px;">
        <div class="card-header"><span class="card-title">Preview Format WA</span></div>
        <pre class="wa-preview" id="waPreview"></pre>
      </div>
    </div>

    <!-- DEFAULT pages -->
    <div class="page" id="page-tg"><div class="coming-soon"><i class="fa-brands fa-telegram"></i><p>Telegram Bot Integration</p><span>Hubungkan via n8n webhook</span></div></div>
    <div class="page" id="page-sheets"><div class="coming-soon"><i class="fa-brands fa-google"></i><p>Google Sheets Sync</p><span>Data otomatis tersimpan ke spreadsheet</span></div></div>
    <div class="page" id="page-n8n"><div class="coming-soon"><i class="fa-solid fa-diagram-project"></i><p>n8n Workflow</p><span>Atur automation & webhook di sini</span></div></div>
    <div class="page" id="page-settings"><div id="settingsContent"></div></div>

  </main>
</div>

<!-- Modal Summary -->
<div class="modal-overlay" id="summaryModal">
  <div class="modal">
    <div class="modal-header">
      <span class="modal-title">📊 Summary Harian — WhatsApp</span>
      <button class="modal-close" id="modalClose"><i class="fa-solid fa-xmark"></i></button>
    </div>
    <pre class="modal-body" id="modalBody"></pre>
    <div class="modal-footer">
      <button class="btn-outline" id="modalCopy"><i class="fa-solid fa-copy"></i> Copy</button>
      <button class="btn-wa" id="modalSend"><i class="fa-brands fa-whatsapp"></i> Buka di WA</button>
    </div>
  </div>
</div>

<!-- Toast -->
<div class="toast" id="toast"></div>

<script src="js/data.js"></script>
<script src="js/app.js"></script>
</body>
</html>

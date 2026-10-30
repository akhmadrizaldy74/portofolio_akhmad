import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring, useInView, AnimatePresence } from 'framer-motion'
import styles from '@/styles/Home.module.css'

const projects = [
  {
    number: '01',
    year: '2026',
    titleId: 'Sistem Informasi Manajemen dan Monitoring Kepatuhan APAR',
    titleEn: 'Fire Extinguisher (APAR) Management & Compliance Monitoring System',
    typeId: 'SISTEM INFORMASI WEB OPERASIONAL',
    typeEn: 'OPERATIONAL WEB INFORMATION SYSTEM',
    categoryId: 'Sistem Enterprise / PD Anugrah Utama',
    categoryEn: 'Enterprise Web System / PD Anugrah Utama',
    statusId: 'Arsitektur & Database Selesai',
    statusEn: 'Architecture & Database Implemented',
    descriptionId: 'Mendigitalisasi pelacakan kelayakan, masa berlaku, dan perawatan Alat Pemadam Api Ringan (APAR) pada PD Anugrah Utama ke dalam platform terpusat.',
    descriptionEn: 'Digitized fire extinguisher (APAR) lifecycle compliance, expiration tracking, and maintenance operations for PD Anugrah Utama into an organized platform.',
    role: 'Full-Stack Developer & Systems Analyst',
    problemId: 'Sebelumnya pencatatan inspeksi fisik, masa kadaluwarsa tabung, dan riwayat pengisian ulang dilakukan secara manual terfragmentasi, sehingga rentan kesalahan dan menyulitkan pemenuhan standar keselamatan kerja.',
    problemEn: 'Previously, physical inspections, expiration dates, and refilling histories were tracked through fragmented manual records, making routine inspections error-prone and compliance verification difficult.',
    contributionId: 'Merancang skema basis data relasional (MySQL) dan ERD, membangun endpoint API operasional dengan arsitektur C#/.NET Web API & modul web Laravel, serta mengimplementasikan antarmuka administratif responsif berbasis Tailwind CSS.',
    contributionEn: 'Designed the relational database schema (MySQL) and ERD, implemented operational API endpoints combining C#/.NET Web API architecture and Laravel modules, and built responsive administrative UI with Tailwind CSS.',
    architectureId: 'Memadukan web portal berbasis Laravel (PHP) untuk antarmuka administratif dan alur transaksi, didukung fondasi C#/.NET Web API untuk standardisasi service layer dan manipulasi data relasional SQL yang terstruktur.',
    architectureEn: 'Combines a Laravel (PHP) web portal for administrative workflows and transactions, supported by a C#/.NET Web API foundation for standardized service layers and robust relational SQL database management.',
    highlightsId: [
      'Multi-step Refill & Service Booking Flow (Alur pemesanan isi ulang & servis APAR bertahap yang intuitif)',
      'Smart APAR Expiration & Lifecycle Tracking (Monitoring masa kadaluwarsa, posisi penempatan, & riwayat tabung)',
      'Integrated E-Commerce with RajaOngkir API (Katalog suku cadang/tabung & hitung ongkos kirim otomatis)',
      'Technician Dispatch & Task Workspace (Manajemen penugasan inspeksi & log catatan pengerjaan teknisi)',
      'Supplier Procurement & Purchase Order Engine (Sistem PO, cetak surat jalan PDF, & integrasi notifikasi WA)',
      'Comprehensive Analytics & Financial PDF Export (Laporan analitik kepatuhan dan rekap keuangan otomatis)',
    ],
    highlightsEn: [
      'Multi-step Refill & Service Booking Flow (Intuitive multi-step process for instant refills and service bookings)',
      'Smart APAR Expiration & Lifecycle Tracking (Automated monitoring of cylinder expiry, placement, and inspection history)',
      'Integrated E-Commerce with RajaOngkir API (Cylinder catalog with automated regional shipping fee calculations)',
      'Technician Dispatch & Task Workspace (Task assignment board and inspection log tracking for technicians)',
      'Supplier Procurement & Purchase Order Engine (PO workflow, delivery note PDF generation, and automated alerts)',
      'Comprehensive Analytics & Financial PDF Export (Automated operational metrics and compliance PDF export)',
    ],
    image: '/images/Karya pilihan/Sistem operasional.png',
    stackList: ['C# / .NET Web API', 'Laravel (PHP)', 'MySQL', 'Tailwind CSS', 'RESTful API', 'Git'],
    repo: 'https://github.com/akhmadrizaldy74/sistem-aparini',
    demo: null,
    figma: null,
  },
  {
    number: '02',
    year: '2026',
    titleId: 'WargaBersih – Platform Digital Pengelolaan Kebersihan RT/RW',
    titleEn: 'WargaBersih – Digital Neighborhood Cleanliness & Waste Management Platform',
    typeId: 'PLATFORM WEB & DESAIN UI/UX',
    typeEn: 'WEB PLATFORM & UI/UX DESIGN',
    categoryId: 'Platform Digital Lingkungan / PT Vinix Seven Aurum',
    categoryEn: 'Digital Community Platform / PT Vinix Seven Aurum',
    statusId: 'Front-End & Pengujian Selesai',
    statusEn: 'Front-End & Testing Completed',
    descriptionId: 'Mendigitalisasi koordinasi warga dan pengurus lingkungan dalam pelaporan sampah, penjadwalan armada pengangkut, serta transparansi kebersihan wilayah.',
    descriptionEn: 'Digitized neighborhood coordination for citizen waste reporting, collection fleet scheduling, and community sanitation transparency.',
    role: 'Front-End Developer & UI/UX Designer',
    problemId: 'Warga dan pengurus RT/RW kesulitan memantau titik penumpukan sampah liar serta jadwal pengangkutan berkala secara real-time tanpa media pelaporan terpusat.',
    problemEn: 'Residents and neighborhood administrators lacked a centralized, transparent platform to report illegal waste build-up, verify collection schedules, and track complaint statuses in real time.',
    contributionId: 'Membangun antarmuka web responsif dan dashboard publik menggunakan JavaScript (ES6+), jQuery, dan CSS modern, mendukung pelaporan dengan unggah foto & geolokasi, mengintegrasikan RESTful API untuk pembaruan status, serta mendukung pelaksanaan SIT & UAT.',
    contributionEn: 'Built responsive web interfaces and a public community dashboard using JavaScript (ES6+), jQuery, and modern CSS, implemented photo upload and geolocation tagging, integrated RESTful APIs for status updates, and supported SIT & UAT testing.',
    architectureId: 'Menerjemahkan design system komponen modular dari Figma ke layout web fungsional yang ringan. Alur pelaporan terhubung langsung ke backend via RESTful API untuk pembaruan status real-time.',
    architectureEn: 'Translated modular component designs from Figma into a lightweight, responsive web interface. Reporting flows connect seamlessly to backend RESTful APIs for real-time status tracking.',
    highlightsId: [
      'Interactive Public Landing Page & Environmental Dashboard (Visualisasi metrik kebersihan dan statistik RT/RW)',
      'Digital Waste Ticketing Flow (Pelaporan aduan penumpukan sampah lengkap dengan foto dan titik koordinat geolokasi)',
      'Scheduled Waste Collection Calendar (Informasi jadwal pengangkutan berkala otomatis per zona lingkungan)',
      'Real-time Notification & Status Tracking (Pemantauan progres penanganan aduan secara terbuka dan transparan)',
      'Figma Component Design System (Penerapan arsitektur UI/UX berbasis komponen reusable yang konsisten)',
    ],
    highlightsEn: [
      'Interactive Public Landing Page & Environmental Dashboard (Visual presentation of neighborhood cleanliness metrics)',
      'Digital Waste Ticketing Flow (Citizen complaint workflow with evidence photo uploads and geolocation coordinates)',
      'Scheduled Waste Collection Calendar (Automated zone-based waste collection schedule dissemination)',
      'Real-time Notification & Status Tracking (Transparent milestone tracking from submission to resolution)',
      'Figma Component Design System (Consistent implementation of reusable UI components derived from design specifications)',
    ],
    image: '/images/projects/wargabersih-mockup.png',
    stackList: ['JavaScript (ES6+)', 'jQuery', 'HTML5', 'CSS3', 'RESTful API', 'Figma'],
    repo: 'https://github.com/akhmadrizaldy74',
    demo: null,
    figma: null,
  },
  {
    number: '03',
    year: '2024',
    titleId: 'MOBENG – Desain UI/UX & Arsitektur Alur Aplikasi Servis Mobil On-Demand',
    titleEn: 'MOBENG – On-Demand Car Service & Maintenance Mobile App Design',
    typeId: 'DESAIN UI/UX & ARSITEKTUR ALUR SISTEM',
    typeEn: 'UI/UX DESIGN & SYSTEM FLOW ARCHITECTURE',
    categoryId: 'Desain Aplikasi Mobile / Studi Kasus UI/UX',
    categoryEn: 'Mobile App UI/UX Design & Architecture',
    statusId: 'Prototipe Interaktif Figma Selesai',
    statusEn: 'Interactive Figma Prototype Completed',
    descriptionId: 'Merancang arsitektur alur pengguna dan antarmuka (UI/UX) end-to-end untuk aplikasi pemesanan servis mobil berkala, reservasi bengkel, dan pelacakan teknisi on-demand.',
    descriptionEn: 'Architected the user journey and designed comprehensive UI/UX flows for an on-demand automotive service booking and technician tracking mobile application.',
    role: 'UI/UX Designer & System Flow Architect',
    problemId: 'Pemilik kendaraan menghadapi ketidakpastian estimasi biaya servis, kesulitan mengatur jadwal reservasi mekanik, dan minimnya transparansi pelacakan teknisi on-demand secara real-time.',
    problemEn: 'Vehicle owners face uncertainty regarding service costs, booking complexities, and lack of real-time visibility into mobile technician dispatch status.',
    contributionId: 'Menyusun alur pengguna (user flow), wireframe, diagram alur sistem, serta prototipe interaktif high-fidelity di Figma dengan design system komponen reusable dan estimasi biaya transparan. (Cakupan proyek terdokumentasi adalah desain UI/UX & arsitektur sistem, bukan aplikasi kode penuh).',
    contributionEn: 'Formulated user flows, system architecture diagrams, wireframes, and high-fidelity interactive Figma prototypes with reusable component design systems and cost estimation models. (Project scope is documented as UI/UX design & system flow architecture, not a coded production build).',
    architectureId: 'Design system dibangun menggunakan token warna, tipografi terstruktur, dan komponen atomik varian di Figma. Dilengkapi diagram alur pemesanan multi-step dan spesifikasi state teknisi real-time.',
    architectureEn: 'Structured around an atomic design system in Figma featuring reusable color tokens, components, and auto-layout frames, accompanied by complete multi-step dispatch flowcharts and state transition diagrams.',
    highlightsId: [
      'Multi-step Onboarding & Service Booking Flow (Alur pemesanan servis berkala yang ringkas dan ramah pengguna)',
      'Transparent Maintenance Packages & Cost Estimator (Rincian estimasi biaya servis dan suku cadang yang jelas di awal)',
      'Real-time Technician Tracking Concept (Visualisasi estimasi kedatangan dan status dispatch teknisi)',
      'Structured Reusable Component Design System (Komponen atomik, varian interaktif, dan panduan gaya Figma)',
    ],
    highlightsEn: [
      'Multi-step Onboarding & Service Booking Flow (Streamlined step-by-step booking journey for vehicle maintenance)',
      'Transparent Maintenance Packages & Cost Estimator (Upfront service package breakdowns with instant cost approximations)',
      'Real-time Technician Tracking Concept (Visualized map routing and technician arrival status specifications)',
      'Structured Reusable Component Design System (Atomic components, interactive variants, and comprehensive style guide)',
    ],
    image: '/images/projects/mobeng-mockup.png',
    stackList: ['Figma', 'UI/UX Design', 'User Flows', 'System Flowcharts', 'Design Systems'],
    repo: null,
    figma: 'https://www.figma.com/design/lEqspzlItLCg7SnVeSvjQ1/MOBENG?node-id=2-1315&t=Xz6cFTHB3SkCIfBo-1',
    demo: null,
  },
]

const skillCategories = [
  {
    categoryKey: 'backend',
    titleId: 'Pengembangan Back-End',
    titleEn: 'Back-End Development',
    skills: ['C#', '.NET 6+', 'ASP.NET Core Web API', 'Entity Framework Core', 'PHP', 'Laravel', 'Python'],
  },
  {
    categoryKey: 'database',
    titleId: 'Basis Data & Manajemen Data',
    titleEn: 'Database & Data Management',
    skills: ['Microsoft SQL Server', 'MySQL', 'RDBMS', 'T-SQL', 'DDL & DML', 'Stored Procedures', 'Query Optimization'],
  },
  {
    categoryKey: 'frontendMobile',
    titleId: 'Front-End & Mobile Development',
    titleEn: 'Front-End & Mobile Development',
    skills: ['JavaScript (ES6+)', 'jQuery', 'React.js', 'Flutter', 'HTML5', 'CSS3', 'Tailwind CSS', 'Telerik Kendo UI'],
  },
  {
    categoryKey: 'systemTesting',
    titleId: 'Desain Sistem, Pengujian & UI/UX',
    titleEn: 'System Design, Testing & UI/UX',
    skills: ['RESTful API Integration', 'Swagger / OpenAPI', 'System Integration Testing (SIT)', 'User Acceptance Testing (UAT)', 'Basic Security Testing', 'UML', 'ERD', 'Flowcharts', 'Figma Design Systems'],
  },
  {
    categoryKey: 'tools',
    titleId: 'Perangkat & Lingkungan Kerja',
    titleEn: 'Tools & Environments',
    skills: ['Git', 'Redis', 'Postman', 'Visual Studio', 'Visual Studio Code', 'Draw.io', 'Figma', 'Canva', 'Microsoft Office 365'],
  },
]

const capabilities = [
  {
    id: 'Rekayasa Web & Mobile Enterprise',
    en: 'Enterprise Web & Mobile Engineering',
  },
  {
    id: 'Arsitektur Basis Data & Integrasi API',
    en: 'Database Architecture & API Integration',
  },
  {
    id: 'Analisis Sistem & Pemodelan (UML / ERD)',
    en: 'Systems Analysis & Modeling (UML / ERD)',
  },
  {
    id: 'Prototipe UI/UX & Pengujian Kualitas (SIT / UAT)',
    en: 'UI/UX Prototyping & Quality Assurance (SIT / UAT)',
  },
]

const timeline = [
  // EXPERIENCE
  {
    typeId: 'Pengalaman',
    typeEn: 'Experience',
    title: 'PT Vinix Seven Aurum',
    metaId: 'Front-End Developer & UI/UX Designer • 2026 (MSIB Batch 3)',
    metaEn: 'Front-End Developer & UI/UX Designer • 2026 (MSIB Batch 3)',
    textId: 'Mengembangkan antarmuka web responsif dan merancang alur UI/UX untuk WargaBersih, platform digital pengelolaan kebersihan lingkungan RT/RW.',
    textEn: 'Developed responsive web interfaces and crafted end-to-end UI/UX workflows for WargaBersih, a digital neighborhood waste management platform.',
    responsibilitiesId: [
      'Mengembangkan antarmuka web responsif untuk platform digital pengelolaan kebersihan lingkungan RT/RW.',
      'Membangun public landing page dan dashboard lingkungan interaktif menggunakan JavaScript, jQuery, dan komponen UI modern.',
      'Mengimplementasikan fitur pelaporan sampah digital dengan upload foto dan penandaan titik geolokasi.',
      'Mengintegrasikan notifikasi status penanganan laporan secara transparan melalui RESTful API.',
      'Menerjemahkan desain sistem komponen Figma menjadi layout web modular dan responsif.',
      'Menyusun diagram alur pengguna (user flow) dan dokumentasi teknis sistem.',
      'Mendukung pelaksanaan System Integration Testing (SIT) dan User Acceptance Testing (UAT).',
    ],
    responsibilitiesEn: [
      'Developed responsive web interfaces for a digital neighborhood waste management platform.',
      'Built a public landing page and environmental dashboard using JavaScript, jQuery, and modern UI components.',
      'Supported waste reporting with photo uploads and geolocation tagging.',
      'Worked on notification and status-tracking features integrated through RESTful APIs.',
      'Translated Figma component designs into reusable web layouts.',
      'Prepared user-flow diagrams and technical documentation.',
      'Supported System Integration Testing (SIT) and User Acceptance Testing (UAT).',
    ],
  },
  {
    typeId: 'Pengalaman',
    typeEn: 'Experience',
    title: 'PT Indotech Energi Persada',
    metaId: 'Software & Mobile Application Developer • 2025',
    metaEn: 'Software & Mobile Application Developer • 2025',
    textId: 'Mengembangkan aplikasi operasional full-stack berbasis C# (.NET 6) dan React.js, aplikasi mobile cross-platform Flutter, serta mengelola basis data SQL Server dan MySQL.',
    textEn: 'Developed full-stack web applications with C# (.NET 6) and React.js, cross-platform Flutter mobile applications, and managed SQL Server and MySQL databases.',
    responsibilitiesId: [
      'Mengembangkan aplikasi web menggunakan C# (.NET 6), JavaScript, jQuery, React.js, HTML, dan CSS.',
      'Mengembangkan aplikasi mobile cross-platform berbasis Flutter untuk pencatatan dan pengelolaan tugas operasional.',
      'Mengintegrasikan RESTful API dan mekanisme autentikasi pengguna yang aman.',
      'Mengelola basis data Microsoft SQL Server dan MySQL (skema relasional, SQL queries, stored procedures, dan optimasi query).',
      'Melakukan debugging, optimasi performa kode, dan version control menggunakan Git.',
      'Menyusun dokumentasi teknis dan diagram sistem, mencakup ERD, UML, dan flowcharts.',
      'Melaksanakan System Integration Testing (SIT), User Acceptance Testing (UAT), dan basic application security testing.',
    ],
    responsibilitiesEn: [
      'Developed web applications using C# (.NET 6), JavaScript, jQuery, React.js, HTML, and CSS.',
      'Developed a cross-platform Flutter mobile application for task recording and operational management.',
      'Integrated RESTful APIs and secure user authentication.',
      'Managed Microsoft SQL Server and MySQL databases (relational schemas, SQL queries, stored procedures, and query optimization).',
      'Performed debugging, code optimization, and used Git for version control.',
      'Prepared technical documentation and system diagrams, including ERD, UML, and flowcharts.',
      'Performed SIT, UAT, and basic application security testing.',
    ],
  },

  {
    typeId: 'Pengalaman',
    typeEn: 'Experience',
    title: 'IMATIKA FT-KMUP',
    metaId: 'Pengalaman Organisasi • Anggota Bidang 1 • 2022 – 2024',
    metaEn: 'Organizational Experience • Board Member, Division 1 • 2022 – 2024',
    textId: 'Pengalaman organisasi sebagai Anggota Bidang 1 dalam koordinasi kegiatan akademik, pengembangan keilmuan teknologi informasi, dan kolaborasi mahasiswa teknik informatika.',
    textEn: 'Active board member in Division 1, coordinating academic activities, IT knowledge-sharing initiatives, and departmental engineering student programs.',
    responsibilitiesId: [
      'Mengkoordinasikan kegiatan akademik dan program pengembangan keilmuan teknologi informasi mahasiswa.',
      'Memfasilitasi forum kolaborasi, workshop teknologi, dan kegiatan keorganisasian Teknik Informatika Universitas Pancasila.',
    ],
    responsibilitiesEn: [
      'Coordinated academic initiatives and IT knowledge-sharing programs for engineering students.',
      'Facilitated collaborative student forums, technical workshops, and departmental organizational programs at Universitas Pancasila.',
    ],
  },

  // EDUCATION
  {
    typeId: 'Pendidikan',
    typeEn: 'Education',
    title: 'Universitas Pancasila',
    metaId: 'Sarjana Teknik Informatika (S.T.) • 2022 – 2026',
    metaEn: 'Bachelor of Informatics Engineering (S.T.) • 2022 – 2026',
    textId: 'Fakultas Teknik, Program Studi Teknik Informatika. IPK: 3.64 / 4.00. Fokus akademik pada rekayasa perangkat lunak, arsitektur basis data, dan analisis sistem.',
    textEn: 'Faculty of Engineering, Informatics Engineering. GPA: 3.64 / 4.00. Academic focus on software engineering, database architectures, and systems analysis.',
  },
  {
    typeId: 'Pendidikan',
    typeEn: 'Education',
    title: 'SMAIT Al-Madinah',
    metaId: 'Peminatan Ilmu Pengetahuan Sosial (IPS) • 2019 – 2022',
    metaEn: 'Social Sciences (IPS) Track • 2019 – 2022',
    textId: 'Menyelesaikan pendidikan menengah atas dengan fondasi analitis yang kuat dalam pemikiran kritis, komunikasi, dan ilmu sosial.',
    textEn: 'Completed secondary education with a strong foundation in critical thinking, communication, and social sciences.',
  },

  // CERTIFICATIONS AND TRAINING
  {
    typeId: 'Sertifikasi dan Pelatihan',
    typeEn: 'Certification and Training',
    title: 'Sertifikasi Kompetensi BNSP: Analis Sistem (Systems Analyst)',
    metaId: 'LSP Informatika • No: 12455/SKHA/LSP-INF/10/2026 • Oktober 2026',
    metaEn: 'LSP Informatika • No: 12455/SKHA/LSP-INF/10/2026 • October 2026',
    statusBadgeId: '✓ Dinyatakan Kompeten • LSP Informatika (BNSP)',
    statusBadgeEn: '✓ Certified Competent • LSP Informatika (BNSP)',
    calloutId: 'Lihat Pratinjau Sertifikat & Dokumen SKHA',
    calloutEn: 'View Certificate Preview & SKHA Document',
    isBnspAssessment: true,
    schemeId: 'Analis Sistem (Systems Analyst)',
    schemeEn: 'Systems Analyst',
    organization: 'Lembaga Sertifikasi Profesi (LSP) Informatika',
    license: 'Badan Nasional Sertifikasi Profesi (BNSP) • No. Lisensi: BNSP-LSP-317-ID',
    documentNumber: '12455/SKHA/LSP-INF/10/2026',
    assessmentDateId: '6 Oktober 2026',
    assessmentDateEn: 'October 6, 2026',
    issueDateId: '14 Oktober 2026',
    issueDateEn: 'October 14, 2026',
    assessorSignatory: 'Dr. Muhaemin, S.Kom, SH., M.Kom (Ketua LSP Informatika)',
    documentStatusId: 'Surat Keterangan Hasil Asesmen (SKHA) resmi telah diterbitkan oleh LSP Informatika dengan keputusan KOMPETEN sebagai bukti sah kualifikasi nasional sambil menunggu terbitnya blangko fisik Sertifikat Kompetensi dari BNSP.',
    documentStatusEn: 'Official Assessment Result Certificate (SKHA) has been issued by LSP Informatika declaring competency outcome as COMPETENT, serving as valid national credential proof while physical blank certificate issuance is completed by BNSP.',
    competencyUnitsId: [
      'Menganalisis Kebutuhan Sistem & Spesifikasi Perangkat Lunak (SRS)',
      'Merancang Pemodelan Data & Skema Basis Data Relasional (ERD & RDBMS)',
      'Merancang Arsitektur & Alur Proses Sistem (UML Use Case, Activity, Sequence)',
      'Merumuskan Validasi Bisnis & Aturan Logika Sistem',
      'Merencanakan dan Melaksanakan Pengujian Sistem (SIT & UAT)',
    ],
    competencyUnitsEn: [
      'Analyze System Requirements & Software Requirements Specification (SRS)',
      'Design Relational Data Modeling & Database Architecture (ERD & RDBMS)',
      'Architect System Process Flows & UML Models (Use Case, Activity, Sequence)',
      'Formulate Business Logic Rules & System Specifications',
      'Plan and Execute System Verification & Testing (SIT & UAT)',
    ],
    textId: 'Surat Keterangan Hasil Asesmen resmi (Nomor: 12455/SKHA/LSP-INF/10/2026) dari Lembaga Sertifikasi Profesi (LSP) Informatika berlisensi Badan Nasional Sertifikasi Profesi (BNSP-LSP-317-ID). Secara resmi dinyatakan KOMPETEN pada skema Analis Sistem (Systems Analyst) pada pelaksanaan asesmen tanggal 6 Oktober 2026 dan diterbitkan pada 14 Oktober 2026. Standar kompetensi mengacu pada SKKNI Bidang Teknologi Informasi & Komunikasi meliputi analisis spesifikasi kebutuhan sistem (SRS), perancangan arsitektur & proses (UML), pemodelan basis data relasional (ERD), aturan logika bisnis, dan pengujian sistem.',
    textEn: 'Official Competency Assessment Result Certificate (Doc No: 12455/SKHA/LSP-INF/10/2026) issued by LSP Informatika, licensed by Indonesia’s National Professional Certification Authority (BNSP-LSP-317-ID). Formally declared COMPETENT in the Systems Analyst national occupational qualification scheme (Assessed Oct 6, 2026; Issued Oct 14, 2026). Standard conforms to national SKKNI ICT competencies including software requirements engineering (SRS), relational data modeling (ERD), UML process flow modeling, business logic rules, and system testing.',
    pdfPath: '/Seritf/Surat_Keterangan_Hasil_Asesmen_Analis_Sistem_BNSP.pdf',
    pdfName: 'Surat_Keterangan_Hasil_Asesmen_Analis_Sistem_BNSP.pdf',
  },
  {
    typeId: 'Sertifikasi dan Pelatihan',
    typeEn: 'Certification and Training',
    title: 'LIA English Proficiency Test (LOT EPT™)',
    metaId: 'Lembaga Bahasa LIA • Skor: 517 • Juli 2026',
    metaEn: 'Lembaga Bahasa LIA • Score: 517 • July 2026',
    textId: 'Sertifikat resmi hasil uji kemahiran bahasa Inggris (LOT EPT™) dari Lembaga Bahasa LIA (No: 00014/LOT EPT-25/7/2026/CBP). Skor total prediksi TOEFL: 517 (Listening: 57, Structure: 50, Reading: 48).',
    textEn: 'Official English Proficiency Test Result (LOT EPT™) issued by Lembaga Bahasa LIA (Cert No: 00014/LOT EPT-25/7/2026/CBP). Overall TOEFL prediction score: 517 (Listening: 57, Structure: 50, Reading: 48).',
    pdfPath: '/Seritf/LIA_English_Proficiency_Test_Score_517.pdf',
    pdfName: 'LIA_English_Proficiency_Test_Score_517.pdf',
  },
  {
    typeId: 'Sertifikasi dan Pelatihan',
    typeEn: 'Certification and Training',
    title: 'Techno IT & Kelas Organisasi',
    metaId: 'IMATIKA FT-KMUP • Maret 2023',
    metaEn: 'IMATIKA FT-KMUP • March 2023',
    textId: 'Peserta seminar TECHNO IT bertema "Berpikir Digital Ala Milenial dalam Menguasai dan Menerapkan Teknologi di Era Digital Industri 5.0" dan kelas keorganisasian oleh IMATIKA FT-KMUP.',
    textEn: 'Participant in TECHNO IT seminar themed "Digital Millennial Thinking in Mastering and Applying Technology in the Industry 5.0 Era" and organizational leadership class by IMATIKA FT-KMUP.',
    pdfPath: '/Seritf/02_TECHNO_IT_Berpikir_Digital.pdf',
    pdfName: '02_TECHNO_IT_Berpikir_Digital.pdf',
  },
  {
    typeId: 'Sertifikasi dan Pelatihan',
    typeEn: 'Certification and Training',
    title: '12th AIFED Visual Data Storytelling Competition 2023',
    metaId: 'Kementerian Keuangan RI • November 2023',
    metaEn: 'Ministry of Finance of RI • November 2023',
    textId: 'Peserta kompetensi visual data storytelling berskala nasional yang diselenggarakan oleh Kementerian Keuangan RI (Badan Kebijakan Fiskal), berfokus pada pengolahan data analitis, pemikiran kritis, dan komunikasi visual.',
    textEn: 'Participant in the national visual data storytelling competition hosted by the Ministry of Finance of RI (Fiscal Policy Agency), focusing on analytical data processing, critical thinking, and visual communication.',
    pdfPath: '/Seritf/12th%20AIFED%20Visual%20Data%20Storytelling%20Competition%202023%20-%20Akhmad%20Rizaldy.pdf',
    pdfName: '12th AIFED Visual Data Storytelling Competition 2023 - Akhmad Rizaldy.pdf',
  },
  {
    typeId: 'Sertifikasi dan Pelatihan',
    typeEn: 'Certification and Training',
    title: 'Pelatihan Soft Skills: Emotional Intelligence for Career Growth',
    metaId: 'VINIX7 • Oktober 2025',
    metaEn: 'VINIX7 • October 2025',
    textId: 'Pelatihan intensif pengembangan soft skills bertema "Emotional Intelligence For Career Growth: Unlocking Your Professional Potential", mencakup kecerdasan emosional, komunikasi profesional, dan kesiapan karier.',
    textEn: 'Intensive soft skills development training on "Emotional Intelligence For Career Growth: Unlocking Your Professional Potential", covering emotional intelligence, professional communication, and career readiness.',
    pdfPath: '/Seritf/14_Softskill_Emotional_Intelligence.pdf',
    pdfName: '14_Softskill_Emotional_Intelligence.pdf',
  },
  {
    typeId: 'Sertifikasi dan Pelatihan',
    typeEn: 'Certification and Training',
    title: 'Sertifikat Magang Mandiri MSIB – Junior Web Dev UI/UX',
    metaId: 'PT Vinix Seven Aurum • Desember 2025',
    metaEn: 'PT Vinix Seven Aurum • December 2025',
    textId: 'Sertifikat penyelesaian program Magang Mandiri MSIB Batch 3 pada Divisi Junior Web Dev UI/UX dengan predikat sangat baik.',
    textEn: 'Certificate of completion for the Independent MSIB Internship (Batch 3) in the Junior Web Dev UI/UX division with an excellent grade.',
    pdfPath: '/Seritf/17_Magang_MSIB_PT_Vinix_Seven_Aurum.pdf',
    pdfName: '17_Magang_MSIB_PT_Vinix_Seven_Aurum.pdf',
  },
  {
    typeId: 'Sertifikasi dan Pelatihan',
    typeEn: 'Certification and Training',
    title: 'Sertifikat Magang Industri – Software Developer',
    metaId: 'PT Indotech Energi Persada • Maret – Juni 2025',
    metaEn: 'PT Indotech Energi Persada • March – June 2025',
    textId: 'Sertifikat pelaksanaan program magang 3 bulan sebagai Software Developer dalam pengembangan aplikasi web dan integrasi sistem.',
    textEn: 'Certificate for 3-month industrial internship as Software Developer in web application engineering and system integration.',
    pdfPath: '/Seritf/18_Magang_PT_INDOTECH_ENERGI_PERSADA.pdf',
    pdfName: '18_Magang_PT_INDOTECH_ENERGI_PERSADA.pdf',
  },
]

const timelineGroups = [
  { key: 'experience', labelId: 'Pengalaman Kerja & Organisasi', labelEn: 'Professional & Organizational Experience', types: ['Pengalaman', 'Experience'] },
  { key: 'education', labelId: 'Pendidikan Formal', labelEn: 'Formal Education', types: ['Pendidikan', 'Education'] },
  { key: 'certificate', labelId: 'Sertifikasi & Pelatihan', labelEn: 'Certification & Training', types: ['Sertifikasi dan Pelatihan', 'Certification and Training'] },
]

const copy = {
  id: {
    about: 'Tentang',
    work: 'Karya',
    background: 'Latar Belakang',
    skillsNav: 'Keahlian',
    contact: 'Kontak',
    available: 'Terbuka untuk pekerjaan terpilih',
    location: 'Jakarta Timur, DKI Jakarta',
    role: 'Software Developer • Systems Analyst • UI/UX Designer',
    heroLead: 'Lulusan Teknik Informatika Universitas Pancasila (IPK 3.64/4.00) dan Analis Sistem tersertifikasi BNSP dengan pengalaman dalam rekayasa aplikasi web, mobile, dan sistem enterprise. Terbiasa membangun arsitektur C#/.NET, PHP/Laravel, React.js, Flutter, basis data relasional, serta integrasi RESTful API teruji.',
    explore: 'Lihat karya',
    profile: 'Profil & Filosofi',
    practical: 'Kreatif yang Praktis & Terstruktur',
    aboutTitle: 'Membangun perangkat lunak dengan presisi arsitektural dan fokus pengguna.',
    workLabel: 'Karya Pilihan',
    workIntro: 'Studi kasus proyek web, sistem informasi, dan desain UI/UX',
    workTitle: 'Karya digital, dibuat fungsional dan terukur.',
    backgroundLabel: 'Pengalaman, Pendidikan & Sertifikasi',
    backgroundTitle: 'Perjalanan profesional dan rekam jejak terverifikasi.',
    skillsLabel: 'Keahlian Teknis & Perangkat',
    skillsIntro: 'Teknologi dan metodologi teruji dalam rekayasa perangkat lunak',
    servicesLabel: 'Layanan & Solusi',
    servicesIntro: 'Bagaimana saya dapat memberikan dampak nyata',
    archiveLabel: 'Informasi Tambahan',
    archiveTitle: 'Dedikasi belajar berkesinambungan dan ketelitian.',
    testimonialLabel: 'Pernyataan Profesional',
    capabilitiesLabel: 'Kemampuan Utama',
    capabilitiesIntro: 'Kompetensi inti dalam siklus pengembangan perangkat lunak',
    contactLabel: 'Mari Bekerja Sama',
    contactIntro: 'Terbuka untuk peluang kerja full-time, proyek enterprise, dan kolaborasi teknis.',
    email: 'Email',
    whatsapp: 'WhatsApp',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    cv: 'Curriculum Vitae',
    city: 'Domisili',
    download: 'Unduh CV (PDF)',
    liveDemo: 'Demo Langsung',
    repository: 'Repositori GitHub',
    figmaPrototype: 'Prototipe Figma',
    highlightsLabel: 'Fitur Utama & Modul',
    roleLabel: 'Peran & Tanggung Jawab',
    problemLabel: 'Tantangan & Kebutuhan',
    contributionLabel: 'Kontribusi & Implementasi',
    architectureLabel: 'Arsitektur & Catatan Teknis',
    statusLabel: 'Status Proyek',
    outcome: 'Solusi & Dampak',
  },
  en: {
    about: 'About',
    work: 'Work',
    background: 'Background',
    skillsNav: 'Skills',
    contact: 'Contact',
    available: 'Available for select work',
    location: 'East Jakarta, Indonesia',
    role: 'Software Developer • Systems Analyst • UI/UX Designer',
    heroLead: 'Informatics Engineering graduate from Universitas Pancasila (GPA 3.64/4.00) and BNSP-certified Systems Analyst with hands-on experience in web, mobile, and enterprise application development. Skilled in building C#/.NET, PHP/Laravel, React.js, Flutter, relational databases, and tested RESTful API integrations.',
    explore: 'Explore work',
    profile: 'Profile & Philosophy',
    practical: 'Practical, Structured & Pragmatic',
    aboutTitle: 'Engineering software with architectural precision and user-centered design.',
    workLabel: 'Selected Work',
    workIntro: 'Case studies across web systems, enterprise tools, and UI/UX architecture',
    workTitle: 'Digital solutions, built to be dependable and purposeful.',
    backgroundLabel: 'Experience, Education & Certifications',
    backgroundTitle: 'A journey built on verified milestones and continuous growth.',
    skillsLabel: 'Tech Stack & Methodologies',
    skillsIntro: 'Validated technical competencies across the full software lifecycle',
    servicesLabel: 'Services & Solutions',
    servicesIntro: 'Areas where I contribute direct technical value',
    archiveLabel: 'Additional Information',
    archiveTitle: 'Dedication to craftsmanship and continuous technical learning.',
    testimonialLabel: 'Professional Statement',
    capabilitiesLabel: 'Core Capabilities',
    capabilitiesIntro: 'Core competencies across software architecture and engineering',
    contactLabel: 'Let’s Collaborate',
    contactIntro: 'Open to full-time developer positions, enterprise projects, and technical collaborations.',
    email: 'Email',
    whatsapp: 'WhatsApp',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    cv: 'Curriculum Vitae',
    city: 'Location',
    download: 'Download CV (PDF)',
    liveDemo: 'Live Demo',
    repository: 'GitHub Repository',
    figmaPrototype: 'Figma Prototype',
    highlightsLabel: 'Key Features & Modules',
    roleLabel: 'Role & Responsibility',
    problemLabel: 'Problem & User Need',
    contributionLabel: 'Key Contribution',
    architectureLabel: 'Architecture & Technical Notes',
    statusLabel: 'Project Status',
    outcome: 'Solution & Impact',
  },
}

function CertificatePreview({ certificate, language }) {
  const canvasRef = useRef(null)
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    if (!certificate) {
      return
    }

    if (!certificate.pdfPath) {
      setStatus('not_available')
      return
    }

    let cancelled = false
    let loadingTask
    let renderTask

    const renderPreview = async () => {
      try {
        setStatus('loading')
        const pdfjsLib = await import('pdfjs-dist/build/pdf.mjs')
        pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs'

        loadingTask = pdfjsLib.getDocument(certificate.pdfPath)
        const pdf = await loadingTask.promise
        const page = await pdf.getPage(1)
        const viewport = page.getViewport({ scale: 1.75 })
        const canvas = canvasRef.current

        if (!canvas || cancelled) return

        const context = canvas.getContext('2d', { alpha: false })
        canvas.width = Math.ceil(viewport.width)
        canvas.height = Math.ceil(viewport.height)

        renderTask = page.render({ canvasContext: context, viewport })
        await renderTask.promise

        if (!cancelled) setStatus('ready')
      } catch (error) {
        if (!cancelled) setStatus('error')
      }
    }

    renderPreview()

    return () => {
      cancelled = true
      renderTask?.cancel()
      loadingTask?.destroy()
    }
  }, [certificate])

  return (
    <div className={styles.certificatePreview}>
      {certificate?.pdfPath ? (
        <canvas ref={canvasRef} className={styles.certificateCanvas} aria-label={`${certificate.title} certificate preview`} />
      ) : null}
      {status === 'loading' && (
        <span className={styles.certificatePreviewStatus}>
          {language === 'id' ? 'Menyiapkan sertifikat…' : 'Preparing certificate…'}
        </span>
      )}
      {status === 'not_available' && (
        <div className={styles.certificatePlaceholderBox}>
          <div className={styles.verifiedBadge}>✓ {language === 'id' ? 'Kredensial Terdaftar & Terverifikasi' : 'Officially Registered & Verified Credential'}</div>
          <p className={styles.certificateNotice}>
            {language === 'id'
              ? 'Sertifikasi kompetensi ini telah terdaftar dan diverifikasi secara resmi. Dokumen berkas PDF digital dapat dihubungkan saat file tersedia.'
              : 'This competency credential is officially registered and verified. The digital PDF document will be linked once the physical/digital file is available.'}
          </p>
        </div>
      )}
      {status === 'error' && (
        <span className={styles.certificatePreviewStatus}>
          {language === 'id' ? 'Pratinjau tidak dapat dimuat.' : 'Preview could not be loaded.'}
        </span>
      )}
    </div>
  )
}

function AnimatedNumber({ value, duration = 1.4, decimals = 2 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-20px' })
  const [displayValue, setDisplayValue] = useState('0.00')

  useEffect(() => {
    if (!isInView) return
    const numericTarget = parseFloat(value)
    if (isNaN(numericTarget)) {
      setDisplayValue(value)
      return
    }

    let startTime = null
    let animationFrame

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      const current = (ease * numericTarget).toFixed(decimals)
      setDisplayValue(current)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step)
      } else {
        setDisplayValue(numericTarget.toFixed(decimals))
      }
    }

    animationFrame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animationFrame)
  }, [isInView, value, duration, decimals])

  return <span ref={ref}>{displayValue}</span>
}

function MagneticWrapper({ children, className = '', maxDistance = 10 }) {
  const ref = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    if (!ref.current) return
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const centerX = left + width / 2
    const centerY = top + height / 2
    const distanceX = (clientX - centerX) * 0.22
    const distanceY = (clientY - centerY) * 0.22
    setPosition({
      x: Math.max(-maxDistance, Math.min(maxDistance, distanceX)),
      y: Math.max(-maxDistance, Math.min(maxDistance, distanceY)),
    })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 350, damping: 22, mass: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

function TiltCard({ children, className = '', maxAngle = 7 }) {
  const ref = useRef(null)
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 })

  const handleMouseMove = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    const rotateY = (x / (rect.width / 2)) * maxAngle
    const rotateX = -(y / (rect.height / 2)) * maxAngle
    setTilt({ rotateX, rotateY })
  }

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 })
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: tilt.rotateX,
        rotateY: tilt.rotateY,
      }}
      transition={{ type: 'spring', stiffness: 280, damping: 20 }}
    >
      {children}
    </motion.div>
  )
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [language, setLanguage] = useState('id')
  const [selectedCertificate, setSelectedCertificate] = useState(null)
  const [activeSection, setActiveSection] = useState('about')
  const [toastMessage, setToastMessage] = useState(null)
  const [roleIndex, setRoleIndex] = useState(0)
  const text = copy[language]

  const rolesId = [
    'Software Developer',
    'Analis Sistem Tersertifikasi BNSP',
    'UI/UX Designer',
    'Enterprise Full-Stack Engineer',
  ]
  const rolesEn = [
    'Software Developer',
    'BNSP-Certified Systems Analyst',
    'UI/UX Designer',
    'Enterprise Full-Stack Engineer',
  ]

  // Role title rotation cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % rolesId.length)
    }, 3200)
    return () => clearInterval(interval)
  }, [rolesId.length])

  // ScrollSpy active section detection
  useEffect(() => {
    const sectionIds = ['about', 'work', 'background', 'skills', 'contact']
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i]
        const element = document.getElementById(id)
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const copyToClipboard = (textToCopy, label) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        setToastMessage(language === 'id' ? `✓ ${label} berhasil disalin ke clipboard!` : `✓ ${label} copied to clipboard!`)
        setTimeout(() => setToastMessage(null), 2800)
      })
    }
  }

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Prevent browser jump on refresh & start clean from top
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual'
      }
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname)
      }
      window.scrollTo(0, 0)
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedCertificate(null)
      }
    }
    if (selectedCertificate) {
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedCertificate])

  const closeMenu = () => setMenuOpen(false)

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    closeMenu()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleSpotlightMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
    e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
  }

  const tickerItems = [
    'C# / .NET 6+',
    'ASP.NET Core Web API',
    'PHP / Laravel',
    'React.js',
    'Flutter Mobile',
    'Microsoft SQL Server',
    'MySQL Relational DB',
    'BNSP Certified Systems Analyst',
    'RESTful API Architecture',
    'Figma UI/UX Systems',
    'SIT & UAT Quality Assurance',
    'Docker & Git',
  ]

  return (
    <>
      <Head>
        <title>Akhmad Rizaldy | Software Developer & Systems Analyst | Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Akhmad Rizaldy — Software Developer, BNSP-certified Systems Analyst, and UI/UX Designer specializing in C#/.NET, PHP/Laravel, React.js, Flutter, and SQL databases."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </Head>

      <main className={styles.page}>
        <motion.div className={styles.scrollProgressBar} style={{ scaleX }} />
        <div className={styles.container}>
          {/* TOPBAR */}
          <header className={styles.topbar}>
            <a href="#top" className={styles.wordmark}>
              AR<span className={styles.wordmarkYear}>/26</span>
            </a>

            <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`} aria-label="Main navigation" id="main-navigation">
              <a
                href="#about"
                className={`${styles.navItem} ${activeSection === 'about' ? styles.navItemActive : ''}`}
                onClick={(e) => handleNavClick(e, 'about')}
              >
                {text.about}
                {activeSection === 'about' && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className={styles.activeNavDot}
                    transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                  />
                )}
              </a>
              <a
                href="#work"
                className={`${styles.navItem} ${activeSection === 'work' ? styles.navItemActive : ''}`}
                onClick={(e) => handleNavClick(e, 'work')}
              >
                {text.work}
                {activeSection === 'work' && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className={styles.activeNavDot}
                    transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                  />
                )}
              </a>
              <a
                href="#background"
                className={`${styles.navItem} ${activeSection === 'background' ? styles.navItemActive : ''}`}
                onClick={(e) => handleNavClick(e, 'background')}
              >
                {text.background}
                {activeSection === 'background' && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className={styles.activeNavDot}
                    transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                  />
                )}
              </a>
              <a
                href="#skills"
                className={`${styles.navItem} ${activeSection === 'skills' ? styles.navItemActive : ''}`}
                onClick={(e) => handleNavClick(e, 'skills')}
              >
                {text.skillsNav}
                {activeSection === 'skills' && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className={styles.activeNavDot}
                    transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                  />
                )}
              </a>
              <a
                href="#contact"
                className={`${styles.navItem} ${activeSection === 'contact' ? styles.navItemActive : ''}`}
                onClick={(e) => handleNavClick(e, 'contact')}
              >
                {text.contact}
                {activeSection === 'contact' && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className={styles.activeNavDot}
                    transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                  />
                )}
              </a>
            </nav>

            <div className={styles.topbarRight}>
              <div className={styles.languageSwitch} aria-label="Language selector">
                <button
                  type="button"
                  className={`${styles.langBtn} ${language === 'id' ? styles.languageActiveText : ''}`}
                  onClick={() => setLanguage('id')}
                >
                  {language === 'id' && (
                    <motion.span
                      layoutId="activeLangPill"
                      className={styles.activeLangPill}
                      transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                    />
                  )}
                  <span className={styles.langBtnLabel}>ID</span>
                </button>
                <span className={styles.langDivider}>/</span>
                <button
                  type="button"
                  className={`${styles.langBtn} ${language === 'en' ? styles.languageActiveText : ''}`}
                  onClick={() => setLanguage('en')}
                >
                  {language === 'en' && (
                    <motion.span
                      layoutId="activeLangPill"
                      className={styles.activeLangPill}
                      transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                    />
                  )}
                  <span className={styles.langBtnLabel}>EN</span>
                </button>
              </div>

              <button
                type="button"
                className={`${styles.menuButton} ${menuOpen ? styles.menuButtonOpen : ''}`}
                onClick={() => setMenuOpen((isOpen) => !isOpen)}
                aria-expanded={menuOpen}
                aria-controls="main-navigation"
                aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              >
                <span />
                <span />
              </button>
            </div>
          </header>

          {/* HERO */}
          <section id="top" className={styles.hero}>
            <div className={styles.ambientGlowContainer} aria-hidden="true">
              <div className={styles.ambientGlowPrimary} />
              <div className={styles.ambientGlowSecondary} />
            </div>

            <motion.div
              className={styles.heroHeader}
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className={styles.heroTagNumber}>01 // 11</span>
              <div className={styles.availabilityBadge}>
                <div className={styles.pulseWrapper}>
                  <span className={styles.pulseDot} />
                  <span className={styles.pulseRing} />
                  <span className={`${styles.pulseRing} ${styles.pulseRingDelay}`} />
                </div>
                <span>{text.available}</span>
              </div>
            </motion.div>

            <div className={styles.heroMain}>
              <div className={styles.heroCopy}>
                <motion.div
                  className={styles.roleBadge}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className={styles.rolePrefix}>✦</span>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={`${language}-${roleIndex}`}
                      initial={{ opacity: 0, y: 7 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -7 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className={styles.rotatingRoleText}
                    >
                      {language === 'id' ? rolesId[roleIndex] : rolesEn[roleIndex]}
                    </motion.span>
                  </AnimatePresence>
                </motion.div>
                <motion.h1
                  className={styles.heroTitle}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                >
                  Akhmad<br />
                  <span className={styles.heroTitleAccent}>Rizaldy</span>
                </motion.h1>
                <motion.p
                  className={styles.heroLead}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
                >
                  {text.heroLead}
                </motion.p>

                <motion.div
                  className={styles.heroActions}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
                >
                  <MagneticWrapper className={styles.magneticWrapper}>
                    <a href="/CV_Akhmad_Rizaldy.pdf" className={styles.primaryButton} download>
                      <span>{text.download}</span>
                      <span className={styles.btnIcon}>↓</span>
                    </a>
                  </MagneticWrapper>
                  <div className={styles.heroActionsRow}>
                    <MagneticWrapper className={styles.magneticWrapperFull}>
                      <a href="https://github.com/akhmadrizaldy74" className={styles.secondaryButton} target="_blank" rel="noreferrer">
                        <span>{language === 'id' ? 'Lihat GitHub' : 'View GitHub'}</span>
                        <span className={styles.btnIcon}>↗</span>
                      </a>
                    </MagneticWrapper>
                    <MagneticWrapper className={styles.magneticWrapperFull}>
                      <a href="#contact" className={`${styles.secondaryButton} ${styles.contactBtn}`} onClick={(e) => handleNavClick(e, 'contact')}>
                        <span>{text.contact}</span>
                        <span className={styles.btnIcon}>↘</span>
                      </a>
                    </MagneticWrapper>
                  </div>
                </motion.div>
              </div>

              <motion.div
                className={styles.heroPortraitWrapper}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              >
                <TiltCard className={styles.heroPortrait}>
                  <Image
                    src="/images/profile/foto_akhmad.png"
                    alt="Foto profil Akhmad Rizaldy"
                    width={900}
                    height={900}
                    priority
                    className={styles.portraitImg}
                  />
                  <div className={styles.portraitCornerTag}>
                    <span>JAKARTA, ID</span>
                  </div>
                </TiltCard>
              </motion.div>
            </div>

            <motion.div
              className={styles.heroFooter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45 }}
            >
              <span>{text.explore}</span>
              <span className={styles.scrollLine} />
              <span>2026 EDITION</span>
            </motion.div>
          </section>

          {/* INFINITE TECH TICKER / MARQUEE (BUSINESS TECH BAND) */}
          <div className={styles.marqueeContainer} aria-hidden="true">
            <div className={styles.marqueeTrack}>
              {[...tickerItems, ...tickerItems].map((item, idx) => (
                <span key={idx} className={styles.marqueeItem}>
                  <span className={styles.marqueeDot}>✦</span>
                  <span>{item}</span>
                </span>
              ))}
            </div>
          </div>

          {/* ABOUT */}
          <motion.section
            id="about"
            className={styles.aboutSection}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.sectionRail}>
              <span className={styles.railIndex}>02</span>
              <span className={styles.railTitle}>{text.profile}</span>
            </div>
            <div className={styles.aboutContent}>
              <p className={styles.eyebrow}>{text.practical}</p>
              <h2 className={styles.sectionHeading}>{text.aboutTitle}</h2>
              <div className={styles.aboutDetails}>
                <p>
                  {language === 'id'
                    ? 'Halo, saya Akhmad Rizaldy, Software Developer, Systems Analyst tersertifikasi BNSP (LSP Informatika), dan UI/UX Designer lulusan Teknik Informatika Universitas Pancasila (IPK 3.64 / 4.00) yang berdomisili di Jakarta Timur, DKI Jakarta.'
                    : 'Hi, I’m Akhmad Rizaldy, a Software Developer, BNSP-certified Systems Analyst (LSP Informatika), and UI/UX Designer with a degree in Informatics Engineering from Universitas Pancasila (GPA 3.64 / 4.00), based in East Jakarta, Indonesia.'}
                </p>
                <p>
                  {language === 'id'
                    ? 'Memiliki pengalaman langsung dalam pengembangan aplikasi web dan mobile enterprise menggunakan C# (.NET 6+), ASP.NET Core Web API, PHP/Laravel, React.js, Flutter, dan Python. Terampil dalam manajemen basis data relasional (SQL Server & MySQL), analisis sistem (UML, ERD, flowcharts), pengujian SIT/UAT, dan perancangan antarmuka Figma.'
                    : 'Possess hands-on experience in enterprise web and mobile engineering utilizing C# (.NET 6+), ASP.NET Core Web API, PHP/Laravel, React.js, Flutter, and Python. Proficient in relational database management (SQL Server & MySQL), system analysis (UML, ERD, flowcharts), SIT/UAT testing, and Figma UI/UX prototyping.'}
                </p>
              </div>

              <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                  <strong className={styles.statNumber}>
                    <AnimatedNumber value="3.64" />
                  </strong>
                  <span className={styles.statText}>
                    {language === 'id' ? 'IPK Kumulatif (Skala 4.00)' : 'Cumulative GPA (out of 4.00)'}
                  </span>
                </div>
                <div className={styles.statCard}>
                  <strong className={styles.statNumber}>BNSP</strong>
                  <span className={styles.statText}>
                    {language === 'id' ? 'Sertifikasi Analis Sistem' : 'Certified Systems Analyst'}
                  </span>
                </div>
              </div>
            </div>
          </motion.section>

          {/* SELECTED WORK */}
          <motion.section
            id="work"
            className={styles.projectSection}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.sectionRail}>
              <span className={styles.railIndex}>03</span>
              <span className={styles.railTitle}>{text.workLabel}</span>
            </div>
            <div className={styles.projectIntro}>
              <p className={styles.eyebrow}>{text.workIntro}</p>
              <h2 className={styles.sectionHeading}>{text.workTitle}</h2>

              <div className={styles.projectList}>
                {projects.map((project, pIdx) => (
                  <motion.article
                    key={project.titleId}
                    className={`${styles.projectCard} ${styles.spotlightCard}`}
                    onMouseMove={handleSpotlightMove}
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.12 }}
                    transition={{ duration: 0.65, delay: pIdx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className={styles.projectVisual}>
                      <Image
                        src={project.image}
                        alt={`${language === 'id' ? project.titleId : project.titleEn} project cover`}
                        width={865}
                        height={414}
                        className={styles.projectCoverImg}
                      />
                      <div className={styles.projectVisualMeta}>
                        <span>
                          {language === 'id'
                            ? (project.typeId || 'SISTEM WEB OPERASIONAL')
                            : (project.typeEn || 'OPERATIONAL WEB SYSTEM')}
                        </span>
                        <div className={styles.pillContainer}>
                          {project.stackList.map((tag) => (
                            <span key={tag} className={styles.stackPillSmall}>{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className={styles.projectBody}>
                      <div className={styles.projectBadgeRow}>
                        <span className={styles.projectNumber}>{project.number}</span>
                        <span className={styles.projectYear}>{project.year}</span>
                        <span className={styles.projectCategory}>
                          {language === 'id' ? project.categoryId : project.categoryEn}
                        </span>
                        <span className={styles.projectStatusBadge}>
                          {language === 'id' ? project.statusId : project.statusEn}
                        </span>
                      </div>

                      <h3 className={styles.projectTitle}>
                        {language === 'id' ? project.titleId : project.titleEn}
                      </h3>

                      <p className={styles.projectDescription}>
                        {language === 'id' ? project.descriptionId : project.descriptionEn}
                      </p>

                      <div className={styles.projectMetaBox}>
                        <div className={styles.metaItem}>
                          <span className={styles.metaLabel}>{text.roleLabel}</span>
                          <p className={styles.metaValue}>{project.role}</p>
                        </div>
                        <div className={styles.metaItem}>
                          <span className={styles.metaLabel}>{text.problemLabel}</span>
                          <p className={styles.metaValue}>
                            {language === 'id' ? project.problemId : project.problemEn}
                          </p>
                        </div>
                        <div className={styles.metaItem}>
                          <span className={styles.metaLabel}>{text.contributionLabel}</span>
                          <p className={styles.metaValue}>
                            {language === 'id' ? project.contributionId : project.contributionEn}
                          </p>
                        </div>
                        {((language === 'id' ? project.highlightsId : project.highlightsEn) || project.highlights) && (
                          <div className={styles.metaItem}>
                            <span className={styles.metaLabel}>{text.highlightsLabel}</span>
                            <ul className={styles.highlightsList}>
                              {((language === 'id' ? project.highlightsId : project.highlightsEn) || project.highlights).map((item, idx) => (
                                <li key={idx}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        <div className={styles.metaItem}>
                          <span className={styles.metaLabel}>{text.architectureLabel}</span>
                          <p className={styles.metaValue}>
                            {language === 'id' ? project.architectureId : project.architectureEn}
                          </p>
                        </div>
                      </div>

                      <div className={styles.projectActions}>
                        {project.figma && (
                          <a href={project.figma} className={styles.projectLinkBtn} target="_blank" rel="noreferrer">
                            <span>{text.figmaPrototype}</span>
                            <span>↗</span>
                          </a>
                        )}
                        {project.repo && (!project.figma || project.repo !== project.figma) && (
                          <a href={project.repo} className={styles.projectLinkBtn} target="_blank" rel="noreferrer">
                            <span>{text.repository}</span>
                            <span>↗</span>
                          </a>
                        )}
                        {project.demo && project.demo !== '#' && (
                          <a href={project.demo} className={styles.projectLinkBtn} target="_blank" rel="noreferrer">
                            <span>{text.liveDemo}</span>
                            <span>↗</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </motion.section>

          {/* BACKGROUND / TIMELINE */}
          <motion.section
            id="background"
            className={styles.backgroundSection}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.sectionRail}>
              <span className={styles.railIndex}>04</span>
              <span className={styles.railTitle}>{text.background}</span>
            </div>
            <div className={styles.backgroundContent}>
              <p className={styles.eyebrow}>{text.backgroundLabel}</p>
              <h2 className={styles.sectionHeading}>{text.backgroundTitle}</h2>

              <div className={styles.timelineContainer}>
                {timelineGroups.map((group) => (
                  <div className={styles.timelineGroup} key={group.key}>
                    <div className={styles.groupHeader}>
                      <h3 className={styles.timelineGroupTitle}>
                        {language === 'id' ? group.labelId : group.labelEn}
                      </h3>
                    </div>

                    <div className={styles.timelineList}>
                      {timeline
                        .filter((item) => group.types.includes(language === 'id' ? item.typeId : item.typeEn))
                        .map((item, tIdx) => {
                          const isCertificate = group.key === 'certificate'

                          return (
                            <motion.article
                              key={`${item.title}-${item.metaEn}`}
                              className={`${styles.timelineCard} ${isCertificate ? styles.timelineCardInteractive : ''}`}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true, amount: 0.1 }}
                              transition={{ duration: 0.5, delay: tIdx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                              onClick={isCertificate ? () => setSelectedCertificate(item) : undefined}
                              onKeyDown={isCertificate ? (event) => { if (event.key === 'Enter' || event.key === ' ') setSelectedCertificate(item) } : undefined}
                              tabIndex={isCertificate ? 0 : undefined}
                              role={isCertificate ? 'button' : undefined}
                            >
                              <div className={styles.timelineCardTop}>
                                <div className={styles.timelineTitleArea}>
                                  <h4 className={styles.itemTitle}>{item.title}</h4>
                                  {item.statusBadgeId && (
                                    <span className={styles.competentStatusBadge}>
                                      {language === 'id' ? item.statusBadgeId : item.statusBadgeEn}
                                    </span>
                                  )}
                                </div>
                                <span className={styles.itemMetaBadge}>
                                  {language === 'id' ? item.metaId : item.metaEn}
                                </span>
                              </div>
                              <p className={styles.itemDescription}>
                                {language === 'id' ? item.textId : item.textEn}
                              </p>

                              {item.responsibilitiesId && item.responsibilitiesEn && (
                                <ul className={styles.timelineResponsibilities}>
                                  {(language === 'id' ? item.responsibilitiesId : item.responsibilitiesEn).map((resp, rIdx) => (
                                    <li key={rIdx}>{resp}</li>
                                  ))}
                                </ul>
                              )}

                              {isCertificate && (
                                <div className={styles.certificateCallout}>
                                  <span>
                                    {item.calloutId
                                      ? (language === 'id' ? item.calloutId : item.calloutEn)
                                      : item.pdfPath
                                        ? (language === 'id' ? 'Lihat Pratinjau Sertifikat' : 'View Certificate Preview')
                                        : (language === 'id' ? 'Lihat Informasi Sertifikasi' : 'View Credential Details')}
                                  </span>
                                  <span>↗</span>
                                </div>
                              )}
                            </motion.article>
                          )
                        })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* TECH STACK & TOOLS (PILL CHIPS) */}
          <motion.section
            id="skills"
            className={styles.skillsSection}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.sectionRail}>
              <span className={styles.railIndex}>05</span>
              <span className={styles.railTitle}>{text.skillsLabel}</span>
            </div>
            <div className={styles.skillsContent}>
              <p className={styles.eyebrow}>{text.skillsIntro}</p>

              <div className={styles.skillsGrid}>
                {skillCategories.map((category) => (
                  <div key={category.categoryKey} className={styles.skillCategoryCard}>
                    <h4 className={styles.skillCategoryTitle}>
                      {language === 'id' ? category.titleId : category.titleEn}
                    </h4>
                    <div className={styles.skillsPillWrapper}>
                      {category.skills.map((skill, sIdx) => (
                        <motion.span
                          key={skill}
                          className={styles.techChip}
                          initial={{ opacity: 0, scale: 0.92 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: sIdx * 0.025 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* SERVICES */}
          <motion.section
            className={styles.servicesSection}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.sectionRail}>
              <span className={styles.railIndex}>06</span>
              <span className={styles.railTitle}>{text.servicesLabel}</span>
            </div>
            <div className={styles.servicesContent}>
              <p className={styles.eyebrow}>{text.servicesIntro}</p>

              <div className={styles.serviceCardsGrid}>
                <motion.article
                  className={`${styles.serviceCard} ${styles.spotlightCard}`}
                  onMouseMove={handleSpotlightMove}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className={styles.serviceHeader}>
                    <span className={styles.serviceNum}>01</span>
                    <span className={styles.serviceDot} />
                  </div>
                  <h3 className={styles.serviceTitle}>
                    {language === 'id' ? 'Pengembangan Web Enterprise' : 'Enterprise Web Engineering'}
                  </h3>
                  <p className={styles.serviceDesc}>
                    {language === 'id'
                      ? 'Membangun aplikasi web responsif berskala enterprise dengan arsitektur C# (.NET 6+), PHP/Laravel, dan antarmuka interaktif React.js atau Tailwind CSS.'
                      : 'Building scalable enterprise web applications with C# (.NET 6+), PHP/Laravel, and responsive interactive interfaces in React.js and Tailwind CSS.'}
                  </p>
                </motion.article>

                <motion.article
                  className={`${styles.serviceCard} ${styles.spotlightCard}`}
                  onMouseMove={handleSpotlightMove}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className={styles.serviceHeader}>
                    <span className={styles.serviceNum}>02</span>
                    <span className={styles.serviceDot} />
                  </div>
                  <h3 className={styles.serviceTitle}>
                    {language === 'id' ? 'Arsitektur Basis Data & API' : 'Database Architecture & APIs'}
                  </h3>
                  <p className={styles.serviceDesc}>
                    {language === 'id'
                      ? 'Merancang skema relasional terstruktur (SQL Server & MySQL), stored procedures, optimasi kueri T-SQL, serta integrasi endpoint RESTful API terstandarisasi.'
                      : 'Designing relational schemas (SQL Server & MySQL), stored procedures, T-SQL query optimization, and standardized RESTful API endpoints.'}
                  </p>
                </motion.article>

                <motion.article
                  className={`${styles.serviceCard} ${styles.spotlightCard}`}
                  onMouseMove={handleSpotlightMove}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.19, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className={styles.serviceHeader}>
                    <span className={styles.serviceNum}>03</span>
                    <span className={styles.serviceDot} />
                  </div>
                  <h3 className={styles.serviceTitle}>
                    {language === 'id' ? 'Aplikasi Mobile Cross-Platform' : 'Mobile App Development'}
                  </h3>
                  <p className={styles.serviceDesc}>
                    {language === 'id'
                      ? 'Mengembangkan aplikasi mobile Flutter dengan performa mulus, sinkronisasi RESTful API real-time, dan manajemen state aplikasi yang efisien.'
                      : 'Crafting fluid Flutter mobile applications with smooth native performance, real-time RESTful API synchronization, and clean state management.'}
                  </p>
                </motion.article>

                <motion.article
                  className={`${styles.serviceCard} ${styles.spotlightCard}`}
                  onMouseMove={handleSpotlightMove}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className={styles.serviceHeader}>
                    <span className={styles.serviceNum}>04</span>
                    <span className={styles.serviceDot} />
                  </div>
                  <h3 className={styles.serviceTitle}>
                    {language === 'id' ? 'Analisis Sistem & Desain UI/UX' : 'Systems Analysis & UI/UX'}
                  </h3>
                  <p className={styles.serviceDesc}>
                    {language === 'id'
                      ? 'Menyusun spesifikasi kebutuhan perangkat lunak, diagram sistem (UML, ERD, flowcharts), prototipe desain Figma, serta pengujian SIT & UAT.'
                      : 'Documenting software requirements, system modeling (UML, ERD, flowcharts), high-fidelity Figma UI/UX prototyping, and SIT/UAT validation.'}
                  </p>
                </motion.article>
              </div>
            </div>
          </motion.section>

          {/* LANGUAGES & VALUES */}
          <motion.section
            className={styles.archiveSection}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.sectionRail}>
              <span className={styles.railIndex}>07</span>
              <span className={styles.railTitle}>{text.archiveLabel}</span>
            </div>
            <div className={styles.archiveContent}>
              <p className={styles.eyebrow}>{text.archiveLabel}</p>
              <h2 className={styles.sectionHeading}>{text.archiveTitle}</h2>

              <div className={styles.archiveCard}>
                <h3 className={styles.archiveSubtitle}>{language === 'id' ? 'Penguasaan Bahasa' : 'Language Proficiency'}</h3>
                <div className={styles.languageList}>
                  <div className={styles.langItem}>
                    <strong>{language === 'id' ? 'Bahasa Indonesia' : 'Indonesian'}</strong>
                    <span>{language === 'id' ? 'Penutur Asli (Native)' : 'Native Speaker'}</span>
                  </div>
                  <div className={styles.langItem}>
                    <strong>English</strong>
                    <span>{language === 'id' ? 'Kemahiran Kerja Profesional (Skor LIA: 517)' : 'Working Proficiency (LIA Score: 517)'}</span>
                  </div>
                </div>
                <p className={styles.archiveCaption}>
                  {language === 'id'
                    ? 'Berkomitmen pada pembelajaran berkelanjutan melalui eksplorasi arsitektur enterprise, kode bersih (clean code), dan pemecahan masalah teknis nyata.'
                    : 'Committed to continuous learning through enterprise architecture exploration, clean code practices, and pragmatic technical problem solving.'}
                </p>
              </div>
            </div>
          </motion.section>

          {/* PROFESSIONAL STATEMENT */}
          <motion.section
            className={styles.testimonialSection}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.sectionRail}>
              <span className={styles.railIndex}>08</span>
              <span className={styles.railTitle}>{text.testimonialLabel}</span>
            </div>
            <div className={styles.testimonialContent}>
              <p className={styles.eyebrow}>{text.testimonialLabel}</p>
              <blockquote className={styles.quoteBlock}>
                “{language === 'id'
                  ? 'Berkomitmen menghadirkan solusi perangkat lunak yang efisien, aman, dan mudah digunakan di setiap lapisan arsitektur dan siklus pengembangan.'
                  : 'Committed to delivering software solutions that are efficient, secure, and user-friendly across every layer of architecture and development.'}”
              </blockquote>
              <div className={styles.quoteAuthor}>
                <strong>Akhmad Rizaldy</strong>
                <span>Software Developer & Systems Analyst</span>
              </div>
            </div>
          </motion.section>

          {/* CAPABILITIES */}
          <motion.section
            className={styles.capabilitySection}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.sectionRail}>
              <span className={styles.railIndex}>09</span>
              <span className={styles.railTitle}>{text.capabilitiesLabel}</span>
            </div>
            <div className={styles.capabilityContent}>
              <p className={styles.eyebrow}>{text.capabilitiesIntro}</p>
              <div className={styles.capabilityList}>
                {capabilities.map((item, index) => (
                  <motion.div
                    key={item.en}
                    className={styles.capabilityItem}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <span className={styles.capabilityNum}>0{index + 1}</span>
                    <span className={styles.capabilityName}>
                      {language === 'id' ? item.id : item.en}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* CONTACT & FOOTER */}
          <motion.footer
            id="contact"
            className={styles.contactSection}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.sectionRail}>
              <span className={styles.railIndex}>10</span>
              <span className={styles.railTitle}>{text.contactLabel}</span>
            </div>
            <div className={styles.contactContent}>
              <p className={styles.eyebrow}>{language === 'id' ? 'Punya Peluang Menarik?' : 'Have an Opportunity?'}</p>
              <h2 className={styles.contactHeading}>
                {language === 'id' ? (
                  <>
                    Mari berkolaborasi membuat solusi<br />
                    <em>yang berdampak nyata.</em>
                  </>
                ) : (
                  <>
                    Let&apos;s engineer solutions<br />
                    <em>that deliver real impact.</em>
                  </>
                )}
              </h2>
              <p className={styles.contactNote}>{text.contactIntro}</p>

              <div className={styles.contactGrid}>
                <motion.a
                  href="mailto:akhmadrizaldy74@gmail.com"
                  className={styles.contactCard}
                  onClick={(e) => {
                    copyToClipboard('akhmadrizaldy74@gmail.com', 'Email')
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.04 }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  title={language === 'id' ? 'Klik untuk salin email' : 'Click to copy email'}
                >
                  <span className={styles.contactLabel}>
                    {text.email} • <span style={{ color: '#d8a85b' }}>{language === 'id' ? 'Klik Salin' : 'Click to Copy'}</span>
                  </span>
                  <strong className={styles.contactValue}>akhmadrizaldy74@gmail.com</strong>
                  <span className={styles.contactArrow}>↗</span>
                </motion.a>

                <motion.a
                  href="https://wa.me/6287830665027"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.contactCard}
                  onClick={() => {
                    copyToClipboard('+62 878 3066 5027', 'WhatsApp')
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.08 }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  title={language === 'id' ? 'Buka WhatsApp & salin nomor' : 'Open WhatsApp & copy number'}
                >
                  <span className={styles.contactLabel}>
                    {text.whatsapp} • <span style={{ color: '#d8a85b' }}>{language === 'id' ? 'Klik Salin' : 'Click to Copy'}</span>
                  </span>
                  <strong className={styles.contactValue}>+62 878 3066 5027</strong>
                  <span className={styles.contactArrow}>↗</span>
                </motion.a>

                <motion.a
                  href="https://github.com/akhmadrizaldy74"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.contactCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.12 }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                >
                  <span className={styles.contactLabel}>{text.github}</span>
                  <strong className={styles.contactValue}>github.com/akhmadrizaldy74</strong>
                  <span className={styles.contactArrow}>↗</span>
                </motion.a>

                <motion.a
                  href="https://linkedin.com/in/akhmad-rizaldy74"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.contactCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.16 }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                >
                  <span className={styles.contactLabel}>{text.linkedin}</span>
                  <strong className={styles.contactValue}>linkedin.com/in/akhmad-rizaldy74</strong>
                  <span className={styles.contactArrow}>↗</span>
                </motion.a>

                <motion.a
                  href="/CV_Akhmad_Rizaldy.pdf"
                  download
                  className={styles.contactCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.2 }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                >
                  <span className={styles.contactLabel}>{text.cv}</span>
                  <strong className={styles.contactValue}>{text.download}</strong>
                  <span className={styles.contactArrow}>↓</span>
                </motion.a>

                <motion.div
                  className={styles.contactCardStatic}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.24 }}
                >
                  <span className={styles.contactLabel}>{text.city}</span>
                  <strong className={styles.contactValue}>
                    {language === 'id' ? 'Jakarta Timur, DKI Jakarta' : 'East Jakarta, Indonesia'}
                  </strong>
                </motion.div>
              </div>

              <div className={styles.footerBottom}>
                <span>© {new Date().getFullYear()} AKHMAD RIZALDY</span>
                <span>BUILT WITH NEXT.JS & PERFORMANCE FIRST</span>
                <a href="#top" className={styles.backToTopBtn} onClick={(e) => handleNavClick(e, 'top')}>
                  {language === 'id' ? 'Kembali ke atas ↑' : 'Back to top ↑'}
                </a>
              </div>
            </div>
          </motion.footer>

          {/* CERTIFICATE MODAL */}
          <AnimatePresence>
            {selectedCertificate && (
              <motion.div
                className={styles.modalBackdrop}
                role="presentation"
                onClick={() => setSelectedCertificate(null)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.22 }}
              >
                <motion.section
                  className={styles.certificateModal}
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="certificate-title"
                  onClick={(event) => event.stopPropagation()}
                  initial={{ opacity: 0, scale: 0.94, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.94, y: 20 }}
                  transition={{ type: 'spring', damping: 25, stiffness: 320 }}
                >
                  <button
                    type="button"
                    className={styles.modalClose}
                    onClick={() => setSelectedCertificate(null)}
                    aria-label={language === 'id' ? 'Tutup detail sertifikasi' : 'Close certificate details'}
                  >
                    ✕
                  </button>
                  <p className={styles.eyebrow}>{language === 'id' ? 'Sertifikasi & Pelatihan' : 'Certification & Training'}</p>
                  <h2 id="certificate-title" className={styles.modalTitle}>{selectedCertificate.title}</h2>
                  <p className={styles.modalMeta}>{language === 'id' ? selectedCertificate.metaId : selectedCertificate.metaEn}</p>

                  <CertificatePreview certificate={selectedCertificate} language={language} />

                  <p className={styles.certificateDescription}>{language === 'id' ? selectedCertificate.textId : selectedCertificate.textEn}</p>

                  {selectedCertificate.isBnspAssessment && (
                    <div className={styles.bnspCredentialCard}>
                      <div className={styles.bnspCardHeader}>
                        <div className={styles.bnspEmblem}>
                          <div className={styles.bnspSealIcon} aria-hidden="true">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="12" cy="8" r="6" />
                              <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                            </svg>
                          </div>
                          <div>
                            <div className={styles.bnspOrgTitle}>{selectedCertificate.organization}</div>
                            <div className={styles.bnspLicenseTitle}>
                              {language === 'id' ? 'Lisensi Badan Nasional Sertifikasi Profesi (BNSP) • BNSP-LSP-317-ID' : 'Licensed by National Professional Certification Authority (BNSP) • BNSP-LSP-317-ID'}
                            </div>
                          </div>
                        </div>
                        <div className={styles.bnspPassedBadge}>
                          <span className={styles.bnspPassedDot}>●</span>
                          <span>{language === 'id' ? 'DINYATAKAN KOMPETEN' : 'ASSESSED COMPETENT'}</span>
                        </div>
                      </div>

                      <div className={styles.bnspBody}>
                        <div className={styles.bnspSchemeBox}>
                          <span className={styles.bnspSchemeLabel}>
                            {language === 'id' ? 'SURAT KETERANGAN HASIL ASESMEN RESMI (SKHA)' : 'OFFICIAL ASSESSMENT RESULT CERTIFICATE (SKHA)'}
                          </span>
                          <h3 className={styles.bnspSchemeTitle}>
                            {language === 'id' ? selectedCertificate.schemeId : selectedCertificate.schemeEn}
                          </h3>
                          <span className={styles.bnspStandardLabel}>
                            {language === 'id' ? 'Standar Acuan: SKKNI Bidang Teknologi Informasi & Komunikasi' : 'Standard: SKKNI Information & Communication Technology'}
                          </span>
                          <div className={styles.bnspMetaGrid}>
                            <div>
                              <strong>{language === 'id' ? 'No. Dokumen:' : 'Doc No:'}</strong> {selectedCertificate.documentNumber}
                            </div>
                            <div>
                              <strong>{language === 'id' ? 'Tgl. Asesmen:' : 'Assessment Date:'}</strong> {language === 'id' ? selectedCertificate.assessmentDateId : selectedCertificate.assessmentDateEn}
                            </div>
                            <div>
                              <strong>{language === 'id' ? 'Tgl. Terbit:' : 'Issue Date:'}</strong> {language === 'id' ? selectedCertificate.issueDateId : selectedCertificate.issueDateEn}
                            </div>
                            <div>
                              <strong>{language === 'id' ? 'Ketua LSP:' : 'LSP Director:'}</strong> {selectedCertificate.assessorSignatory}
                            </div>
                          </div>
                        </div>

                        <div className={styles.bnspStatusBanner}>
                          <div className={styles.bnspStatusBannerIcon}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="12" cy="12" r="10" />
                              <polyline points="9 11 12 14 22 4" />
                              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                            </svg>
                          </div>
                          <div className={styles.bnspStatusBannerContent}>
                            <strong className={styles.bnspStatusBannerTitle}>
                              {language === 'id' ? 'Status Hasil Asesmen & Keabsahan Dokumen:' : 'Assessment Decision & Document Verification Status:'}
                            </strong>
                            <p className={styles.bnspStatusBannerText}>
                              {language === 'id' ? selectedCertificate.documentStatusId : selectedCertificate.documentStatusEn}
                            </p>
                          </div>
                        </div>

                        <div className={styles.bnspUnitsSection}>
                          <h4 className={styles.bnspUnitsHeading}>
                            {language === 'id' ? 'Unit Kompetensi Inti yang Diujikan & Terverifikasi:' : 'Core Assessed & Verified Competency Units:'}
                          </h4>
                          <ul className={styles.bnspUnitsList}>
                            {(language === 'id' ? selectedCertificate.competencyUnitsId : selectedCertificate.competencyUnitsEn).map((unit, uIdx) => (
                              <li key={uIdx} className={styles.bnspUnitItem}>
                                <span className={styles.bnspUnitCheck}>✓</span>
                                <span>{unit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className={styles.bnspFooterNotice}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                        </svg>
                        <span>
                          {language === 'id'
                            ? 'Dokumen resmi terverifikasi dengan QR Code keaslian LSP Informatika. Digunakan sebagai bukti sah pemenuhan kualifikasi kompetensi kerja nasional Analis Sistem sambil menunggu distribusi blangko cetak fisik sertifikat garuda dari BNSP.'
                            : 'Official document verified with LSP Informatika QR authentication code. Serves as official legal proof of national Systems Analyst occupational qualification while awaiting the physical Garuda certificate issuance by BNSP.'}
                        </span>
                      </div>
                    </div>
                  )}

                  {selectedCertificate.pdfPath ? (
                    <a className={styles.certificatePdfLink} href={selectedCertificate.pdfPath} target="_blank" rel="noreferrer">
                      <span>{language === 'id' ? 'Buka Dokumen PDF Asli (SKHA)' : 'Open Original PDF Document (SKHA)'}</span>
                      <span>↗</span>
                    </a>
                  ) : (
                    <p className={styles.pdfNote}>
                      {language === 'id'
                        ? 'Dokumen sertifikasi terdaftar dan diverifikasi secara resmi. Berkas PDF asli akan dihubungkan setelah file diunggah.'
                        : 'Certification is officially registered and verified. The original PDF document will be linked once the digital file is uploaded.'}
                    </p>
                  )}
                </motion.section>
              </motion.div>
            )}
          </AnimatePresence>

          {/* FLOATING COPY TOAST NOTIFICATION */}
          <AnimatePresence>
            {toastMessage && (
              <motion.div
                className={styles.floatingToast}
                initial={{ opacity: 0, y: 24, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 360, damping: 24 }}
              >
                <span className={styles.toastIcon}>✓</span>
                <span>{toastMessage}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </>
  )
}

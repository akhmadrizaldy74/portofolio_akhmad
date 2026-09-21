import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import styles from '@/styles/Home.module.css'

const projects = [
  {
    number: '01',
    titleId: 'Sistem Informasi Manajemen dan Monitoring APAR',
    titleEn: 'Fire Extinguisher Management and Monitoring System',
    typeId: 'SISTEM WEB OPERASIONAL',
    typeEn: 'OPERATIONAL WEB SYSTEM',
    categoryId: 'Sistem operasional / PD Anugrah Utama',
    categoryEn: 'Operational web system / PD Anugrah Utama',
    descriptionId: 'Mendigitalisasi dan menyederhanakan pelacakan kelayakan Alat Pemadam Api Ringan yang sebelumnya kurang terstruktur.',
    descriptionEn: 'Digitized and simplified fire extinguisher compliance tracking that was previously difficult to organize.',
    role: 'Full-Stack Developer',
    problemId: 'Menghasilkan antarmuka web yang bersih, responsif, dan intuitif sehingga administrator dapat mengelola serta memonitor data operasional secara real-time.',
    problemEn: 'Delivered a clean, responsive, and intuitive interface for administrators to manage and monitor operational data in real time.',
    image: '/images/Karya pilihan/Sistem operasional.png',
    stackList: ['Laravel', 'PHP', 'Tailwind CSS', 'MySQL'],
    demo: '#',
    repo: 'https://github.com/akhmadrizaldy74',
  },
  {
    number: '02',
    titleId: 'MOBENG – On-Demand Car Service & Maintenance Mobile App',
    titleEn: 'MOBENG – On-Demand Car Service & Maintenance Mobile App',
    typeId: 'DESAIN UI/UX & APLIKASI MOBILE',
    typeEn: 'UI/UX DESIGN & MOBILE APP',
    categoryId: 'UI/UX Design / Mobile App Design',
    categoryEn: 'UI/UX Design / Mobile App Design',
    descriptionId: 'Merancang antarmuka (UI) dan alur pengguna (UX) end-to-end untuk aplikasi pemesanan servis berkala dan ganti oli mobil on-demand, mulai dari alur reservasi, pemilihan paket servis, hingga pelacakan teknisi secara real-time.',
    descriptionEn: 'Designed an end-to-end user interface (UI) and user experience (UX) for an on-demand car maintenance and periodic service app, covering reservation flows, service package selection, and real-time technician tracking.',
    role: 'UI/UX Designer',
    problemId: 'Menghadirkan alur pemesanan multi-step yang intuitif, transparansi estimasi biaya paket servis, pelacakan teknisi real-time, serta design system terstruktur dengan komponen reusable di Figma.',
    problemEn: 'Delivered an intuitive multi-step booking flow, transparent service package cost estimation, real-time technician tracking, and a structured Figma design system with reusable components.',
    highlightsId: [
      'Onboarding & Multi-step Service Booking Flow',
      'Paket Servis & Estimasi Biaya Transparan',
      'Real-time Technician Tracking System',
      'Design System terstruktur & Komponen Reusable di Figma',
    ],
    highlightsEn: [
      'Onboarding & Multi-step Service Booking Flow',
      'Transparent Service Packages & Cost Estimation',
      'Real-time Technician Tracking System',
      'Structured Design System & Reusable Figma Components',
    ],
    image: '/images/projects/mobeng-mockup.png',
    stackList: ['Figma', 'UI/UX', 'Mobile Design', 'Prototyping', 'Wireframing'],
    figma: 'https://www.figma.com/',
    demo: '#',
  },
]

const skillCategories = [
  {
    categoryKey: 'web',
    titleId: 'Pengembangan Web',
    titleEn: 'Web Development',
    skills: ['Laravel', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript', 'React.js'],
  },
  {
    categoryKey: 'backend',
    titleId: 'Back-End & Basis Data',
    titleEn: 'Back-End & Database',
    skills: ['Python', 'PHP', 'MySQL', 'RESTful API'],
  },
  {
    categoryKey: 'mobile',
    titleId: 'Aplikasi Mobile',
    titleEn: 'Mobile Applications',
    skills: ['Flutter', 'Dart'],
  },
  {
    categoryKey: 'tools',
    titleId: 'Perangkat & Desain',
    titleEn: 'Tools & Design',
    skills: ['Git', 'VS Code', 'Figma', 'Canva'],
  },
]

const capabilities = ['Web & mobile development', 'Data management systems', 'UI/UX design', 'Responsive experiences']

const timeline = [
  {
    typeId: 'Pengalaman',
    typeEn: 'Experience',
    title: 'PT Indotech Energi Persada',
    metaId: 'Software Developer Intern • 2025',
    metaEn: 'Software Developer Intern • 2025',
    textId: 'Mengembangkan aplikasi operasional full-stack dengan HTML, CSS, JavaScript, React.js, dan MySQL. Membangun autentikasi aman serta modul manajemen data berbasis web.',
    textEn: 'Developed a full-stack operational application with HTML, CSS, JavaScript, React.js, and MySQL. Built secure authentication and web-based data management modules.',
  },
  {
    typeId: 'Pengalaman',
    typeEn: 'Experience',
    title: 'PT Indotech Energi Persada',
    metaId: 'Mobile Application Development Intern • 2025',
    metaEn: 'Mobile Application Development Intern • 2025',
    textId: 'Mengembangkan aplikasi Flutter untuk pencatatan dan pengelolaan tugas, termasuk integrasi RESTful API untuk sinkronisasi data real-time.',
    textEn: 'Developed a Flutter mobile application for task recording and management, including RESTful API integration for real-time data synchronization.',
  },
  {
    typeId: 'Pendidikan',
    typeEn: 'Education',
    title: 'Universitas Pancasila',
    metaId: 'Sarjana Teknik Informatika • 2022 - 2026',
    metaEn: 'Bachelor of Informatics Engineering • 2022 - 2026',
    textId: 'IPK 3.64/4.00. Anggota aktif Divisi 1, IMATIKA FT-KMUP.',
    textEn: 'GPA 3.64/4.00. Active Board Member, Division 1, IMATIKA FT-KMUP.',
  },
  {
    typeId: 'Pendidikan',
    typeEn: 'Education',
    title: 'SMAIT Al-Madinah',
    metaId: 'Ilmu Pengetahuan Sosial • 2019 - 2022',
    metaEn: 'Social Sciences (IPS) Track • 2019 - 2022',
    textId: 'Menyelesaikan pendidikan menengah dengan fokus Ilmu Pengetahuan Sosial.',
    textEn: 'Completed secondary education with a focus in Social Sciences.',
  },
  {
    typeId: 'Sertifikasi dan Pelatihan',
    typeEn: 'Certification and Training',
    title: 'Professional Soft Skills & Self-Development Training',
    metaId: 'VINIX7 • September 2025',
    metaEn: 'VINIX7 • September 2025',
    textId: 'Pelatihan intensif tentang kecerdasan emosional, personal branding, manajemen proyek, pemecahan masalah, dan manajemen waktu untuk kesiapan akademik serta karier.',
    textEn: 'Intensive training in emotional intelligence, personal branding, project management, problem solving, and time management for academic and career readiness.',
    pdfPath: '/Seritf/14_Softskill_Emotional_Intelligence.pdf',
    pdfName: '14_Softskill_Emotional_Intelligence.pdf',
  },
  {
    typeId: 'Sertifikasi dan Pelatihan',
    typeEn: 'Certification and Training',
    title: 'Independent Internship / Web Developer',
    metaId: 'PT Vinix Seven Aurum • September 2025',
    metaEn: 'PT Vinix Seven Aurum • September 2025',
    textId: 'Program magang independen dengan fokus pada pengembangan web dan pemrograman praktis.',
    textEn: 'Independent internship program focused on practical web development and programming.',
    pdfPath: '/Seritf/17_Magang_MSIB_PT_Vinix_Seven_Aurum.pdf',
    pdfName: '17_Magang_MSIB_PT_Vinix_Seven_Aurum.pdf',
  },
  {
    typeId: 'Sertifikasi dan Pelatihan',
    typeEn: 'Certification and Training',
    title: 'Industrial Internship / Software Developer',
    metaId: 'PT Indotech Energi Persada • Maret 2025',
    metaEn: 'PT Indotech Energi Persada • March 2025',
    textId: 'Pengalaman magang industri mengembangkan aplikasi web melalui tugas pemrograman, desain sistem, dan kolaborasi tim.',
    textEn: 'Industrial internship experience developing web applications through programming tasks, system design, and team collaboration.',
    pdfPath: '/Seritf/18_Magang_PT_INDOTECH_ENERGI_PERSADA.pdf',
    pdfName: '18_Magang_PT_INDOTECH_ENERGI_PERSADA.pdf',
  },
  {
    typeId: 'Sertifikasi dan Pelatihan',
    typeEn: 'Certification and Training',
    title: 'Tecno IT Event Participant',
    metaId: 'IMATIKA FT-KMUP • Maret 2023',
    metaEn: 'IMATIKA FT-KMUP • March 2023',
    textId: 'Peserta acara kampus Tecno IT yang membahas teknologi, sistem informasi, dan diskusi akademik.',
    textEn: 'Participant in the Tecno IT campus event covering technology, information systems, and academic discussion.',
    pdfPath: '/Seritf/02_TECHNO_IT_Berpikir_Digital.pdf',
    pdfName: '02_TECHNO_IT_Berpikir_Digital.pdf',
  },
  {
    typeId: 'Sertifikasi dan Pelatihan',
    typeEn: 'Certification and Training',
    title: 'Data Visualization Storytelling Competition / Participant',
    metaId: 'Kementerian Keuangan RI • November 2023',
    metaEn: 'Ministry of Finance of RI • November 2023',
    textId: 'Peserta 12th AIFED Visual Data Storytelling Competition 2023 dengan fokus pada pengolahan data, pemikiran analitis, dan komunikasi visual.',
    textEn: 'Participant in the 12th AIFED Visual Data Storytelling Competition 2023, focused on data processing, analytical thinking, and visual communication.',
    pdfPath: '/Seritf/12th%20AIFED%20Visual%20Data%20Storytelling%20Competition%202023%20-%20Akhmad%20Rizaldy.pdf',
    pdfName: '12th AIFED Visual Data Storytelling Competition 2023 - Akhmad Rizaldy.pdf',
  },
]

const timelineGroups = [
  { key: 'experience', labelId: 'Pengalaman Kerja', labelEn: 'Work Experience', types: ['Pengalaman', 'Experience'] },
  { key: 'education', labelId: 'Pendidikan', labelEn: 'Education', types: ['Pendidikan', 'Education'] },
  { key: 'certificate', labelId: 'Sertifikasi & Pelatihan', labelEn: 'Certification & Training', types: ['Sertifikasi dan Pelatihan', 'Certification and Training'] },
]

const copy = {
  id: {
    about: 'Tentang',
    work: 'Karya',
    background: 'Latar Belakang',
    contact: 'Kontak',
    available: 'Terbuka untuk pekerjaan terpilih',
    location: 'Jakarta Timur, Indonesia',
    role: 'Web & Mobile Developer • UI/UX Designer',
    heroLead: 'Software Developer dan lulusan Teknik Informatika Universitas Pancasila yang berfokus pada pengembangan web/mobile, sistem manajemen data, dan desain UI/UX.',
    explore: 'Lihat karya',
    profile: 'Profil & Filosofi',
    practical: 'Kreatif yang Praktis',
    aboutTitle: 'Membangun dengan presisi dan sudut pandang.',
    workLabel: 'Karya Pilihan',
    workIntro: 'Arsip proyek pilihan terbaru',
    workTitle: 'Karya digital, dibuat berguna.',
    backgroundLabel: 'Pengalaman, Pendidikan & Sertifikasi',
    backgroundTitle: 'Perjalanan yang terus berkembang.',
    skillsLabel: 'Teknologi & Perangkat',
    skillsIntro: 'Keahlian teknis untuk mewujudkan ide menjadi produk nyata',
    servicesLabel: 'Layanan & Solusi',
    servicesIntro: 'Bagaimana saya dapat memberikan dampak',
    archiveLabel: 'Informasi Tambahan',
    archiveTitle: 'Selalu belajar, selalu berkembang.',
    testimonialLabel: 'Pernyataan Profesional',
    capabilitiesLabel: 'Kemampuan',
    capabilitiesIntro: 'Kompetensi utama',
    contactLabel: 'Mari Bekerja Sama',
    contactIntro: 'Terbuka untuk kesempatan kerja full-time, freelance, dan kolaborasi digital.',
    email: 'Email',
    whatsapp: 'WhatsApp',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    cv: 'Curriculum Vitae',
    city: 'Domisili',
    download: 'Unduh CV',
    liveDemo: 'Demo Langsung',
    repository: 'Repositori',
    figmaPrototype: 'Figma Prototype',
    highlightsLabel: 'Fitur Utama',
    roleLabel: 'Peran',
    outcome: 'Solusi & Dampak',
  },
  en: {
    about: 'About',
    work: 'Work',
    background: 'Background',
    contact: 'Contact',
    available: 'Available for select work',
    location: 'East Jakarta, Indonesia',
    role: 'Web & Mobile Developer • UI/UX Designer',
    heroLead: 'Software Developer and Informatics Engineering graduate of Universitas Pancasila focused on web/mobile development, data management systems, and UI/UX design.',
    explore: 'Explore work',
    profile: 'Profile & Philosophy',
    practical: 'A Practical Creative',
    aboutTitle: 'Building with precision and a point of view.',
    workLabel: 'Selected Work',
    workIntro: 'A curated archive of recent work',
    workTitle: 'Digital work, made useful.',
    backgroundLabel: 'Experience, Education & Certifications',
    backgroundTitle: 'A journey in continuous growth.',
    skillsLabel: 'Tech Stack & Tools',
    skillsIntro: 'Technical capabilities used to build scalable systems',
    servicesLabel: 'Services & Solutions',
    servicesIntro: 'Ways I can contribute value',
    archiveLabel: 'Additional Information',
    archiveTitle: 'Always learning, always improving.',
    testimonialLabel: 'Professional Statement',
    capabilitiesLabel: 'Capabilities',
    capabilitiesIntro: 'Core competencies',
    contactLabel: 'Let’s Collaborate',
    contactIntro: 'Open to full-time opportunities, freelance projects, and digital collaborations.',
    email: 'Email',
    whatsapp: 'WhatsApp',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    cv: 'Curriculum Vitae',
    city: 'Location',
    download: 'Download CV',
    liveDemo: 'Live Demo',
    repository: 'Repository',
    figmaPrototype: 'Figma Prototype',
    highlightsLabel: 'Key Highlights',
    roleLabel: 'Role',
    outcome: 'Solution & Impact',
  },
}

function CertificatePreview({ certificate, language }) {
  const canvasRef = useRef(null)
  const [status, setStatus] = useState('loading')

  useEffect(() => {
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
  }, [certificate.pdfPath])

  return (
    <div className={styles.certificatePreview}>
      <canvas ref={canvasRef} className={styles.certificateCanvas} aria-label={`${certificate.title} certificate preview`} />
      {status === 'loading' && <span className={styles.certificatePreviewStatus}>{language === 'id' ? 'Menyiapkan sertifikat…' : 'Preparing certificate…'}</span>}
      {status === 'error' && <span className={styles.certificatePreviewStatus}>{language === 'id' ? 'Pratinjau tidak dapat dimuat.' : 'Preview could not be loaded.'}</span>}
    </div>
  )
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [language, setLanguage] = useState('id')
  const [selectedCertificate, setSelectedCertificate] = useState(null)
  const text = copy[language]

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <Head>
        <title>Akhmad Rizaldy | Web & Mobile Developer | Portfolio</title>
        <meta name="description" content="Akhmad Rizaldy is a Web & Mobile Developer and UI/UX Designer creating high performance digital experiences." />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </Head>

      <main className={styles.page}>
        <div className={styles.container}>
          {/* TOPBAR */}
          <header className={styles.topbar}>
            <a href="#top" className={styles.wordmark}>
              AR<span className={styles.wordmarkYear}>/26</span>
            </a>

            <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`} aria-label="Main navigation" id="main-navigation">
              <a href="#about" className={styles.navItem} onClick={closeMenu}>{text.about}</a>
              <a href="#work" className={styles.navItem} onClick={closeMenu}>{text.work}</a>
              <a href="#background" className={styles.navItem} onClick={closeMenu}>{text.background}</a>
              <a href="#contact" className={styles.navItem} onClick={closeMenu}>{text.contact}</a>
            </nav>

            <div className={styles.topbarRight}>
              <div className={styles.languageSwitch} aria-label="Language selector">
                <button type="button" className={language === 'id' ? styles.languageActive : ''} onClick={() => setLanguage('id')}>ID</button>
                <span className={styles.langDivider}>/</span>
                <button type="button" className={language === 'en' ? styles.languageActive : ''} onClick={() => setLanguage('en')}>EN</button>
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
            <div className={styles.heroHeader}>
              <span className={styles.heroTagNumber}>01 // 11</span>
              <div className={styles.availabilityBadge}>
                <span className={styles.pulseDot} />
                <span>{text.available}</span>
              </div>
            </div>

            <div className={styles.heroMain}>
              <div className={styles.heroCopy}>
                <div className={styles.roleBadge}>{text.role}</div>
                <h1 className={styles.heroTitle}>
                  Akhmad<br />
                  <span className={styles.heroTitleAccent}>Rizaldy</span>
                </h1>
                <p className={styles.heroLead}>{text.heroLead}</p>

                <div className={styles.heroActions}>
                  <a href="/CV_Akhmad_Rizaldy.pdf" className={styles.primaryButton} download>
                    <span>{text.download}</span>
                    <span className={styles.btnIcon}>↓</span>
                  </a>
                  <div className={styles.heroActionsRow}>
                    <a href="https://github.com/akhmadrizaldy74" className={styles.secondaryButton} target="_blank" rel="noreferrer">
                      <span>{language === 'id' ? 'Lihat GitHub' : 'View GitHub'}</span>
                      <span className={styles.btnIcon}>↗</span>
                    </a>
                    <a href="#contact" className={`${styles.secondaryButton} ${styles.contactBtn}`}>
                      <span>{text.contact}</span>
                      <span className={styles.btnIcon}>↘</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className={styles.heroPortraitWrapper}>
                <div className={styles.heroPortrait}>
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
                </div>
              </div>
            </div>

            <div className={styles.heroFooter}>
              <span>{text.explore}</span>
              <span className={styles.scrollLine} />
              <span>2026 EDITION</span>
            </div>
          </section>

          {/* ABOUT */}
          <section id="about" className={styles.aboutSection}>
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
                    ? 'Halo, saya Akhmad Rizaldy, Web & Mobile Developer serta UI/UX Designer lulusan Teknik Informatika Universitas Pancasila yang berdomisili di Jakarta Timur, DKI Jakarta.'
                    : 'Hi, I’m Akhmad Rizaldy, a Web & Mobile Developer and UI/UX Designer with a degree in Informatics Engineering from Universitas Pancasila, based in Jakarta Timur, DKI Jakarta.'}
                </p>
                <p>
                  {language === 'id'
                    ? 'Menguasai Laravel, Python, React.js, Tailwind CSS, Flutter, PHP, MySQL, dan integrasi RESTful API. Saya berfokus pada solusi yang efisien, aman, dan mudah digunakan.'
                    : 'Skilled in Laravel, Python, React.js, Tailwind CSS, Flutter, PHP, MySQL, and RESTful API integration. I focus on solutions that are efficient, secure, and user-friendly.'}
                </p>
              </div>

              <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                  <strong className={styles.statNumber}>04</strong>
                  <span className={styles.statText}>
                    {language === 'id' ? 'Tahun Belajar & Berkarya' : 'Years Learning & Building'}
                  </span>
                </div>
                <div className={styles.statCard}>
                  <strong className={styles.statNumber}>∞</strong>
                  <span className={styles.statText}>
                    {language === 'id' ? 'Rasa Ingin Tahu Tumbuh' : 'Endless Curiosity'}
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* SELECTED WORK */}
          <section id="work" className={styles.projectSection}>
            <div className={styles.sectionRail}>
              <span className={styles.railIndex}>03</span>
              <span className={styles.railTitle}>{text.workLabel}</span>
            </div>
            <div className={styles.projectIntro}>
              <p className={styles.eyebrow}>{text.workIntro}</p>
              <h2 className={styles.sectionHeading}>{text.workTitle}</h2>

              <div className={styles.projectList}>
                {projects.map((project) => (
                  <article key={project.titleId} className={styles.projectCard}>
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
                        <span className={styles.projectCategory}>
                          {language === 'id' ? project.categoryId : project.categoryEn}
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
                          <span className={styles.metaLabel}>{text.outcome}</span>
                          <p className={styles.metaValue}>
                            {language === 'id' ? project.problemId : project.problemEn}
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
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* BACKGROUND / TIMELINE */}
          <section id="background" className={styles.backgroundSection}>
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
                        .map((item) => {
                          const isCertificate = group.key === 'certificate'

                          return (
                            <article
                              key={`${item.title}-${item.metaEn}`}
                              className={`${styles.timelineCard} ${isCertificate ? styles.timelineCardInteractive : ''}`}
                              onClick={isCertificate ? () => setSelectedCertificate(item) : undefined}
                              onKeyDown={isCertificate ? (event) => { if (event.key === 'Enter' || event.key === ' ') setSelectedCertificate(item) } : undefined}
                              tabIndex={isCertificate ? 0 : undefined}
                              role={isCertificate ? 'button' : undefined}
                            >
                              <div className={styles.timelineCardTop}>
                                <h4 className={styles.itemTitle}>{item.title}</h4>
                                <span className={styles.itemMetaBadge}>
                                  {language === 'id' ? item.metaId : item.metaEn}
                                </span>
                              </div>
                              <p className={styles.itemDescription}>
                                {language === 'id' ? item.textId : item.textEn}
                              </p>
                              {isCertificate && (
                                <div className={styles.certificateCallout}>
                                  <span>{language === 'id' ? 'Lihat Pratinjau Sertifikat' : 'View Certificate Preview'}</span>
                                  <span>↗</span>
                                </div>
                              )}
                            </article>
                          )
                        })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* TECH STACK & TOOLS (PILL CHIPS) */}
          <section className={styles.skillsSection}>
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
                      {category.skills.map((skill) => (
                        <span key={skill} className={styles.techChip}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SERVICES */}
          <section className={styles.servicesSection}>
            <div className={styles.sectionRail}>
              <span className={styles.railIndex}>06</span>
              <span className={styles.railTitle}>{text.servicesLabel}</span>
            </div>
            <div className={styles.servicesContent}>
              <p className={styles.eyebrow}>{text.servicesIntro}</p>

              <div className={styles.serviceCardsGrid}>
                <article className={styles.serviceCard}>
                  <div className={styles.serviceHeader}>
                    <span className={styles.serviceNum}>01</span>
                    <span className={styles.serviceDot} />
                  </div>
                  <h3 className={styles.serviceTitle}>Web Development</h3>
                  <p className={styles.serviceDesc}>
                    {language === 'id'
                      ? 'Mengembangkan aplikasi web responsif, sistem informasi perusahaan, dan dashboard operasional dengan kinerja optimal.'
                      : 'Developing high-performance responsive web apps, business information systems, and operational dashboards.'}
                  </p>
                </article>

                <article className={styles.serviceCard}>
                  <div className={styles.serviceHeader}>
                    <span className={styles.serviceNum}>02</span>
                    <span className={styles.serviceDot} />
                  </div>
                  <h3 className={styles.serviceTitle}>Data Management</h3>
                  <p className={styles.serviceDesc}>
                    {language === 'id'
                      ? 'Membangun arsitektur basis data, integrasi RESTful API aman, dan alur manajemen data terstruktur.'
                      : 'Designing robust database architectures, secure RESTful API integrations, and structured data flows.'}
                  </p>
                </article>

                <article className={styles.serviceCard}>
                  <div className={styles.serviceHeader}>
                    <span className={styles.serviceNum}>03</span>
                    <span className={styles.serviceDot} />
                  </div>
                  <h3 className={styles.serviceTitle}>Mobile Applications</h3>
                  <p className={styles.serviceDesc}>
                    {language === 'id'
                      ? 'Membangun aplikasi mobile Flutter yang mulus, responsif terhadap sentuhan, dan terintegrasi real-time.'
                      : 'Crafting fluid Flutter mobile applications with seamless touch interactions and real-time synchronization.'}
                  </p>
                </article>
              </div>
            </div>
          </section>

          {/* LANGUAGES & VALUES */}
          <section className={styles.archiveSection}>
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
                    <span>{language === 'id' ? 'Kemampuan Kerja Terbatas (Working)' : 'Working Proficiency'}</span>
                  </div>
                </div>
                <p className={styles.archiveCaption}>
                  {language === 'id'
                    ? 'Terus memperluas wawasan melalui eksplorasi teknologi baru, praktik arsitektur kode bersih, dan pemecahan masalah nyata.'
                    : 'Continuously expanding perspective through new tech exploration, clean code architecture, and practical problem solving.'}
                </p>
              </div>
            </div>
          </section>

          {/* PROFESSIONAL STATEMENT */}
          <section className={styles.testimonialSection}>
            <div className={styles.sectionRail}>
              <span className={styles.railIndex}>08</span>
              <span className={styles.railTitle}>{text.testimonialLabel}</span>
            </div>
            <div className={styles.testimonialContent}>
              <p className={styles.eyebrow}>{text.testimonialLabel}</p>
              <blockquote className={styles.quoteBlock}>
                “{language === 'id'
                  ? 'Berkomitmen menghadirkan solusi software yang efisien, aman, dan mudah digunakan di setiap lini pengembangan.'
                  : 'Committed to delivering software solutions that are efficient, secure, and user-friendly across every layer of development.'}”
              </blockquote>
              <div className={styles.quoteAuthor}>
                <strong>Akhmad Rizaldy</strong>
                <span>Software Developer</span>
              </div>
            </div>
          </section>

          {/* CAPABILITIES */}
          <section className={styles.capabilitySection}>
            <div className={styles.sectionRail}>
              <span className={styles.railIndex}>09</span>
              <span className={styles.railTitle}>{text.capabilitiesLabel}</span>
            </div>
            <div className={styles.capabilityContent}>
              <p className={styles.eyebrow}>{text.capabilitiesIntro}</p>
              <div className={styles.capabilityList}>
                {capabilities.map((capability, index) => (
                  <div key={capability} className={styles.capabilityItem}>
                    <span className={styles.capabilityNum}>0{index + 1}</span>
                    <span className={styles.capabilityName}>
                      {language === 'id'
                        ? ['Pengembangan Web & Mobile', 'Sistem Manajemen Data', 'Desain UI/UX & Interaksi', 'Pengalaman Responsif & Presisi'][index]
                        : capability}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CONTACT & FOOTER */}
          <footer id="contact" className={styles.contactSection}>
            <div className={styles.sectionRail}>
              <span className={styles.railIndex}>10</span>
              <span className={styles.railTitle}>{text.contactLabel}</span>
            </div>
            <div className={styles.contactContent}>
              <p className={styles.eyebrow}>{language === 'id' ? 'Punya Peluang Menarik?' : 'Have an Opportunity?'}</p>
              <h2 className={styles.contactHeading}>
                {language === 'id' ? (
                  <>
                    Mari membuat karya yang<br />
                    <em>layak dibanggakan.</em>
                  </>
                ) : (
                  <>
                    Let&apos;s build something<br />
                    <em>worth remembering.</em>
                  </>
                )}
              </h2>
              <p className={styles.contactNote}>{text.contactIntro}</p>

              <div className={styles.contactGrid}>
                <a href="mailto:akhmadrizaldy74@gmail.com" className={styles.contactCard}>
                  <span className={styles.contactLabel}>{text.email}</span>
                  <strong className={styles.contactValue}>akhmadrizaldy74@gmail.com</strong>
                  <span className={styles.contactArrow}>↗</span>
                </a>

                <a href="https://wa.me/6287830665027" target="_blank" rel="noreferrer" className={styles.contactCard}>
                  <span className={styles.contactLabel}>{text.whatsapp}</span>
                  <strong className={styles.contactValue}>+62 878 3066 5027</strong>
                  <span className={styles.contactArrow}>↗</span>
                </a>

                <a href="https://github.com/akhmadrizaldy74" target="_blank" rel="noreferrer" className={styles.contactCard}>
                  <span className={styles.contactLabel}>{text.github}</span>
                  <strong className={styles.contactValue}>github.com/akhmadrizaldy74</strong>
                  <span className={styles.contactArrow}>↗</span>
                </a>

                <a href="https://linkedin.com/in/akhmad-rizaldy74/" target="_blank" rel="noreferrer" className={styles.contactCard}>
                  <span className={styles.contactLabel}>{text.linkedin}</span>
                  <strong className={styles.contactValue}>linkedin.com/in/akhmad-rizaldy74</strong>
                  <span className={styles.contactArrow}>↗</span>
                </a>

                <a href="/CV_Akhmad_Rizaldy.pdf" download className={styles.contactCard}>
                  <span className={styles.contactLabel}>{text.cv}</span>
                  <strong className={styles.contactValue}>{text.download} (PDF)</strong>
                  <span className={styles.contactArrow}>↓</span>
                </a>

                <div className={styles.contactCardStatic}>
                  <span className={styles.contactLabel}>{text.city}</span>
                  <strong className={styles.contactValue}>
                    {language === 'id' ? 'Jakarta Timur, DKI Jakarta' : 'East Jakarta, Indonesia'}
                  </strong>
                </div>
              </div>

              <div className={styles.footerBottom}>
                <span>© {new Date().getFullYear()} AKHMAD RIZALDY</span>
                <span>BUILT WITH NEXT.JS & PASSION</span>
                <a href="#top" className={styles.backToTopBtn}>
                  {language === 'id' ? 'Kembali ke atas ↑' : 'Back to top ↑'}
                </a>
              </div>
            </div>
          </footer>

          {/* CERTIFICATE MODAL */}
          {selectedCertificate && (
            <div className={styles.modalBackdrop} role="presentation" onClick={() => setSelectedCertificate(null)}>
              <section
                className={styles.certificateModal}
                role="dialog"
                aria-modal="true"
                aria-labelledby="certificate-title"
                onClick={(event) => event.stopPropagation()}
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
                
                {selectedCertificate.pdfPath ? (
                  <a className={styles.certificatePdfLink} href={selectedCertificate.pdfPath} target="_blank" rel="noreferrer">
                    <span>{language === 'id' ? 'Buka Dokumen PDF Asli' : 'Open Original PDF Document'}</span>
                    <span>↗</span>
                  </a>
                ) : (
                  <p className={styles.pdfNote}>{language === 'id' ? 'PDF asli akan dihubungkan setelah file tersedia.' : 'The original PDF will be linked once the file is available.'}</p>
                )}
              </section>
            </div>
          )}
        </div>
      </main>
    </>
  )
}

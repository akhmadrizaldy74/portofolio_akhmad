import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import styles from '@/styles/Home.module.css'

const projects = [
  { number: '01', titleId: 'Sistem Informasi Manajemen dan Monitoring APAR', titleEn: 'Fire Extinguisher Management and Monitoring System', categoryId: 'Sistem operasional / PD Anugrah Utama', categoryEn: 'Operational web system / PD Anugrah Utama', descriptionId: 'Mendigitalisasi dan menyederhanakan pelacakan kelayakan Alat Pemadam Api Ringan yang sebelumnya kurang terstruktur.', descriptionEn: 'Digitized and simplified fire extinguisher compliance tracking that was previously difficult to organize.', role: 'Full-Stack Developer', problemId: 'Menghasilkan antarmuka web yang bersih, responsif, dan intuitif sehingga administrator dapat mengelola serta memonitor data operasional secara real-time.', problemEn: 'Delivered a clean, responsive, and intuitive interface for administrators to manage and monitor operational data in real time.', image: '/images/Karya pilihan/Sistem operasional.png', stack: 'Laravel / PHP / Tailwind CSS', demo: '#', repo: 'https://github.com/akhmadrizaldy74' },
]

const capabilities = ['Web & mobile development', 'Data management systems', 'UI/UX design', 'Responsive experiences']
const timeline = [
  { typeId: 'Pengalaman', typeEn: 'Experience', title: 'PT Indotech Energi Persada', metaId: 'Software Developer Intern / 2025', metaEn: 'Software Developer Intern / 2025', textId: 'Mengembangkan aplikasi operasional full-stack dengan HTML, CSS, JavaScript, React.js, dan MySQL. Membangun autentikasi aman serta modul manajemen data berbasis web.', textEn: 'Developed a full-stack operational application with HTML, CSS, JavaScript, React.js, and MySQL. Built secure authentication and web-based data management modules.' },
  { typeId: 'Pengalaman', typeEn: 'Experience', title: 'PT Indotech Energi Persada', metaId: 'Mobile Application Development Intern / 2025', metaEn: 'Mobile Application Development Intern / 2025', textId: 'Mengembangkan aplikasi Flutter untuk pencatatan dan pengelolaan tugas, termasuk integrasi RESTful API untuk sinkronisasi data real-time.', textEn: 'Developed a Flutter mobile application for task recording and management, including RESTful API integration for real-time data synchronization.' },
  { typeId: 'Pendidikan', typeEn: 'Education', title: 'Universitas Pancasila', metaId: 'Sarjana Teknik Informatika / 2022 - 2026', metaEn: 'Bachelor of Informatics Engineering / 2022 - 2026', textId: 'IPK 3.64/4.00. Anggota aktif Divisi 1, IMATIKA FT-KMUP.', textEn: 'GPA 3.64/4.00. Active Board Member, Division 1, IMATIKA FT-KMUP.' },
  { typeId: 'Pendidikan', typeEn: 'Education', title: 'SMAIT Al-Madinah', metaId: 'Ilmu Pengetahuan Sosial / 2019 - 2022', metaEn: 'Social Sciences (IPS) Track / 2019 - 2022', textId: 'Menyelesaikan pendidikan menengah dengan fokus Ilmu Pengetahuan Sosial.', textEn: 'Completed secondary education with a focus in Social Sciences.' },
  { typeId: 'Sertifikasi dan Pelatihan', typeEn: 'Certification and Training', title: 'Professional Soft Skills & Self-Development Training', metaId: 'VINIX7 / September 2025', metaEn: 'VINIX7 / September 2025', textId: 'Pelatihan intensif tentang kecerdasan emosional, personal branding, manajemen proyek, pemecahan masalah, dan manajemen waktu untuk kesiapan akademik serta karier.', textEn: 'Intensive training in emotional intelligence, personal branding, project management, problem solving, and time management for academic and career readiness.', pdfPath: '/Seritf/14_Softskill_Emotional_Intelligence.pdf', pdfName: '14_Softskill_Emotional_Intelligence.pdf' },
  { typeId: 'Sertifikasi dan Pelatihan', typeEn: 'Certification and Training', title: 'Independent Internship / Web Developer', metaId: 'PT Vinix Seven Aurum / September 2025', metaEn: 'PT Vinix Seven Aurum / September 2025', textId: 'Program magang independen dengan fokus pada pengembangan web dan pemrograman praktis.', textEn: 'Independent internship program focused on practical web development and programming.', pdfPath: '/Seritf/17_Magang_MSIB_PT_Vinix_Seven_Aurum.pdf', pdfName: '17_Magang_MSIB_PT_Vinix_Seven_Aurum.pdf' },
  { typeId: 'Sertifikasi dan Pelatihan', typeEn: 'Certification and Training', title: 'Industrial Internship / Software Developer', metaId: 'PT Indotech Energi Persada / Maret 2025', metaEn: 'PT Indotech Energi Persada / March 2025', textId: 'Pengalaman magang industri mengembangkan aplikasi web melalui tugas pemrograman, desain sistem, dan kolaborasi tim.', textEn: 'Industrial internship experience developing web applications through programming tasks, system design, and team collaboration.', pdfPath: '/Seritf/18_Magang_PT_INDOTECH_ENERGI_PERSADA.pdf', pdfName: '18_Magang_PT_INDOTECH_ENERGI_PERSADA.pdf' },
  { typeId: 'Sertifikasi dan Pelatihan', typeEn: 'Certification and Training', title: 'Tecno IT Event Participant', metaId: 'IMATIKA FT-KMUP / Maret 2023', metaEn: 'IMATIKA FT-KMUP / March 2023', textId: 'Peserta acara kampus Tecno IT yang membahas teknologi, sistem informasi, dan diskusi akademik.', textEn: 'Participant in the Tecno IT campus event covering technology, information systems, and academic discussion.', pdfPath: '/Seritf/02_TECHNO_IT_Berpikir_Digital.pdf', pdfName: '02_TECHNO_IT_Berpikir_Digital.pdf' },
  { typeId: 'Sertifikasi dan Pelatihan', typeEn: 'Certification and Training', title: 'Data Visualization Storytelling Competition / Participant', metaId: 'Kementerian Keuangan Republik Indonesia / November 2023', metaEn: 'Ministry of Finance of the Republic of Indonesia / November 2023', textId: 'Peserta 12th AIFED Visual Data Storytelling Competition 2023 dengan fokus pada pengolahan data, pemikiran analitis, dan komunikasi visual.', textEn: 'Participant in the 12th AIFED Visual Data Storytelling Competition 2023, focused on data processing, analytical thinking, and visual communication.', pdfPath: '/Seritf/12th%20AIFED%20Visual%20Data%20Storytelling%20Competition%202023%20-%20Akhmad%20Rizaldy.pdf', pdfName: '12th AIFED Visual Data Storytelling Competition 2023 - Akhmad Rizaldy.pdf' },
]

const timelineGroups = [
  { key: 'experience', labelId: 'Pengalaman', labelEn: 'Experience', types: ['Pengalaman', 'Experience'] },
  { key: 'education', labelId: 'Pendidikan', labelEn: 'Education', types: ['Pendidikan', 'Education'] },
  { key: 'certificate', labelId: 'Sertifikasi dan Pelatihan', labelEn: 'Certification and Training', types: ['Sertifikasi dan Pelatihan', 'Certification and Training'] },
]

const copy = {
  id: { about: 'Tentang', work: 'Karya', background: 'Latar belakang', contact: 'Kontak', available: 'Terbuka untuk pekerjaan terpilih', location: 'Jakarta Timur, Indonesia', role: 'Web & Mobile Developer | UI/UX Designer', heroLead: 'Software Developer dan lulusan Teknik Informatika Universitas Pancasila yang berfokus pada pengembangan web/mobile, sistem manajemen data, dan desain UI/UX.', explore: 'Lihat karya', profile: 'Profil & filosofi', practical: 'Kreatif yang praktis', aboutTitle: 'Membangun dengan presisi dan sudut pandang.', workLabel: 'Karya pilihan', workIntro: 'Arsip kecil dari karya terbaru', workTitle: 'Karya digital, dibuat berguna.', backgroundLabel: 'Pengalaman / pendidikan / sertifikasi dan pelatihan', backgroundTitle: 'Perjalanan yang terus berjalan.', skillsLabel: 'Teknologi & perangkat kerja', skillsIntro: 'Tools untuk mengubah ide menjadi sistem yang berjalan', servicesLabel: 'Layanan', servicesIntro: 'Cara saya dapat berkontribusi', archiveLabel: 'Informasi tambahan', archiveTitle: 'Selalu belajar, selalu berkembang.', testimonialLabel: 'Pernyataan profesional', capabilitiesLabel: 'Kemampuan', capabilitiesIntro: 'Yang dapat saya kontribusikan', contactLabel: 'Mari bekerja sama', contactIntro: 'Terbuka untuk kerja, freelance, dan kolaborasi.', email: 'Email', whatsapp: 'WhatsApp', github: 'GitHub', linkedin: 'LinkedIn', cv: 'Curriculum Vitae', city: 'Domisili', download: 'Unduh CV', liveDemo: 'Demo langsung', repository: 'Repositori', roleLabel: 'Peran', outcome: 'Masalah / hasil' },
  en: { about: 'About', work: 'Work', background: 'Background', contact: 'Contact', available: 'Available for select work', location: 'East Jakarta, Indonesia', role: 'Web & Mobile Developer | UI/UX Designer', heroLead: 'Software Developer and Informatics Engineering graduate of Universitas Pancasila focused on web/mobile development, data management systems, and UI/UX design.', explore: 'Explore selected work', profile: 'Profile & philosophy', practical: 'A practical creative', aboutTitle: 'Building with precision and a point of view.', workLabel: 'Selected work', workIntro: 'A small archive of recent work', workTitle: 'Digital work, made useful.', backgroundLabel: 'Experience / education / certification and training', backgroundTitle: 'A journey still in progress.', skillsLabel: 'Technology & toolkit', skillsIntro: 'Tools I use to turn ideas into working systems', servicesLabel: 'Services', servicesIntro: 'Ways I can contribute', archiveLabel: 'Additional information', archiveTitle: 'Always learning, always improving.', testimonialLabel: 'Professional statement', capabilitiesLabel: 'Capabilities', capabilitiesIntro: 'How I can contribute', contactLabel: 'Let’s work together', contactIntro: 'Open to work, freelance, and digital product collaborations.', email: 'Email', whatsapp: 'WhatsApp', github: 'GitHub', linkedin: 'LinkedIn', cv: 'Curriculum Vitae', city: 'Location', download: 'Download CV', liveDemo: 'Live demo', repository: 'Repository', roleLabel: 'Role', outcome: 'Problem / outcome' },
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
        <title>Akhmad Rizaldy | Portfolio</title>
        <meta name="description" content="Akhmad Rizaldy builds thoughtful digital products where reliable code meets a sharp visual point of view." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.page}>
        <div className={styles.container}>
          <header className={styles.topbar}>
            <a href="#top" className={styles.wordmark}>AR<span>/26</span></a>
            <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`} aria-label="Main navigation" id="main-navigation">
              <a href="#about" className={styles.navItem} onClick={closeMenu}>{text.about}</a>
              <a href="#work" className={styles.navItem} onClick={closeMenu}>{text.work}</a>
              <a href="#background" className={styles.navItem} onClick={closeMenu}>{text.background}</a>
              <a href="#contact" className={styles.navItem} onClick={closeMenu}>{text.contact}</a>
            </nav>
            <button type="button" className={`${styles.menuButton} ${menuOpen ? styles.menuButtonOpen : ''}`} onClick={() => setMenuOpen((isOpen) => !isOpen)} aria-expanded={menuOpen} aria-controls="main-navigation" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}>
              <span /><span />
            </button>
            <div className={styles.languageSwitch} aria-label="Language selector"><button type="button" className={language === 'id' ? styles.languageActive : ''} onClick={() => setLanguage('id')}>ID</button><span>/</span><button type="button" className={language === 'en' ? styles.languageActive : ''} onClick={() => setLanguage('en')}>EN</button></div>
          </header>

          <section id="top" className={styles.hero}>
            <div className={styles.heroMeta}><span>01 / 11</span><span className={styles.availabilityNote}><i /> {text.available}</span></div>
            <div className={styles.heroCopy}>
              <p className={styles.kicker}>{text.role}</p>
              <h1>Akhmad<br /><em>Rizaldy</em></h1>
              <p className={styles.heroLead}>{text.heroLead}</p>
              <div className={styles.heroActions}><a href="/CV_Akhmad_Rizaldy.pdf" className={styles.primaryButton} download>{text.download} <span>↓</span></a><a href="https://github.com/akhmadrizaldy74" className={styles.secondaryButton} target="_blank" rel="noreferrer">{language === 'id' ? 'Lihat GitHub' : 'View GitHub'} <span>↗</span></a><a href="#contact" className={`${styles.secondaryButton} ${styles.contactButton}`}>{text.contact} <span>↘</span></a></div>
            </div>
            <div className={styles.heroPortrait}>
              <Image src="/images/profile/foto_akhmad.png" alt="Foto profil Akhmad Rizaldy" width={900} height={900} priority />
            </div>
            <div className={styles.heroFooter}><span>{text.explore}</span><span className={styles.scrollLine} /><span>2026</span></div>
          </section>

          <section id="about" className={styles.aboutSection}>
            <div className={styles.sectionRail}><span>02</span><span>{text.profile}</span></div>
            <div className={styles.aboutContent}>
              <p className={styles.eyebrow}>{text.practical}</p>
              <h2>{text.aboutTitle}</h2>
              <div className={styles.aboutDetails}>
                <p>{language === 'id' ? 'Halo, saya Akhmad Rizaldy, Web & Mobile Developer serta UI/UX Designer lulusan Teknik Informatika Universitas Pancasila yang berdomisili di Jakarta Timur, DKI Jakarta.' : 'Hi, I&apos;m Akhmad Rizaldy, a Web & Mobile Developer and UI/UX Designer with a degree in Informatics Engineering from Universitas Pancasila, based in Jakarta Timur, DKI Jakarta.'}</p>
                <p>{language === 'id' ? 'Menguasai Laravel, Python, React.js, Tailwind CSS, Flutter, PHP, MySQL, dan integrasi RESTful API. Saya berfokus pada solusi yang efisien, aman, dan mudah digunakan.' : 'Skilled in Laravel, Python, React.js, Tailwind CSS, Flutter, PHP, MySQL, and RESTful API integration. I focus on solutions that are efficient, secure, and user-friendly.'}</p>
              </div>
              <div className={styles.statsRow}><div><strong>04</strong><span>{language === 'id' ? <>Tahun belajar<br />melalui karya</> : <>Years learning<br />by building</>}</span></div><div><strong>∞</strong><span>{language === 'id' ? <>Rasa ingin tahu<br />yang terus tumbuh</> : <>Curiosity<br />in progress</>}</span></div></div>
            </div>
          </section>

          <section id="work" className={styles.projectSection}>
            <div className={styles.sectionRail}><span>03</span><span>{text.workLabel}</span></div>
            <div className={styles.projectIntro}><p className={styles.eyebrow}>{text.workIntro}</p><h2>{text.workTitle}</h2>
              <div className={styles.projectList}>
                {projects.map((project) => <article key={project.titleId} className={styles.projectCard}>
                  <div className={styles.projectIndex}>{project.number}</div>
                  <div className={styles.projectVisual}><Image src={project.image} alt={`${language === 'id' ? project.titleId : project.titleEn} project cover`} width={865} height={414} /><div className={styles.projectVisualMeta}><span>{language === 'id' ? 'SISTEM WEB OPERASIONAL' : 'OPERATIONAL WEB SYSTEM'}</span><strong>{project.stack}</strong><small>{language === 'id' ? 'Studi kasus 01 / 01' : 'Case study 01 / 01'}</small></div></div>
                  <div className={styles.projectBody}><p className={styles.projectCategory}>{language === 'id' ? project.categoryId : project.categoryEn}</p><h3>{language === 'id' ? project.titleId : project.titleEn}</h3><p className={styles.projectDescription}>{language === 'id' ? project.descriptionId : project.descriptionEn}</p><p className={styles.projectRole}><b>{text.roleLabel}</b>{project.role}</p><p className={styles.projectProblem}><b>{text.outcome}</b>{language === 'id' ? project.problemId : project.problemEn}</p><p className={styles.projectStack}>{project.stack}</p><div className={styles.projectActions}><a href={project.demo} className={styles.projectLink}>{text.liveDemo} <span>↗</span></a><a href={project.repo} className={styles.projectLink}>{text.repository} <span>↗</span></a></div></div>
                </article>)}
              </div>
            </div>
          </section>

          <section id="background" className={styles.backgroundSection}>
            <div className={styles.sectionRail}><span>05</span><span>{text.background}</span></div>
            <div className={styles.backgroundContent}>
              <p className={styles.eyebrow}>{text.backgroundLabel}</p>
              <h2>{text.backgroundTitle}</h2>
              <div className={styles.timeline}>
                {timelineGroups.map((group) => (
                  <div className={styles.timelineGroup} key={group.key}>
                    <h3 className={styles.timelineGroupTitle}>{language === 'id' ? group.labelId : group.labelEn}</h3>
                    {timeline
                      .filter((item) => group.types.includes(language === 'id' ? item.typeId : item.typeEn))
                      .map((item) => {
                        const isCertificate = group.key === 'certificate'

                        return (
                          <article
                            key={`${item.title}-${item.metaEn}`}
                            className={`${styles.timelineItem} ${isCertificate ? styles.timelineItemInteractive : ''}`}
                            onClick={isCertificate ? () => setSelectedCertificate(item) : undefined}
                            onKeyDown={isCertificate ? (event) => { if (event.key === 'Enter' || event.key === ' ') setSelectedCertificate(item) } : undefined}
                            tabIndex={isCertificate ? 0 : undefined}
                            role={isCertificate ? 'button' : undefined}
                          >
                            <span>{language === 'id' ? item.typeId : item.typeEn}</span>
                            <div>
                              <h3>{item.title}</h3>
                              <p className={styles.timelineMeta}>{language === 'id' ? item.metaId : item.metaEn}</p>
                              <p>{language === 'id' ? item.textId : item.textEn}</p>
                              {isCertificate && <small className={styles.timelineHint}>{language === 'id' ? 'Klik untuk melihat informasi sertifikat ↗' : 'Click to view certificate information ↗'}</small>}
                            </div>
                          </article>
                        )
                      })}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className={styles.skillsSection}>
            <div className={styles.sectionRail}><span>06</span><span>{text.skillsLabel}</span></div>
            <div className={styles.skillsContent}><p className={styles.eyebrow}>{text.skillsIntro}</p><div className={styles.skillGrid}><div className={styles.skillItem}><span>{language === 'id' ? 'Pengembangan Web' : 'Web Development'}</span><strong>Laravel / Tailwind CSS / HTML / CSS / JavaScript / React.js</strong></div><div className={styles.skillItem}><span>{language === 'id' ? 'Back-End & Basis Data' : 'Back-End & Database'}</span><strong>Python / PHP / MySQL / RESTful API</strong></div><div className={styles.skillItem}><span>{language === 'id' ? 'Aplikasi Mobile' : 'Mobile Applications'}</span><strong>Flutter</strong></div><div className={styles.skillItem}><span>{language === 'id' ? 'Perangkat' : 'Tools'}</span><strong>Git / Visual Studio Code / Figma / Canva</strong></div></div></div>
          </section>

          <section className={styles.servicesSection}>
            <div className={styles.sectionRail}><span>07</span><span>{text.servicesLabel}</span></div>
            <div className={styles.servicesContent}><p className={styles.eyebrow}>{text.servicesIntro}</p><div className={styles.serviceGrid}><article><b>01</b><h3>Web</h3><p>{language === 'id' ? 'Mengembangkan aplikasi web responsif, sistem informasi, dan dashboard operasional.' : 'Develop responsive web applications, information systems, and operational dashboards.'}</p></article><article><b>02</b><h3>Data</h3><p>{language === 'id' ? 'Membangun alur manajemen data dengan PHP, Laravel, MySQL, dan RESTful API.' : 'Build practical data management flows with PHP, Laravel, MySQL, and RESTful APIs.'}</p></article><article><b>03</b><h3>{language === 'id' ? 'Seluler' : 'Mobile'}</h3><p>{language === 'id' ? 'Mengembangkan aplikasi Flutter dan menghubungkannya ke layanan backend.' : 'Develop Flutter applications and connect them to reliable backend services.'}</p></article></div></div>
          </section>

          <section className={styles.archiveSection}>
            <div className={styles.sectionRail}><span>08</span><span>{text.archiveLabel}</span></div>
            <div className={styles.archiveContent}>
              <p className={styles.eyebrow}>{text.archiveLabel}</p>
              <h2>{text.archiveTitle}</h2>
              <div className={styles.archiveDetails}>
                <h3>{language === 'id' ? 'Bahasa' : 'Languages'}</h3>
                <p><strong>{language === 'id' ? 'Indonesia' : 'Indonesian'}</strong> — {language === 'id' ? 'Penutur asli' : 'Native speaker'}<br /><strong>English</strong> — {language === 'id' ? 'Kemampuan kerja terbatas' : 'Limited working proficiency'}</p>
                <p className={styles.archiveCaption}>{language === 'id' ? 'Terus memperluas wawasan melalui pengembangan produk digital, desain antarmuka, dan eksplorasi teknologi baru.' : 'Continuously expanding my perspective through digital product development, interface design, and new technology exploration.'}</p>
              </div>
            </div>
          </section>

          <section className={styles.testimonialSection}>
            <div className={styles.sectionRail}><span>09</span><span>{text.testimonialLabel}</span></div>
            <div className={styles.testimonialContent}><p className={styles.eyebrow}>{text.testimonialLabel}</p><blockquote>{language === 'id' ? 'Berkomitmen menghadirkan solusi software yang efisien, aman, dan mudah digunakan.' : 'Committed to consistently delivering software solutions that are efficient, secure, and user-friendly.'}</blockquote><p className={styles.testimonialAuthor}>Akhmad Rizaldy / {language === 'id' ? 'Software Developer' : 'Software Developer'}</p></div>
          </section>

          <section className={styles.capabilitySection}>
            <div className={styles.sectionRail}><span>10</span><span>{text.capabilitiesLabel}</span></div>
            <div className={styles.capabilityContent}><p className={styles.eyebrow}>{text.capabilitiesIntro}</p><div className={styles.capabilityList}>{capabilities.map((capability, index) => <span key={capability}><b>0{index + 1}</b>{language === 'id' ? ['Pengembangan web & mobile', 'Sistem manajemen data', 'Desain UI/UX', 'Pengalaman responsif'][index] : capability}</span>)}</div></div>
          </section>

          <footer id="contact" className={styles.contactSection}>
            <div className={styles.sectionRail}><span>11</span><span>{text.contactLabel}</span></div>
            <div className={styles.contactContent}><p className={styles.eyebrow}>{language === 'id' ? 'Punya brief yang bagus?' : 'Have a good brief?'}</p><h2>{language === 'id' ? <>Mari membuat sesuatu yang<br /><em>layak diingat.</em></> : <>Let&apos;s make something<br /><em>worth remembering.</em></>}</h2><p className={styles.contactNote}>{text.contactIntro}</p><div className={styles.contactGrid}><a href="mailto:akhmadrizaldy74@gmail.com">{text.email}<br /><strong>akhmadrizaldy74@gmail.com</strong></a><a href="https://wa.me/6287830665027" target="_blank" rel="noreferrer">{text.whatsapp}<br /><strong>+62 878 3066 5027</strong></a><a href="https://github.com/akhmadrizaldy74" target="_blank" rel="noreferrer">{text.github}<br /><strong>github.com/akhmadrizaldy74 ↗</strong></a><a href="https://linkedin.com/in/akhmad-rizaldy74/" target="_blank" rel="noreferrer">{text.linkedin}<br /><strong>linkedin.com/in/akhmad-rizaldy74 ↗</strong></a><a href="/CV_Akhmad_Rizaldy.pdf" download>{text.cv}<br /><strong>{text.download} ↙</strong></a><span>{text.city}<br /><strong>{language === 'id' ? 'Jakarta Timur, DKI Jakarta' : 'East Jakarta, DKI Jakarta'}</strong></span></div><div className={styles.footerBottom}><span>Akhmad Rizaldy </span><span>{language === 'id' ? 'Portfolio 2026' : 'Built with intention'}</span><a href="#top">{language === 'id' ? 'Kembali ke atas ↑' : 'Back to top ↑'}</a></div></div>
          </footer>
          {selectedCertificate && (
            <div className={styles.modalBackdrop} role="presentation" onClick={() => setSelectedCertificate(null)}>
              <section className={styles.certificateModal} role="dialog" aria-modal="true" aria-labelledby="certificate-title" onClick={(event) => event.stopPropagation()}>
                <button type="button" className={styles.modalClose} onClick={() => setSelectedCertificate(null)} aria-label={language === 'id' ? 'Tutup detail sertifikasi' : 'Close certificate details'}>×</button>
                <p className={styles.eyebrow}>{language === 'id' ? 'Sertifikasi dan Pelatihan' : 'Certification and Training'}</p>
                <h2 id="certificate-title">{selectedCertificate.title}</h2>
                <p className={styles.modalMeta}>{language === 'id' ? selectedCertificate.metaId : selectedCertificate.metaEn}</p>
                <CertificatePreview certificate={selectedCertificate} language={language} />
                <p className={styles.certificateDescription}>{language === 'id' ? selectedCertificate.textId : selectedCertificate.textEn}</p>
                {selectedCertificate.pdfPath ? (
                  <a className={styles.certificatePdfLink} href={selectedCertificate.pdfPath} target="_blank" rel="noreferrer">{language === 'id' ? 'Buka sertifikat PDF ↗' : 'Open certificate PDF ↗'}</a>
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

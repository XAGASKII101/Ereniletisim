import { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { applySeo, allSchemas, type SiteLocale } from './seo'
import './styles.css'

/* ── BILINGUAL COPY ── */
const dict = {
  en: {
    toplineLeft: 'ANKARA · SALES & TECHNICAL SERVICE',
    toplineRight: 'MON–SAT · 09:00—19:30',
    navLinks: ['Services', 'Phones & Trade-In', 'The Founder', 'Why Us', 'FAQ', 'Contact'],
    navWa: 'WhatsApp',
    heroEyebrow: 'ANKARA · PHONE SALES & 30-MINUTE FAST REPAIR',
    heroH1a: 'New & Used Phones,',
    heroH1em: 'honest repair.',
    heroLede: 'Looking to buy a phone, trade in your old device, or fix a broken screen? We offer certified new and second-hand phones, instant cash trade-ins, and transparent repairs right before your eyes.',
    heroBtnDark: 'Get Price on WhatsApp',
    heroBtnOutline: 'View Phones & Services',
    heroRating: '1,200+ Verified Ankara Customer Reviews',
    heroCardTop1: 'EREN / 2014—2026',
    heroCardBottom: 'REPAIR IN FRONT OF YOUR EYES',
    heroCardCity: 'ANKARA',
    heroNoteTop: 'OPEN-BENCH REPAIR',

    proofStats: [
      { num: '30 Min', label: 'Average Repair Time' },
      { num: '6 Months', label: 'Direct Part Warranty' },
      { num: 'New & Used', label: 'Certified Phones for Sale' },
      { num: 'Instant', label: 'Cash for Your Old Phone' },
    ],

    s01eyebrow: '01 // WHAT WE OFFER',
    s01h2a: 'Your trusted destination to',
    s01h2em: 'buy, sell & fix phones.',
    s01sub: 'Whether you are upgrading to a new phone or bringing your cracked device back to life—we keep things straightforward, honest, and fast.',
    services: [
      { index: '01 //', icon: 'icon-phone', title: 'Brand New Sealed Phones for Sale', desc: 'iPhone, Samsung and Xiaomi models sealed in box with official warranty and invoice.', meta: 'IN-STOCK DELIVERY', featured: true },
      { index: '02 //', icon: 'icon-trade', title: 'Certified Used Phones & Cash Trade-In', desc: 'Tested screens, healthy batteries, clean IMEI and a written shop warranty.', meta: 'INSTANT CASH / TRADE', featured: false },
      { index: '03 //', icon: 'icon-screen', title: 'Cracked Screen & Glass Replacement', desc: 'Watch the repair happen on our open bench without giving up your passcode.', meta: '30-MIN DELIVERY', featured: false },
      { index: '04 //', icon: 'icon-battery', title: 'Battery Replacement Service', desc: 'Original battery service with a 6-month written warranty.', meta: '20-MIN EXPRESS', featured: false },
      { index: '05 //', icon: 'icon-screen', title: 'Charging Port, Water Damage & Dead Phones', desc: 'Same-day diagnostics, clear pricing and zero fee if you decline.', meta: 'SAME-DAY DIAGNOSTICS', featured: false },
    ],

    s02eyebrow: '02 // IN OUR STORE',
    s02h2: 'Tested phones, safe trade-ins',
    s02h2em: '& quality accessories.',
    s02sub: 'Stop by for tea, hold and inspect any phone you like, or get an honest cash quote for your current device.',
    newTag: 'NEW / SEALED',
    newH3: 'Brand New Sealed Phones',
    newDesc: 'Official iPhone, Samsung and Xiaomi models. Free full transfer of your WhatsApp chats, photos and contacts.',
    newChecks: ['✓ Sealed Box', '✓ 2-Year Official Warranty', '✓ Free Data Transfer'],
    newLink: 'Check new phone stock ↗',
    usedTag: 'PRE-OWNED / TESTED',
    usedH3: 'Certified Pre-Owned Phones',
    usedDesc: 'Thoroughly tested screens, healthy batteries, clean legal IMEI, and backed by our written 6-month shop warranty.',
    usedChecks: ['✓ Fully Tested', '✓ Invoiced & Clean IMEI', '✓ 6-Month Warranty'],
    usedLink: 'Check used phone stock ↗',

    s03eyebrow: '03 // BEFORE YOU VISIT',
    s03h2: 'A simple visit, from first message to finished repair.',
    s03sub: 'Send your model or a photo of the issue on WhatsApp and we will confirm availability, an estimated price and the best time to come in.',
    visitSteps: [
      { num: '01', h3: 'Message first', p: 'Tell us your phone model, repair issue or the device you want to trade in.' },
      { num: '02', h3: 'Get a clear answer', p: 'We reply with stock, an estimate and what we need to inspect the device properly.' },
      { num: '03', h3: 'Visit the bench', p: 'Come to the Ankara shop, keep your passcode and watch the work happen in front of you.' },
    ],
    visitLocSmall: 'STORE LOCATION',
    visitLocStrong: 'Necatibey Cad., Sıhhiye · Ankara',
    visitLocEm: 'Open exact pin on Google Maps ↗',

    s04eyebrow: 'MUSTAFA EREN GÜRGEN · FOUNDER',
    s04h2: 'Meet Mustafa Eren Gürgen, the person behind the bench.',
    s04role: 'Founder & Managing Director, Eren İletişim',
    s04p1: 'As the founder of Eren İletişim, Mustafa Eren Gürgen has spent more than a decade helping people in Ankara make confident decisions about their phones. Under his direction, the shop has grown around a simple standard: every device, repair and price should be clear enough to recommend to your own family.',
    s04p2: 'His approach combines technical care with straightforward service: inspect the device properly, explain the options, protect the customer\'s data and stand behind the work with written warranty. That is what turns a quick phone transaction into a long-term local relationship.',
    founderStats: [
      { num: 'Since 2014', label: 'Serving Ankara with trust' },
      { num: '10,000+', label: 'Phones sold & traded' },
      { num: '100%', label: 'Honest & transparent service' },
    ],
    founderLink: 'Talk directly with Eren ↗',

    s05eyebrow: '04 // WHY CHOOSE EREN?',
    s05h2: 'Honest business. Upfront prices.',
    s05h2em: 'No surprises.',
    whyItems: [
      { num: '01', h3: 'Repair in front of your eyes', p: 'Keep your passcode. Watch the entire repair on our open bench. Your private photos, messages and accounts stay secure.' },
      { num: '02', h3: 'Instant cash for your old phone', p: 'We calculate fair market value in 5 minutes and hand you cash—or apply it to your next phone.' },
      { num: '03', h3: 'Free diagnostic check', p: 'We find the problem and give you an exact price. If you decline, you pay nothing.' },
      { num: '04', h3: 'Written 6-month warranty', p: 'Every phone and part comes with written warranty and an invoice. No excuses.' },
    ],

    s06eyebrow: '05 // FREQUENT QUESTIONS',
    s06h2: 'Answers to everyday questions.',
    faqs: [
      { q: 'Can I bring in my old phone and get instant cash or trade it in?', a: 'Yes. We test it in 5 minutes and pay cash on the spot, or deduct the value from any new or used phone you choose.' },
      { q: 'Will my personal photos or WhatsApp messages be deleted during repair?', a: 'No. You keep your passcode and we repair devices in front of you. We never access your private content.' },
      { q: 'How long does a screen or battery replacement take?', a: 'Most screen replacements take around 30 minutes; battery service is usually around 20 minutes. Message us for your model.' },
      { q: 'Do you offer a warranty on second-hand phones?', a: 'Yes. Certified pre-owned phones come with a written 6-month shop warranty and invoice.' },
      { q: 'Can you transfer my data when I buy a new phone?', a: 'Absolutely. Full data, contacts, photos and WhatsApp transfer is complimentary with brand-new phone purchases.' },
    ],

    s07eyebrow: '06 // WHERE TO FIND US',
    s07h2: 'Visit our Ankara store.',
    s07sub: 'Drop by for tea, let us inspect your phone, or discuss your next device upgrade. Our phone line is always open.',
    btnWa: 'Chat on WhatsApp',
    btnCall: '+90 542 231 80 19',
    addrSmall: 'STORE ADDRESS',
    addrStrong: 'Necatibey Caddesi, Korkutreis Mah.',
    addrSpan: 'Sıhhiye, Çankaya · Ankara 06430',
    hoursSmall: 'OPENING HOURS',
    hoursStrong: 'Mon—Sat: 09:00—19:30',
    hoursSpan: 'Sunday: WhatsApp support active',
    mapsLink: 'Open exact location on Google Maps',

    footerCopy: '© 2026 Eren İletişim. All rights reserved.\nAnkara · Phone sales, trade-in & fast technical service',
    footerWa: 'WhatsApp price ↗',
    brandSub: 'SALES & TECHNICAL SERVICE · ANKARA',
    brandSince: 'ANKARA · SINCE 2014',
  },

  tr: {
    toplineLeft: 'ANKARA · SATIŞ & TEKNİK SERVİS',
    toplineRight: 'PAZ–CUM · 09:00—19:30',
    navLinks: ['Hizmetlerimiz', 'Telefon & Takas', 'Kurucu', 'Neden Biz', 'SSS', 'İletişim'],
    navWa: 'WhatsApp',
    heroEyebrow: 'ANKARA · TELEFON SATIŞI & 30 DAKİKADA HIZLI TAMİR',
    heroH1a: 'Sıfır & 2. El Telefonlar,',
    heroH1em: 'dürüst tamir.',
    heroLede: 'Telefon almak, eski cihazınızı takas etmek veya kırık ekranınızı onarmak mı istiyorsunuz? Sertifikalı sıfır ve ikinci el telefonlar, anında nakit takas ve gözünüzün önünde şeffaf tamir hizmeti sunuyoruz.',
    heroBtnDark: "WhatsApp'tan Fiyat Al",
    heroBtnOutline: 'Telefon & Hizmetleri Gör',
    heroRating: '1.200+ Doğrulanmış Ankara Müşteri Yorumu',
    heroCardTop1: 'EREN / 2014—2026',
    heroCardBottom: 'GÖZÜNÜZÜN ÖNÜNDE TAMİR',
    heroCardCity: 'ANKARA',
    heroNoteTop: 'AÇIK TEZGAH TAMİR',

    proofStats: [
      { num: '30 Dk', label: 'Ortalama Tamir Süresi' },
      { num: '6 Ay', label: 'Parça Garantisi' },
      { num: 'Sıfır & 2.El', label: 'Sertifikalı Telefonlar' },
      { num: 'Anında', label: 'Eski Telefonunuza Nakit' },
    ],

    s01eyebrow: '01 // HİZMETLERİMİZ',
    s01h2a: 'Telefon almak, satmak ve tamir ettirmek için',
    s01h2em: 'güvenilir adresiniz.',
    s01sub: 'Yeni bir telefona geçiyor veya çatlak cihazınızı hayata döndürüyorsanız; süreci basit, dürüst ve hızlı tutuyoruz.',
    services: [
      { index: '01 //', icon: 'icon-phone', title: 'Sıfır, Kutulu Telefon Satışı', desc: 'iPhone, Samsung ve Xiaomi modelleri; resmi garanti ve fatura ile kutusunda.', meta: 'STOKTAN TESLİM', featured: true },
      { index: '02 //', icon: 'icon-trade', title: 'Sertifikalı İkinci El & Nakit Takas', desc: 'Test edilmiş ekran, sağlıklı batarya, temiz IMEI ve yazılı mağaza garantisi.', meta: 'ANINDA NAKİT / TAKAS', featured: false },
      { index: '03 //', icon: 'icon-screen', title: 'Kırık Ekran & Cam Değişimi', desc: 'Şifrenizi vermeden, tamiri açık tezgahımızda izleyin.', meta: '30 DAKİKADA TESLİM', featured: false },
      { index: '04 //', icon: 'icon-battery', title: 'Batarya Değişim Servisi', desc: '6 ay yazılı garantili orijinal batarya servisi.', meta: '20 DAKİKA EXPRESS', featured: false },
      { index: '05 //', icon: 'icon-screen', title: 'Şarj Soketi, Sıvı Hasarı & Açılmayan Telefonlar', desc: 'Aynı gün teşhis, net fiyat ve vazgeçerseniz sıfır ücret.', meta: 'AYNI GÜN TEŞHİS', featured: false },
    ],

    s02eyebrow: '02 // MAĞAZAMIZDA',
    s02h2: 'Test edilmiş telefonlar, güvenli takas',
    s02h2em: 've kaliteli aksesuarlar.',
    s02sub: 'Çayımızı içmeye uğrayın; beğendiğiniz telefonu elinize alın, inceleyin veya mevcut cihazınız için dürüst bir nakit teklif alın.',
    newTag: 'SIFIR / KUTULU',
    newH3: 'Sıfır, Kutulu Telefonlar',
    newDesc: 'Resmi iPhone, Samsung ve Xiaomi modelleri. WhatsApp, fotoğraf ve rehber aktarımı ücretsiz.',
    newChecks: ['✓ Kapalı Kutu', '✓ 2 Yıl Resmi Garanti', '✓ Ücretsiz Veri Aktarımı'],
    newLink: 'Sıfır telefon stoklarını sorun ↗',
    usedTag: 'İKİNCİ EL / TEST EDİLMİŞ',
    usedH3: 'Sertifikalı İkinci El Telefonlar',
    usedDesc: 'Test edilmiş ekran, sağlıklı batarya, temiz yasal IMEI ve 6 ay yazılı mağaza garantisi.',
    usedChecks: ['✓ Test Edilmiş', '✓ Faturalı & Temiz IMEI', '✓ 6 Ay Garanti'],
    usedLink: 'İkinci el telefon stoklarını sorun ↗',

    s03eyebrow: '03 // GELMEDEN ÖNCE',
    s03h2: 'İlk mesajdan tamamlanan tamire kadar kolay bir süreç.',
    s03sub: "Modelinizi veya sorunun fotoğrafını WhatsApp'tan gönderin; stok, yaklaşık fiyat ve gelmeniz için en uygun zamanı teyit edelim.",
    visitSteps: [
      { num: '01', h3: 'Önce mesaj atın', p: 'Telefon modelinizi, arızayı veya takas etmek istediğiniz cihazı yazın.' },
      { num: '02', h3: 'Net cevap alın', p: 'Stok, yaklaşık fiyat ve cihazı doğru incelemek için gerekenleri paylaşırız.' },
      { num: '03', h3: 'Tezgaha gelin', p: 'Ankara mağazamıza gelin, şifreniz sizde kalsın ve işlemi gözünüzün önünde izleyin.' },
    ],
    visitLocSmall: 'MAĞAZA KONUMU',
    visitLocStrong: 'Necatibey Cad., Sıhhiye · Ankara',
    visitLocEm: "Tam konumu Google Maps'te aç ↗",

    s04eyebrow: 'MUSTAFA EREN GÜRGEN · KURUCU',
    s04h2: 'Tezgâhın arkasındaki isim: Mustafa Eren Gürgen.',
    s04role: 'Kurucu & İşletme Sorumlusu, Eren İletişim',
    s04p1: "Eren İletişim'in kurucusu Mustafa Eren Gürgen, on yılı aşkın süredir Ankara'daki müşterilerin telefonlarıyla ilgili güvenli kararlar vermesine yardımcı oluyor. Mağaza, onun yönetiminde basit bir standart üzerine büyüdü: her cihaz, tamir ve fiyat kendi ailenize önerebileceğiniz kadar açık olmalı.",
    s04p2: 'Onun yaklaşımı teknik özen ile açık hizmeti birleştiriyor: cihazı doğru incelemek, seçenekleri anlatmak, müşterinin verilerini korumak ve yapılan işin arkasında yazılı garantiyle durmak. Hızlı bir telefon işlemini uzun vadeli bir yerel güven ilişkisine dönüştüren de bu.',
    founderStats: [
      { num: "2014\u2019ten", label: "Ankara\u2019ya güvenle hizmet" },
      { num: '10.000+', label: 'Satılan & takas edilen telefon' },
      { num: '%100', label: 'Dürüst & şeffaf hizmet' },
    ],
    founderLink: 'Eren ile doğrudan konuşun ↗',

    s05eyebrow: '04 // NEDEN EREN İLETİŞİM?',
    s05h2: 'Dürüst esnaflık. Net fiyat.',
    s05h2em: 'Sürpriz yok.',
    whyItems: [
      { num: '01', h3: 'Gözünüzün önünde tamir', p: 'Şifreniz sizde kalsın. Tamirin tamamını açık tezgahımızda izleyin. Fotoğraflarınız, mesajlarınız ve hesaplarınız güvende.' },
      { num: '02', h3: 'Eski telefonunuza anında nakit', p: 'Adil piyasa değerini 5 dakikada hesaplar, nakit öder veya yeni telefonunuza sayarız.' },
      { num: '03', h3: 'Ücretsiz arıza tespiti', p: 'Sorunu bulur ve net fiyat veririz. Devam etmezseniz ücret ödemezsiniz.' },
      { num: '04', h3: '6 ay yazılı garanti', p: 'Her telefon ve parça yazılı garanti ve fatura ile gelir. Bahane yok.' },
    ],

    s06eyebrow: '05 // SIK SORULANLAR',
    s06h2: 'Günlük sorularınıza cevaplar.',
    faqs: [
      { q: 'Eski telefonumu getirip anında nakit veya takas alabilir miyim?', a: 'Evet. 5 dakika içinde test eder, anında nakit öder veya seçtiğiniz sıfır ya da ikinci el telefondan düşeriz.' },
      { q: 'Tamir sırasında fotoğraflarım veya WhatsApp mesajlarım silinir mi?', a: 'Hayır. Şifreniz sizde kalır ve cihazınızı gözünüzün önünde tamir ederiz. Özel içeriklerinize erişmeyiz.' },
      { q: 'Ekran veya batarya değişimi ne kadar sürer?', a: "Çoğu ekran değişimi yaklaşık 30 dakika, batarya servisi genellikle 20 dakika sürer. Modelinizi WhatsApp'tan yazın." },
      { q: 'İkinci el telefonlarda garanti var mı?', a: 'Evet. Sertifikalı ikinci el telefonlar 6 ay yazılı mağaza garantisi ve fatura ile gelir.' },
      { q: 'Yeni telefon alırken verilerimi aktarabilir misiniz?', a: 'Elbette. Sıfır telefon alımlarında tam veri, rehber, fotoğraf ve WhatsApp aktarımı ücretsizdir.' },
    ],

    s07eyebrow: '06 // BİZİ NEREDE BULURSUNUZ',
    s07h2: 'Ankara mağazamıza bekleriz.',
    s07sub: 'Çayımızı içmeye uğrayın, telefonunuzu inceletin veya bir sonraki cihazınızı konuşalım. Telefon hattımız her zaman açık.',
    btnWa: "WhatsApp'tan Yazın",
    btnCall: '+90 542 231 80 19',
    addrSmall: 'MAĞAZA ADRESİ',
    addrStrong: 'Necatibey Caddesi, Korkutreis Mah.',
    addrSpan: 'Sıhhiye, Çankaya · Ankara 06430',
    hoursSmall: 'AÇILIŞ SAATLERİ',
    hoursStrong: 'Pzt—Cum: 09:00—19:30',
    hoursSpan: 'Pazar: WhatsApp destek aktif',
    mapsLink: "Google Maps'te tam konumu aç",

    footerCopy: '© 2026 Eren İletişim. Tüm hakları saklıdır.\nAnkara · Telefon satışı, takas & hızlı teknik servis',
    footerWa: 'WhatsApp fiyat ↗',
    brandSub: 'SATIŞ & TEKNİK SERVİS · ANKARA',
    brandSince: "ANKARA \u00B7 2014\u2019TEN BER\u0130",
  }
}

const WA_NUMBER = '905422318019'

function getWaUrl(msg: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`
}

function App() {
  const [locale, setLocale] = useState<SiteLocale>('tr')
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const t = dict[locale]

  useEffect(() => {
    applySeo(locale)
  }, [locale])

  const waGeneral = getWaUrl(locale === 'tr'
    ? 'Merhaba Eren İletişim, bilgi ve fiyat almak istiyorum.'
    : 'Hi Eren İletişim, I\'d like a quote.')

  return (
    <>
      {allSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* ── TOPLINE ── */}
      <div className="topline">
        <span>{t.toplineLeft}</span>
        <span>{t.toplineRight}</span>
      </div>

      {/* ── SITE HEADER ── */}
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Eren İletişim home">
          <span className="brand-mark">
            <img src="/images/eren-logo.png" alt="Eren İletişim logo" />
          </span>
          <span>
            <strong>EREN İLETİŞİM</strong>
            <small>{t.brandSub}</small>
          </span>
        </a>

        <nav className={`desktop-nav${menuOpen ? ' mobile-open' : ''}`} aria-label="Main navigation">
          {t.navLinks.map((link, i) => (
            <a key={i} href={['#services','#phones','#story','#why','#faq','#contact'][i]}
              onClick={() => setMenuOpen(false)}>
              {link}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="lang-toggle"
            onClick={() => setLocale(locale === 'tr' ? 'en' : 'tr')}
            aria-label="Switch language"
          >
            <span className={locale === 'en' ? 'active' : ''}>EN</span>
            <span className={locale === 'tr' ? 'active' : ''}>TR</span>
          </button>

          <a
            className="nav-whatsapp"
            href={waGeneral}
            target="_blank"
            rel="noreferrer"
          >
            <span>{t.navWa}</span>
            <i>↗</i>
          </a>

          <button
            className={`menu-toggle${menuOpen ? ' open' : ''}`}
            type="button"
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className={`mobile-nav-drawer${menuOpen ? ' open' : ''}`}>
        {t.navLinks.map((link, i) => (
          <a key={i} href={['#services','#phones','#story','#why','#faq','#contact'][i]}
            onClick={() => setMenuOpen(false)}>
            {link}
          </a>
        ))}
      </div>

      <main id="top">
        {/* ── HERO ── */}
        <section className="hero section-pad">
          <div className="hero-copy reveal">
            <p className="eyebrow">
              <span className="dot"></span>
              <span>{t.heroEyebrow}</span>
            </p>
            <h1>
              <span>{t.heroH1a}</span>
              <em>{t.heroH1em}</em>
            </h1>
            <p className="hero-lede">{t.heroLede}</p>
            <div className="hero-ctas">
              <a className="button button-dark" href={waGeneral} target="_blank" rel="noreferrer">
                <span>{t.heroBtnDark}</span>
                <b>↗</b>
              </a>
              <a className="button button-outline" href="#services">
                <span>{t.heroBtnOutline}</span>
                <b>↓</b>
              </a>
            </div>
            <div className="rating">
              <strong>5.0 / 5.0</strong>
              <span>·</span>
              <span>{t.heroRating}</span>
            </div>
          </div>

          {/* Phone Art Card — right side */}
          <div className="hero-art reveal">
            <div className="art-note note-top">
              <span>01</span>
              <span>{t.heroNoteTop}</span>
            </div>

            <div className="phone-card">
              <div className="phone-top">
                <span>{t.heroCardTop1}</span>
                <span>↗</span>
              </div>
              <div className="phone-illustration">
                <div className="phone">
                  <div className="speaker"></div>
                  <div className="screen">
                    <span>30</span>
                    <small>MINUTES</small>
                  </div>
                </div>
                <div className="repair-spark">✦</div>
              </div>
              <div className="phone-bottom">
                <span>{t.heroCardBottom}</span>
                <span>{t.heroCardCity}</span>
              </div>
            </div>

            <div className="art-stamp">
              30<br /><small>MIN</small>
            </div>

            <div className="art-note note-bottom">
              <span>YOUR PHONE. YOUR DATA. YOUR PEACE.</span>
              <span>✦</span>
            </div>
          </div>
        </section>

        {/* ── PROOF STRIP ── */}
        <section className="proof-strip">
          {t.proofStats.map((s, i) => (
            <div key={i}>
              <strong>{s.num}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </section>

        {/* ── PHOTO GALLERY ── */}
        <section className="gallery-strip">
          <div className="gallery-ticker">
            <span>IN STOCK NOW</span>
            <span>·</span>
            <span>ANKARA SIHHİYE</span>
            <span>·</span>
            <span>SEALED BOX</span>
            <span>·</span>
            <span>CERTIFIED PRE-OWNED</span>
            <span>·</span>
            <span>30-MIN REPAIR</span>
            <span>·</span>
            <span>OPEN-BENCH SERVICE</span>
            <span>·</span>
          </div>

          <div className="gallery-grid">
            {/* Col 1 */}
            <div className="gallery-col">
              <figure className="gal-card gal-rotate-neg">
                <img src="/images/img-09.jpg" alt="iPhone stock — Ankara store outdoor display" loading="lazy" />
                <figcaption>iPHONE STOCK / ANKARA</figcaption>
              </figure>
              <figure className="gal-card">
                <img src="/images/img-11.jpg" alt="Eren İletişim store interior" loading="lazy" />
                <figcaption>EREN İLETİŞİM / STORE</figcaption>
              </figure>
            </div>
            {/* Col 2 — offset */}
            <div className="gallery-col gallery-col-mid">
              <figure className="gal-card gal-tall">
                <img src="/images/img-02.jpg" alt="Samsung Galaxy Z Fold7 in Eren store" loading="lazy" />
                <figcaption>GALAXY Z FOLD7 / IN-STORE</figcaption>
              </figure>
              <figure className="gal-card gal-rotate-pos">
                <img src="/images/img-08.jpg" alt="iPhone 16 Pro lineup in store" loading="lazy" />
                <figcaption>iPHONE 16 PRO / COLORS</figcaption>
              </figure>
            </div>
            {/* Col 3 */}
            <div className="gallery-col">
              <figure className="gal-card gal-rotate-pos">
                <img src="/images/img-03.jpg" alt="iPhone 16 sealed boxes" loading="lazy" />
                <figcaption>iPHONE 16 / SEALED</figcaption>
              </figure>
              <figure className="gal-card">
                <img src="/images/img-07.jpg" alt="Xiaomi 17 Pro unboxed" loading="lazy" />
                <figcaption>XIAOMI 17 PRO / UNBOXED</figcaption>
              </figure>
            </div>
            {/* Col 4 — hidden on small mobile */}
            <div className="gallery-col gallery-col-hide">
              <figure className="gal-card gal-rotate-neg">
                <img src="/images/img-01.jpg" alt="Xiaomi 17 Pro Max stock" loading="lazy" />
                <figcaption>XIAOMI 17 PRO MAX / STOCK</figcaption>
              </figure>
              <figure className="gal-card gal-tall">
                <img src="/images/img-06.jpg" alt="iPhone 16 Pro colors press" loading="lazy" />
                <figcaption>iPHONE 16 PRO / ALL COLORS</figcaption>
              </figure>
            </div>
          </div>

          <a className="gallery-cta" href={getWaUrl(locale === 'tr'
            ? 'Merhaba Eren, stok hakkında bilgi almak istiyorum.'
            : "Hi Eren, I'd like to know what's in stock.")}
            target="_blank" rel="noreferrer">
            <span>{locale === 'tr' ? 'Tüm stoğu WhatsApp\'tan sorun' : 'Ask about full stock on WhatsApp'}</span>
            <b>↗</b>
          </a>
        </section>

        {/* ── 01 // SERVICES ── */}
        <section id="services" className="section-pad">
          <div className="section-intro reveal">
            <p className="eyebrow">{t.s01eyebrow}</p>
            <h2>
              <span>{t.s01h2a} </span>
              <em>{t.s01h2em}</em>
            </h2>
            <p>{t.s01sub}</p>
          </div>

          <div className="service-grid">
            {t.services.map((svc, i) => (
              <article key={i} className={`service-card${svc.featured ? ' featured' : ''} reveal`}>
                <span className="card-index">{svc.index}</span>
                <div className={`card-icon ${svc.icon}`} aria-hidden="true"></div>
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
                <span className="card-meta">{svc.meta}</span>
              </article>
            ))}
          </div>
        </section>

        {/* ── 02 // IN OUR STORE (PHONES) ── */}
        <section id="phones" className="phones section-pad">
          <div className="split-heading">
            <div>
              <p className="eyebrow">{t.s02eyebrow}</p>
              <h2>
                {t.s02h2}
                <em>{t.s02h2em}</em>
              </h2>
            </div>
            <p>{t.s02sub}</p>
          </div>

          <div className="phone-shelves">
            {/* New / Sealed */}
            <article className="shelf-card shelf-green">
              <span className="shelf-tag">{t.newTag}</span>
              <div className="shelf-phones">
                <div className="mini-phone mini-dark"></div>
                <div className="mini-phone mini-light"></div>
                <div className="mini-phone mini-orange"></div>
              </div>
              <h3>{t.newH3}</h3>
              <p>{t.newDesc}</p>
              <div className="checks">
                {t.newChecks.map((c, i) => <span key={i}>{c}</span>)}
              </div>
              <a
                href={getWaUrl(locale === 'tr'
                  ? 'Merhaba Eren, sıfır telefon stoklarınızı sormak istiyorum.'
                  : "Hi Eren, I'm looking for a new phone.")}
                target="_blank" rel="noreferrer" className="text-link"
              >
                {t.newLink}
              </a>
            </article>

            {/* Pre-Owned */}
            <article className="shelf-card shelf-cream">
              <span className="shelf-tag">{t.usedTag}</span>
              <div className="used-device">
                <div className="used-camera"></div>
                <div className="used-shine"></div>
              </div>
              <h3>{t.usedH3}</h3>
              <p>{t.usedDesc}</p>
              <div className="checks">
                {t.usedChecks.map((c, i) => <span key={i}>{c}</span>)}
              </div>
              <a
                href={getWaUrl(locale === 'tr'
                  ? 'Merhaba Eren, ikinci el telefon stoklarınızı sormak istiyorum.'
                  : "Hi Eren, I'd like a pre-owned phone quote.")}
                target="_blank" rel="noreferrer" className="text-link"
              >
                {t.usedLink}
              </a>
            </article>
          </div>
        </section>

        {/* ── 03 // BEFORE YOU VISIT ── */}
        <section className="visit-guide section-pad">
          <div className="visit-heading">
            <p className="eyebrow">{t.s03eyebrow}</p>
            <h2>{t.s03h2}</h2>
            <p>{t.s03sub}</p>
          </div>

          <div className="visit-grid">
            {t.visitSteps.map((step, i) => (
              <article key={i}>
                <span>{step.num}</span>
                <h3>{step.h3}</h3>
                <p>{step.p}</p>
              </article>
            ))}
          </div>

          <a
            className="visit-location"
            href="https://maps.app.goo.gl/7EaRfzBAWoBcuADM9"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <small>{t.visitLocSmall}</small>
              <strong>{t.visitLocStrong}</strong>
              <em>{t.visitLocEm}</em>
            </span>
            <b>↗</b>
          </a>
        </section>

        {/* ── 04 // THE FOUNDER / STORY ── */}
        <section id="story" className="story section-pad">
          <div className="story-visual reveal">
            <div className="story-photo">
              <img
                src="/images/founder-eren.jpg"
                alt="Mustafa Eren Gürgen, founder of Eren İletişim, in the Ankara shop"
              />
            </div>
            <div className="story-logo">
              <img src="/images/eren-logo.png" alt="" />
            </div>
            <p>EREN İLETİŞİM<br />ANKARA / SINCE 2014</p>
            <span className="vertical-note">DÜRÜST ESNAFLIK</span>
          </div>

          <div className="story-copy reveal">
            <p className="eyebrow">{t.s04eyebrow}</p>
            <h2>{t.s04h2}</h2>
            <p><strong>{t.s04role}</strong></p>
            <p>{t.s04p1}</p>
            <p>{t.s04p2}</p>

            <div className="story-stats">
              {t.founderStats.map((st, i) => (
                <div key={i}>
                  <strong>{st.num}</strong>
                  <span>{st.label}</span>
                </div>
              ))}
            </div>

            <a
              className="text-link"
              href={getWaUrl(locale === 'tr'
                ? 'Merhaba Eren, bir telefon hakkında konuşmak istiyorum.'
                : "Hi Eren, I'd like to talk about a phone.")}
              target="_blank"
              rel="noreferrer"
            >
              {t.founderLink}
            </a>
          </div>
        </section>

        {/* ── 05 // WHY CHOOSE EREN? ── */}
        <section id="why" className="why section-pad">
          <div className="section-intro">
            <p className="eyebrow">{t.s05eyebrow}</p>
            <h2>
              {t.s05h2}
              <em>{t.s05h2em}</em>
            </h2>
          </div>

          <div className="why-grid">
            {t.whyItems.map((item, i) => (
              <div key={i} className="why-item">
                <span>{item.num}</span>
                <h3>{item.h3}</h3>
                <p>{item.p}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 06 // FAQ ── */}
        <section id="faq" className="faq section-pad">
          <div className="faq-head">
            <p className="eyebrow">{t.s06eyebrow}</p>
            <h2>{t.s06h2}</h2>
          </div>

          <div className="faq-list">
            {t.faqs.map((faq, idx) => (
              <details key={idx} open={openFaq === idx} onClick={e => {
                e.preventDefault()
                setOpenFaq(openFaq === idx ? null : idx)
              }}>
                <summary>
                  <span>{faq.q}</span>
                  <b>+</b>
                </summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ── 07 // CONTACT ── */}
        <section id="contact" className="contact section-pad">
          <div className="contact-card">
            <div className="contact-copy">
              <p className="eyebrow">{t.s07eyebrow}</p>
              <h2>{t.s07h2}</h2>
              <p>{t.s07sub}</p>
              <div className="contact-actions">
                <a
                  className="button button-green"
                  href={getWaUrl(locale === 'tr'
                    ? 'Merhaba Eren İletişim, fiyat almak istiyorum.'
                    : "Hi Eren İletişim, I'd like to get a quote.")}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{t.btnWa}</span>
                  <b>↗</b>
                </a>
                <a className="button button-light" href={`tel:+${WA_NUMBER}`}>
                  <span>{t.btnCall}</span>
                  <b>↗</b>
                </a>
              </div>
            </div>

            <div className="contact-details">
              <div>
                <small>{t.addrSmall}</small>
                <strong>{t.addrStrong}</strong>
                <span>{t.addrSpan}</span>
              </div>
              <div>
                <small>{t.hoursSmall}</small>
                <strong>{t.hoursStrong}</strong>
                <span>{t.hoursSpan}</span>
              </div>
              <a
                className="map-link"
                href="https://maps.app.goo.gl/7EaRfzBAWoBcuADM9"
                target="_blank"
                rel="noreferrer"
              >
                <span>{t.mapsLink}</span>
                <b>↗</b>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="site-footer">
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark">
            <img src="/images/eren-logo.png" alt="" />
          </span>
          <span>
            <strong>EREN İLETİŞİM</strong>
            <small>{t.brandSince}</small>
          </span>
        </a>

        <p>
          {t.footerCopy.split('\n').map((line, i) => (
            <span key={i}>{line}{i === 0 && <br />}</span>
          ))}
        </p>

        <a
          className="footer-link"
          href={getWaUrl(locale === 'tr'
            ? 'Merhaba Eren İletişim, fiyat almak istiyorum.'
            : "Hi Eren İletişim, I'd like a quote.")}
          target="_blank"
          rel="noreferrer"
        >
          {t.footerWa}
        </a>
      </footer>

      {/* ── FLOATING WHATSAPP (mobile only) ── */}
      <a
        className="floating-whatsapp"
        href={waGeneral}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <span>✦</span>
        <b>WhatsApp</b>
      </a>
    </>
  )
}

createRoot(document.getElementById('root')!).render(<App />)

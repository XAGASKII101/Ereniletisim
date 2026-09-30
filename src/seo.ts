export type SiteLocale = 'en' | 'tr'

/* ─────────────────────────────────────────────────────────
   PER-LOCALE PAGE META
───────────────────────────────────────────────────────── */
export const seo = {
  tr: {
    locale: 'tr_TR',
    htmlLang: 'tr',
    title: 'Eren İletişim | Sıhhiye Ankara Telefon Satış, Takas & Teknik Servis — Mustafa Eren Gürgen',
    description: 'Ankara Sıhhiye Necatibey Caddesi\'nde iPhone, Samsung, Xiaomi satışı, anında nakit takas ve 30 dakikada açık tezgâh ekran-batarya tamiri. Kurucu: Mustafa Eren Gürgen. Net fiyat, yazılı garanti, fatura.',
    keywords: [
      'Ankara telefon tamiri',
      'Sıhhiye telefon tamiri',
      'Necatibey caddesi telefon',
      'Çankaya teknik servis',
      'iPhone tamiri Ankara',
      'Samsung tamiri Ankara',
      'ekran değişimi Ankara',
      'batarya değişimi Ankara',
      'ikinci el iPhone Ankara',
      'sıfır telefon Ankara',
      'telefon takas Ankara',
      'hızlı telefon tamiri',
      'açık tezgâh tamir',
      'Xiaomi satış Ankara',
      'Eren İletişim',
      'Mustafa Eren Gürgen',
      'Ankara Sıhhiye telefon mağazası',
      'ikinci el Samsung Ankara',
      'ekran kırık tamir Ankara',
      'su hasarı tamir Ankara',
    ],
  },
  en: {
    locale: 'en_US',
    htmlLang: 'en',
    title: 'Eren İletişim | Phone Sales, Trade-In & Repair — Sıhhiye, Ankara | Mustafa Eren Gürgen',
    description: 'Buy sealed new iPhones, Samsung & Xiaomi in Ankara Sıhhiye. Instant cash trade-in. 30-minute open-bench screen & battery replacement. Founded by Mustafa Eren Gürgen. Written warranty, invoice, honest pricing.',
    keywords: [
      'phone repair Ankara',
      'iPhone repair Ankara',
      'Samsung repair Ankara',
      'screen replacement Ankara',
      'battery replacement Ankara',
      'buy iPhone Ankara',
      'used phones Ankara',
      'phone trade-in Ankara',
      'Sıhhiye phone shop',
      'Ankara mobile phone store',
      'Necatibey Caddesi phone',
      'Mustafa Eren Gurgen',
      'Eren Iletisim Ankara',
      'phone fix Ankara Turkey',
      'cheap iPhone Ankara',
      'Ankara Cankaya phone repair',
      'open bench repair Ankara',
      'certified pre-owned phone Ankara',
    ],
  },
} as const

/* ─────────────────────────────────────────────────────────
   DYNAMIC META APPLIER
───────────────────────────────────────────────────────── */
export function applySeo(locale: SiteLocale = 'tr') {
  const c = seo[locale]

  /* HTML lang attribute */
  document.documentElement.lang = c.htmlLang

  /* Title */
  document.title = c.title

  const upsertMeta = (selector: string, attr: string, value: string) => {
    let tag = document.querySelector<HTMLMetaElement>(selector)
    if (!tag) {
      tag = document.createElement('meta')
      if (attr === 'property') tag.setAttribute('property', selector.replace(/.*["'](.+)["'].*/, '$1'))
      else tag.name = selector.replace(/.*["'](.+)["'].*/, '$1')
      document.head.append(tag)
    }
    tag.setAttribute('content', value)
  }

  const set = (name: string, val: string) => upsertMeta(`meta[name="${name}"]`, 'name', val)
  const og  = (prop: string, val: string) => upsertMeta(`meta[property="${prop}"]`, 'property', val)

  set('description', c.description)
  set('keywords', c.keywords.join(', '))
  set('content-language', c.htmlLang)

  og('og:title', c.title)
  og('og:description', c.description)
  og('og:locale', c.locale)
}

/* ─────────────────────────────────────────────────────────
   JSON-LD — SCHEMA 1: MobilePhoneStore (LocalBusiness)
   Tells Google exactly WHERE, WHO, WHEN, HOW to reach
───────────────────────────────────────────────────────── */
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['MobilePhoneStore', 'LocalBusiness'],
  '@id': 'https://ereniletisim.com/#business',
  name: 'Eren İletişim',
  alternateName: ['Eren Iletisim', 'Eren İletişim Sıhhiye', 'Eren Teknik Servis'],
  description: 'Ankara Sıhhiye\'de sıfır ve ikinci el iPhone, Samsung, Xiaomi satışı, anında nakit takas, açık tezgâh ekran ve batarya tamiri. Certified new & pre-owned phone sales, instant trade-in and open-bench repair in Sıhhiye, Ankara.',
  url: 'https://ereniletisim.com',
  telephone: '+90-542-231-80-19',
  email: 'ereniletisim@gmail.com',
  priceRange: '₺₺',
  currenciesAccepted: 'TRY',
  paymentAccepted: 'Cash, Credit Card',
  hasMap: 'https://maps.app.goo.gl/7EaRfzBAWoBcuADM9',
  image: [
    'https://ereniletisim.com/images/founder-eren.jpg',
    'https://ereniletisim.com/images/og-cover.jpg',
  ],
  logo: 'https://ereniletisim.com/images/eren-logo.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Necatibey Caddesi, Korkutreis Mahallesi',
    addressLocality: 'Sıhhiye',
    addressRegion: 'Çankaya, Ankara',
    postalCode: '06430',
    addressCountry: 'TR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 39.9334,
    longitude: 32.8597,
  },
  areaServed: [
    { '@type': 'City', name: 'Ankara' },
    { '@type': 'City', name: 'Çankaya' },
    { '@type': 'City', name: 'Sıhhiye' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '19:30',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Sunday'],
      opens: '00:00',
      closes: '00:00',
      description: 'WhatsApp support only on Sundays',
    },
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      telephone: '+90-542-231-80-19',
      availableLanguage: ['Turkish', 'English'],
      contactOption: 'TollFree',
    },
    {
      '@type': 'ContactPoint',
      contactType: 'sales',
      telephone: '+90-542-231-80-19',
      availableLanguage: ['Turkish', 'English'],
    },
  ],
  founder: {
    '@type': 'Person',
    '@id': 'https://ereniletisim.com/#founder',
    name: 'Mustafa Eren Gürgen',
    givenName: 'Mustafa Eren',
    familyName: 'Gürgen',
    jobTitle: 'Founder & Managing Director',
    worksFor: { '@id': 'https://ereniletisim.com/#business' },
    url: 'https://ereniletisim.com',
    image: 'https://ereniletisim.com/images/founder-eren.jpg',
    sameAs: [
      'https://www.instagram.com/ereniletisim',
      'https://x.com/ereniletisim',
    ],
  },
  foundingDate: '2014',
  numberOfEmployees: { '@type': 'QuantitativeValue', value: 3 },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '1200',
    bestRating: '5',
    worstRating: '1',
  },
  knowsLanguage: ['tr', 'en'],
  availableLanguage: ['Turkish', 'English'],
  sameAs: [
    'https://www.instagram.com/ereniletisim',
    'https://x.com/ereniletisim',
    'https://maps.app.goo.gl/7EaRfzBAWoBcuADM9',
  ],
}

/* ─────────────────────────────────────────────────────────
   JSON-LD — SCHEMA 2: Person (CEO)
   Makes Mustafa Eren Gürgen findable on Google by name
───────────────────────────────────────────────────────── */
export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://ereniletisim.com/#founder',
  name: 'Mustafa Eren Gürgen',
  givenName: 'Mustafa Eren',
  familyName: 'Gürgen',
  alternateName: ['Eren Gürgen', 'Mustafa Gürgen', 'Eren İletişim Sahibi'],
  jobTitle: 'Kurucu & Genel Müdür / Founder & Managing Director',
  description: 'Mustafa Eren Gürgen is the founder of Eren İletişim, an Ankara-based phone sales and technical service business established in 2014 on Necatibey Caddesi, Sıhhiye. He leads open-bench phone repair, certified pre-owned phone sales, and instant cash trade-in services in Çankaya, Ankara, Turkey.',
  url: 'https://ereniletisim.com',
  image: {
    '@type': 'ImageObject',
    url: 'https://ereniletisim.com/images/founder-eren.jpg',
    caption: 'Mustafa Eren Gürgen — Kurucu, Eren İletişim, Ankara Sıhhiye',
  },
  worksFor: {
    '@type': 'LocalBusiness',
    name: 'Eren İletişim',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Necatibey Caddesi, Korkutreis Mahallesi',
      addressLocality: 'Sıhhiye, Çankaya',
      addressRegion: 'Ankara',
      postalCode: '06430',
      addressCountry: 'TR',
    },
  },
  homeLocation: {
    '@type': 'Place',
    name: 'Ankara, Türkiye',
  },
  knowsLanguage: [
    { '@type': 'Language', name: 'Turkish' },
    { '@type': 'Language', name: 'English' },
  ],
  sameAs: [
    'https://www.instagram.com/ereniletisim',
    'https://x.com/ereniletisim',
    'https://maps.app.goo.gl/7EaRfzBAWoBcuADM9',
  ],
}

/* ─────────────────────────────────────────────────────────
   JSON-LD — SCHEMA 3: WebSite + SearchAction
   Enables Google sitelinks searchbox
───────────────────────────────────────────────────────── */
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://ereniletisim.com/#website',
  name: 'Eren İletişim',
  alternateName: 'Eren İletişim — Ankara Sıhhiye Telefon',
  url: 'https://ereniletisim.com',
  description: 'Ankara Sıhhiye\'de sıfır ve ikinci el telefon satışı, anında nakit takas, açık tezgâh teknik servis. Phone sales, trade-in and open-bench repair in Sıhhiye, Ankara.',
  inLanguage: ['tr-TR', 'en-US'],
  publisher: {
    '@id': 'https://ereniletisim.com/#business',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://ereniletisim.com/?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
}

/* ─────────────────────────────────────────────────────────
   JSON-LD — SCHEMA 4: FAQPage
   Triggers Google FAQ rich results (accordion in SERPs)
───────────────────────────────────────────────────────── */
export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Eski telefonumu getirip anında nakit veya takas alabilir miyim?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Evet. 5 dakika içinde cihazı test eder, anında nakit öder veya seçtiğiniz sıfır ya da ikinci el telefondan düşeriz. Can I trade in my old phone for instant cash? Yes — we test it in 5 minutes and pay cash on the spot or deduct the value from any phone you choose.',
      },
    },
    {
      '@type': 'Question',
      name: 'Tamir sırasında fotoğraflarım veya WhatsApp mesajlarım silinir mi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hayır. Şifreniz sizde kalır ve cihazınızı gözünüzün önünde tamir ederiz. Özel içeriklerinize erişmeyiz. Will my data be safe? No data is ever accessed. You keep your passcode and watch the entire repair on our open bench.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ekran veya batarya değişimi ne kadar sürer? How long does screen or battery replacement take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Çoğu ekran değişimi yaklaşık 30 dakika, batarya servisi genellikle 20 dakika sürer. Most screen replacements take around 30 minutes; battery service is usually around 20 minutes.',
      },
    },
    {
      '@type': 'Question',
      name: 'İkinci el telefonlarda garanti var mı? Do you offer a warranty on second-hand phones?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Evet. Sertifikalı ikinci el telefonlar 6 ay yazılı mağaza garantisi ve fatura ile gelir. Yes — certified pre-owned phones come with a written 6-month shop warranty and invoice.',
      },
    },
    {
      '@type': 'Question',
      name: 'Nerede bulunuyorsunuz? Where are you located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ankara Çankaya Sıhhiye, Korkutreis Mahallesi, Necatibey Caddesi, Posta kodu 06430. Pazartesi–Cumartesi 09:00–19:30. Located at Necatibey Caddesi, Korkutreis Mah., Sıhhiye, Çankaya, Ankara 06430. Open Mon–Sat 09:00–19:30.',
      },
    },
    {
      '@type': 'Question',
      name: 'iPhone tamiri Ankara\'da nerede yapılır? Where can I get iPhone repaired in Ankara?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eren İletişim, Ankara Sıhhiye Necatibey Caddesi\'nde iPhone ekran, batarya ve teknik servis hizmeti sunmaktadır. Eren İletişim on Necatibey Caddesi, Sıhhiye, Ankara offers iPhone screen, battery and technical service.',
      },
    },
    {
      '@type': 'Question',
      name: 'Mustafa Eren Gürgen kimdir? Who is Mustafa Eren Gürgen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mustafa Eren Gürgen, 2014 yılında Ankara Sıhhiye\'de Eren İletişim\'i kuran işletme sahibidir. Telefon satışı, takas ve teknik servis alanında 10 yılı aşkın deneyime sahiptir. Mustafa Eren Gürgen is the founder of Eren İletişim, established in 2014 in Sıhhiye, Ankara. He has over 10 years of experience in phone sales, trade-in and technical service.',
      },
    },
  ],
}

/* ─────────────────────────────────────────────────────────
   JSON-LD — SCHEMA 5: BreadcrumbList
   Gives Google clean navigation context
───────────────────────────────────────────────────────── */
export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Eren İletişim',
      item: 'https://ereniletisim.com/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Hizmetler / Services',
      item: 'https://ereniletisim.com/#services',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Telefon Satışı / Phone Sales',
      item: 'https://ereniletisim.com/#phones',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'İletişim / Contact',
      item: 'https://ereniletisim.com/#contact',
    },
  ],
}

/* ─────────────────────────────────────────────────────────
   COMBINED SCHEMA — inject all 5 at once
───────────────────────────────────────────────────────── */
export const allSchemas = [
  localBusinessSchema,
  personSchema,
  websiteSchema,
  faqSchema,
  breadcrumbSchema,
]

/**
 * Centralized configuration for the Allover Healthcare Group homepage concept.
 * All business details, contact info, disclaimers and copy live here so the
 * concept can be reviewed and updated in one place.
 *
 * Every value here is derived from the live source website:
 *   https://www.alloverhealthcaregroup.com/
 * Items that require the organization to confirm before publication are listed
 * in CLIENT_CONFIRMATION_REQUIRED (see README).
 */

export const CONCEPT = {
  /** Show the unobtrusive "Homepage Redesign Concept" badge. Set false to remove. */
  showConceptBadge: true,
  /** Show the footer concept label. Set false to remove. */
  showFooterConceptLabel: true,
  conceptLabel: 'Homepage Redesign Concept',
  footerConceptLabel: 'Homepage redesign concept prepared for Allover Healthcare Group LLC.',
} as const

export const ORG = {
  name: 'Allover Healthcare Group LLC',
  shortName: 'Allover Healthcare Group',
  tagline: 'Time to Heal… Spreading the Allover Solution… One Service at a Time.',
  concept: 'Connected Care. Practical Support. Stronger Communities.',
  address: {
    street: '5450 Reisterstown Road, Suite 304',
    city: 'Baltimore',
    state: 'MD',
    zip: '21215',
    note: 'Located opposite the Maryland MVA Baltimore office.',
  },
  phone: {
    main: '443-759-8827',
    mainExt: 'Ext. 1',
    mainTel: 'tel:+14437598827',
    afterHours: '443-379-4113',
    afterHoursTel: 'tel:+14433794113',
    fax: '443-759-8870',
  },
  email: 'info@alloverhealthcaregroup.com',
  emailHref: 'mailto:info@alloverhealthcaregroup.com',
  sourceUrl: 'https://www.alloverhealthcaregroup.com/',
  mapsDirections:
    'https://www.google.com/maps/dir/?api=1&destination=' +
    encodeURIComponent('5450 Reisterstown Road, Suite 304, Baltimore, MD 21215'),
  // Keyless Google Maps embed (no API key required)
  mapsEmbed:
    'https://maps.google.com/maps?q=' +
    encodeURIComponent('5450 Reisterstown Road, Suite 304, Baltimore, MD 21215') +
    '&z=15&output=embed',
} as const

export const CRISIS = {
  text: 'Need immediate crisis support? Call or text 988. If you or someone else is in immediate danger, call 911.',
  line988: 'tel:988',
  line911: 'tel:911',
  formNotice: 'Email and website contact forms should not be used for emergencies.',
} as const

/** Reusable call-to-action links. Referral / registration / demo point to the
 *  live source site so the concept never presents a fake secure form. */
export const LINKS = {
  makeReferral: 'https://www.alloverhealthcaregroup.com/Referrals/Referrals',
  referralForm: 'https://www.alloverhealthcaregroup.com/Referrals/Referrals',
  academyPrograms: 'https://www.alloverhealthcaregroup.com/Education/AlloverAcademy',
  academyRegister: 'https://www.alloverhealthcaregroup.com/Education/AlloverAcademy',
  softwareDemo: 'https://www.alloverhealthcaregroup.com/Home/Technology',
  services: '#services',
  about: '#mission',
  contact: '#contact',
} as const

export type DivisionKey = 'health' | 'tech' | 'academy'

export const IMG = {
  logo: '/images/allover/allover-logo.png',
  logoLight: '/images/allover/allover-logo-light.png', // navy wordmark recolored white for dark backgrounds
  groupSession: '/images/allover/prp-Services.png',
  consult: '/images/allover/about.png',
  counseling: '/images/allover/SubHome.png',
  carf: '/images/allover/carf.png',
} as const

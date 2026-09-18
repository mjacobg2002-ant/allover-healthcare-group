/**
 * Homepage content model — refined, concise copy adapted from the live source
 * site. Factual meaning is preserved; no outcomes, timelines, staff, hours,
 * accreditation claims, or legal/MVA results are invented.
 */
import { LINKS } from './site'

export const HERO = {
  eyebrow: 'Community-Based Behavioral Healthcare in Baltimore',
  h1: 'Support that helps people heal, grow and reconnect',
  sub: 'Allover Healthcare Group provides personalized behavioral-health, rehabilitation, substance-use, autism-waiver and community-support services for adults, children, adolescents and families.',
  reassurance: [
    'Adults, children & families',
    'Community-based support',
    'Individualized services',
    'Baltimore, Maryland',
  ],
}

export const TRUST_STRIP = [
  'Services for adults, adolescents & children',
  'On-site & community-based options',
  'Referral coordination',
  'After-hours contact available',
]

export const DIVISIONS = [
  {
    key: 'health' as const,
    name: 'Allover Healthcare',
    line: 'Behavioral health, rehabilitation and community-based support.',
    actions: [
      { label: 'Explore healthcare services', href: '#services', primary: true },
      { label: 'Make a referral', href: LINKS.makeReferral, primary: false },
    ],
  },
  {
    key: 'tech' as const,
    name: 'Allover CareWare',
    line: 'Care-management technology designed for providers and agencies.',
    actions: [{ label: 'Request a software demo', href: LINKS.softwareDemo, primary: true }],
  },
  {
    key: 'academy' as const,
    name: 'Allover Academy',
    line: 'Education, driver-improvement and community training programs.',
    actions: [{ label: 'View training programs', href: LINKS.academyPrograms, primary: true }],
  },
]

export const SERVICES = [
  {
    title: 'Outpatient mental health',
    audience: 'Youth & adults',
    body: 'Individual, family and group therapy delivered in community, school, home and office settings where appropriate.',
  },
  {
    title: 'Adult psychiatric rehabilitation',
    audience: 'Adults',
    body: 'Structured support for independent living, community integration, social skills, wellness and recovery.',
  },
  {
    title: 'Child & adolescent PRP',
    audience: 'Children & families',
    body: 'Family-focused, individualized rehabilitation designed to complement existing therapy and psychiatric services.',
  },
  {
    title: 'Substance use disorder services',
    audience: 'Adults',
    body: 'Early intervention (ASAM 0.5), outpatient (Level 1) and intensive outpatient (Level 2.1) care, education, counseling and clinically appropriate referrals.',
  },
  {
    title: 'Autism waiver support',
    audience: 'Eligible children & young adults',
    body: 'Support for eligible children, young adults and families, including respite and community-integration services where available.',
  },
  {
    title: 'Supported employment & community services',
    audience: 'Adults',
    body: 'Job development, employment support, independent-living skills and meaningful community participation.',
  },
]

export const PATHWAYS = [
  {
    id: 'self',
    label: 'I’m seeking services for myself',
    actions: [
      { label: 'Explore our services', href: '#services' },
      { label: 'Call intake — 443-759-8827 Ext. 1', href: 'tel:+14437598827' },
      { label: 'Make a referral', href: LINKS.makeReferral },
    ],
  },
  {
    id: 'parent',
    label: 'I’m a parent or caregiver',
    actions: [
      { label: 'Explore child & adolescent PRP', href: '#services' },
      { label: 'Learn about autism waiver support', href: '#services' },
      { label: 'Call the intake team', href: 'tel:+14437598827' },
    ],
  },
  {
    id: 'provider',
    label: 'I’m a therapist or healthcare provider',
    actions: [
      { label: 'Review the referral process', href: '#referrals' },
      { label: 'Submit a referral', href: LINKS.makeReferral },
      { label: 'Download the referral form', href: LINKS.referralForm },
    ],
  },
  {
    id: 'agency',
    label: 'I represent a court, school, agency or social-services organization',
    actions: [
      { label: 'See how referrals work', href: '#referrals' },
      { label: 'Submit a referral', href: LINKS.makeReferral },
      { label: 'Call our team', href: 'tel:+14437598827' },
    ],
  },
  {
    id: 'student',
    label: 'I’m looking for a class or education program',
    actions: [
      { label: 'View Allover Academy programs', href: LINKS.academyPrograms },
      { label: 'Register for a class', href: LINKS.academyRegister },
      { label: 'Contact the academy', href: '#contact' },
    ],
  },
  {
    id: 'software',
    label: 'I’m interested in healthcare software',
    actions: [
      { label: 'Explore Allover CareWare', href: '#careware' },
      { label: 'Request a demo', href: LINKS.softwareDemo },
    ],
  },
]

export const REFERRAL_STEPS = [
  {
    n: 1,
    title: 'Submit the referral',
    body: 'Complete the online form or send the referral document through the organization’s secure process.',
  },
  {
    n: 2,
    title: 'Initial review',
    body: 'The team reviews the application for completeness and basic eligibility.',
  },
  {
    n: 3,
    title: 'Intake conversation',
    body: 'Allover contacts the referral source to arrange an interview with the applicant.',
  },
  {
    n: 4,
    title: 'Program coordination',
    body: 'The organization works with the individual, family and referral source to determine an appropriate program and next steps.',
  },
]

export const COMMUNITY = {
  heading: 'Care that meets people where they are',
  body: 'Allover delivers support in the settings that work best for each person — community, home, school and office-based services — building on individual strengths, family involvement and collaboration with existing therapists and support teams.',
  points: [
    'Community-based support',
    'Home-based services where appropriate',
    'School-based services where appropriate',
    'Facility-based services',
    'Independent-living skills',
    'Meaningful community integration',
  ],
}

export const CAREWARE = {
  heading: 'Technology that helps care teams stay connected',
  body: 'Allover CareWare is a care-management platform built for community behavioral-health providers and agencies — connecting the day-to-day work of coordinated care.',
  features: [
    'Referrals',
    'Scheduling',
    'Billing',
    'Case management',
    'Treatment planning',
    'EHR-related workflows',
    'Collaborative coordination',
    'DLA-20-related workflows',
  ],
}

export const ACADEMY = {
  heading: 'Practical education for safer, stronger futures',
  body: 'Allover Academy offers state-oriented driver and alcohol-education programs alongside community and technical training.',
  programs: [
    'Driver Improvement Program',
    'Online Driver Improvement Program',
    '3-Hour Alcohol & Drug Education',
    'Safe and Sober Program',
    '12-Hour Alcohol Education',
    'DUI / DWI education programs',
    'Computer programming training',
    'T2 Diabetes Prevention Program',
  ],
}

export const MISSION = {
  heading: 'Built around people, strengthened by community',
  body: 'Our mission is to guide people toward healthier, more vibrant lives through compassionate service, responsible collaboration and practical support rooted in the communities we serve.',
  values: [
    { name: 'Integrity', body: 'Doing what is right, consistently and transparently.' },
    { name: 'Accountability', body: 'Owning our commitments to the people we serve.' },
    { name: 'Collaboration', body: 'Working alongside families, providers and partners.' },
    { name: 'Caring', body: 'Meeting every person with dignity and compassion.' },
  ],
}

export const SITE = {
  name: "SunSpark Energy",
  legalName: "SunSpark Energy",
  domain: "https://sunsparkenergy.com.ng",
  url: "https://sunsparkenergy.com.ng",
  locale: "en_NG",
  lang: "en-NG",

  tagline: "Reliable Solar Energy for Homes and Businesses",
  shortDescription:
    "Professional solar design, installation, and maintenance for homes and businesses across Nigeria.",
  longDescription:
    "SunSpark Energy designs, installs, and maintains professional solar systems for residential, commercial, and industrial clients across Nigeria. We deliver dependable electricity, cut energy costs, and reduce reliance on unstable power.",

  phone: "+2349029355082",
  phoneDisplay: "+234 902 935 5082",
  whatsapp: "2349029355082",
  email: "sunsparkenergy@proton.me",

  address: {
    city: "Port Harcourt",
    region: "Rivers State",
    country: "NG",
    countryName: "Nigeria",
  },

  geo: {
    latitude: 4.8156,
    longitude: 7.0498,
  },

  serviceAreas: [
    "Port Harcourt",
    "Lagos",
    "Abuja",
    "Rivers State",
    "Nigeria",
  ],

  socials: {} as Record<string, string>,

  founded: "2019",
} as const;

export type Site = typeof SITE;
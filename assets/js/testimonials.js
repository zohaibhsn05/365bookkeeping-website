/* =====================================================================
   TESTIMONIALS — sirf yeh file edit karni hai. Website ke saare
   testimonials (Home, Reviews, CPA page, Industries) yahin se aate hain.

   VIDEO ADD KARNA:
   1. Video YouTube par upload karo, Visibility = "Unlisted".
   2. Link aisa hoga: https://youtu.be/AbC123xYz  ya
      https://www.youtube.com/watch?v=AbC123xYz
      "AbC123xYz" wala hissa = youtubeId
   3. Neeche VIDEOS list mein { ... } wala ek block copy karo, values badlo.

   TEXT ADD KARNA:
   Neeche TEXTS list mein ek { ... } block copy karo aur values badlo.

   OPTIONS:
   home: true      -> Home page par dikhega (videos: sirf 1 rakho, texts: 3)
   cpa: true       -> "For CPA Firms" page par dikhega
   industry: "..." -> Industries page par us industry ke neeche dikhega
                      ("property", "construction", "ecommerce",
                       "professional", "product", "cpa", ya "")

   DHYAN: har block ke baad comma (,) lagana mat bhoolna.
   Quote ke andar " use karna ho to \" likho.
   ===================================================================== */

window.VIDEOS = [
  {
    youtubeId: "8NyV0-IcXW0",
    name: "Joshua Brooks",
    company: "Exponential Advisors LLC",
    role: "",
    quote: "",
    home: true,
    cpa: true,
    industry: "professional"
  },
  // Example — "//" hatao aur apni values daalo:
  // {
  //   youtubeId: "AbC123xYz",
  //   name: "Client Name",
  //   company: "Company Name",
  //   role: "Owner",
  //   quote: "One short line from the video.",
  //   home: true,
  //   cpa: false,
  //   industry: "property"
  // },
];

window.TEXTS = [
  {
    quote: "Zohaib did an excellent job cleaning up my small business' QuickBooks Online accounts and reconciling all 2025 accounts under a very tight deadline. We needed accurate financials quickly for both tax preparation and a banking requirement, and he delivered without any issues. Despite the time difference, he was always available, responsive, and willing to jump on calls when needed. He is knowledgeable, patient, and very easy to work with. We've since retained him for ongoing bookkeeping and monthly reconciliations. Highly recommend Zohaib.",
    name: "Shirley P.", company: "PAMECO Hawaii LLC", project: "Co-President & CEO · QuickBooks Online cleanup & monthly bookkeeping",
    bookkeeper: "Zohaib Hassan", home: true, cpa: true, industry: "professional"
  },
  {
    quote: "Ahmad is always detail-oriented, reliable, and committed to delivering high-quality work on time. He never misses deadlines and consistently goes above and beyond to ensure everything is completed accurately.",
    name: "Anna Friedman", company: "MJH Constructions", project: "Construction company bookkeeping",
    bookkeeper: "Ahmad R.", home: true, cpa: false, industry: "construction"
  },
  {
    quote: "It was a pleasure working with you. Clear communication, timely feedback, and a smooth workflow made this a great experience. I'd be happy to work together again!",
    name: "James", company: "Harbor Property Management", project: "Real estate QuickBooks cleanup",
    bookkeeper: "Zohaib Hassan", home: true, cpa: false, industry: "property"
  },
  {
    quote: "Ahmad and his team performed well. They provided timely documents and clear communication. I appreciate the work they completed for Exponential Advisors.",
    name: "Joshua Brooks", company: "Exponential Advisors LLC", project: "QuickBooks update & expense organization",
    bookkeeper: "Ahmad R.", home: false, cpa: true, industry: ""
  },
  {
    quote: "Great experience! The work was accurate, professional, and completed on time. Highly recommended for bookkeeping and reconciliation.",
    name: "Ben Shafer", company: "Hay Matey, Inc", project: "Bookkeeping & reconciliation",
    bookkeeper: "Ghulam Mustafa", home: false, cpa: false, industry: ""
  },
  {
    quote: "Professional work and a smooth experience. The setup was fixed correctly with proper attention to detail. Recommended.",
    name: "Sims Melissa", company: "First Star Realty", project: "AppFolio bookkeeping setup",
    bookkeeper: "Aryan Bilal", home: false, cpa: false, industry: ""
  },
  {
    quote: "Mustafa set up our Xero file carefully and explained each step clearly. Our accounts are organized and the work was delivered on schedule. Recommended.",
    name: "Michael French", company: "Red Roo Vodka", project: "Xero bookkeeping setup",
    bookkeeper: "Ghulam Mustafa", home: false, cpa: false, industry: "product"
  },
  {
    quote: "Aryan entered our data accurately and kept the spreadsheets well organized. Communication was clear and the project was completed on time.",
    name: "Salman", company: "Sunrise Accountants", project: "Accounting firm support",
    bookkeeper: "Aryan Bilal", home: false, cpa: true, industry: "cpa"
  },
];

import ukHeaderImage from "../assets/images/study-abroad-county-wise/country-wise-header-uk.jpg";
import fact1 from "../assets/images/study-abroad-county-wise/fact1.svg";
import fact2 from "../assets/images/study-abroad-county-wise/fact2.svg";
import fact3 from "../assets/images/study-abroad-county-wise/fact3.svg";
import fact4 from "../assets/images/study-abroad-county-wise/fact4.svg";
import fact5 from "../assets/images/study-abroad-county-wise/fact5.svg";
import fact6 from "../assets/images/study-abroad-county-wise/fact6.svg";
import fact7 from "../assets/images/study-abroad-county-wise/fact7.svg";
import fact8 from "../assets/images/study-abroad-county-wise/fact8.svg";
import fact9 from "../assets/images/study-abroad-county-wise/fact9.svg";
import uniPart1 from "../assets/images/study-abroad-county-wise/ourPartnerUni1.jpg";
import uniPart2 from "../assets/images/study-abroad-county-wise/ourPartnerUni2.jpg";
import uniPart3 from "../assets/images/study-abroad-county-wise/ourPartnerUni3.jpg";
import uniPart4 from "../assets/images/study-abroad-county-wise/ourPartnerUni14.jpg";
import uniPart5 from "../assets/images/study-abroad-county-wise/ourPartnerUni5.jpg";

import icon1 from "../assets/icons/study-abroad-country-wise/document-text.svg";
import icon2 from "../assets/icons/study-abroad-country-wise/translate.svg";
import icon3 from "../assets/icons/study-abroad-country-wise/paperclip-2.svg";
import icon4 from "../assets/icons/study-abroad-country-wise/document-like.svg";
import icon5 from "../assets/icons/study-abroad-country-wise/document.svg";
import icon6 from "../assets/icons/study-abroad-country-wise/wallet-search.svg";

import LandMark1 from "../assets/images/study-abroad-county-wise/keyDestiLand1.jpg";
import LandMark2 from "../assets/images/study-abroad-county-wise/keyDestiLand2.jpg";

import {
  FaGraduationCap,
  FaBriefcase,
  FaRocket,
  FaUsers,
  FaLightbulb,
  FaIdCard,
} from "react-icons/fa";

const countryWiseData = {
  uk: {
    shortForm: "UK",
    fullForm: "United Kingdom",
    title: "Study in United Kingdom",
    description:
      "Immerse yourself in a world-class education system, vibrant culture, and a wealth of opportunities waiting for you in the United Kingdom.",
    headerImage: ukHeaderImage,
    overview: {
      description:
        "The United Kingdom is celebrated for its rich academic heritage and diverse educational opportunities, making it one of the top choices for studying abroad. Home to prestigious institutions like Oxford and Cambridge, the UK offers a wide array of programs across various disciplines. With a history of groundbreaking discoveries and influential thinkers, students can immerse themselves in an environment that fosters innovation and critical thinking. Learning from esteemed professors and industry leaders, students can develop their skills and thrive in their chosen fields.",
      reasons: [
        "Rich History and Cultural Heritage",
        "World-Class Academia",
        "Cultural Diversity",
        "Industry and Innovation",
        "High-Quality Living Standards",
        "Work-Life Balance",
        "Gateway to Europe",
        "Scholarships and Financial Support",
        "Personal and Professional Growth",
      ],
      facts: [
        {
          key: "capital",
          label: "capital",
          value: "London",
          icon: fact1,
        },
        {
          key: "income",
          label: "Per capita income",
          value: "$46,370 (US Dollar)",
          icon: fact2,
          hasSplit: true,
          splitChar: "(",
        },
        {
          key: "lang",
          label: "Language",
          value: "English",
          icon: fact3,
        },
        {
          key: "happiness",
          label: "Happiness index",
          value: "6.749 (20)",
          icon: fact4,
          hasSplit: true,
          splitChar: "(",
        },
        {
          key: "stuCount",
          label: "International students",
          value: "4.56 lakh",
          icon: fact5,
        },
        {
          key: "uniCount",
          label: "Universities and Colleges",
          value: "359",
          icon: fact6,
        },
        {
          key: "population",
          label: "population",
          value: "6.84Cr.(2023)",
          icon: fact7,
          hasSplit: true,
          splitChar: "(",
        },
        {
          key: "currency",
          label: "currency",
          value: "Pound sterling",
          icon: fact8,
        },
        {
          key: "partTime",
          label: "Part-Time Wage",
          value: "£7 - £19/hour",
          icon: fact9,
          hasSplit: true,
          splitChar: "/",
        },
      ],
    },
    education: {
      universityRankings: [
        {
          name: "Imperial College London",
          ranking2025: 2,
          change: 4,
          ranking2024: 6,
        },
        {
          name: "University of Oxford",
          ranking2025: 3,
          change: 0,
          ranking2024: 3,
        },
        {
          name: "University of Cambridge",
          ranking2025: 5,
          change: -3,
          ranking2024: 2,
        },
        {
          name: "UCL",
          ranking2025: 9,
          change: 0,
          ranking2024: 9,
        },
        {
          name: "The University of Edinburgh",
          ranking2025: 27,
          change: -25,
          ranking2024: 2,
        },
        {
          name: "The University of Manchester",
          ranking2025: 34,
          change: -2,
          ranking2024: 32,
        },
        {
          name: "King's College London",
          ranking2025: 40,
          change: 1,
          ranking2024: 41,
        },
        {
          name: " ",
          ranking2025: 45,
          change: -4,
          ranking2024: 41,
        },
      ],
      partnerUniversities: [
        {
          id: 1,
          name: "University of Bristol",
          location: "Bristol, England",
          image: uniPart1,
          qsRank: 55,
        },
        {
          id: 2,
          name: "University of Glasgow",
          location: "Glasgow, Scotland",
          image: uniPart2,
          qsRank: 55,
        },
        {
          id: 3,
          name: "University of Southampton",
          location: "Southampton, England",
          image: uniPart3,
          qsRank: 55,
        },
        {
          id: 4,
          name: "University of Birmingham",
          location: "Birmingham, England",
          image: uniPart4,
          qsRank: 55,
        },
        {
          id: 5,
          name: "University of Bath",
          location: "Bristol, England",
          image: uniPart5,
          qsRank: 55,
        },
      ],
      topPrograms: [
        {
          id: 1,
          title: "BSc Data Science and Business Analytics",
          degree: "Bachelor's Degree",
          duration: "2 Years 5 Months",
          university: "University Name",
          salary: "$23,00,000 p/a",
          type: "bachelors",
        },
        {
          id: 2,
          title: "BSc Data Science and Business Analytics",
          degree: "Bachelor's Degree",
          duration: "2 Years 5 Months",
          university: "University Name",
          salary: "$23,00,000 p/a",
          type: "bachelors",
        },
        {
          id: 3,
          title: "BSc Data Science and Business Analytics",
          degree: "Bachelor's Degree",
          duration: "2 Years 5 Months",
          university: "University Name",
          salary: "$23,00,000 p/a",
          type: "bachelors",
        },
        {
          id: 4,
          title: "MSc Data Science",
          degree: "Master's Degree",
          duration: "1 Year 6 Months",
          university: "University Name",
          salary: "$35,00,000 p/a",
          type: "masters",
        },
        {
          id: 5,
          title: "PhD in Computer Science",
          degree: "Doctorate",
          duration: "3 Years",
          university: "University Name",
          salary: "$45,00,000 p/a",
          type: "phd",
        },
      ],
      programTypes: ["all", "bachelors", "masters", "phd"],
    },
    admission: {
      requirementsData: [
        {
          id: 1,
          icon: icon1,
          title: "Academic Qualifications",
          description:
            "Hold a recognized secondary school certificate (for undergraduates) or a relevant bachelor's degree (for postgraduates) with satisfactory grades, along with any subject-specific prerequisites.",
        },
        {
          id: 2,
          icon: icon2,
          title: "English Language Proficiency",
          description:
            "Achieve the required scores in tests like IELTS or TOEFL (typically an overall IELTS band of 6.0-7.0) to demonstrate adequate English skills.",
        },
        {
          id: 3,
          icon: icon3,
          title: "SOP",
          description:
            "Submit a compelling essay outlining your academic goals, motivations, and reasons for choosing the UK.",
        },
        {
          id: 4,
          icon: icon4,
          title: "Letters of Recommendation",
          description:
            "Provide one or more academic references from teachers or previous academic supervisors to support your application.",
        },
        {
          id: 5,
          icon: icon5,
          title: "Additional Requirements",
          description:
            "Hold a recognized secondary school certificate (for undergraduates) or a relevant bachelor's degree (for postgraduates) with satisfactory grades, along with any subject-specific prerequisites.",
        },
        {
          id: 6,
          icon: icon6,
          title: "Financial Proof",
          description:
            "Show evidence of sufficient funds to cover tuition fees and living expenses, as required by UK visa regulations.",
        },
      ],
      entranceExamData: [
        {
          id: 1,
          exam: "IELTS",
          fullName: "(International English Language Testing System)",
          criteria: [
            "6.5 overall (with no band less than 6.0).",
            "Higher scores for competitive programs like medicine or law.",
          ],
          requiredFor:
            "Required for most undergraduate and postgraduate programs taught in English.",
        },
        {
          id: 2,
          exam: "TOEFL",
          fullName: "(Test of English as a Foreign Language)",
          criteria: [
            "Minimum required scores typically range from 79-100, depending on the course.",
          ],
          requiredFor:
            "Required for English-taught undergraduate and postgraduate programs.",
        },
        {
          id: 3,
          exam: "PTE Academic",
          fullName: "(Pearson Test of English Academic)",
          criteria: [
            "Typically required scores: 58-65, depending on the university.",
          ],
          requiredFor:
            "Accepted for a wide range of undergraduate and postgraduate programs.",
        },
        {
          id: 4,
          exam: "GMAT",
          fullName: "(Graduate Management Admission Test)",
          criteria: [
            "Required scores: typically between 550-700, depending on the institution.",
          ],
          requiredFor:
            "Required for MBA and postgraduate management-related programs.",
        },
        {
          id: 5,
          exam: "GRE",
          fullName: "(Graduate Record Examinations)",
          criteria: [
            "Scores typically range from 300-320, depending on the institution.",
          ],
          requiredFor:
            "Required for some postgraduate programs, especially in technical fields like engineering and computer science.",
        },
        {
          id: 6,
          exam: "SAT",
          fullName: "(Scholastic Assessment Test)",
          criteria: [
            "Typically requires scores above 1200 for competitive universities.",
          ],
          requiredFor:
            "Required for undergraduate admissions at some UK universities, especially for American curriculum students.",
        },
      ],
    },
    life: {
      cities: ["London", "Oxford", "Cambridge", "Manchester", "Edinburgh"],
      cityStoriesData: {
        London: {
          landmarks: [
            {
              url: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383",
            },
            {
              url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
            },
            {
              url: "https://images.unsplash.com/photo-1486299267070-83823f5448dd",
            },
            {
              url: "https://images.unsplash.com/photo-1602940659805-770d1b3b9911",
            },
          ],
          universities: [
            {
              url: "https://images.unsplash.com/photo-1543505298-b8be9b52a21a",
            },
            {
              url: "https://images.unsplash.com/photo-1591429939960-b7d5add10b5c",
            },
            {
              url: "https://images.unsplash.com/photo-1631193816258-28b94f43ea84",
            },
            {
              url: "https://images.unsplash.com/photo-1596465727821-253ebd5dffc6",
            },
          ],
        },
        Oxford: {
          landmarks: [
            {
              url: "https://images.unsplash.com/photo-1560531516-294aa1bcc84c",
            },
            {
              url: "https://images.unsplash.com/photo-1548231644-3aa15efcbf68",
            },
            {
              url: "https://images.unsplash.com/photo-1580420098304-8561d17b707b",
            },
            {
              url: "https://images.unsplash.com/photo-1608456902986-73a8208e2184",
            },
          ],
          universities: [
            {
              url: "https://images.unsplash.com/photo-1580420098304-8561d17b707b",
            },
            {
              url: "https://images.unsplash.com/photo-1610406716688-989c6a5d39c8",
            },
            {
              url: "https://images.unsplash.com/photo-1591429939960-b7d5add10b5c",
            },
            {
              url: "https://images.unsplash.com/photo-1613145206130-8afc6a11f8ba",
            },
          ],
        },
        Cambridge: {
          landmarks: [
            {
              url: "https://images.unsplash.com/photo-1579960174756-1543a1490266",
            },
            {
              url: "https://images.unsplash.com/photo-1589894404892-7310b92ea7fd",
            },
            {
              url: "https://images.unsplash.com/photo-1579960174756-1543a1490266",
            },
            {
              url: "https://images.unsplash.com/photo-1621853665587-90b88b8d7082",
            },
          ],
          universities: [
            {
              url: "https://images.unsplash.com/photo-1579960174756-1543a1490266",
            },
            {
              url: "https://images.unsplash.com/photo-1579960174756-1543a1490266",
            },
            {
              url: "https://images.unsplash.com/photo-1598867742498-4eba2656104c",
            },
            {
              url: "https://images.unsplash.com/photo-1579960174756-1543a1490266",
            },
          ],
        },
        Manchester: {
          landmarks: [
            {
              url: "https://images.unsplash.com/photo-1583266600419-a569f2393af6",
            },
            {
              url: "https://images.unsplash.com/photo-1610560814085-81ce6aa1578e",
            },
            {
              url: "https://images.unsplash.com/photo-1516542285705-97ca682149a1",
            },
            {
              url: "https://images.unsplash.com/photo-1518984211399-4f3ce2e0594c",
            },
          ],
          universities: [
            {
              url: "https://images.unsplash.com/photo-1577471488278-16eec37ffcc2",
            },

            {
              url: "https://images.unsplash.com/photo-1633177638566-834213a0ced2",
            },
            {
              url: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b",
            },
            {
              url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655",
            },
          ],
        },
        Edinburgh: {
          landmarks: [
            {
              url: "https://images.unsplash.com/photo-1568797629192-150fd85a32be",
            },
            {
              url: "https://images.unsplash.com/photo-1581069272774-2058e6df8c57",
            },
            {
              url: "https://images.unsplash.com/photo-1564604761388-83cf8bb5591c",
            },
            {
              url: "https://images.unsplash.com/photo-1566227283089-e017fcf54d8d",
            },
          ],
          universities: [
            {
              url: "https://images.unsplash.com/photo-1596298501739-b5c0e3689645",
            },

            {
              url: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b",
            },
            {
              url: "https://images.unsplash.com/photo-1571085716425-8a5c9ee645f4",
            },
            {
              url: "https://images.unsplash.com/photo-1596301518082-a9eb4445fbb3",
            },
          ],
        },
      },
      cityImages: {
        London: LandMark1,
        Oxford: LandMark2,
        Cambridge: LandMark1,
        Manchester: LandMark2,
        Edinburgh: LandMark1,
        Birmingham: LandMark2,
        Glasgow: LandMark1,
        Bristol: LandMark2,
        Cardiff: LandMark1,
      },
    },
    workAbroadOpps: {
      visaRoutes: [
        {
          id: 1,
          route: "Graduate route",
          icon: <FaGraduationCap size={20} />,
          color: "#4285F4",
          requirements: [
            "Degree or relevant qualification from a UK Higher Education provider on or after 1 July 2021.",
            "Two-year work visa.",
          ],
        },
        {
          id: 2,
          route: "Skilled worker route",
          icon: <FaBriefcase size={20} />,
          color: "#F4B400",
          requirements: [
            "Require sponsorship by a licensed employer for a specific job that meets minimum salary and skill requirements.",
            "Your salary must be at least £20,960 - or more.",
          ],
        },
        {
          id: 3,
          route: "Start-up route",
          icon: <FaRocket size={20} />,
          color: "#0F9D58",
          requirements: [
            "For those who want to start a business in the UK.",
            "Need an approved business plan endorsed by a Home Office-endorsed body.",
          ],
        },
        {
          id: 4,
          route: "Students' union sabbatical officers",
          icon: <FaUsers size={20} />,
          color: "#DB4437",
          requirements: [
            "Sabbatical officers at UK and overseas establishments or the National Union of Students can stay in the country under the Student route without being required to study.",
            "Permission can be granted for 12 months and extended to up to two years if elected.",
          ],
        },
        {
          id: 5,
          route: "Innovator Founder",
          icon: <FaLightbulb size={20} />,
          color: "#4B0082",
          requirements: [
            "The route is for migrants wanting to start a new, innovative, viable, and scalable business in the UK.",
            "Requires an endorsing body to endorse the business idea.",
          ],
        },
        {
          id: 6,
          route: "India Young Professionals Scheme",
          icon: <FaIdCard size={20} />,
          color: "#00BFFF",
          requirements: [
            "Allows Indian citizens aged 18 to 30 to work and live in the UK for two years.",
            "They must first be selected through the scheme's ballot process.",
          ],
        },
      ],
      topCompaniesData: [
        {
          id: 1,
          city: "London/Greater London",
          industries: [
            {
              name: "Finance, Technology",
              companies: "Barclays, Google, Deloitte, Clifford Chance",
            },
            {
              name: "Finance, Consulting",
              companies: "HSBC, PwC, Bain & Company",
            },
            {
              name: "Technology, Engineering",
              companies: "Microsoft, Dyson, BP",
            },
            {
              name: "Healthcare, Law",
              companies: "GlaxoSmithKline, NHS, Freshfields Bruckhaus Deringer",
            },
            {
              name: "Business, Finance",
              companies: "EY, Lloyd's of London, Accenture",
            },
            {
              name: "Medicine, Law",
              companies: "Barts Health NHS Trust, Norton Rose Fulbright",
            },
            {
              name: "Engineering, Design",
              companies: "Jaguar Land Rover, Siemens, Sony",
            },
          ],
        },
        {
          id: 2,
          city: "Oxford/Oxfordshire",
          industries: [
            {
              name: "Education, Research",
              companies: "Oxford University Press, IBM, Oxford Nanopore",
            },
            {
              name: "Automotive, Publishing",
              companies: "BMW Group, Pearson Education",
            },
          ],
        },
        {
          id: 3,
          city: "Cambridge/Cambridgeshire",
          industries: [
            {
              name: "Technology, Biotech",
              companies: "AstraZeneca, ARM, Microsoft Research",
            },
            {
              name: "Education, Healthcare",
              companies: "Philips Healthcare, Addenbrooke's Hospital",
            },
          ],
        },
        {
          id: 4,
          city: "Manchester/Greater Manchester",
          industries: [
            {
              name: "Media, Technology",
              companies: "BBC, Auto Trader UK, Booking.com",
            },
            {
              name: "Finance, Retail",
              companies: "Co-operative Bank, Boohoo, JD Sports",
            },
          ],
        },
      ],
    },
  },
  us: {
    shortForm: "US",
    fullForm: "United States",
    title: "Study in United States",
    description:
      "Experience cutting-edge education, diverse opportunities, and a vibrant cultural landscape in the United States of America.",
    headerImage: ukHeaderImage, // Replace with appropriate US image
    overview: {
      description:
        "The United States is home to some of the world's top-ranked universities and offers an unmatched educational experience with diverse programs, cutting-edge research facilities, and extensive networking opportunities. American universities are known for their flexible approach to education, allowing students to explore various subjects before specializing. With a strong emphasis on research, innovation, and practical experience, studying in the US prepares students for global career success.",
      reasons: [
        "World-Leading Universities",
        "Diverse Program Options",
        "Cutting-Edge Research Opportunities",
        "Global Recognition of Degrees",
        "Cultural Diversity and Experience",
        "Professional Development",
        "Optional Practical Training",
        "Strong Alumni Networks",
        "Campus Life and Facilities",
      ],
      facts: [
        {
          key: "capital",
          label: "capital",
          value: "Washington D.C.",
          icon: fact1,
        },
        {
          key: "income",
          label: "Per capita income",
          value: "$76,398 (US Dollar)",
          icon: fact2,
          hasSplit: true,
          splitChar: "(",
        },
        {
          key: "lang",
          label: "Language",
          value: "English",
          icon: fact3,
        },
        {
          key: "happiness",
          label: "Happiness index",
          value: "6.977 (15)",
          icon: fact4,
          hasSplit: true,
          splitChar: "(",
        },
        {
          key: "stuCount",
          label: "International students",
          value: "10.14 lakh",
          icon: fact5,
        },
        {
          key: "uniCount",
          label: "Universities and Colleges",
          value: "4,000+",
          icon: fact6,
        },
        {
          key: "population",
          label: "population",
          value: "33.1Cr.(2023)",
          icon: fact7,
          hasSplit: true,
          splitChar: "(",
        },
        {
          key: "currency",
          label: "currency",
          value: "US Dollar",
          icon: fact8,
        },
        {
          key: "partTime",
          label: "Part-Time Wage",
          value: "$15 - $25/hour",
          icon: fact9,
          hasSplit: true,
          splitChar: "/",
        },
      ],
    },
    education: {
      universityRankings: [
        {
          name: "Massachusetts Institute of Technology (MIT)",
          ranking2025: 1,
          change: 0,
          ranking2024: 1,
        },
        {
          name: "Stanford University",
          ranking2025: 4,
          change: 1,
          ranking2024: 5,
        },
        {
          name: "Harvard University",
          ranking2025: 6,
          change: -1,
          ranking2024: 5,
        },
        {
          name: "California Institute of Technology (Caltech)",
          ranking2025: 7,
          change: -1,
          ranking2024: 6,
        },
        {
          name: "University of Chicago",
          ranking2025: 12,
          change: 0,
          ranking2024: 12,
        },
        {
          name: "University of Pennsylvania",
          ranking2025: 15,
          change: 1,
          ranking2024: 16,
        },
        {
          name: "Princeton University",
          ranking2025: 16,
          change: 0,
          ranking2024: 16,
        },
        {
          name: "Yale University",
          ranking2025: 18,
          change: 1,
          ranking2024: 19,
        },
      ],
      partnerUniversities: [
        {
          id: 1,
          name: "Massachusetts Institute of Technology",
          location: "Cambridge, Massachusetts",
          image: uniPart1, // Replace with appropriate US university images
          qsRank: 1,
        },
        {
          id: 2,
          name: "Stanford University",
          location: "Stanford, California",
          image: uniPart2,
          qsRank: 4,
        },
        {
          id: 3,
          name: "Harvard University",
          location: "Cambridge, Massachusetts",
          image: uniPart3,
          qsRank: 6,
        },
        {
          id: 4,
          name: "California Institute of Technology",
          location: "Pasadena, California",
          image: uniPart4,
          qsRank: 7,
        },
        {
          id: 5,
          name: "University of Chicago",
          location: "Chicago, Illinois",
          image: uniPart5,
          qsRank: 12,
        },
      ],
      topPrograms: [
        {
          id: 1,
          title: "BS Computer Science",
          degree: "Bachelor's Degree",
          duration: "4 Years",
          university: "MIT",
          salary: "$120,000 p/a",
          type: "bachelors",
        },
        {
          id: 2,
          title: "BS Artificial Intelligence",
          degree: "Bachelor's Degree",
          duration: "4 Years",
          university: "Stanford University",
          salary: "$135,000 p/a",
          type: "bachelors",
        },
        {
          id: 3,
          title: "MS Data Science",
          degree: "Master's Degree",
          duration: "2 Years",
          university: "Harvard University",
          salary: "$150,000 p/a",
          type: "masters",
        },
        {
          id: 4,
          title: "MS Computer Engineering",
          degree: "Master's Degree",
          duration: "2 Years",
          university: "University of Chicago",
          salary: "$140,000 p/a",
          type: "masters",
        },
        {
          id: 5,
          title: "PhD in Machine Learning",
          degree: "Doctorate",
          duration: "4-5 Years",
          university: "MIT",
          salary: "$180,000 p/a",
          type: "phd",
        },
      ],
      programTypes: ["all", "bachelors", "masters", "phd"],
    },
  },
  // Add more countries as needed
};

export default countryWiseData;

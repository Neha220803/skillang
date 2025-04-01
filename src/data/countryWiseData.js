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
          name: "London School of Economics",
          ranking2025: 45,
          change: -4,
          ranking2024: 41,
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
    },
  },
  // Add more countries as needed
};

export default countryWiseData;

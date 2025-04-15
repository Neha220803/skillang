import "./App.css";
import CustomNavbar from "./components/nav/nav-bar";
import { Routes, Route, useLocation, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/main/home-page";
import NursePage from "./pages/main/nurse-page";
import WorkAboradPage from "./pages/main/work-aborad-page";
import LangTestPage from "./pages/main/lang-test-page";
import StudyAbroadPage from "./pages/main/study-abroad-page";
import FooterSection from "./components/footer/footer";
import LandingNursePage from "./pages/landing/landing-page-nurse";
import LandingStudyAbroadPage from "./pages/landing/landing-page-study";
import LandingWorkAbroadPage from "./pages/landing/landing-page-work";
import CountryPage from "./pages/main/countryPage";
import EducationLoanPage from "./pages/more/education-loan";
import { HelmetProvider } from "react-helmet-async";
import ScholarshipPage from "./pages/more/scholarship-page";
import EventsPage from "./pages/more/events-page";
import TermsPage from "./pages/footer-pages/terms";
import PrivacyPolicyPage from "./pages/footer-pages/terms";
import CountryUniversityPage from "./pages/main/countryUniversityPage";
import SOPAndResumeWritingPage from "./pages/more/sop-and-resume-writing";

function Layout() {
  const location = useLocation(); // Now inside Router context

  const hideNavbarPaths = [
    "/nursing-in-germany",
    "/study-abroad-form",
    "/work-abroad-form",
  ];

  return (
    <>
      {/* Show Navbar only if not on specified Landing Pages */}
      {!hideNavbarPaths.includes(location.pathname) && <CustomNavbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />

        <Route path="/nursing-in-germany" element={<LandingNursePage />} />
        <Route path="/study-abroad-form" element={<LandingStudyAbroadPage />} />
        <Route path="/work-abroad-form" element={<LandingWorkAbroadPage />} />

        <Route path="/nursing" element={<NursePage />} />
        <Route path="/work-abroad" element={<WorkAboradPage />} />
        <Route path="/study-abroad" element={<StudyAbroadPage />} />
        <Route path="/lang-test-prep" element={<LangTestPage />} />

        <Route path="/terms-of-use" element={<TermsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />

        <Route path="/study-in-uk" element={<CountryPage />} />
        <Route path="/country-university" element={<CountryUniversityPage />} />

        <Route path="/education-loan" element={<EducationLoanPage />} />
        <Route path="/scholarships" element={<ScholarshipPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route
          path="/sop-and-resume-writing"
          element={<SOPAndResumeWritingPage />}
        />
      </Routes>
      {/* Show Footer only if not on specified Landing Pages */}
      {!hideNavbarPaths.includes(location.pathname) && <FooterSection />}
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;

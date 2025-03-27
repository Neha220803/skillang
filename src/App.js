import "./App.css";
import CustomNavbar from "./components/nav/nav-bar";
import {
  HashRouter,
  Routes,
  Route,
  useLocation,
  BrowserRouter,
} from "react-router-dom";
import HomePage from "./pages/home-page";
import NursePage from "./pages/nurse-page";
import WorkAboradPage from "./pages/work-aborad-page";
import LangTestPage from "./pages/lang-test-page";
import StudyAbroadPage from "./pages/study-abroad-page";
import FooterSection from "./components/footer/footer";
import LandingNursePage from "./pages/landing-page-nurse";
import LandingStudyAbroadPage from "./pages/landing-page-study";
import LandingWorkAbroadPage from "./pages/landing-page-work";
import TermsPage from "./components/footer/terms/terms";
import PrivacyPolicyPage from "./components/footer/terms/privacyPolicy";
import EducationLoanPage from "./pages/education-loan";

function Layout() {
  const location = useLocation(); // Now inside Router context

  const hideNavbarPaths = [
    "/nursing-in-germany",
    "/study-now-abroad",
    "/work-now-abroad",
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
        <Route path="/education-loan" element={<EducationLoanPage />} />

        <Route path="/terms-of-use" element={<TermsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      </Routes>
      {/* Show Footer only if not on specified Landing Pages */}
      {!hideNavbarPaths.includes(location.pathname) && <FooterSection />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;

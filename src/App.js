import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import CustomNavbar from "./components/nav/nav-bar";
import HomePage from "./pages/home-page";
import NursePage from "./pages/nurse-page";
import WorkAboradPage from "./pages/work-aborad-page";
import LangTestPage from "./pages/lang-test-page";
import StudyAbroadPage from "./pages/study-abroad-page";
import FooterSection from "./components/footer/footer";
import LandingNursePage from "./pages/landing-page-nurse";
import LandingStudyAbroadPage from "./pages/landing-page-study";
import LandingWorkAbroadPage from "./pages/landing-page-work";

const Layout = ({ children }) => {
  const location = useLocation(); // This tracks route changes dynamically
  const hideNavbarPaths = ["/nursing-in-germany", "/study-now-abroad", "/work-now-abroad"];
  const showNavbar = !hideNavbarPaths.includes(location.pathname);

  return (
    <>
      {showNavbar && <CustomNavbar />}
      {children}
      {showNavbar && <FooterSection />}
    </>
  );
};


function App() {
  return (
    <BrowserRouter>
      <Layout>
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
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

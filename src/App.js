import "./App.css";
import CustomNavbar from "./components/nav/nav-bar";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/home-page";
import NursePage from "./pages/nurse-page";
import WorkAboradPage from "./pages/work-aborad-page";
import LangTestPage from "./pages/lang-test-page";
import StudyAbroadPage from "./pages/study-abroad-page";
import FooterSection from "./components/footer/footer";
import LandingNursePage from "./pages/landing-page-nurse";

function Layout() {
  const location = useLocation(); // Now inside Router context

  return (
    <>
      {/* Show Navbar only if not on Landing Page */}
      {location.pathname !== "/nursing-in-germany" && <CustomNavbar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/nursing-in-germany" element={<LandingNursePage />} />
        {/* <Route path="/nursing" element={<NursePage />} />
        <Route path="/work-abroad" element={<WorkAboradPage />} />
        <Route path="/study-abroad" element={<StudyAbroadPage />} />
        <Route path="/lang-test-prep" element={<LangTestPage />} /> */}
      </Routes>

      {location.pathname !== "/nursing-in-germany" && <FooterSection />}

    </>
  );
}

function App() {
  return (
    <HashRouter>
      <Layout />
    </HashRouter>
  );
}

export default App;

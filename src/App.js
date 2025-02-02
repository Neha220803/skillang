import "./App.css";
import CustomNavbar from "./components/nav/nav-bar";
import { HashRouter, Routes, Route, Switch } from "react-router-dom";
import HomePage from "./pages/home-page";
import NursePage from "./pages/nurse-page";
import WorkAboradPage from "./pages/work-aborad-page";
import LangTestPage from "./pages/lang-test-page";
import StudyAbroadPage from "./pages/study-abroad-page";
import FooterSection from "./components/footer/footer";

function App() {
  return (
    <HashRouter>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/nursing" element={<NursePage />} />
        <Route path="/work-abroad" element={<WorkAboradPage />} />
        <Route path="/study-abroad" element={<StudyAbroadPage />} />
        <Route path="/lang-test-prep" element={<LangTestPage />} />
        {/* <Route path="/more" element={<Contact />} /> */}
      </Routes>
      <FooterSection />
    </HashRouter>
  );
}

export default App;

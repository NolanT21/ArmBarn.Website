import HomePage from "./HomePage";
import PrivacyPolicy from "./PrivatePolicy";
import TermsOfService from "./TermsOfService";
import HelpSupport from "./HelpSupport";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return(
    <>
      <BrowserRouter basename = "/directory-name">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/TermsOfService" element={<TermsOfService />} />
          <Route path="/HelpSupport" element={<HelpSupport />} />
        </Routes>
      </BrowserRouter>
    </>
  );

}

export default App

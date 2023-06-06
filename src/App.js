import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SideNavbar from "./components/SideNavbar";
import ContactPage from "./pages/contact/ContactPage";
import HomePage from "./pages/Home/HomePage";
const LeafletMap = lazy(() => import("./pages/LeafletMap"));
//import LeafletMap from "./pages/LeafletMap";

function App() {
  return (
    <BrowserRouter>
    <SideNavbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/contact" element={<ContactPage />} />
        <Route
          path="/leaflet-map"
          element={
            <Suspense fallback={<p>loading...</p>}>
              <LeafletMap />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

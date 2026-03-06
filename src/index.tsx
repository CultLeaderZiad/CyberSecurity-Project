import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProveLanding } from "./screens/ProveLanding/ProveLanding";
import { Cybersecurity } from "./screens/Cybersecurity/Cybersecurity";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProveLanding />} />
        <Route path="/old" element={<Cybersecurity />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

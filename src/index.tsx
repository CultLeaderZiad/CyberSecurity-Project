import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProveLanding } from "./screens/ProveLanding/ProveLanding";
import { Cybersecurity } from "./screens/Cybersecurity/Cybersecurity";
import { NordWacht } from "./screens/NordWacht/NordWacht";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProveLanding />} />
        <Route path="/old" element={<Cybersecurity />} />
        <Route path="/nord-wacht" element={<NordWacht />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

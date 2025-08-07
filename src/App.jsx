import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <>
      {/* 左側固定小企鵝圖標 */}
      <img
        src="/mythoto.png"
        alt="小企鵝"
        className="fixed left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full shadow-lg z-50 bg-white"
        style={{ pointerEvents: 'none' }}
      />
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

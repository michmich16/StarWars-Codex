import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { Films } from "./pages/FilmPage";
import { Character } from "./pages/CharacterPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ModalPage from './components/Modal/Modal';

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Films />} />
              <Route path="/Character" element={<Character />} />
              <Route path="/film/:id" element={<ModalPage />} /> 
            </Route>
          </Routes>
        </Router>
      </QueryClientProvider>
    </>
  );
}

export default App;
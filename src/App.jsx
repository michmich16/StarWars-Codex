import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MainLayout } from "./layouts/MainLayout";
import { Films } from "./pages/FilmPage";
import { CharacterPage } from "./pages/CharacterPage";
import { CharacterModal } from "./components/CharacterModal/CharacterModal";
import './App.scss'

function App() {
  const queryClient = new QueryClient();

  return (
    <>
    <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Films />} />
              <Route path="/characters" element={<CharacterPage/>} />
              <Route path="/person/:id" element={<CharacterModal />} /> 
            </Route>
          </Routes>
        </Router>
      </QueryClientProvider>
    </>
  )
}

export default App

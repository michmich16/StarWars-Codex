import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CharacterPage } from './pages/CharacterPage'
import './App.scss'

function App() {

  return (
    <>
    <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<FilmPage />} />
              <Route path="/characters" element={<CharacterPage/>} />
            </Route>
          </Routes>
        </Router>
      </QueryClientProvider>
    </>
  )
}

export default App

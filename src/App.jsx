import Homepage from './pages/homepage.jsx'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { createContext } from 'react';
import NotFound from './pages/404'
export const AppContext = createContext();
function App() {
  const savedTheme = localStorage.getItem("theme");
    const [theme, setTheme] = useState(savedTheme || "dark");
useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");

        localStorage.setItem("theme", theme);
    }, [theme]);
    const switchTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };
  return (
    <AppContext.Provider value={{ theme, switchTheme }}>
     <BrowserRouter>
				<Routes>
					<Route path="/portfolio/" element={<Homepage />} />
					<Route path="/portfolio/*" element={<NotFound/>} />
				</Routes>
			</BrowserRouter>
    </AppContext.Provider>
  )
}

export default App

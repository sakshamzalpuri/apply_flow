import { Routes, Route } from 'react-router-dom'
import { Navbar } from "./components/Navbar";

import OverviewPage from './pages/OverviewPage'
import ApplicationsPage from './pages/ApplicationsPage'
import SettingsPage from './pages/SettingsPage'
import './App.css'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<OverviewPage />} />
          <Route path="/applications" element={<ApplicationsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </main>
    </>
  )
}
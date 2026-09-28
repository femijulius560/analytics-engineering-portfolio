import { Route, Routes } from 'react-router-dom'
import SiteLayout from './components/SiteLayout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import SpongeMetrics from './pages/projects/SpongeMetrics.jsx'
import ProfitOptimiser from './pages/projects/ProfitOptimiser.jsx'
import ClaimIQ from './pages/projects/ClaimIQ.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects/sponge-metrics" element={<SpongeMetrics />} />
        <Route path="/projects/profit-optimiser" element={<ProfitOptimiser />} />
        <Route path="/projects/claimiq" element={<ClaimIQ />} />
      </Route>
    </Routes>
  )
}

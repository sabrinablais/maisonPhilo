import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-primary-500/80 backdrop-blur border-b border-primary-900/20">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Logo Maison Philo" className="h-10 w-10 object-contain" />
          <div className="flex flex-col">
            <span className="font-semibold text-navy">Maison Philo Montérégie</span>
            <span className="text-xs text-navy/70">Vallée du Richelieu</span>
          </div>
        </div>
        <div className="hidden md:flex gap-4 text-sm font-medium text-navy">
          <Link to="/" className="hover:underline">Accueil</Link>
          <Link to="/activites" className="hover:underline">Activités</Link>
          <button className="hover:underline">Ressources</button>
          <button className="hover:underline">FAQ</button>
          <button className="hover:underline">Contact</button>
        </div>
      </div>
    </nav>
  );
}
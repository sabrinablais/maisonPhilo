import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-primary-50 text-navy">
      <Navbar />

      {/* Hero + intro */}
      <main className="max-w-5xl mx-auto px-4 py-16 space-y-16">
        <section className="text-center space-y-4 pt-16 pb-20">
  <h1 className="text-4xl md:text-5xl font-serif font-bold">
    Maison Philo Montérégie
  </h1>
  <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-800">
    Lieu vivant de réflexion, de dialogue et de rencontre
    dans la Vallée du Richelieu.
  </p>
  <p className="text-sm md:text-base max-w-xl mx-auto text-gray-700">
    Ateliers, ciné-philo et rencontres intergénérationnelles autour
    des grandes questions de l’existence.
  </p>
</section>
<section className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto pb-20 px-2">
  <div className="bg-white/80 rounded-2xl shadow-sm p-6 hover:-translate-y-1 hover:shadow-md transition">
    <h2 className="text-xl font-semibold mb-2">Qu’est-ce que la Maison Philo ?</h2>
    <p className="text-sm text-gray-800 mb-3">
      Un espace inclusif et intergénérationnel pour penser ensemble,
      développer la pensée critique et partager le sens.
    </p>
    <button className="text-sm text-navy underline">
      En savoir plus
    </button>
  </div>

  <div className="bg-white/80 rounded-2xl shadow-sm p-6 hover:-translate-y-1 hover:shadow-md transition">
    <h2 className="text-xl font-semibold mb-2">Activités et services</h2>
    <p className="text-sm text-gray-800 mb-3">
      Ateliers philo, ciné-philo, conférences, activités art-philo
      et formations à l’animation pour tous les âges.
    </p>
    <button className="text-sm text-navy underline">
      Découvrir les activités
    </button>
  </div>

  <div className="bg-white/80 rounded-2xl shadow-sm p-6 hover:-translate-y-1 hover:shadow-md transition">
    <h2 className="text-xl font-semibold mb-2">Pour qui ?</h2>
    <p className="text-sm text-gray-800 mb-3">
      Enfants, ados, adultes, aînés, écoles, organismes
      communautaires et institutions culturelles.
    </p>
    <button className="text-sm text-navy underline">
      Voir à qui ça s’adresse
    </button>
  </div>
</section>
<section className="max-w-4xl mx-auto pb-24 px-4">
  <div className="bg-primary-500/20 border border-primary-500/40 rounded-2xl p-6 md:p-8">
    <h2 className="text-2xl font-serif font-semibold mb-3">
      Philosopher dans la cité
    </h2>
    <p className="text-sm md:text-base text-gray-800">
      Nous croyons que la philosophie, lorsqu’elle quitte les institutions
      pour s’ancrer dans la vie quotidienne, retrouve toute sa vitalité.
      Présente dans les débats, les lieux de rencontre et les échanges
      citoyens, elle éclaire les enjeux sociaux, politiques, culturels
      et humains de notre temps.
    </p>
  </div>
</section>
      </main>
    </div>
  );
}

export default App;
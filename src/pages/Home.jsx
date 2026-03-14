export default function Home() {
  return (
    <main className="min-h-[calc(100vh-64px)] bg-gradient-to-b from-primary-50 to-white">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 pt-16 pb-20 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <span className="inline-flex px-3 py-1 text-xs font-semibold rounded-full bg-primary-500/30 text-navy">
            Lieu de réflexion intergénérationnel
          </span>

          <h1 className="text-3xl md:text-5xl font-serif font-bold text-navy leading-tight">
            Maison Philo Montérégie
          </h1>

          <p className="text-sm md:text-base text-gray-800">
            Lieu vivant de réflexion, de dialogue et de rencontre dans la Vallée du Richelieu,
            ouvert à toutes les générations.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="/activites"
              className="px-5 py-2.5 rounded-full bg-navy text-white text-sm font-medium hover:bg-primary-900 transition"
            >
              Découvrir les activités
            </a>
            <a
              href="#pourquoi"
              className="px-5 py-2.5 rounded-full border border-navy/30 text-sm font-medium text-navy hover:bg-primary-500/20 transition"
            >
              Pourquoi la Maison Philo ?
            </a>
          </div>
        </div>

        {/* Right side block */}
        <div className="bg-white/80 border border-primary-500/40 rounded-2xl p-6 md:p-8 shadow-sm space-y-3">
          <h2 className="text-lg md:text-xl font-semibold text-navy">
            Penser ensemble, autrement
          </h2>
          <p className="text-sm text-gray-800">
            Ateliers, ciné-philo, conférences, activités d’art-philosophie et projets
            collaboratifs pour explorer les grandes questions de l’existence.
          </p>
          <p className="text-xs text-gray-700">
            La Maison Philo est un espace inclusif, chaleureux et intergénérationnel
            où chaque voix compte.
          </p>
        </div>
      </section>

      {/* Three cards row */}
      <section className="max-w-5xl mx-auto px-4 pb-16 grid md:grid-cols-3 gap-6">
        <div className="bg-white/80 rounded-2xl shadow-sm p-5 hover:-translate-y-1 hover:shadow-md transition">
          <h3 className="text-base font-semibold mb-2 text-navy">
            Qu’est-ce que la Maison Philo ?
          </h3>
          <p className="text-xs text-gray-800">
            Un lieu où la philosophie sort des institutions pour s’ancrer dans la vie
            quotidienne et les échanges humains.
          </p>
        </div>

        <div className="bg-white/80 rounded-2xl shadow-sm p-5 hover:-translate-y-1 hover:shadow-md transition">
          <h3 className="text-base font-semibold mb-2 text-navy">
            Pour qui ?
          </h3>
          <p className="text-xs text-gray-800">
            Enfants, adolescents, adultes, aînés, écoles, organismes communautaires
            et institutions culturelles.
          </p>
        </div>

        <div className="bg-white/80 rounded-2xl shadow-sm p-5 hover:-translate-y-1 hover:shadow-md transition" id="pourquoi">
          <h3 className="text-base font-semibold mb-2 text-navy">
            Pourquoi la philosophie dans la cité ?
          </h3>
          <p className="text-xs text-gray-800">
            Pour éclairer les enjeux sociaux, politiques, culturels et humains de notre temps,
            et nourrir une société plus consciente et engagée.
          </p>
        </div>
      </section>
    </main>
  );
}
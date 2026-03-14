export default function Home() {
  return (
    <main className="bg-gradient-to-b from-primary-50 to-white text-navy">
      {/* Full-screen logo hero */}
      <section className="h-screen flex flex-col items-center justify-center">
        <img
        src="/logo-big.png"
        alt="Maison Philo Montérégie"
        className="w-64 h-64 md:w-80 md:h-80 object-contain mb-6"
        />

        <h1 className="text-2xl md:text-3xl font-serif font-bold text-center">
          Maison Philosophique Montérégie
        </h1>
        <p className="mt-3 text-sm md:text-base text-center max-w-md text-gray-800">
          Lieu vivant de réflexion, de dialogue et de rencontre
          dans la Vallée du Richelieu.
        </p>
        <a
          href="#intro"
          className="mt-6 px-5 py-2.5 rounded-full bg-navy text-white text-sm font-medium hover:bg-primary-900 transition"
        >
          Entrer dans la Maison Philo
        </a>
      </section>

      {/* Main hero with text and card */}
      <section
        id="intro"
        className="max-w-5xl mx-auto px-4 pt-16 pb-20 grid md:grid-cols-2 gap-10 items-center"
      >
        <div className="space-y-6">
          <span className="inline-flex px-3 py-1 text-xs font-semibold rounded-full bg-primary-500/30">
            Lieu de réflexion intergénérationnel
          </span>

          <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight">
            Penser ensemble, autrement
          </h2>

          <p className="text-sm md:text-base text-gray-800">
            Ateliers, ciné-philo, conférences, activités d’art-philosophie et projets
            collaboratifs pour explorer les grandes questions de l’existence.
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
              className="px-5 py-2.5 rounded-full border border-navy/30 text-sm font-medium hover:bg-primary-500/20 transition"
            >
              Pourquoi la philosophie ?
            </a>
          </div>
        </div>

        <div className="bg-white/80 border border-primary-500/40 rounded-2xl p-6 md:p-8 shadow-sm space-y-3">
          <h3 className="text-lg md:text-xl font-semibold">
            Une maison pour toutes les générations
          </h3>
          <p className="text-sm text-gray-800">
            Enfants, adolescents, adultes et aînés se retrouvent pour échanger,
            questionner et réfléchir ensemble, dans un cadre bienveillant.
          </p>
          <p className="text-xs text-gray-700">
            Chaque voix compte et chaque idée mérite d’être entendue.
          </p>
        </div>
      </section>

      {/* Three small cards further down */}
      <section className="max-w-5xl mx-auto px-4 pb-24 grid md:grid-cols-3 gap-6" id="pourquoi">
        <div className="bg-white/80 rounded-2xl shadow-sm p-5 hover:-translate-y-1 hover:shadow-md transition">
          <h3 className="text-base font-semibold mb-2">
            Qu’est-ce que la Maison Philo ?
          </h3>
          <p className="text-xs text-gray-800">
            Un lieu où la philosophie sort des institutions pour s’ancrer
            dans la vie quotidienne et les échanges humains.
          </p>
        </div>

        <div className="bg-white/80 rounded-2xl shadow-sm p-5 hover:-translate-y-1 hover:shadow-md transition">
          <h3 className="text-base font-semibold mb-2">
            Pour qui ?
          </h3>
          <p className="text-xs text-gray-800">
            Citoyennes et citoyens de tous âges, écoles, organismes
            communautaires et institutions culturelles.
          </p>
        </div>

        <div className="bg-white/80 rounded-2xl shadow-sm p-5 hover:-translate-y-1 hover:shadow-md transition">
          <h3 className="text-base font-semibold mb-2">
            Philosopher dans la cité
          </h3>
          <p className="text-xs text-gray-800">
            Une philosophie ancrée dans la vie quotidienne pour éclairer
            les enjeux sociaux, politiques, culturels et humains.
          </p>
        </div>
      </section>
    </main>
  );
}
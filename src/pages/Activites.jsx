const activites = [
  {
    title: "Club de lecture",
    text: "Sujets et livres variés pour explorer des idées philosophiques ensemble."
  },
  {
    title: "Ateliers philo",
    text: "Pour aînés, enfants, adolescents et adultes, sur différents thèmes."
  },
  {
    title: "Ciné-philo",
    text: "Projections de films suivies de discussions guidées."
  },
  {
    title: "Conférences",
    text: "Conférences existantes ou sur mesure sur des enjeux contemporains."
  },
  {
    title: "Rencontres intergénérationnelles",
    text: "Échanges entre générations autour de thèmes philosophiques."
  },
  {
    title: "Activités art-philo",
    text: "Création artistique et réflexion pour penser avec les mains et la tête."
  },
  {
    title: "Formations à l’animation",
    text: "Se former à animer des discussions philosophiques."
  }
];

export default function Activites() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12 space-y-8">
      <header className="space-y-3 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-serif font-bold">
          Activités et services
        </h1>
        <p className="text-sm md:text-base text-gray-800 max-w-2xl mx-auto md:mx-0">
          La Maison Philo propose une variété d’activités pour tous les âges :
          ateliers, ciné-philo, conférences, activités art-philo et formations.
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-6">
        {activites.map((a) => (
          <article
            key={a.title}
            className="bg-white/80 rounded-2xl shadow-sm p-5 hover:-translate-y-1 hover:shadow-md transition"
          >
            <h2 className="text-lg font-semibold mb-2">{a.title}</h2>
            <p className="text-sm text-gray-800">{a.text}</p>
          </article>
        ))}
      </section>

      <section className="mt-6 text-xs md:text-sm text-gray-700">
        <p>
          Nos services s’adressent aux citoyen·nes, aux écoles, aux organismes
          communautaires et aux institutions culturelles.
        </p>
      </section>
    </main>
  );
}
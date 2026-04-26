export default function AboutPage() {
  return (
    <div className="bg-brand-cream min-h-screen">
      {/* Header */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl font-serif text-gray-900 mb-8">Dedicated to Quality Care</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Founded with a mission to raise the standard of behavioral support in New Jersey, Pristine Care NJ has grown into a trusted partner for families and individuals.
            </p>
          </div>
        </div>
      </section>

      {/* Mission/Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-serif mb-6 text-brand-green">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To provide exceptional, evidence-based behavioral and community-based services that empower individuals with developmental disabilities to live fulfilling, independent lives. We strive to be the bridge between potential and achievement.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-serif mb-6 text-brand-orange">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                A world where every individual, regardless of their behavioral challenges, is fully integrated into their community, respected for their unique contributions, and supported by a network of compassionate professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif text-center mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Compassion", desc: "We lead with empathy in every interaction." },
              { title: "Excellence", desc: "We hold ourselves to the highest clinical and ethical standards." },
              { title: "Integrity", desc: "Honesty and transparency are the foundations of our trust." },
              { title: "Empowerment", desc: "We focus on building skills and independence." }
            ].map((value, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 text-center">
                <h3 className="text-xl font-bold mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

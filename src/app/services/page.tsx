export default function ServicesPage() {
  const services = [
    {
      id: "behavioral",
      title: "Behavioral Support Services",
      description: "Our behavioral support services are designed to help individuals develop positive replacement behaviors and reduce challenging ones. We use evidence-based approaches (including ABA techniques) tailored to the specific needs of each individual.",
      features: [
        "Functional Behavioral Assessments (FBA)",
        "Individualized Behavior Support Plans",
        "Direct Support & Intervention",
        "Parent and Caregiver Training",
        "Crisis Intervention Strategies"
      ],
      icon: "🧠"
    },
    {
      id: "community",
      title: "Community Care & Integration",
      description: "We believe everyone deserves to be an active part of their community. Our community care services focus on building the skills necessary for independence and social participation.",
      features: [
        "Social Skills Development",
        "Community Resource Navigation",
        "Daily Living Skills Training",
        "Transportation Assistance",
        "Social & Recreational Support"
      ],
      icon: "🏘️"
    }
  ];

  return (
    <div className="bg-brand-cream min-h-screen">
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-20">
            <h1 className="text-5xl lg:text-6xl font-serif text-gray-900 mb-8">Our Services</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              At Pristine Care NJ, we provide holistic, person-centered support designed to foster growth, independence, and well-being.
            </p>
          </div>

          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className={`lg:flex items-center gap-16 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2 mb-12 lg:mb-0">
                  <div className="text-6xl mb-8">{service.icon}</div>
                  <h2 className="text-4xl font-serif text-gray-900 mb-6">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <span className="text-brand-green mr-3 text-xl">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:w-1/2">
                  <div className="bg-white rounded-[3rem] p-12 aspect-[4/3] flex items-center justify-center border border-gray-100 shadow-sm">
                    <div className="w-full h-full bg-gray-50 rounded-[2rem] flex items-center justify-center text-gray-300 italic">
                       Service Illustration
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-brand-orange text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">Our Approach</h2>
          <p className="text-xl md:text-2xl leading-relaxed opacity-90 italic">
            "We don't just provide care; we build relationships. Our goal is to see every individual we support reaching their highest potential and living a life of dignity and purpose."
          </p>
        </div>
      </section>
    </div>
  );
}

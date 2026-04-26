import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-brand-cream py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="max-w-2xl">
              <h1 className="text-5xl lg:text-7xl font-serif text-gray-900 leading-tight mb-6">
                Compassionate Care for a <span className="text-brand-orange">Brighter</span> Future.
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Pristine Care NJ provides specialized behavioral support and community-based services designed to empower individuals and families.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/services" className="bg-brand-orange text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-opacity-90 transition-all text-center">
                  Our Services
                </Link>
                <Link href="/contact" className="bg-white border-2 border-brand-green text-brand-green px-8 py-4 rounded-full text-lg font-medium hover:bg-brand-green hover:text-white transition-all text-center">
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="hidden lg:block relative">
               <div className="aspect-square bg-brand-green/10 rounded-[4rem] flex items-center justify-center p-12">
                  <div className="w-full h-full bg-brand-green/20 rounded-[3rem] animate-pulse"></div>
               </div>
               <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs">
                  <p className="font-serif text-brand-orange text-xl mb-1">98% Satisfaction</p>
                  <p className="text-gray-500 text-sm">From the families we serve across New Jersey.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust/Services Highlights */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Support Tailored to Your Needs</h2>
            <p className="text-gray-600 text-lg">We offer a range of professional services focused on behavioral health and community integration.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Behavioral Support",
                desc: "Expert guidance and evidence-based strategies to manage challenging behaviors and promote positive outcomes.",
                icon: "🤝",
                color: "bg-orange-50"
              },
              {
                title: "Community Care",
                desc: "Helping individuals navigate and thrive within their local communities through personalized assistance and integration.",
                icon: "🏘️",
                color: "bg-green-50"
              },
              {
                title: "Individualized Plans",
                desc: "Every person is unique. We develop custom care plans that respect individual goals and family dynamics.",
                icon: "📋",
                color: "bg-blue-50"
              }
            ].map((service, i) => (
              <div key={i} className="p-10 rounded-[2rem] bg-brand-cream border border-gray-100 hover:shadow-lg transition-shadow">
                <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center text-3xl mb-8`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-serif mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.desc}</p>
                <Link href="/services" className="text-brand-orange font-bold text-sm uppercase tracking-wider hover:underline">Learn More →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-green text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 rounded-[3rem] p-12 md:p-20 relative">
             <div className="max-w-2xl relative z-10">
                <h2 className="text-4xl md:text-5xl font-serif mb-8">Ready to start your journey with us?</h2>
                <p className="text-xl text-green-50 mb-10 opacity-90">
                  Our team is ready to provide the support and guidance your family deserves. Reach out today for a consultation.
                </p>
                <Link href="/contact" className="inline-block bg-brand-orange text-white px-10 py-5 rounded-full text-xl font-medium hover:scale-105 transition-transform">
                  Contact Us Now
                </Link>
             </div>
             <div className="absolute right-0 bottom-0 top-0 w-1/3 hidden lg:block opacity-20">
                <div className="w-full h-full bg-white rotate-12 translate-x-20 rounded-[5rem]"></div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}

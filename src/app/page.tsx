import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-brand-cream py-20 lg:py-32 overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-green/5 -skew-x-12 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-orange/5 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center space-x-2 bg-brand-orange/10 px-4 py-2 rounded-full mb-8">
                <span className="flex h-2 w-2 rounded-full bg-brand-orange animate-ping"></span>
                <span className="text-brand-orange text-sm font-bold uppercase tracking-widest">Now Accepting New Referrals</span>
              </div>
              <h1 className="text-6xl lg:text-8xl font-serif text-gray-900 leading-[1.1] mb-8">
                Care with <span className="text-brand-orange italic">Heart</span>, Built on <span className="text-brand-green italic">Trust</span>.
              </h1>
              <p className="text-2xl text-gray-600 mb-12 leading-relaxed font-light">
                Pristine Care NJ offers specialized behavioral support and community-based services designed to empower individuals across New Jersey.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <Link href="/services" className="bg-brand-orange text-white px-10 py-5 rounded-full text-lg font-bold shadow-lg shadow-brand-orange/20 hover:shadow-brand-orange/40 hover:-translate-y-1 transition-all text-center">
                  Explore Services
                </Link>
                <Link href="/contact" className="bg-transparent border-2 border-brand-green text-brand-green px-10 py-5 rounded-full text-lg font-bold hover:bg-brand-green hover:text-white transition-all text-center">
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="hidden lg:block relative">
               <div className="relative z-10 aspect-[4/5] rounded-[4rem] shadow-2xl overflow-hidden border-8 border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=1200" 
                    alt="Compassionate Caregiving" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
               </div>
               {/* Floating Badge */}
               <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl z-20 max-w-xs border-t-4 border-brand-green">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex -space-x-2">
                      {['👩‍⚕️','👨‍🦽','🤝','👨‍👩‍👦'].map((emoji, i) => <div key={i} className="w-10 h-10 rounded-full bg-brand-green/10 border-2 border-white flex items-center justify-center text-lg">{emoji}</div>)}
                    </div>
                    <p className="text-gray-900 font-bold text-lg leading-tight">50+ Families Served</p>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">Providing professional behavioral support throughout NJ communities.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust/Services Highlights */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-brand-green font-bold uppercase tracking-widest text-sm mb-4">Our Expertise</h2>
              <h2 className="text-4xl md:text-6xl font-serif leading-tight">Specialized Care for Unique Journeys</h2>
            </div>
            <div className="max-w-md">
              <p className="text-gray-500 text-lg leading-relaxed">We don't believe in one-size-fits-all. Our approach is rooted in individual dignity, family integration, and evidence-based results.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Behavioral Support",
                desc: "Strategic, evidence-based interventions to manage challenging behaviors and foster positive development.",
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>,
                color: "bg-brand-orange/10 text-brand-orange"
              },
              {
                title: "Community Care",
                desc: "Integrated assistance programs designed to help individuals engage with and thrive in their local NJ communities.",
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>,
                color: "bg-brand-green/10 text-brand-green"
              },
              {
                title: "Resilience Focused",
                desc: "Building the skills and support systems necessary for long-term stability and personal growth.",
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>,
                color: "bg-brand-cream text-gray-700"
              }
            ].map((service, i) => (
              <div key={i} className="group p-12 rounded-[3rem] bg-brand-cream hover:bg-white border-2 border-transparent hover:border-brand-green/20 transition-all duration-500 shadow-sm hover:shadow-2xl hover:-translate-y-2">
                <div className={`w-20 h-20 ${service.color} rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500`}>
                  {service.icon}
                </div>
                <h3 className="text-3xl font-serif mb-6">{service.title}</h3>
                <p className="text-gray-500 text-lg leading-relaxed mb-8">{service.desc}</p>
                <Link href="/services" className="inline-flex items-center text-brand-orange font-bold text-sm uppercase tracking-widest group-hover:mr-2 transition-all">
                  Learn More <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-brand-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="aspect-square rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=1200" 
                  alt="Community Support and Interaction" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-brand-green/10 rounded-full blur-3xl"></div>
              <h2 className="text-5xl md:text-7xl font-serif leading-tight mb-12 relative z-10">
                Pristine standards. <br/>
                <span className="text-brand-green italic">Personal</span> care.
              </h2>
              <div className="space-y-12 relative z-10">
                {[
                  { q: "Our Mission", a: "To provide the highest quality of professional care that respects the dignity of every individual." },
                  { q: "Our Vision", a: "Creating a New Jersey where every person has the support they need to reach their full potential." }
                ].map((item, i) => (
                  <div key={i} className="border-l-4 border-brand-orange pl-8">
                    <h4 className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-3">{item.q}</h4>
                    <p className="text-xl text-gray-700 font-light">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-[4rem] p-16 shadow-xl border border-gray-100">
               <img src="/logo.svg" alt="Pristine Care NJ" className="w-24 h-24 mb-10" />
               <p className="text-2xl text-gray-600 leading-relaxed mb-12 font-light italic">
                 "We founded Pristine Care NJ because we believe every family deserves a partner who is as invested in their success as they are. Our team brings professional expertise and genuine heart to every home."
               </p>
               <div className="flex items-center space-x-6">
                 <div className="w-16 h-16 rounded-full bg-brand-orange/20"></div>
                 <div>
                   <p className="font-bold text-xl">The Pristine Care Team</p>
                   <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">CEO & Founder</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-green rounded-[4rem] p-12 md:p-32 text-center relative overflow-hidden shadow-2xl">
            {/* Decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-5xl md:text-7xl font-serif text-white leading-tight mb-12">
                Ready to transform your family's future?
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8">
                <Link href="/contact" className="bg-brand-orange text-white px-12 py-6 rounded-full text-xl font-bold shadow-2xl hover:scale-105 hover:bg-white hover:text-brand-orange transition-all">
                  Contact Us Today
                </Link>
                <div className="text-left">
                  <p className="text-white/70 text-sm uppercase tracking-widest mb-1">Call us directly</p>
                  <p className="text-white text-2xl font-bold">908-414-9880</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


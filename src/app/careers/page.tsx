export default function CareersPage() {
  const openings = [
    {
      title: "Behavioral Technician",
      type: "Full-time / Part-time",
      location: "Northern NJ",
      description: "Work directly with individuals to implement behavior support plans and foster skill development."
    },
    {
      title: "BCBA (Board Certified Behavior Analyst)",
      type: "Full-time",
      location: "Remote/Field-based (NJ)",
      description: "Develop behavior plans, conduct FBAs, and supervise technicians in the field."
    },
    {
      title: "Community Support Professional",
      type: "Part-time",
      location: "Various Locations, NJ",
      description: "Support individuals in community settings, helping them achieve social and independence goals."
    }
  ];

  return (
    <div className="bg-brand-cream min-h-screen">
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-20">
            <h1 className="text-5xl lg:text-6xl font-serif text-gray-900 mb-8">Join Our Team</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Are you passionate about making a real difference in people's lives? At Pristine Care NJ, we're always looking for dedicated professionals to join our growing family.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-serif mb-8">Open Positions</h2>
              {openings.map((job, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 hover:border-brand-green transition-colors cursor-pointer group">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold group-hover:text-brand-green">{job.title}</h3>
                    <span className="text-xs font-bold uppercase bg-brand-cream px-3 py-1 rounded-full text-gray-500">{job.type}</span>
                  </div>
                  <p className="text-sm text-gray-400 mb-4">{job.location}</p>
                  <p className="text-gray-600 mb-6">{job.description}</p>
                  <button className="text-brand-orange font-bold text-sm">Apply Now →</button>
                </div>
              ))}
            </div>

            <div className="bg-brand-green text-white p-12 rounded-[3rem] h-fit">
              <h2 className="text-3xl font-serif mb-6">Why Work With Us?</h2>
              <ul className="space-y-6">
                {[
                  { t: "Supportive Culture", d: "We value our staff as much as our clients." },
                  { t: "Professional Growth", d: "Ongoing training and supervision for certification." },
                  { t: "Competitive Pay", d: "Excellent rates and comprehensive benefits for FT." },
                  { t: "Flexible Scheduling", d: "Work hours that fit your lifestyle." }
                ].map((item, i) => (
                  <li key={i} className="border-b border-white/20 pb-6 last:border-0 last:pb-0">
                    <h4 className="font-bold text-lg mb-1">{item.t}</h4>
                    <p className="opacity-80 text-sm">{item.d}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

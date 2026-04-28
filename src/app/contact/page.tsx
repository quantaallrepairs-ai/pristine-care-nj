"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formType, setFormType] = useState("general"); // 'general' or 'referral'

  return (
    <div className="bg-brand-cream min-h-screen">
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-24">
            <div>
              <h1 className="text-5xl lg:text-6xl font-serif text-gray-900 mb-8">Let's Connect</h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-12">
                Have questions about our services or want to make a referral? Our team is here to help you navigate the process.
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Call Us</h3>
                  <p className="text-2xl font-serif text-gray-900">908-414-9880</p>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Email Us</h3>
                  <p className="text-2xl font-serif text-gray-900">zedzed@pristinecarenj.com</p>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Location</h3>
                  <p className="text-2xl font-serif text-gray-900">20 Begonia Ct, <br/>Sayreville, NJ 08872</p>
                </div>
              </div>
            </div>

            <div className="mt-16 lg:mt-0">
              <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-sm border border-gray-100">
                <div className="flex space-x-4 mb-10 p-1 bg-brand-cream rounded-full">
                  <button
                    onClick={() => setFormType("general")}
                    className={`flex-1 py-3 px-6 rounded-full text-sm font-bold transition-all ${
                      formType === "general" ? "bg-white text-brand-orange shadow-sm" : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    Inquiry
                  </button>
                  <button
                    onClick={() => setFormType("referral")}
                    className={`flex-1 py-3 px-6 rounded-full text-sm font-bold transition-all ${
                      formType === "referral" ? "bg-white text-brand-orange shadow-sm" : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    Referral Form
                  </button>
                </div>

                <form className="space-y-6">
                  {formType === "general" ? (
                    <>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                          <input type="text" className="w-full bg-brand-cream border-transparent rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-orange outline-none transition-all" placeholder="John" />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                          <input type="text" className="w-full bg-brand-cream border-transparent rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-orange outline-none transition-all" placeholder="Doe" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                        <input type="email" className="w-full bg-brand-cream border-transparent rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-orange outline-none transition-all" placeholder="john@example.com" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                        <textarea rows={4} className="w-full bg-brand-cream border-transparent rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-orange outline-none transition-all" placeholder="How can we help?"></textarea>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="space-y-6">
                        <p className="text-sm text-gray-500 italic mb-4">Please provide details for the individual needing support.</p>
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">Referrer Name</label>
                          <input type="text" className="w-full bg-brand-cream border-transparent rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-orange outline-none transition-all" />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">Client Initials / Age</label>
                          <input type="text" className="w-full bg-brand-cream border-transparent rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-orange outline-none transition-all" />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">Type of Service Needed</label>
                          <select className="w-full bg-brand-cream border-transparent rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-orange outline-none transition-all">
                            <option>Behavioral Support</option>
                            <option>Community Integration</option>
                            <option>Residential Services</option>
                            <option>Other</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">Brief Summary of Needs</label>
                          <textarea rows={3} className="w-full bg-brand-cream border-transparent rounded-xl px-4 py-3 focus:ring-2 focus:ring-brand-orange outline-none transition-all"></textarea>
                        </div>
                      </div>
                    </>
                  )}
                  <button type="submit" className="w-full bg-brand-orange text-white py-4 rounded-xl font-bold hover:bg-opacity-90 transition-all">
                    {formType === "general" ? "Send Inquiry" : "Submit Referral"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

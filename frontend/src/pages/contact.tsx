import React, { useState } from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    leadType: '',
    quantity: '',
    requirements: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        leadType: '',
        quantity: '',
        requirements: '',
      });
    }, 3000);
  };

  return (
    <Layout title="Contact | Moducraft" description="Get in touch with our team for custom furniture solutions and consultation.">
      <Hero title="Let's Connect" description="Have a question or ready to start your project? Reach out to our team." dark={false} />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-parchment p-8 rounded-md">
              <Phone className="w-8 h-8 text-moduwood mb-4" />
              <h3 className="font-sora text-lg font-bold text-slate mb-2">Phone</h3>
              <p className="text-charcoal/70">+91 (581) 282-3222</p>
            </div>
            <div className="bg-parchment p-8 rounded-md">
              <Mail className="w-8 h-8 text-moduwood mb-4" />
              <h3 className="font-sora text-lg font-bold text-slate mb-2">Email</h3>
              <p className="text-charcoal/70">hello@moducraft.in</p>
            </div>
            <div className="bg-parchment p-8 rounded-md">
              <MapPin className="w-8 h-8 text-moduwood mb-4" />
              <h3 className="font-sora text-lg font-bold text-slate mb-2">Location</h3>
              <p className="text-charcoal/70">Jaipur, India</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-slate mb-6">Get a Free Quote</h2>
              {submitted ? (
                <div className="bg-green-100 border border-green-400 rounded-md p-6">
                  <p className="text-green-800 font-semibold">Thank you for reaching out! We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-moduwood"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-moduwood"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-moduwood"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-moduwood"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate mb-2">Type of Lead</label>
                    <select
                      name="leadType"
                      value={formData.leadType}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-moduwood"
                    >
                      <option value="">Select type</option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="retail">Retail</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate mb-2">Estimated Quantity</label>
                    <input
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-moduwood"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate mb-2">Project Requirements</label>
                    <textarea
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-moduwood"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-moduwood text-white font-bold rounded-sm hover:bg-moduwood-dark transition-colors"
                  >
                    Send Inquiry
                  </button>
                </form>
              )}
            </div>

            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-slate mb-6">Why Choose Us?</h2>
              <ul className="space-y-4 text-charcoal/70">
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-moduwood text-white flex items-center justify-center flex-shrink-0 text-sm">✓</span>
                  <span>Custom designs tailored to your space</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-moduwood text-white flex items-center justify-center flex-shrink-0 text-sm">✓</span>
                  <span>Premium materials and craftsmanship</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-moduwood text-white flex items-center justify-center flex-shrink-0 text-sm">✓</span>
                  <span>Fast delivery in 2-4 weeks</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-moduwood text-white flex items-center justify-center flex-shrink-0 text-sm">✓</span>
                  <span>Eco-friendly and sustainable</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-moduwood text-white flex items-center justify-center flex-shrink-0 text-sm">✓</span>
                  <span>100% satisfaction guarantee</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { trackEvent } from '@/lib/analytics';


export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const formRef = useRef<HTMLDivElement>(null);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error for the field being edited
    if (formErrors[e.target.name]) {
      setFormErrors({
        ...formErrors,
        [e.target.name]: ''
      });
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Full name is required';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Enter a valid email address';
    }
    if (!formData.phone.trim() || !/^(\+62|62|0)[0-9]{8,13}$/.test(formData.phone)) {
      errors.phone = 'Enter a valid phone number (e.g., +628...)';
    }
    if (!formData.company.trim()) errors.company = 'Company name is required';
    if (!formData.industry) errors.industry = 'Select industry';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    const accessKey =
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? 'b1454cc6-bdd9-48f4-b161-45d5fdbc19e1';

    try {
      const formDataObj = new FormData();
      formDataObj.append('access_key', accessKey);
      formDataObj.append('from_name', 'Patuh Data Website');
      formDataObj.append('subject', `Consultation request: ${formData.name} (${formData.company})`);
      
      // Append all form data
      Object.entries(formData).forEach(([key, value]) => {
        formDataObj.append(key, value);
      });

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataObj
      });

      const result = await response.json();

      if (result.success) {
        trackEvent('form_submit_success', {
          form_name: 'consultation_form',
          industry: formData.industry,
        });
        setSubmitStatus('success');
        formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          industry: '',
          message: ''
        });
      } else {
        console.error('Web3Forms Error Response:', result);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Network or Submission Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="assessment" ref={formRef} className="section-padding scroll-mt-24 bg-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <div className="sticky top-24">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
                Consultation
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                Request Consultation
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                For <strong className="text-slate-900">UU PDP Gap Assessments</strong>, please mention it in your
                message. We respond within one business day.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-sm text-slate-600">
                    <strong className="text-slate-900">Initial mapping</strong> — prioritize data, vendors, and operational risks.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-sm text-slate-600">
                    <strong className="text-slate-900">Actionable artifacts</strong> — checklists, vendor registers, and evidence templates.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-sm text-slate-600">
                    <strong className="text-slate-900">Right-sized scoping</strong> — from growing startups to enterprise vendors.
                  </p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="mb-3 text-base font-semibold text-slate-900">Direct Contact</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:support@patuhdata.id" className="hover:text-blue-600">support@patuhdata.id</a>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:+6285183064580" className="hover:text-blue-600">+62 851 8306 4580</a>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Jakarta, Indonesia</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-card lg:p-10">
            {submitStatus === 'success' ? (
              <div className="text-center py-12 animate-in fade-in zoom-in duration-700 relative overflow-hidden">
                {/* Particle Burst */}
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="particle bg-blue-500"
                    style={{
                      left: '50%',
                      top: '40%',
                      marginLeft: `${(i - 6) * 15}px`,
                      animationDelay: `${i * 0.05}s`,
                      backgroundColor: i % 2 === 0 ? '#3b82f6' : '#10b981'
                    }}
                  />
                ))}
                
                <div className="w-28 h-28 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner animate-scale-in border-4 border-white">
                  <svg className="w-16 h-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path 
                      className="animate-draw"
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={3} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                </div>
                <h3 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900">Message Sent</h3>
                <p className="mx-auto mb-10 max-w-sm text-lg leading-relaxed text-slate-600">
                  Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. Our team will
                  contact you within <span className="font-semibold">one business day</span>.
                </p>
                <div className="mx-auto max-w-xs space-y-4">
                  <button
                    type="button"
                    onClick={() => setSubmitStatus('idle')}
                    className="btn-primary w-full"
                  >
                    Send another message
                  </button>
                  <p className="text-center text-sm italic text-slate-500">
                    Check your spam folder if you don&apos;t see a confirmation in your inbox.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative space-y-6">
                {/* Form Loading Overlay */}
                {isSubmitting && (
                  <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px] z-10 flex items-center justify-center rounded-xl">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                      <p className="mt-4 animate-pulse font-semibold text-slate-900">Processing your request...</p>
                    </div>
                  </div>
                )}

                {/* Honeypot Spam Protection */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
                    An error occurred. Please try again or email us at support@patuhdata.id.
                  </div>
                )}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors text-black ${formErrors.name ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-blue-500'}`}
                    placeholder="Full Name"
                  />
                  {formErrors.name && <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors text-black ${formErrors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-blue-500'}`}
                    placeholder="john@company.com"
                  />
                  {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors text-black ${formErrors.phone ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-blue-500'}`}
                    placeholder="+62 812 3456 7890"
                  />
                  {formErrors.phone && <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors text-black ${formErrors.company ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-blue-500'}`}
                    placeholder="Acme Indonesia PT"
                  />
                  {formErrors.company && <p className="text-red-500 text-xs mt-1">{formErrors.company}</p>}
                </div>

                <div>
                  <label htmlFor="industry" className="block text-sm font-semibold text-gray-700 mb-2">
                    Industry *
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border-2 border-slate-200 px-4 py-3 text-black transition-colors focus:border-brand-600 focus:outline-none"
                  >
                    <option value="">Select industry</option>
                    <option value="saas">SaaS / Software Product</option>
                    <option value="fintech">Fintech / Payment Vendor</option>
                    <option value="hr-tech">HR Tech / Payroll</option>
                    <option value="outsourcing">Outsourcing / BPO</option>
                    <option value="software-house">Software Development</option>
                    <option value="digital-services">Digital Services / Agency</option>
                    <option value="ecommerce">E-commerce / Marketplace</option>
                    <option value="healthtech">Health Tech</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full resize-none rounded-lg border-2 border-slate-200 px-4 py-3 text-black transition-colors focus:border-brand-600 focus:outline-none"
                    placeholder="e.g. enterprise vendor review preparation, UU PDP readiness, vendor risk register..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70 flex items-center justify-center gap-3 group"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Request</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-slate-500">
                  By submitting this form, you agree that we may contact you regarding your consultation request. View our{' '}
                  <Link href="/privacy-policy" className="font-medium text-brand-600 hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

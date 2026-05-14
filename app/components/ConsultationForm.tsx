'use client';

import { useState, useRef } from 'react';


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
    if (!formData.name.trim()) errors.name = 'Nama lengkap wajib diisi';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Email tidak valid';
    }
    if (!formData.phone.trim() || !/^(\+62|62|0)[0-9]{8,13}$/.test(formData.phone)) {
      errors.phone = 'Nomor telepon tidak valid (contoh: +628...)';
    }
    if (!formData.company.trim()) errors.company = 'Nama perusahaan wajib diisi';
    if (!formData.industry) errors.industry = 'Industri wajib dipilih';

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

    const accessKey = 'b1454cc6-bdd9-48f4-b161-45d5fdbc19e1';

    try {
      const formDataObj = new FormData();
      formDataObj.append('access_key', accessKey);
      formDataObj.append('from_name', 'Patuh Data Website');
      formDataObj.append('subject', `Konsultasi Baru: ${formData.name} (${formData.company})`);
      
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
    <section id="konsultasi" ref={formRef} className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 scroll-mt-24">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Information */}
          <div>
            <div className="sticky top-24">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                Start Your <span className="text-blue-600">Operational Readiness</span>
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Diskusikan tantangan tata kelola data dan operasional bisnis bersama PatuhData.
              </p>

              {/* Benefits */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">
                    <strong className="text-blue-900">Schedule Consultation</strong> - Diskusi awal untuk memahami kebutuhan operasional Anda
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">
                    <strong className="text-blue-900">Contact Us</strong> - Bicarakan risiko data, AI governance, dan vendor readiness
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">
                    <strong className="text-blue-900">Operational Readiness</strong> - Arah awal menuju proses yang lebih terstruktur
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700">
                    <strong className="text-blue-900">Practical Scope</strong> - Fokus pada tata kelola yang bisa dijalankan sehari-hari
                  </p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-xl p-6 border-2 border-blue-500/20">
                <h3 className="font-bold text-lg mb-4 text-blue-900">Atau Hubungi Kami Langsung</h3>
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
          <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-10">
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
                <h3 className="text-3xl font-extrabold text-blue-900 mb-4 tracking-tight">Pesan Terkirim!</h3>
                <p className="text-gray-600 mb-10 text-lg max-w-sm mx-auto leading-relaxed">
                  Terima kasih, <span className="text-blue-600 font-bold">{formData.name}</span>. Tim ahli kami akan segera menghubungi Anda dalam waktu <span className="font-semibold">1x24 jam</span>.
                </p>
                <div className="space-y-4 max-w-xs mx-auto">
                  <button
                    onClick={() => setSubmitStatus('idle')}
                    className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-xl hover:shadow-blue-200 active:scale-95"
                  >
                    Kirim Pesan Lainnya
                  </button>

                  <p className="text-sm text-gray-400 italic">
                    Salinan pesan ini juga seharusnya masuk ke folder spam Anda jika tidak ada di inbox.
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
                      <p className="mt-4 text-blue-900 font-semibold animate-pulse">Memproses permintaan Anda...</p>
                    </div>
                  </div>
                )}

                {/* Honeypot Spam Protection */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
                    Terjadi kesalahan saat mengirim pesan. Silakan coba lagi atau hubungi kami langsung melalui email.
                  </div>
                )}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors text-black ${formErrors.name ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-blue-500'}`}
                    placeholder="John Doe"
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
                    placeholder="john@perusahaan.com"
                  />
                  {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nomor Telepon *
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
                    Nama Perusahaan *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors text-black ${formErrors.company ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-blue-500'}`}
                    placeholder="PT Contoh Indonesia"
                  />
                  {formErrors.company && <p className="text-red-500 text-xs mt-1">{formErrors.company}</p>}
                </div>

                <div>
                  <label htmlFor="industry" className="block text-sm font-semibold text-gray-700 mb-2">
                    Industri *
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-black"
                  >
                    <option value="">Pilih Industri</option>
                    <option value="teknologi">Teknologi & IT</option>
                    <option value="finansial">Perbankan & Finansial</option>
                    <option value="ecommerce">E-Commerce</option>
                    <option value="kesehatan">Kesehatan</option>
                    <option value="pendidikan">Pendidikan</option>
                    <option value="telekomunikasi">Telekomunikasi</option>
                    <option value="retail">Retail</option>
                    <option value="lainnya">Lainnya</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Pesan (Opsional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-black resize-none"
                    placeholder="Ceritakan tentang kebutuhan kepatuhan Anda..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 gradient-blue text-white font-bold rounded-lg hover:opacity-90 transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg flex items-center justify-center gap-3 group"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Sedang Mengirim...</span>
                    </>
                  ) : (
                    <>
                      <span>Hubungi Kami Sekarang</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Dengan mengirimkan formulir ini, Anda menyetujui bahwa kami akan menghubungi Anda untuk keperluan konsultasi.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

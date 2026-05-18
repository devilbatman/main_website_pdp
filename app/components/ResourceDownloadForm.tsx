'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Download, FileSpreadsheet, FileText, CheckCircle2 } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';
import {
  FREE_RESOURCE_DOWNLOADS,
  RESOURCES_LEAD_KEY,
  RESOURCES_STORAGE_KEY,
} from '@/data/freeResources';

const industryOptions = [
  { value: '', label: 'Pilih industri' },
  { value: 'bank-bpr', label: 'Bank / BPR' },
  { value: 'fintech', label: 'Fintech / pembayaran' },
  { value: 'saas', label: 'SaaS / software vendor' },
  { value: 'outsourcing', label: 'Outsourcing / BPO' },
  { value: 'healthtech', label: 'Health tech' },
  { value: 'other', label: 'Lainnya' },
];

export default function ResourceDownloadForm() {
  const [unlocked, setUnlocked] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    industry: '',
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (sessionStorage.getItem(RESOURCES_STORAGE_KEY) === 'true') {
      setUnlocked(true);
      setSubmitStatus('success');
      try {
        const saved = sessionStorage.getItem(RESOURCES_LEAD_KEY);
        if (saved) setFormData(JSON.parse(saved));
      } catch {
        /* ignore */
      }
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Nama wajib diisi';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Email tidak valid';
    }
    if (!formData.company.trim()) errors.company = 'Nama perusahaan wajib diisi';
    if (!formData.role.trim()) errors.role = 'Jabatan wajib diisi';
    if (!formData.industry) errors.industry = 'Pilih industri';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    const accessKey =
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? 'b1454cc6-bdd9-48f4-b161-45d5fdbc19e1';

    try {
      const body = new FormData();
      body.append('access_key', accessKey);
      body.append('from_name', 'Patuhdata Website');
      body.append(
        'subject',
        `Download template gratis: ${formData.name} (${formData.company})`
      );
      Object.entries(formData).forEach(([key, value]) => body.append(key, value));
      body.append('resource', 'ROPA starter + PDP readiness checklist');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body,
      });
      const result = await response.json();

      if (result.success) {
        trackEvent('form_submit_success', {
          form_name: 'resource_download',
          industry: formData.industry,
        });
        sessionStorage.setItem(RESOURCES_STORAGE_KEY, 'true');
        sessionStorage.setItem(RESOURCES_LEAD_KEY, JSON.stringify(formData));
        setUnlocked(true);
        setSubmitStatus('success');
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (field: string) =>
    `w-full rounded-lg border-2 px-4 py-3 text-slate-900 transition-colors focus:outline-none ${
      formErrors[field]
        ? 'border-red-500 focus:border-red-500'
        : 'border-slate-200 focus:border-brand-600'
    }`;

  if (unlocked && submitStatus === 'success') {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-card md:p-10">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="h-8 w-8 shrink-0 text-green-600" />
          <div>
            <h2 className="text-xl font-semibold text-ocean-950">Unduhan siap</h2>
            <p className="mt-2 text-sm text-slate-600">
              Terima kasih, {formData.name || 'tim Anda'}. Unduh template di bawah. File juga dapat
              kami kirim ulang melalui email jika diperlukan.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <a
            href={`/downloads/${FREE_RESOURCE_DOWNLOADS.pdf.filename}`}
            download
            onClick={() =>
              trackEvent('resource_download', { file: FREE_RESOURCE_DOWNLOADS.pdf.filename })
            }
            className="card-premium group flex flex-col p-5"
          >
            <FileText className="h-8 w-8 text-brand-600" />
            <p className="mt-4 font-semibold text-ocean-950 group-hover:text-brand-700">
              {FREE_RESOURCE_DOWNLOADS.pdf.label}
            </p>
            <p className="mt-2 flex-1 text-xs text-slate-600">
              {FREE_RESOURCE_DOWNLOADS.pdf.description}
            </p>
            <span className="btn-primary-dark mt-4 inline-flex w-full justify-center gap-2 text-sm">
              <Download className="h-4 w-4" />
              Unduh PDF
            </span>
          </a>

          <a
            href={`/downloads/${FREE_RESOURCE_DOWNLOADS.excel.filename}`}
            download
            onClick={() =>
              trackEvent('resource_download', { file: FREE_RESOURCE_DOWNLOADS.excel.filename })
            }
            className="card-premium group flex flex-col p-5"
          >
            <FileSpreadsheet className="h-8 w-8 text-brand-600" />
            <p className="mt-4 font-semibold text-ocean-950 group-hover:text-brand-700">
              {FREE_RESOURCE_DOWNLOADS.excel.label}
            </p>
            <p className="mt-2 flex-1 text-xs text-slate-600">
              {FREE_RESOURCE_DOWNLOADS.excel.description}
            </p>
            <span className="btn-primary-dark mt-4 inline-flex w-full justify-center gap-2 text-sm">
              <Download className="h-4 w-4" />
              Unduh Excel
            </span>
          </a>
        </div>

        <p className="mt-8 text-center text-xs text-slate-500">
          Butuh penilaian lengkap?{' '}
          <Link href="/layanan/pdp-readiness-assessment" className="font-medium text-brand-600 hover:underline">
            Gap Assessment UU PDP
          </Link>{' '}
          atau{' '}
          <Link href="/#assessment" className="font-medium text-brand-600 hover:underline">
            diskusikan ruang lingkup
          </Link>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-card md:p-10">
      <h2 className="text-xl font-semibold text-ocean-950">Dapatkan template gratis</h2>
      <p className="mt-2 text-sm text-slate-600">
        Isi data Anda untuk mengunduh PDF checklist dan template Excel ROPA. Bukan dokumen kosong—ada
        petunjuk dan contoh.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="res-name" className="mb-1.5 block text-sm font-semibold text-slate-700">
              Nama lengkap *
            </label>
            <input
              id="res-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={inputClass('name')}
              placeholder="Nama Anda"
            />
            {formErrors.name && (
              <p className="mt-1 text-xs text-red-500">{formErrors.name}</p>
            )}
          </div>
          <div>
            <label htmlFor="res-email" className="mb-1.5 block text-sm font-semibold text-slate-700">
              Email kerja *
            </label>
            <input
              id="res-email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className={inputClass('email')}
              placeholder="nama@perusahaan.com"
            />
            {formErrors.email && (
              <p className="mt-1 text-xs text-red-500">{formErrors.email}</p>
            )}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="res-company" className="mb-1.5 block text-sm font-semibold text-slate-700">
              Perusahaan *
            </label>
            <input
              id="res-company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className={inputClass('company')}
              placeholder="Nama institusi"
            />
            {formErrors.company && (
              <p className="mt-1 text-xs text-red-500">{formErrors.company}</p>
            )}
          </div>
          <div>
            <label htmlFor="res-role" className="mb-1.5 block text-sm font-semibold text-slate-700">
              Jabatan *
            </label>
            <input
              id="res-role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className={inputClass('role')}
              placeholder="mis. Compliance Manager, DPO"
            />
            {formErrors.role && (
              <p className="mt-1 text-xs text-red-500">{formErrors.role}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="res-industry" className="mb-1.5 block text-sm font-semibold text-slate-700">
            Industri *
          </label>
          <select
            id="res-industry"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            className={inputClass('industry')}
          >
            {industryOptions.map((opt) => (
              <option key={opt.value || 'empty'} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {formErrors.industry && (
            <p className="mt-1 text-xs text-red-500">{formErrors.industry}</p>
          )}
        </div>

        {submitStatus === 'error' && (
          <p className="text-sm text-red-600">
            Gagal mengirim. Coba lagi atau email{' '}
            <a href="mailto:support@patuhdata.id" className="underline">
              support@patuhdata.id
            </a>
            .
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary-dark w-full disabled:opacity-70"
        >
          {isSubmitting ? 'Memproses...' : 'Kirim & unduh template'}
        </button>

        <p className="text-center text-xs text-slate-500">
          Dengan mengirim, Anda setuju kami menghubungi Anda terkait template dan layanan Patuhdata.
          Lihat{' '}
          <Link href="/privacy-policy" className="text-brand-600 hover:underline">
            Kebijakan Privasi
          </Link>
          .
        </p>
      </form>
    </div>
  );
}

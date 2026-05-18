'use client';

import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function AdminPage() {
  const [formData, setFormData] = useState({
    slug: '',
    title: '',
    description: '',
    date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
    image: '/blog/placeholder.png',
    category: 'Regulasi',
    content: ''
  });

  const [generatedCode, setGeneratedCode] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'title' ? { slug: value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') } : {})
    }));
  };

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    const code = JSON.stringify(formData, null, 2);
    setGeneratedCode(`{
    slug: '${formData.slug}',
    title: '${formData.title.replace(/'/g, "\\'")}',
    description: '${formData.description.replace(/'/g, "\\'")}',
    date: '${formData.date}',
    image: '${formData.image}',
    category: '${formData.category}',
    content: \`
      ${formData.content.replace(/`/g, '\\`')}
    \`
  },`);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      <div className="pt-32 pb-20 max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="bg-blue-600 p-8 text-white">
            <h1 className="text-3xl font-bold">Admin Article CMS</h1>
            <p className="opacity-80">Gunakan form ini untuk membuat entri artikel baru bagi website Patuhdata.</p>
          </div>
          
          <div className="p-8">
            <form onSubmit={handleGenerate} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Judul Artikel</label>
                  <input 
                    type="text" 
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    placeholder="Contoh: Update Penegakan UU PDP 2026"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Slug (URL)</label>
                  <input 
                    type="text" 
                    name="slug"
                    value={formData.slug}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50"
                    readOnly
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Kategori</label>
                  <select 
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none"
                  >
                    <option>Regulasi</option>
                    <option>Strategi</option>
                    <option>Keamanan</option>
                    <option>Audit</option>
                    <option>Otoritas</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Path Gambar (Public Folder)</label>
                  <input 
                    type="text" 
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none"
                    placeholder="/blog/nama-file.png"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Deskripsi Singkat</label>
                <textarea 
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={2}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none"
                  placeholder="Ringkasan artikel yang muncul di halaman depan..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Konten Artikel (HTML Supported)</label>
                <textarea 
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  rows={10}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none font-mono text-sm"
                  placeholder="<p>Isi artikel di sini...</p> <h2>Subjudul</h2> <p>Teks selanjutnya...</p>"
                  required
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
              >
                Generate Code Snippet
              </button>
            </form>

            {generatedCode && (
              <div className="mt-12 space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-slate-900">Salin Kode Ini ke data/blog.ts</h3>
                  <button 
                    onClick={() => navigator.clipboard.writeText(generatedCode)}
                    className="text-blue-600 text-sm font-bold hover:underline"
                  >
                    Salin Kode
                  </button>
                </div>
                <pre className="bg-slate-900 text-blue-400 p-6 rounded-2xl overflow-x-auto text-xs font-mono border border-slate-800">
                  {generatedCode}
                </pre>
                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                  <p className="text-sm text-blue-800 font-medium leading-relaxed">
                    <strong>Cara Publish:</strong><br />
                    1. Masukkan file gambar ke folder <code>public/blog/</code><br />
                    2. Salin kode di atas.<br />
                    3. Buka file <code>data/blog.ts</code>.<br />
                    4. Tempel kode di dalam array <code>articles</code>.<br />
                    5. Simpan file dan website akan otomatis terupdate!
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

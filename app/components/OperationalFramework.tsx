import WorkflowPipeline from './WorkflowPipeline';

export default function OperationalFramework() {
  return (
    <section id="framework" className="py-14 bg-gradient-to-b from-blue-950 to-blue-900 text-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-300">Cara Kerja</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Empat langkah menuju tata kelola yang berkelanjutan</h2>
          <p className="text-blue-100 text-base leading-relaxed">
            Sederhana, operasional, dan bisa dijalankan tim Anda—bukan dokumen yang berhenti di folder.
          </p>
        </div>
        <WorkflowPipeline />
      </div>
    </section>
  );
}

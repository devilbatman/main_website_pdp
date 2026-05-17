const nodes = [
  {
    step: '1',
    title: 'Evaluasi',
    line: 'Menilai tata kelola, eksposur vendor, dan risiko operasional.',
  },
  {
    step: '2',
    title: 'Prioritas',
    line: 'Mengidentifikasi celah kritis dan urutan perbaikan.',
  },
  {
    step: '3',
    title: 'Operasionalisasi',
    line: 'Menerapkan alur kerja tata kelola dan kontrol yang praktis.',
  },
  {
    step: '4',
    title: 'Pemeliharaan',
    line: 'Mendukung tata kelola berkelanjutan dan pemantauan kesiapan.',
  },
];

export default function WorkflowPipeline() {
  return (
    <div
      className="mx-auto max-w-6xl rounded-3xl border border-blue-300/25 bg-blue-950/45 p-6 shadow-2xl backdrop-blur-sm md:p-10"
      aria-label="Cara Kerja PatuhData: Evaluasi, Prioritas, Operasionalisasi, Pemeliharaan"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {nodes.map((node) => (
          <div
            key={node.title}
            className="h-full rounded-2xl border border-blue-200/30 bg-white/10 px-5 py-6 text-center shadow-inner transition hover:bg-white/15"
          >
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-300">Langkah {node.step}</p>
            <h3 className="mt-3 text-2xl font-extrabold text-white">{node.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-blue-100 md:text-base">{node.line}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

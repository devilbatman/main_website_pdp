const modules = [
  'Risk Register',
  'AI Use Case Inventory',
  'Vendor Review Tracker',
  'Evidence Library',
  'Remediation Dashboard',
  'Management Report',
];

export default function PlatformPreview() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-blue-600">
            Platform Preview
          </p>
          <h2 className="mb-6 text-4xl font-bold leading-tight text-blue-950 md:text-5xl">
            Not just a compliance report. A working risk remediation system.
          </h2>
          <p className="text-xl leading-relaxed text-slate-700">
            Patuhdata is building a consulting-backed workflow that helps teams register risks, assign owners, track remediation, and keep evidence ready for management review.
          </p>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl md:p-8">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((module, index) => (
              <article key={module} className="rounded-2xl border border-blue-100 bg-blue-50/60 p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-700 font-bold text-white">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-blue-950">{module}</h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

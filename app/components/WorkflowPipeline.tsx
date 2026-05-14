import { Fragment } from 'react';

const nodes = [
  {
    step: '1',
    title: 'Assess',
    line: 'Identifikasi celah dan risiko operasional terhadap UU PDP dan tata kelola data.',
  },
  {
    step: '2',
    title: 'Prioritize',
    line: 'Pemetaan prioritas implementasi dan rekomendasi perbaikan.',
  },
  {
    step: '3',
    title: 'Operationalize',
    line: 'Pendampingan implementasi tata kelola ke proses bisnis sehari-hari.',
  },
];

function ArrowRight() {
  return (
    <svg className="hidden h-12 w-12 shrink-0 text-blue-300 md:block" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 12h12m0 0-4-4m4 4-4 4" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowDown() {
  return (
    <svg className="h-9 w-9 shrink-0 text-blue-300 md:hidden" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 5v14m0 0 4-4m-4 4-4-4" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function WorkflowPipeline() {
  return (
    <div
      className="mx-auto max-w-6xl rounded-3xl border border-blue-300/25 bg-blue-950/45 p-6 shadow-2xl backdrop-blur-sm md:p-10"
      aria-label="PatuhData Operational Framework: Assess, Prioritize, Operationalize"
    >
      <div className="flex flex-col items-center md:flex-row md:items-stretch md:justify-center md:gap-3">
        {nodes.map((node, index) => (
          <Fragment key={node.title}>
            <div className="w-full max-w-md md:flex-1">
              <div className="h-full rounded-2xl border border-blue-200/30 bg-white/10 px-6 py-6 text-center shadow-inner transition hover:bg-white/15 md:px-7 md:py-8">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-300">Step {node.step}</p>
                <h3 className="mt-3 text-3xl font-extrabold text-white md:text-4xl">{node.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-blue-100 md:text-lg">{node.line}</p>
              </div>
            </div>
            {index < nodes.length - 1 && (
              <div className="flex shrink-0 items-center justify-center py-3 md:px-1 md:py-0">
                <ArrowDown />
                <ArrowRight />
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}

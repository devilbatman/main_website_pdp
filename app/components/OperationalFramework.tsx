import WorkflowPipeline from './WorkflowPipeline';

export default function OperationalFramework() {
  return (
    <section id="framework" className="py-20 bg-gradient-to-b from-blue-950 to-blue-900 text-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">PatuhData Operational Framework</h2>
        </div>
        <WorkflowPipeline />
      </div>
    </section>
  );
}
